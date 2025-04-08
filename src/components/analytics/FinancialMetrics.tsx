'use client';

import React from 'react';

type MetricBoxProps = {
  title: string;
  value: string | number;
  isNegative?: boolean;
};

const MetricBox: React.FC<MetricBoxProps> = ({ title, value, isNegative }) => {
  return (
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className={`text-xl font-bold ${isNegative ? 'text-red-500' : ''}`}>{value}</div>
    </div>
  );
};

type WinningStreakProps = {
  title: string;
  count: number;
  isPositive?: boolean;
  isCurrent?: boolean;
};

const WinningStreak: React.FC<WinningStreakProps> = ({ title, count, isPositive, isCurrent }) => {
  return (
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className={`text-xl font-bold ${
        isPositive 
          ? 'text-green-500' 
          : isCurrent 
            ? 'text-red-500' 
            : 'text-gray-800'
      }`}>
        {count} {isPositive ? 'wins' : 'losses'}
      </div>
    </div>
  );
};

type FinancialMetricsProps = {
  winLossRatio?: number;
  winRate?: number;
  netProfit?: string;
  roi?: string;
  avgBetSize?: string;
  largestBet?: string;
  stakeWarning?: string;
  maxDrawdown?: string;
  recoveryRate?: string;
  drawdownWarning?: string;
  bestStreak?: number;
  worstStreak?: number;
  currentStreak?: number;
  isCurrentStreakWinning?: boolean;
  recommendations?: string[];
};

const FinancialMetrics: React.FC<FinancialMetricsProps> = ({
  winLossRatio = 0.71,
  winRate = 41.7,
  netProfit = '-$1,000',
  roi = '-38.46%',
  avgBetSize = 'Infinity% of bankroll',
  largestBet = 'Infinity% of bankroll',
  stakeWarning = 'Your largest bets are quite high relative to your bankroll. Consider reducing your maximum stake size.',
  maxDrawdown = '100.0%',
  recoveryRate = '33.3%',
  drawdownWarning = 'Your maximum drawdown is significant. Consider implementing stricter stop-loss strategies.',
  bestStreak = 3,
  worstStreak = 3,
  currentStreak = 3,
  isCurrentStreakWinning = false,
  recommendations = [
    'Consider reducing your average bet size to below 10% of your bankroll for better longevity',
    'Implement stop-loss limits to prevent significant drawdowns',
    'Review your betting strategy - you\'re currently losing money overall'
  ]
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-bold mb-6">Financial Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="font-medium text-lg mb-4">Win/Loss Summary</h3>
          <div className="grid grid-cols-2 gap-4">
            <MetricBox title="Win/Loss Ratio" value={winLossRatio} />
            <MetricBox title="Win Rate" value={`${winRate}%`} />
          </div>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="font-medium text-lg mb-4">Profit & Loss</h3>
          <div className="grid grid-cols-2 gap-4">
            <MetricBox title="Net Profit" value={netProfit} isNegative={true} />
            <MetricBox title="ROI" value={roi} isNegative={true} />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="font-medium text-lg mb-4">Stake Sizing</h3>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <MetricBox title="Avg Bet Size" value={avgBetSize} />
            <MetricBox title="Largest Bet" value={largestBet} />
          </div>
          <p className="text-sm text-yellow-600">{stakeWarning}</p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="font-medium text-lg mb-4">Risk Metrics</h3>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <MetricBox title="Max Drawdown" value={maxDrawdown} />
            <MetricBox title="Recovery Rate" value={recoveryRate} />
          </div>
          <p className="text-sm text-yellow-600">{drawdownWarning}</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-5 rounded-lg mb-8">
        <h3 className="font-medium text-lg mb-4">Winning & Losing Streaks</h3>
        <div className="grid grid-cols-3 gap-4">
          <WinningStreak title="Best Streak" count={bestStreak} isPositive={true} />
          <WinningStreak title="Worst Streak" count={worstStreak} />
          <WinningStreak 
            title="Current Streak" 
            count={currentStreak}
            isPositive={isCurrentStreakWinning}
            isCurrent={!isCurrentStreakWinning}
          />
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-lg mb-3">Recommendations</h3>
        <ul className="list-disc pl-5 space-y-1">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="text-gray-700">{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinancialMetrics; 