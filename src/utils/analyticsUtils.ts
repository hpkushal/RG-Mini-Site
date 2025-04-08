/**
 * Advanced Analytics Utilities for Responsible Gambling
 * 
 * This file provides utilities for real-time analysis of gambling behavior,
 * pattern detection, and personalized risk assessment.
 */

import { useEffect, useState } from 'react';

export type GameEvent = {
  timestamp: number;
  gameType: string;
  betAmount: number;
  result: 'win' | 'loss';
  payout: number;
  balanceChange: number;
  multiplier: number;
  bankrollPercentage: number; // Bet amount as % of bankroll before bet
  responseTime?: number; // Time taken to make decision in ms
};

export type GameSession = {
  id: string;
  startTime: number;
  endTime?: number;
  events: GameEvent[];
  initialBalance: number;
  finalBalance?: number;
};

export type AnalyticsSnapshot = {
  // Financial metrics
  netProfit: number;
  roi: number;
  winRate: number;
  winLossRatio: number;
  avgBetSize: number;
  avgBetPercentage: number;
  maxBetSize: number;
  maxBetPercentage: number;
  maxDrawdown: number;
  volatilityIndex: number;
  
  // Behavioral metrics
  betsPerHour: number;
  avgSessionDuration: number;
  avgTimeBetweenBets: number;
  betFrequencyTrend: 'increasing' | 'steady' | 'decreasing';
  lossChasing: number; // 0-100 score
  riskIncreaseAfterLoss: number; // percentage increase
  riskIncreaseAfterWin: number; // percentage increase
  
  // Pattern metrics
  rapidBettingPercentage: number;
  largeStakesPercentage: number;
  chasingLossesScore: number;
  gameSwitchingFrequency: number;
  sessionLengthTrend: 'increasing' | 'steady' | 'decreasing';
  
  // Overall assessment
  responsibleGamblingScore: number; // 0-100
  riskLevel: 'Low' | 'Medium' | 'High' | 'Very High';
  
  // Detected patterns
  detectedPatterns: Array<{
    id: string;
    title: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    recommendation: string;
  }>;
  
  lastUpdated: number;
};

// Analytics data storage
const sessionStorage: GameSession[] = [];
let currentSession: GameSession | null = null;
let lastSnapshot: AnalyticsSnapshot | null = null;

// Constants for analysis
const RAPID_BET_THRESHOLD_MS = 10000; // 10 seconds
const HIGH_RISK_BET_PERCENTAGE = 20; // 20% of bankroll
const RESPONSIBLE_SESSION_DURATION_MS = 60 * 60 * 1000; // 1 hour

/**
 * Initialize a new gambling session
 */
export const startSession = (initialBalance: number): string => {
  const sessionId = Date.now().toString();
  currentSession = {
    id: sessionId,
    startTime: Date.now(),
    events: [],
    initialBalance
  };
  return sessionId;
};

/**
 * End the current gambling session
 */
export const endSession = (finalBalance: number): GameSession | null => {
  if (!currentSession) return null;
  
  currentSession.endTime = Date.now();
  currentSession.finalBalance = finalBalance;
  
  // Store session in history
  sessionStorage.push({...currentSession});
  
  const completedSession = {...currentSession};
  currentSession = null;
  return completedSession;
};

/**
 * Record a gambling event in the current session
 */
export const recordGameEvent = (event: Omit<GameEvent, 'timestamp'>): GameEvent | null => {
  if (!currentSession) return null;
  
  const fullEvent: GameEvent = {
    ...event,
    timestamp: Date.now()
  };
  
  currentSession.events.push(fullEvent);
  
  // Force re-calculation of analytics snapshot
  lastSnapshot = null;
  
  return fullEvent;
};

/**
 * Calculate time between bets in a session
 */
const calculateTimeBetweenBets = (events: GameEvent[]): number[] => {
  if (events.length <= 1) return [];
  
  const sortedEvents = [...events].sort((a, b) => a.timestamp - b.timestamp);
  const timeBetweenBets: number[] = [];
  
  for (let i = 1; i < sortedEvents.length; i++) {
    timeBetweenBets.push(sortedEvents[i].timestamp - sortedEvents[i-1].timestamp);
  }
  
  return timeBetweenBets;
};

