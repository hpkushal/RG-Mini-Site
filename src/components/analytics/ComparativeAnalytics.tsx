'use client';

import React from 'react';

type MetricProps = {
  label: string;
  value: string | number;
  comparison: string;
  isGood?: boolean;
  isBad?: boolean;
  progress: number;
};

const Metric: React.FC<MetricProps> = ({ label, value, comparison, isGood, isBad, progress }) => {
  const getColorClass = () => {
    if (isGood) return 'text-green-500';
    if (isBad) return 'text-red-500';
    return 'text-yellow-500';
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <span className="text-gray-700">{label}</span>
          <button className="ml-1 text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <span className={`font-medium ${getColorClass()}`}>{value}</span>
          <span className="text-gray-500 text-sm ml-2">vs {comparison}</span>
        </div>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full">
        <div 
          className={`h-2 rounded-full ${isGood ? 'bg-green-500' : isBad ? 'bg-red-500' : 'bg-yellow-500'}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

type CompareItemProps = {
  icon: string;
  text: string;
  isGood?: boolean;
  isWarning?: boolean;
};

const CompareItem: React.FC<CompareItemProps> = ({ icon, text, isGood, isWarning }) => {
  return (
    <li className="flex items-start">
      <span className={`mr-2 ${isGood ? 'text-green-500' : isWarning ? 'text-red-500' : 'text-gray-500'}`}>
        {icon}
      </span>
      <span className="text-sm">{text}</span>
    </li>
  );
};

type ComparativeAnalyticsProps = {
  score: number;
  avgRiskLevel: number;
  maxBetSize: number | string;
  sessionDuration: string;
  betsBetweenBreaks: number;
  winRate: number;
  gameDiversification: number;
  lossChasing: number;
};

const ComparativeAnalytics: React.FC<ComparativeAnalyticsProps> = ({
  score = 69,
  avgRiskLevel = 40,
  maxBetSize = 'Infinity%',
  sessionDuration = '1 minute',
  betsBetweenBreaks = 12,
  winRate = 41.7,
  gameDiversification = 83.3,
  lossChasing = 9.1,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        Comparative Analytics
        <button className="ml-1 text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        </button>
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          Responsible Gambling Score
          <button className="ml-1 text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </button>
        </h3>
        <p className="text-sm text-gray-500 mb-3">Based on comparison with industry benchmarks</p>
        
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold text-yellow-500 mb-2">{score}/100</div>
          <div className="w-full max-w-md bg-gray-200 rounded-full h-3 mb-1">
            <div className="bg-yellow-500 h-3 rounded-full" style={{ width: `${score}%` }}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Betting Behavior Metrics</h3>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="space-y-4">
              <Metric 
                label="Average Risk Level" 
                value={`${avgRiskLevel}%`} 
                comparison="40% or less" 
                progress={avgRiskLevel} 
                isGood={avgRiskLevel <= 40}
                isBad={avgRiskLevel > 60}
              />
              
              <Metric 
                label="Max Bet Size" 
                value={maxBetSize} 
                comparison="10% or less" 
                progress={100} 
                isBad={true}
              />
              
              <Metric 
                label="Session Duration" 
                value={sessionDuration} 
                comparison="60 minutes or less" 
                progress={2} 
                isGood={true}
              />

              <Metric 
                label="Bets Between Breaks" 
                value={betsBetweenBreaks} 
                comparison="4 bets or fewer" 
                progress={75} 
                isBad={true}
              />

              <Metric 
                label="Win Rate" 
                value={`${winRate}%`} 
                comparison="45.0%" 
                progress={winRate} 
                isGood={winRate > 40}
              />

              <Metric 
                label="Game Diversification" 
                value={`${gameDiversification}%`} 
                comparison="30.0% or more" 
                progress={gameDiversification} 
                isGood={true}
              />

              <Metric 
                label="Loss Chasing" 
                value={`${lossChasing}% of bets`} 
                comparison="15.0% or less" 
                progress={lossChasing * 2} 
                isGood={true}
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-3">How You Compare</h3>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Based on your betting patterns, here's how your behavior compares to responsible gambling guidelines:</p>
            <ul className="space-y-2">
              <CompareItem
                icon="⚠️"
                text="Your risk level is 0% higher than recommended"
                isWarning={false}
              />
              <CompareItem
                icon="⚠️"
                text="Your maximum bet size exceeds recommended bankroll percentages"
                isWarning={true}
              />
              <CompareItem
                icon="✓"
                text="Your betting session durations are within healthy limits"
                isGood={true}
              />
              <CompareItem
                icon="⚠️"
                text="You should take breaks more frequently while betting"
                isWarning={true}
              />
              <CompareItem
                icon="✓"
                text="Your bets are well-diversified across different games"
                isGood={true}
              />
              <CompareItem
                icon="✓"
                text="You rarely chase losses, which is a healthy behavior"
                isGood={true}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparativeAnalytics; 