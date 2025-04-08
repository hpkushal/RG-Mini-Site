'use client';

import React from 'react';

type BehavioralMetricProps = {
  title: string;
  mainValue: string | number;
  subValue?: string;
  warning?: string;
};

const BehavioralMetric: React.FC<BehavioralMetricProps> = ({ 
  title, 
  mainValue, 
  subValue,
  warning
}) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <h3 className="font-medium text-lg mb-4">{title}</h3>
      <div className="mb-2">
        <div className="text-gray-600 text-sm">{typeof mainValue === 'string' ? 'Average time between bets' : 'Average risk level'}</div>
        <div className="text-xl font-semibold">{mainValue}</div>
        {subValue && (
          <div className="text-sm text-gray-600">Consistency: {subValue}</div>
        )}
      </div>
      {warning && (
        <p className="text-sm text-yellow-600 mt-2">{warning}</p>
      )}
    </div>
  );
};

type ReactionMetricProps = {
  title: string;
  increasedCount: number;
  sameCount: number;
  decreasedCount: number;
};

const ReactionMetric: React.FC<ReactionMetricProps> = ({ 
  title, 
  increasedCount, 
  sameCount, 
  decreasedCount 
}) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <h3 className="font-medium text-lg mb-4">{title}</h3>
      <div className="flex justify-between text-center">
        <div>
          <div className="text-xl font-semibold">{increasedCount}</div>
          <div className="text-sm text-gray-500">Increased Bets</div>
        </div>
        <div>
          <div className="text-xl font-semibold">{sameCount}</div>
          <div className="text-sm text-gray-500">Same Level</div>
        </div>
        <div>
          <div className="text-xl font-semibold">{decreasedCount}</div>
          <div className="text-sm text-gray-500">Decreased Bets</div>
        </div>
      </div>
    </div>
  );
};

type EmotionalBettingProps = {
  avgRiskAfterWins: number;
  avgRiskAfterLosses: number;
};

const EmotionalBetting: React.FC<EmotionalBettingProps> = ({ 
  avgRiskAfterWins, 
  avgRiskAfterLosses 
}) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <h3 className="font-medium text-lg mb-4">Emotional Betting</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-600">Average risk after wins:</div>
          <div className="text-xl font-semibold">{avgRiskAfterWins}%</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Average risk after losses:</div>
          <div className="text-xl font-semibold">{avgRiskAfterLosses}%</div>
        </div>
      </div>
    </div>
  );
};

type BehavioralAnalysisProps = {
  avgTimeBetweenBets?: string;
  frequencyWarning?: string;
  avgRiskLevel?: number;
  riskConsistency?: string;
  reactionToLosses?: {
    increased: number;
    same: number;
    decreased: number;
  };
  emotionalBetting?: {
    afterWins: number;
    afterLosses: number;
  };
  personalityType?: string;
  tips?: string[];
};

const BehavioralAnalysis: React.FC<BehavioralAnalysisProps> = ({
  avgTimeBetweenBets = '2 seconds',
  frequencyWarning = 'You place bets rapidly. Consider taking more time between decisions.',
  avgRiskLevel = 40.1,
  riskConsistency = 'Variable',
  reactionToLosses = {
    increased: 1,
    same: 4,
    decreased: 2
  },
  emotionalBetting = {
    afterWins: 26.5,
    afterLosses: 41.4
  },
  personalityType = 'Rapid Bettor',
  tips = [
    'Take more time between bets to make thoughtful decisions'
  ]
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-bold mb-6">Behavioral Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <BehavioralMetric 
          title="Betting Frequency" 
          mainValue={avgTimeBetweenBets}
          warning={frequencyWarning}
        />
        
        <BehavioralMetric 
          title="Risk Appetite" 
          mainValue={`${avgRiskLevel}%`}
          subValue={riskConsistency}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ReactionMetric 
          title="Reaction to Losses"
          increasedCount={reactionToLosses.increased}
          sameCount={reactionToLosses.same}
          decreasedCount={reactionToLosses.decreased}
        />
        
        <EmotionalBetting 
          avgRiskAfterWins={emotionalBetting.afterWins}
          avgRiskAfterLosses={emotionalBetting.afterLosses}
        />
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3">Your Betting Personality</h3>
        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full inline-block">
          {personalityType}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-lg mb-3">Tips for Improvement</h3>
        <ul className="list-disc pl-5 space-y-1">
          {tips.map((tip, index) => (
            <li key={index} className="text-gray-700">{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BehavioralAnalysis; 