'use client';

import React, { useState } from 'react';
import ComparativeAnalytics from './ComparativeAnalytics';
import PredictiveAnalytics from './PredictiveAnalytics';
import PatternRecognition from './PatternRecognition';
import BettingPatterns from './BettingPatterns';
import FinancialMetrics from './FinancialMetrics';
import BehavioralAnalysis from './BehavioralAnalysis';

type TabProps = {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const Tab: React.FC<TabProps> = ({ id, label, isActive, onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`px-4 py-2 font-medium text-sm rounded-md ${
        isActive
          ? 'bg-indigo-100 text-indigo-700'
          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
};

type AnalyticsDashboardProps = {
  gameHistory: Array<{ 
    type: string; 
    amount: number; 
    result: string; 
    balanceChange: number;
    multiplier: number;
  }>;
  currentBalance: number;
  initialBalance: number;
};

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  gameHistory,
  currentBalance,
  initialBalance
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const calculateWinRate = () => {
    if (gameHistory.length === 0) return 0;
    const wins = gameHistory.filter(game => game.result === 'win').length;
    return parseFloat(((wins / gameHistory.length) * 100).toFixed(1));
  };

  const winRate = calculateWinRate();
  
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <ComparativeAnalytics 
              score={69}
              avgRiskLevel={40}
              maxBetSize="Infinity%"
              sessionDuration="1 minute"
              betsBetweenBreaks={12}
              winRate={winRate}
              gameDiversification={83.3}
              lossChasing={9.1}
            />
            <PredictiveAnalytics 
              projectedBalance="$79"
              balanceChange="+Infinity%"
              currentWinRate={winRate}
              projectedWinRate={32.0}
              bankruptcyRisk="Low"
              minProjected="$0"
              avgBetSize="$245"
              riskLevel={40}
            />
          </>
        );
      case 'patterns':
        return (
          <>
            <PatternRecognition />
            <BettingPatterns />
          </>
        );
      case 'financial':
        return (
          <FinancialMetrics
            winLossRatio={0.71}
            winRate={winRate}
            netProfit={`-$${Math.abs(initialBalance - currentBalance).toLocaleString()}`}
            roi={`${(((currentBalance - initialBalance) / initialBalance) * 100).toFixed(2)}%`}
            avgBetSize="Infinity% of bankroll"
            largestBet="Infinity% of bankroll"
            maxDrawdown="100.0%"
            recoveryRate="33.3%"
            bestStreak={3}
            worstStreak={3}
            currentStreak={3}
          />
        );
      case 'behavioral':
        return (
          <BehavioralAnalysis />
        );
      default:
        return <ComparativeAnalytics 
          score={69}
          avgRiskLevel={40}
          maxBetSize="Infinity%"
          sessionDuration="1 minute"
          betsBetweenBreaks={12}
          winRate={winRate}
          gameDiversification={83.3}
          lossChasing={9.1}
        />;
    }
  };

  return (
    <div className="mt-8 border-t pt-6">
      <h2 className="text-2xl font-bold mb-6">Your Betting Analytics</h2>
      
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        <Tab 
          id="tab-overview"
          label="Overview" 
          isActive={activeTab === 'overview'}
          onClick={() => setActiveTab('overview')}
        />
        <Tab 
          id="tab-patterns"
          label="Betting Patterns" 
          isActive={activeTab === 'patterns'}
          onClick={() => setActiveTab('patterns')}
        />
        <Tab 
          id="tab-financial"
          label="Financial Metrics" 
          isActive={activeTab === 'financial'}
          onClick={() => setActiveTab('financial')}
        />
        <Tab 
          id="tab-behavioral"
          label="Behavioral Analysis" 
          isActive={activeTab === 'behavioral'}
          onClick={() => setActiveTab('behavioral')}
        />
      </div>
      
      {renderActiveTab()}
    </div>
  );
};

export default AnalyticsDashboard; 