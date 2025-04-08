'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { isLoggedIn, getUserEmail } from '../../utils/auth';
import AnalyticsDashboard from '../analytics/AnalyticsDashboard';
import RealTimeAnalyticsDashboard from '../analytics/RealTimeAnalyticsDashboard';
import { GameEvent } from '../../utils/analyticsUtils';

type BetOption = {
  id: string;
  name: string;
  icon: string;
  description: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  multiplier: number;
  winChance: number;
  minBet: number;
};

type PlayerProfile = {
  name: string;
  description: string;
  icon: string;
  riskLevel: number;
};

const betOptions: BetOption[] = [
  {
    id: 'coinflip',
    name: 'Coin Flip',
    icon: '🪙',
    description: 'Heads or tails? Classic 50/50 chance to double your money.',
    riskLevel: 'Low',
    multiplier: 2,
    winChance: 50,
    minBet: 10
  },
  {
    id: 'diceroll',
    name: 'Dice Roll',
    icon: '🎲',
    description: 'Roll a six to win big! Can you beat the odds?',
    riskLevel: 'Medium',
    multiplier: 6,
    winChance: 17,
    minBet: 50
  },
  {
    id: 'bullseye',
    name: 'Bullseye',
    icon: '🎯',
    description: 'Hit the target and triple your bet. Steady hands win.',
    riskLevel: 'Low',
    multiplier: 3,
    winChance: 33,
    minBet: 30
  },
  {
    id: 'roulette',
    name: 'Roulette',
    icon: '🎰',
    description: 'Hit your number and win 35x your bet! High risk, high reward.',
    riskLevel: 'High',
    multiplier: 35,
    winChance: 3,
    minBet: 100
  },
  {
    id: 'sportsmatch',
    name: 'Sports Match',
    icon: '⚽',
    description: 'Bet on the underdog team and get 3.5x your money if they win.',
    riskLevel: 'Medium',
    multiplier: 3.5,
    winChance: 30,
    minBet: 25
  },
  {
    id: 'jackpot',
    name: 'Mega Jackpot',
    icon: '💰',
    description: 'Go for the mega jackpot! Low chance but massive rewards await.',
    riskLevel: 'High',
    multiplier: 20,
    winChance: 5,
    minBet: 200
  }
];

const playerProfiles: PlayerProfile[] = [
  {
    name: 'Baby Betsy',
    description: 'Safe bets, max 10% bankroll',
    icon: '👶',
    riskLevel: 15
  },
  {
    name: 'Balanced Bob',
    description: 'Moderate risk, max 25% bankroll',
    icon: '🧑',
    riskLevel: 50
  },
  {
    name: 'Wild Wayne',
    description: 'High risk, high reward player',
    icon: '🤠',
    riskLevel: 85
  }
];

type SimulatorProps = {
  initialBalance?: number;
  targetBalance?: number;
};

/**
 * RiskRewardSimulator Component
 * 
 * A gambling simulator that allows users to experiment with different betting strategies
 * in a risk-free environment. The component provides different experiences for logged-in
 * and non-logged-in users, with enhanced features available for authenticated users.
 * 
 * @param {Object} props - Component props
 * @param {number} [props.initialBalance=1000] - The initial balance for the simulation
 * @param {number} [props.targetBalance=10000] - The target balance goal for the simulation
 * @returns {JSX.Element} - The rendered component
 */