/**
 * Calculate loss chasing score based on behavior after losses
 */
const calculateLossChasing = (events: GameEvent[]): number => {
  if (events.length <= 1) return 0;
  
  let lossChasing = 0;
  let lossCount = 0;
  
  for (let i = 1; i < events.length; i++) {
    if (events[i-1].result === 'loss') {
      lossCount++;
      
      // Check for betting pattern changes after a loss
      const prevBankrollPct = events[i-1].bankrollPercentage;
      const currentBankrollPct = events[i].bankrollPercentage;
      
      if (currentBankrollPct > prevBankrollPct) {
        // Increased bet size after loss
        lossChasing += (currentBankrollPct / prevBankrollPct - 1) * 100;
      }
      
      // Check for rapid rebetting after loss
      const timeBetweenBets = events[i].timestamp - events[i-1].timestamp;
      if (timeBetweenBets < RAPID_BET_THRESHOLD_MS) {
        lossChasing += 10; // Add penalty for rapid rebetting
      }
    }
  }
  
  return lossCount > 0 ? Math.min(100, lossChasing / lossCount) : 0;
};

/**
 * Calculate the maximum drawdown experienced in a session
 */
const calculateMaxDrawdown = (events: GameEvent[], initialBalance: number): number => {
  let peak = initialBalance;
  let maxDrawdown = 0;
  let currentBalance = initialBalance;
  
  events.forEach(event => {
    currentBalance += event.balanceChange;
    
    if (currentBalance > peak) {
      peak = currentBalance;
    }
    
    const drawdown = (peak - currentBalance) / peak * 100;
    if (drawdown > maxDrawdown) {
      maxDrawdown = drawdown;
    }
  });
  
  return maxDrawdown;
};

/**
 * Detect patterns in gambling behavior
 */
const detectPatterns = (session: GameSession): Array<{
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  recommendation: string;
}> => {
  const patterns = [];
  const events = session.events;
  
  if (events.length < 2) return patterns;
  
  // Calculate metrics
  const timeBetweenBets = calculateTimeBetweenBets(events);
  const avgTimeBetweenBets = timeBetweenBets.reduce((a, b) => a + b, 0) / timeBetweenBets.length;
  
  // Pattern 1: Rapid betting
  const rapidBets = timeBetweenBets.filter(time => time < RAPID_BET_THRESHOLD_MS).length;
  const rapidBetPercentage = (rapidBets / timeBetweenBets.length) * 100;
  
  if (rapidBetPercentage > 70) {
    patterns.push({
      id: 'rapid-betting',
      title: 'Rapid Betting Pattern',
      description: `${rapidBetPercentage.toFixed(0)}% of your bets are placed within 10 seconds of the previous bet. This may indicate impulsive betting.`,
      severity: 'high',
      recommendation: 'Take more time between bets to make thoughtful decisions. Consider setting a 1-minute cooling-off period between bets.'
    });
  } else if (rapidBetPercentage > 40) {
    patterns.push({
      id: 'rapid-betting',
      title: 'Occasional Rapid Betting',
      description: `${rapidBetPercentage.toFixed(0)}% of your bets are placed very quickly after the previous bet.`,
      severity: 'medium',
      recommendation: 'Consider taking more time between bets to evaluate your decisions.'
    });
  }
  
  // Pattern 2: Large stakes
  const highRiskBets = events.filter(e => e.bankrollPercentage > HIGH_RISK_BET_PERCENTAGE).length;
  const highRiskPercentage = (highRiskBets / events.length) * 100;
  
  if (highRiskPercentage > 50) {
    patterns.push({
      id: 'large-stakes',
      title: 'High-Risk Betting Pattern',
      description: `${highRiskPercentage.toFixed(0)}% of your bets exceed ${HIGH_RISK_BET_PERCENTAGE}% of your bankroll. Large stakes increase your risk of significant losses.`,
      severity: 'high',
      recommendation: 'Limit your bet sizes to 5-10% of your bankroll to ensure longevity and reduce the impact of losing streaks.'
    });
  } else if (highRiskPercentage > 20) {
    patterns.push({
      id: 'large-stakes',
      title: 'Occasional High-Risk Bets',
      description: `${highRiskPercentage.toFixed(0)}% of your bets are considered high-risk based on your bankroll.`,
      severity: 'medium',
      recommendation: 'Consider setting a maximum bet limit of 10% of your bankroll.'
    });
  }
  
  // Pattern 3: Loss chasing
  const lossChasing = calculateLossChasing(events);
  if (lossChasing > 60) {
    patterns.push({
      id: 'loss-chasing',
      title: 'Loss Chasing Detected',
      description: 'You tend to increase your bet size after losing, which is a common sign of chasing losses.',
      severity: 'high',
      recommendation: 'Set a consistent bet size regardless of previous results, and take a break after a series of losses.'
    });
  } else if (lossChasing > 30) {
    patterns.push({
      id: 'loss-chasing',
      title: 'Mild Loss Chasing',
      description: 'You occasionally increase your bet size after losses.',
      severity: 'medium',
      recommendation: 'Be mindful of your betting decisions after losses to avoid chasing losses.'
    });
  }
  
  // Pattern 4: Long sessions
  if (session.endTime) {
    const sessionDuration = session.endTime - session.startTime;
    if (sessionDuration > RESPONSIBLE_SESSION_DURATION_MS * 2) {
      patterns.push({
        id: 'extended-session',
        title: 'Extended Gambling Session',
        description: `Your gambling session lasted over ${Math.round(sessionDuration / (1000 * 60 * 60))} hours, which can lead to fatigue and poor decision making.`,
        severity: 'high',
        recommendation: 'Set a time limit for your gambling sessions, and take regular breaks.'
      });
    } else if (sessionDuration > RESPONSIBLE_SESSION_DURATION_MS) {
      patterns.push({
        id: 'extended-session',
        title: 'Long Gambling Session',
        description: `Your gambling session lasted over an hour.`,
        severity: 'medium',
        recommendation: 'Consider taking regular breaks during gambling sessions.'
      });
    }
  }
  
  return patterns;
};

