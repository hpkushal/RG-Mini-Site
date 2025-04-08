'use client';

import React from 'react';

type RiskLabelProps = {
  text: string;
  percentage: number;
  type: 'Low' | 'Medium' | 'High';
};

const RiskLabel: React.FC<RiskLabelProps> = ({ text, percentage, type }) => {
  let bgColor = 'bg-green-100 text-green-700';
  if (type === 'Medium') bgColor = 'bg-yellow-100 text-yellow-700';
  if (type === 'High') bgColor = 'bg-red-100 text-red-700';

  return (
    <div className={`px-2 py-1 rounded-full text-xs ${bgColor}`}>
      {text}: {percentage}%
    </div>
  );
};

type PreferenceCardProps = {
  title: string;
  children: React.ReactNode;
};

const PreferenceCard: React.FC<PreferenceCardProps> = ({ title, children }) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <h3 className="font-medium text-lg mb-4">{title}</h3>
      {children}
    </div>
  );
};

type BettingPatternsProps = {
  mostPlayedGame?: {
    name: string;
    icon: string;
    plays: number;
    percentage: number;
  };
  riskPreference?: {
    low: number;
    medium: number;
    high: number;
  };
  mostSuccessfulGame?: {
    name: string;
    icon: string;
    winRate: number;
  };
  leastSuccessfulGame?: {
    name: string;
    icon: string;
    winRate: number;
  };
  timingData?: {
    mostActive: string;
    mostSuccessful: string;
    winRate: number;
  };
  lossRecovery?: {
    attempts: number;
    successRate: number;
  };
  tips?: string[];
};

const BettingPatterns: React.FC<BettingPatternsProps> = ({
  mostPlayedGame = {
    name: 'Coin Flip',
    icon: '🪙',
    plays: 8,
    percentage: 67
  },
  riskPreference = {
    low: 100,
    medium: 0,
    high: 0
  },
  mostSuccessfulGame = {
    name: 'Bullseye',
    icon: '🎯',
    winRate: 50.0
  },
  leastSuccessfulGame = {
    name: 'Coin Flip',
    icon: '🪙',
    winRate: 37.5
  },
  timingData = {
    mostActive: 'Morning',
    mostSuccessful: 'Morning',
    winRate: 41.7
  },
  lossRecovery = {
    attempts: 1,
    successRate: 0.0
  },
  tips = [
    'You have a high success rate with Bullseye. Consider focusing more on this game.'
  ]
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-bold mb-6">Betting Patterns</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <PreferenceCard title="Game Preferences">
          <div className="mb-4">
            <div className="text-gray-600 mb-2">Most Played Game</div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">{mostPlayedGame.icon}</span>
              <div>
                <div className="font-medium">{mostPlayedGame.name}</div>
                <div className="text-sm text-gray-500">
                  Played {mostPlayedGame.plays} times ({mostPlayedGame.percentage}% of all bets)
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-gray-600 mb-2">Game Risk Preference</div>
            <div className="flex flex-wrap gap-2">
              <RiskLabel text="Low" percentage={riskPreference.low} type="Low" />
              <RiskLabel text="Medium" percentage={riskPreference.medium} type="Medium" />
              <RiskLabel text="High" percentage={riskPreference.high} type="High" />
            </div>
          </div>
        </PreferenceCard>
        
        <PreferenceCard title="Success Patterns">
          <div className="mb-4">
            <div className="text-gray-600 mb-2">Most Successful Game</div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">{mostSuccessfulGame.icon}</span>
              <div>
                <div className="font-medium">{mostSuccessfulGame.name}</div>
                <div className="text-sm text-green-500">
                  Win rate: {mostSuccessfulGame.winRate}%
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-gray-600 mb-2">Least Successful Game</div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">{leastSuccessfulGame.icon}</span>
              <div>
                <div className="font-medium">{leastSuccessfulGame.name}</div>
                <div className="text-sm text-red-500">
                  Win rate: {leastSuccessfulGame.winRate}%
                </div>
              </div>
            </div>
          </div>
        </PreferenceCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <PreferenceCard title="Time Patterns">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-gray-600 mb-2">When You Bet Most</div>
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm inline-block">
                Morning: 100%
              </div>
            </div>
            
            <div>
              <div className="text-gray-600 mb-2">Best Time to Bet</div>
              <div className="font-medium">{timingData.mostSuccessful}</div>
              <div className="text-sm text-gray-500">
                Win rate: {timingData.winRate}%
              </div>
            </div>
          </div>
        </PreferenceCard>
        
        <PreferenceCard title="Loss Recovery Patterns">
          <div className="mb-3">
            <div className="text-gray-600 mb-2">Chasing Losses</div>
            <div className="font-medium">{lossRecovery.attempts} attempts</div>
          </div>
          
          <div>
            <div className="text-gray-600 mb-2">Success rate:</div>
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
              {lossRecovery.successRate}%
            </span>
          </div>
        </PreferenceCard>
      </div>
      
      <div className="mt-6">
        <h3 className="font-medium text-lg mb-3">Tips Based on Your Patterns</h3>
        <ul className="list-disc pl-5 space-y-1">
          {tips.map((tip, index) => (
            <li key={index} className="text-gray-700">{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BettingPatterns; 