'use client';

import React, { useState } from 'react';

type PredictionMetricProps = {
  title: string;
  value: string | number;
  subtext: string;
  color?: string;
};

const PredictionMetric: React.FC<PredictionMetricProps> = ({ 
  title, 
  value, 
  subtext,
  color = 'text-gray-800'
}) => {
  return (
    <div className="bg-gray-50 p-3 rounded text-center">
      <div className="text-sm text-gray-500">{title}</div>
      <div className={`text-xl font-bold ${color}`}>{value}</div>
      <div className="text-xs text-gray-400">{subtext}</div>
    </div>
  );
};

type PredictiveAnalyticsProps = {
  projectedBalance?: string | number;
  balanceChange?: string;
  currentWinRate?: number;
  projectedWinRate?: number;
  bankruptcyRisk?: string;
  minProjected?: string;
  avgBetSize?: string | number;
  riskLevel?: number;
};

const PredictiveAnalytics: React.FC<PredictiveAnalyticsProps> = ({ 
  projectedBalance = '$79',
  balanceChange = '+Infinity%',
  currentWinRate = 41.7,
  projectedWinRate = 32.0,
  bankruptcyRisk = 'Low',
  minProjected = '$0',
  avgBetSize = '$245',
  riskLevel = 40
}) => {
  const [betCount, setBetCount] = useState(25);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold flex items-center">
          Predictive Analytics
          <button className="ml-1 text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </button>
        </h2>
      </div>

      <p className="text-sm text-gray-600 mb-3">Projecting outcomes for your next:</p>
      
      <div className="flex justify-end space-x-2 mb-4">
        <button 
          onClick={() => setBetCount(10)} 
          className={`px-3 py-1 text-sm rounded-md ${betCount === 10 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        >
          10 bets
        </button>
        <button 
          onClick={() => setBetCount(25)} 
          className={`px-3 py-1 text-sm rounded-md ${betCount === 25 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        >
          25 bets
        </button>
        <button 
          onClick={() => setBetCount(50)} 
          className={`px-3 py-1 text-sm rounded-md ${betCount === 50 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        >
          50 bets
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <h3 className="text-md font-medium mb-2 flex items-center">
            Projected Balance
            <button className="ml-1 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
          </h3>
          <PredictionMetric
            title="Projected Balance"
            value={projectedBalance}
            subtext={`${balanceChange} from current`}
            color="text-green-500"
          />
        </div>

        <div>
          <h3 className="text-md font-medium mb-2 flex items-center">
            Projected Win Rate
            <button className="ml-1 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
          </h3>
          <PredictionMetric
            title="Projected Win Rate"
            value={`${projectedWinRate}%`}
            subtext={`Current: ${currentWinRate}%`}
          />
        </div>

        <div>
          <h3 className="text-md font-medium mb-2 flex items-center">
            Bankruptcy Risk
            <button className="ml-1 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
          </h3>
          <PredictionMetric
            title="Bankruptcy Risk"
            value={bankruptcyRisk}
            subtext={`Min projected: ${minProjected}`}
            color="text-green-500"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h3 className="text-md font-medium mb-2">What This Means</h3>
        <p className="text-sm text-gray-600 mb-2">
          If you continue your current betting patterns for your next {betCount} bets:
        </p>
        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
          <li>Your average bet size will be approximately {avgBetSize}</li>
          <li>Your balance could increase by about 79 ({projectedBalance} total)</li>
          <li>Your win rate is projected to be {projectedWinRate}%</li>
          <li>Your average risk level will be {riskLevel}%</li>
          <li className="text-green-600">You have high profit potential if your win rate stays consistent</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-md font-medium mb-2">Recommendations</h3>
        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
          <li>Consider reducing your average bet size to below 10% of your bankroll for better longevity</li>
          <li>Implement stop-loss limits to prevent significant drawdowns</li>
          <li>Review your betting strategy - you're currently likely to see modest gains</li>
        </ul>
      </div>
    </div>
  );
};

export default PredictiveAnalytics; 