/**
 * Calculate comprehensive analytics from session data
 */
export const calculateAnalytics = (session?: GameSession): AnalyticsSnapshot => {
  // Use current session if not specified
  const targetSession = session || currentSession;
  
  // If no session available or no events, return empty snapshot
  if (!targetSession || targetSession.events.length === 0) {
    return {
      netProfit: 0,
      roi: 0,
      winRate: 0,
      winLossRatio: 0,
      avgBetSize: 0,
      avgBetPercentage: 0,
      maxBetSize: 0,
      maxBetPercentage: 0,
      maxDrawdown: 0,
      volatilityIndex: 0,
      betsPerHour: 0,
      avgSessionDuration: 0,
      avgTimeBetweenBets: 0,
      betFrequencyTrend: 'steady',
      lossChasing: 0,
      riskIncreaseAfterLoss: 0,
      riskIncreaseAfterWin: 0,
      rapidBettingPercentage: 0,
      largeStakesPercentage: 0,
      chasingLossesScore: 0,
      gameSwitchingFrequency: 0,
      sessionLengthTrend: 'steady',
      responsibleGamblingScore: 100,
      riskLevel: 'Low',
      detectedPatterns: [],
      lastUpdated: Date.now()
    };
  }
  
  const events = targetSession.events;
  const initialBalance = targetSession.initialBalance;
  const finalBalance = targetSession.finalBalance || (initialBalance + events.reduce((sum, e) => sum + e.balanceChange, 0));
  
  // Calculate base metrics
  const wins = events.filter(e => e.result === 'win').length;
  const losses = events.length - wins;
  const winRate = events.length > 0 ? (wins / events.length) * 100 : 0;
  const winLossRatio = losses > 0 ? wins / losses : wins;
  const netProfit = finalBalance - initialBalance;
  const roi = initialBalance > 0 ? (netProfit / initialBalance) * 100 : 0;
  
  // Calculate bet sizing metrics
  const totalBetAmount = events.reduce((sum, e) => sum + e.betAmount, 0);
  const avgBetSize = events.length > 0 ? totalBetAmount / events.length : 0;
  const avgBetPercentage = events.length > 0 ? events.reduce((sum, e) => sum + e.bankrollPercentage, 0) / events.length : 0;
  const maxBet = events.length > 0 ? Math.max(...events.map(e => e.betAmount)) : 0;
  const maxBetPercentage = events.length > 0 ? Math.max(...events.map(e => e.bankrollPercentage)) : 0;
  
  // Calculate behavioral metrics
  const sessionDuration = targetSession.endTime 
    ? targetSession.endTime - targetSession.startTime 
    : Date.now() - targetSession.startTime;
  
  const betsPerHour = sessionDuration > 0 
    ? (events.length / (sessionDuration / (1000 * 60 * 60))) 
    : 0;
  
  const timeBetweenBets = calculateTimeBetweenBets(events);
  const avgTimeBetweenBets = timeBetweenBets.length > 0 
    ? timeBetweenBets.reduce((sum, t) => sum + t, 0) / timeBetweenBets.length 
    : 0;
  
  // Calculate volatility (standard deviation of results)
  const returns = events.map(e => e.balanceChange / e.betAmount);
  const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
  const variance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length;
  const volatilityIndex = Math.sqrt(variance) * 100;
  
  // Calculate max drawdown
  const maxDrawdown = calculateMaxDrawdown(events, initialBalance);
  
  // Calculate patterns
  const detectedPatterns = detectPatterns(targetSession);
  
  // Calculate loss chasing metrics
  const lossChasing = calculateLossChasing(events);
  
  // Calculate risk increases after wins/losses
  let totalRiskIncreaseAfterLoss = 0;
  let lossFollowedByBetCount = 0;
  let totalRiskIncreaseAfterWin = 0;
  let winFollowedByBetCount = 0;
  
  for (let i = 1; i < events.length; i++) {
    if (events[i-1].result === 'loss') {
      lossFollowedByBetCount++;
      const pctChange = events[i].bankrollPercentage / events[i-1].bankrollPercentage - 1;
      totalRiskIncreaseAfterLoss += pctChange > 0 ? pctChange * 100 : 0;
    } else {
      winFollowedByBetCount++;
      const pctChange = events[i].bankrollPercentage / events[i-1].bankrollPercentage - 1;
      totalRiskIncreaseAfterWin += pctChange > 0 ? pctChange * 100 : 0;
    }
  }
  
  const riskIncreaseAfterLoss = lossFollowedByBetCount > 0 
    ? totalRiskIncreaseAfterLoss / lossFollowedByBetCount 
    : 0;
    
  const riskIncreaseAfterWin = winFollowedByBetCount > 0 
    ? totalRiskIncreaseAfterWin / winFollowedByBetCount 
    : 0;
  
  // Calculate rapid betting percentage
  const rapidBettingPercentage = timeBetweenBets.length > 0
    ? (timeBetweenBets.filter(t => t < RAPID_BET_THRESHOLD_MS).length / timeBetweenBets.length) * 100
    : 0;
  
  // Calculate large stakes percentage
  const largeStakesPercentage = events.length > 0
    ? (events.filter(e => e.bankrollPercentage > HIGH_RISK_BET_PERCENTAGE).length / events.length) * 100
    : 0;
  
  // Calculate game switching frequency
  const uniqueGames = new Set(events.map(e => e.gameType)).size;
  const gameSwitchingFrequency = events.length > 1
    ? (uniqueGames - 1) / (events.length - 1) * 100
    : 0;
  
  // Calculate overall responsible gambling score (0-100, higher is better)
  let responsibleGamblingScore = 100;
  
  // Deduct for rapid betting
  responsibleGamblingScore -= rapidBettingPercentage * 0.2;
  
  // Deduct for large stakes
  responsibleGamblingScore -= largeStakesPercentage * 0.3;
  
  // Deduct for loss chasing
  responsibleGamblingScore -= lossChasing * 0.3;
  
  // Deduct for long sessions
  const sessionHours = sessionDuration / (1000 * 60 * 60);
  if (sessionHours > 1) {
    responsibleGamblingScore -= Math.min(20, (sessionHours - 1) * 10);
  }
  
  // Determine risk level
  let riskLevel: 'Low' | 'Medium' | 'High' | 'Very High';
  if (responsibleGamblingScore >= 80) {
    riskLevel = 'Low';
  } else if (responsibleGamblingScore >= 60) {
    riskLevel = 'Medium';
  } else if (responsibleGamblingScore >= 40) {
    riskLevel = 'High';
  } else {
    riskLevel = 'Very High';
  }
  
  // Calculate trend metrics
  const betFrequencyTrend = betsPerHour > 30 ? 'increasing' : betsPerHour < 10 ? 'decreasing' : 'steady';
  const sessionLengthTrend = sessionHours > 2 ? 'increasing' : sessionHours < 0.5 ? 'decreasing' : 'steady';
  
  return {
    netProfit,
    roi,
    winRate,
    winLossRatio,
    avgBetSize,
    avgBetPercentage,
    maxBetSize: maxBet,
    maxBetPercentage,
    maxDrawdown,
    volatilityIndex,
    betsPerHour,
    avgSessionDuration: sessionDuration / 1000 / 60, // in minutes
    avgTimeBetweenBets: avgTimeBetweenBets / 1000, // in seconds
    betFrequencyTrend,
    lossChasing,
    riskIncreaseAfterLoss,
    riskIncreaseAfterWin,
    rapidBettingPercentage,
    largeStakesPercentage,
    chasingLossesScore: lossChasing,
    gameSwitchingFrequency,
    sessionLengthTrend,
    responsibleGamblingScore: Math.max(0, Math.min(100, responsibleGamblingScore)),
    riskLevel,
    detectedPatterns,
    lastUpdated: Date.now()
  };
};