const RiskRewardSimulator: React.FC<SimulatorProps> = ({
  initialBalance = 1000,
  targetBalance = 10000,
}) => {
  const [currentBalance, setCurrentBalance] = useState(initialBalance);
  const [selectedBet, setSelectedBet] = useState<BetOption>(betOptions[0]);
  const [betAmount, setBetAmount] = useState(selectedBet.minBet);
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const [gameHistory, setGameHistory] = useState<Array<{ 
    type: string; 
    amount: number; 
    result: string; 
    balanceChange: number;
    multiplier: number;
  }>>([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentProfile, setCurrentProfile] = useState<PlayerProfile>(playerProfiles[0]);
  const [maxBetPercentage, setMaxBetPercentage] = useState(10);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const MAX_FREE_BETS = 5;
  
  useEffect(() => {
    // Check login status when component mounts
    const loggedIn = isLoggedIn();
    setUserIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      setUserEmail(getUserEmail());
    }
  }, []);
  
  useEffect(() => {
    if (selectedBet && selectedBet.minBet > betAmount) {
      setBetAmount(selectedBet.minBet);
    }
  }, [selectedBet]);
  
  const handleBetSelection = (bet: BetOption) => {
    setSelectedBet(bet);
    if (bet.minBet > betAmount) {
      setBetAmount(bet.minBet);
    }
  };
  
  const handleBetAmountButton = (amount: number) => {
    setBetAmount(amount);
  };
  
  const handleAllIn = () => {
    setBetAmount(currentBalance);
  };
  
  const resetGame = () => {
    setCurrentBalance(initialBalance);
    setGameHistory([]);
    setBetAmount(selectedBet.minBet);
    setShowSignupPrompt(false);
  };
  
  const placeBet = () => {
    // Only check for 5-bet limit if user is not logged in
    if (!userIsLoggedIn) {
      // Check if user has reached the 5 bet limit
      if (gameHistory.length >= 5 && !showSignupPrompt) {
        setShowSignupPrompt(true);
        return;
      }
      
      // If signup prompt is shown, prevent further bets without signup
      if (showSignupPrompt) {
        return;
      }
    }
    
    if (betAmount <= 0 || betAmount > currentBalance) {
      alert("Invalid bet amount");
      return;
    }
    
    setIsSimulating(true);
    
    setTimeout(() => {
      const randomNum = Math.random() * 100;
      const isWin = randomNum <= selectedBet.winChance;
      const balanceChange = isWin ? betAmount * (selectedBet.multiplier - 1) : -betAmount;
      const newBalance = currentBalance + balanceChange;
      
      setCurrentBalance(newBalance);
      setGameHistory([
        ...gameHistory,
        {
          type: selectedBet.name,
          amount: betAmount,
          result: isWin ? 'win' : 'loss',
          balanceChange: balanceChange,
          multiplier: selectedBet.multiplier
        }
      ]);
      
      setIsSimulating(false);
      
      // Check if game over conditions are met
      if (newBalance <= 0) {
        alert("Game Over! You've lost all your money.");
      } else if (newBalance >= targetBalance) {
        alert("Congratulations! You've reached your target balance!");
      }
    }, 1000); // Simulated delay
  };
  
  const getRiskLevelColor = (level: number) => {
    if (level <= 30) return 'bg-green-500';
    if (level <= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  const getBetRiskClass = (riskLevel: 'Low' | 'Medium' | 'High') => {
    switch (riskLevel) {
      case 'Low': return 'text-green-700 bg-green-50';
      case 'Medium': return 'text-yellow-700 bg-yellow-50';
      case 'High': return 'text-red-700 bg-red-50';
    }
  };
  
  /**
   * Helper function to convert the game history to the format expected by RealTimeAnalyticsDashboard
   * 
   * This function transforms the internal game history format used by the simulator
   * into the GameEvent type required by the analytics dashboard. It adds additional
   * metadata such as timestamps and calculates metrics like bankroll percentage.
   * 
   * @param {Array<{type: string, amount: number, result: string, balanceChange: number, multiplier: number}>} history - The game history from the simulator
   * @returns {Array<GameEvent>} - The converted game history in the format expected by RealTimeAnalyticsDashboard
   */
  const convertGameHistory = (history: Array<{ 
    type: string; 
    amount: number; 
    result: string; 
    balanceChange: number;
    multiplier: number;
  }>): Array<GameEvent> => {
    return history.map((bet, index) => {
      const timestamp = Date.now() - (history.length - index) * 60000; // Simulate timestamps, newest last
      return {
        timestamp,
        gameType: bet.type,
        betAmount: bet.amount,
        result: bet.result as 'win' | 'loss',
        payout: bet.result === 'win' ? bet.amount + bet.balanceChange : 0,
        balanceChange: bet.balanceChange,
        multiplier: bet.multiplier,
        bankrollPercentage: (bet.amount / (index === 0 ? initialBalance : initialBalance + history.slice(0, index).reduce((sum, item) => sum + item.balanceChange, 0))) * 100,
        responseTime: Math.floor(Math.random() * 5000) + 1000, // Random response time between 1-6 seconds
      };
    });
  };

  return (
    <div className="bg-gray-50 shadow-md rounded-xl p-6 max-w-6xl mx-auto">
      {/* User Status Banner */}
      {userIsLoggedIn && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-green-100 rounded-full p-1">
              <svg className="h-5 w-5 text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Full Access Unlocked - Logged in as <span className="font-semibold">{userEmail}</span>
              </p>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Premium User
            </span>
          </div>
        </div>
      )}
      
      {/* Progress Bar */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-semibold text-gray-700">Progress to Goal</h3>
          <span className="text-gray-800 font-medium">${currentBalance.toLocaleString()} / ${targetBalance.toLocaleString()}</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-indigo-600 rounded-full transition-all duration-300" 
            style={{ width: `${Math.min((currentBalance / targetBalance) * 100, 100)}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>${initialBalance.toLocaleString()} Start</span>
          <span>${(targetBalance * 0.25).toLocaleString()}</span>
          <span>${(targetBalance * 0.5).toLocaleString()}</span>
          <span>${targetBalance.toLocaleString()} Goal</span>
        </div>
      </div>
      
      {showSignupPrompt && !userIsLoggedIn ? (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="bg-indigo-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-3">You've Used All Your Free Bets!</h3>
            <div className="max-w-md mx-auto">
              <p className="text-gray-700 mb-4">
                Create a free account now to enjoy unlimited betting simulations and unlock powerful analytics to improve your strategy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">Unlimited Bets</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium">Advanced Analytics</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-sm font-medium">Betting Insights</span>
                </div>
              </div>
              <Link
                href="/signup"
                className="block w-full sm:w-auto sm:inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md transition duration-200 shadow-md"
              >
                Create Free Account
              </Link>
              <p className="text-sm text-gray-500 mt-3">
                No credit card required. Sign up in less than 60 seconds.
              </p>
              <div className="mt-4 text-sm">
                <span className="text-gray-500">Already have an account? </span>
                <Link href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Log in here
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Your Profile</h3>
              <button 
                onClick={resetGame}
                className="text-sm py-1 px-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
              >
                Reset
              </button>
            </div>
            
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">{currentProfile.icon}</div>
              <div>
                <div className="font-semibold">{currentProfile.name}</div>
                <div className="text-sm text-gray-600">{currentProfile.description}</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-1">Current Balance</div>
              <div className="text-2xl font-semibold">${currentBalance.toLocaleString()}</div>
              <div className="flex space-x-2 mt-1">
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Safe</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Moderate</span>
                <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">High Risk</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500 mb-1 flex justify-between">
                  <span>Risk Level</span>
                  <span className="text-indigo-600 font-medium">{currentProfile.riskLevel}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className={`h-2 rounded-full ${getRiskLevelColor(currentProfile.riskLevel)}`}
                    style={{ width: `${currentProfile.riskLevel}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500 mb-1 flex justify-between">
                  <span>Max Bet</span>
                  <span>{maxBetPercentage}% of Balance</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500 mb-1 flex justify-between">
                  <span>Personality</span>
                  <div className="flex space-x-1">
                    <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">Cautious</span>
                    <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">Smart</span>
                    <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">Patient</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Place Bet Section */}
          <div className="bg-gray-900 text-white rounded-lg shadow-md p-4 md:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Place Your Bet</h3>
            
            <div className="mb-4">
              <div className="flex items-center mb-3">
                <span className="mr-2">Selected:</span>
                <div className="flex items-center bg-gray-800 rounded-full px-3 py-1">
                  <span className="mr-2">{selectedBet.icon}</span>
                  <span>{selectedBet.name}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 text-sm mb-2">
                <div className="text-gray-400">Multiplier: {selectedBet.multiplier}x</div>
                <div className="mx-2 text-gray-600">•</div>
                <div className="text-gray-400">Win Chance: {selectedBet.winChance}%</div>
                <div className="mx-2 text-gray-600">•</div>
                <div className="text-gray-400">Min Bet: ${selectedBet.minBet}</div>
              </div>
              
              <div className="mt-4">
                <input
                  type="text"
                  value={`$ ${betAmount}`}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setBetAmount(value ? parseInt(value) : 0);
                  }}
                  className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white mb-3"
                  placeholder="$ Enter amount"
                />
                
                <div className="grid grid-cols-6 gap-2 mb-4">
                  <button 
                    onClick={() => handleBetAmountButton(10)}
                    className="bg-gray-800 hover:bg-gray-700 py-2 rounded text-center"
                  >
                    $10
                  </button>
                  <button 
                    onClick={() => handleBetAmountButton(20)}
                    className="bg-gray-800 hover:bg-gray-700 py-2 rounded text-center"
                  >
                    $20
                  </button>
                  <button 
                    onClick={() => handleBetAmountButton(50)}
                    className="bg-gray-800 hover:bg-gray-700 py-2 rounded text-center"
                  >
                    $50
                  </button>
                  <button 
                    onClick={() => handleBetAmountButton(100)}
                    className="bg-gray-800 hover:bg-gray-700 py-2 rounded text-center"
                  >
                    $100
                  </button>
                  <button 
                    onClick={() => handleBetAmountButton(500)}
                    className="bg-gray-800 hover:bg-gray-700 py-2 rounded text-center"
                  >
                    $500
                  </button>
                  <button 
                    onClick={handleAllIn}
                    className="bg-red-900 hover:bg-red-800 py-2 rounded text-center"
                  >
                    ALL-IN
                  </button>
                </div>
                
                <button
                  onClick={placeBet}
                  disabled={isSimulating || betAmount <= 0 || betAmount > currentBalance}
                  className={`w-full py-3 rounded-md text-white font-semibold text-center ${
                    isSimulating || betAmount <= 0 || betAmount > currentBalance
                      ? 'bg-purple-400 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  {isSimulating ? 'PLACING BET...' : 'PLACE BET'}
                </button>
              </div>
            </div>
          </div>
          
          {/* Bet Options Section */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-4">Bet Options</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {betOptions.map((option) => (
                <div 
                  key={option.id}
                  onClick={() => handleBetSelection(option)}
                  className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                    selectedBet.id === option.id 
                      ? 'border-indigo-500 bg-indigo-50' 
                      : 'border-gray-200 bg-white hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-2xl">{option.icon}</div>
                    <div className="font-medium">{option.name}</div>
                    <div className={`ml-auto text-xs px-2 py-0.5 rounded-full ${getBetRiskClass(option.riskLevel)}`}>
                      {option.riskLevel}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                  <div className="grid grid-cols-3 text-xs text-gray-500">
                    <div>
                      <div>Multiplier</div>
                      <div className="font-semibold text-gray-700">{option.multiplier}x</div>
                    </div>
                    <div>
                      <div>Win Chance</div>
                      <div className="font-semibold text-gray-700">{option.winChance}%</div>
                    </div>
                    <div>
                      <div>Min Bet</div>
                      <div className="font-semibold text-gray-700">${option.minBet}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bet History */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-4">Bet History</h3>
            {gameHistory.length === 0 ? (
              <div className="bg-white rounded-lg p-6 text-center text-gray-500">
                Place your first bet to see your history.
              </div>
            ) : (
              <div className="bg-white rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bet Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Multiplier</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Result</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[...gameHistory].reverse().map((bet, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bet.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${bet.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bet.multiplier}x</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            bet.result === 'win' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {bet.result === 'win' 
                              ? `+$${bet.balanceChange.toLocaleString()}`
                              : `-$${Math.abs(bet.balanceChange).toLocaleString()}`
                            }
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Free Bets Remaining Notification */}
      {!userIsLoggedIn && gameHistory.length > 0 && gameHistory.length < MAX_FREE_BETS && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <span className="font-medium text-amber-800">Free Trial: </span>
              <span className="text-amber-700">
                {MAX_FREE_BETS - gameHistory.length} {MAX_FREE_BETS - gameHistory.length === 1 ? 'bet' : 'bets'} remaining
              </span>
            </div>
          </div>
          <Link 
            href="/signup" 
            className="text-sm bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-md transition duration-150 inline-flex items-center"
          >
            Unlock Unlimited
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      )}
      
      {/* Analytics Dashboard for logged-in users */}
      {/* Enhanced real-time analytics for authenticated users with comprehensive metrics and insights */}
      {userIsLoggedIn && gameHistory.length > 0 && (
        <RealTimeAnalyticsDashboard 
          gameHistory={convertGameHistory(gameHistory)}
          currentBalance={currentBalance}
          initialBalance={initialBalance}
        />
      )}

      {/* Blurred Analytics Dashboard preview for logged-out users */}
      {!userIsLoggedIn && gameHistory.length > 0 && (
        <div className="mt-8 relative">
          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-6">Advanced Analytics</h2>
            
            {/* Blurred overlay */}
            <div className="absolute inset-0 backdrop-blur-sm bg-white/30 z-10 flex flex-col items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
                <div className="bg-indigo-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unlock Advanced Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Sign up or log in to access detailed analytics, track your gambling habits, and improve your strategies.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
                  <Link
                    href="/signup"
                    className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm transition"
                  >
                    Sign Up for Free
                  </Link>
                  <Link
                    href="/login"
                    className="px-5 py-3 bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-200 font-medium rounded-md shadow-sm transition"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Preview of analytics dashboard (will be blurred) */}
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              <div className="px-4 py-2 font-medium text-sm rounded-md bg-indigo-100 text-indigo-700">Overview</div>
              <div className="px-4 py-2 font-medium text-sm rounded-md text-gray-500">Betting Patterns</div>
              <div className="px-4 py-2 font-medium text-sm rounded-md text-gray-500">Financial Metrics</div>
              <div className="px-4 py-2 font-medium text-sm rounded-md text-gray-500">Behavioral Analysis</div>
            </div>
            
            {/* Mock comparative analytics (will be blurred) */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Comparative Analytics</h2>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Responsible Gambling Score</h3>
                <p className="text-sm text-gray-500 mb-3">Based on comparison with industry benchmarks</p>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-yellow-500 mb-2">69/100</div>
                  <div className="w-full max-w-md bg-gray-200 rounded-full h-3 mb-1">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '69%' }}></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Betting Behavior Metrics</h3>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="space-y-4">
                      {Array(4).fill(0).map((_, i) => (
                        <div key={i} className="mb-4">
                          <div className="flex justify-between items-center mb-1">
                            <div className="h-4 bg-gray-200 rounded w-24"></div>
                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 rounded-full bg-gray-300" style={{ width: `${30 + Math.random() * 50}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">How You Compare</h3>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">Based on your betting patterns...</p>
                    <div className="space-y-4">
                      {Array(5).fill(0).map((_, i) => (
                        <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiskRewardSimulator; 