/**
 * Calculate risk factors based on historical play and current bet
 */
export const calculateRiskFactors = (
  history: GameEvent[], 
  currentBankroll: number,
  proposedBet: { 
    gameType: string, 
    betAmount: number,
    multiplier: number,
    winChance: number 
  }
): {
  riskFactors: Array<{
    id: string;
    name: string;
    value: number; // 0-100
    description: string;
    color: string;
  }>,
  overallRisk: number, // 0-100
  recommendation: string
} => {
  const riskFactors = [];
  const bankrollPercentage = (proposedBet.betAmount / currentBankroll) * 100;
  
  // Risk Factor 1: Bet size relative to bankroll
  let betSizeRisk = 0;
  if (bankrollPercentage > 50) {
    betSizeRisk = 100;
  } else if (bankrollPercentage > 25) {
    betSizeRisk = 75;
  } else if (bankrollPercentage > 10) {
    betSizeRisk = 50;
  } else if (bankrollPercentage > 5) {
    betSizeRisk = 25;
  }
  
  riskFactors.push({
    id: 'bet-size',
    name: 'Bet Size Risk',
    value: betSizeRisk,
    description: `This bet is ${bankrollPercentage.toFixed(1)}% of your bankroll.`,
    color: betSizeRisk > 70 ? 'red' : betSizeRisk > 40 ? 'yellow' : 'green'
  });
  
  // Risk Factor 2: Win probability
  const probabilityRisk = 100 - proposedBet.winChance;
  riskFactors.push({
    id: 'win-probability',
    name: 'Win Probability',
    value: probabilityRisk,
    description: `This bet has a ${proposedBet.winChance.toFixed(1)}% chance of winning.`,
    color: probabilityRisk > 70 ? 'red' : probabilityRisk > 40 ? 'yellow' : 'green'
  });
  
  // Risk Factor 3: Recent losses
  let recentLossesRisk = 0;
  if (history.length >= 3) {
    const lastThree = history.slice(-3);
    const recentLosses = lastThree.filter(e => e.result === 'loss').length;
    recentLossesRisk = (recentLosses / 3) * 100;
  }
  
  riskFactors.push({
    id: 'recent-losses',
    name: 'Recent Losses',
    value: recentLossesRisk,
    description: recentLossesRisk > 66 ? 'You\'ve lost most of your recent bets. Be cautious of chasing losses.' : 
                 recentLossesRisk > 33 ? 'Some of your recent bets were losses.' : 
                 'Your recent betting history looks good.',
    color: recentLossesRisk > 66 ? 'red' : recentLossesRisk > 33 ? 'yellow' : 'green'
  });
  
  // Risk Factor 4: Session duration
  let sessionDurationRisk = 0;
  if (history.length > 0) {
    const sessionStart = history[0].timestamp;
    const sessionDuration = (Date.now() - sessionStart) / (1000 * 60 * 60); // in hours
    
    if (sessionDuration > 2) {
      sessionDurationRisk = 100;
    } else if (sessionDuration > 1) {
      sessionDurationRisk = 50;
    } else if (sessionDuration > 0.5) {
      sessionDurationRisk = 25;
    }
  }
  
  riskFactors.push({
    id: 'session-duration',
    name: 'Session Duration',
    value: sessionDurationRisk,
    description: sessionDurationRisk > 75 ? 'Your session has been running for a long time. Consider taking a break.' :
                 sessionDurationRisk > 25 ? 'Your session is getting lengthy.' : 
                 'Your session length is still within healthy limits.',
    color: sessionDurationRisk > 75 ? 'red' : sessionDurationRisk > 25 ? 'yellow' : 'green'
  });
  
  // Calculate overall risk
  const weights = {
    'bet-size': 0.4,
    'win-probability': 0.2,
    'recent-losses': 0.2,
    'session-duration': 0.2
  };
  
  const overallRisk = riskFactors.reduce((sum, factor) => {
    return sum + factor.value * weights[factor.id as keyof typeof weights];
  }, 0);
  
  // Generate recommendation
  let recommendation = '';
  if (overallRisk > 75) {
    recommendation = 'This is a high-risk bet. Consider reducing your bet size or taking a break.';
  } else if (overallRisk > 50) {
    recommendation = 'This bet carries moderate risk. Be mindful of your bankroll management.';
  } else if (overallRisk > 25) {
    recommendation = 'This bet has some risk factors to be aware of, but appears generally reasonable.';
  } else {
    recommendation = 'This bet appears to be within responsible gambling parameters.';
  }
  
  return {
    riskFactors,
    overallRisk,
    recommendation
  };
};

/**
 * React hook for real-time analytics tracking
 */
export const useRealTimeAnalytics = (
  gameHistory: GameEvent[],
  currentBalance: number,
  initialBalance: number
): AnalyticsSnapshot => {
  const [analytics, setAnalytics] = useState<AnalyticsSnapshot>(() => {
    // If we don't have a current session, create one
    if (!currentSession) {
      startSession(initialBalance);
    }
    
    // Add historical events to session if needed
    if (currentSession && currentSession.events.length === 0 && gameHistory.length > 0) {
      gameHistory.forEach(event => {
        currentSession?.events.push(event);
      });
    }
    
    return calculateAnalytics();
  });
  
  // Update analytics when history or balances change
  useEffect(() => {
    // If we don't have a current session, create one
    if (!currentSession) {
      startSession(initialBalance);
    }
    
    // Update session with latest events if needed
    if (currentSession && currentSession.events.length !== gameHistory.length) {
      // Clear existing events
      currentSession.events = [];
      
      // Add all history events
      gameHistory.forEach(event => {
        currentSession?.events.push(event);
      });
    }
    
    // Calculate fresh analytics
    const newAnalytics = calculateAnalytics();
    setAnalytics(newAnalytics);
  }, [gameHistory, currentBalance, initialBalance]);
  
  return analytics;
};

/**
 * React hook for bet risk assessment
 */
export const useBetRiskAssessment = (
  gameHistory: GameEvent[],
  currentBalance: number,
  proposedBet: {
    gameType: string,
    betAmount: number,
    multiplier: number,
    winChance: number
  } | null
) => {
  const [riskAssessment, setRiskAssessment] = useState<{
    riskFactors: Array<{
      id: string;
      name: string;
      value: number;
      description: string;
      color: string;
    }>,
    overallRisk: number,
    recommendation: string
  }>({
    riskFactors: [],
    overallRisk: 0,
    recommendation: ''
  });
  
  useEffect(() => {
    if (proposedBet && currentBalance > 0) {
      const assessment = calculateRiskFactors(gameHistory, currentBalance, proposedBet);
      setRiskAssessment(assessment);
    }
  }, [gameHistory, currentBalance, proposedBet]);
  
  return riskAssessment;
}; 