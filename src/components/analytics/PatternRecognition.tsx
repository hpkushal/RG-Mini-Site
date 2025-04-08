'use client';

import React from 'react';

type DetectedPatternProps = {
  title: string;
  description: string;
  recommendation: string;
};

const DetectedPattern: React.FC<DetectedPatternProps> = ({ title, description, recommendation }) => {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-3">
      <div className="flex items-center">
        <span className="text-red-700 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        </span>
        <div className="font-medium text-red-700">{title}</div>
      </div>
      <div className="text-xs text-gray-600 mt-1">{description}</div>
      <div className="text-xs text-red-600 mt-1">Recommendation: {recommendation}</div>
    </div>
  );
};

type PatternRecognitionProps = {
  patterns?: Array<{
    title: string;
    description: string;
    recommendation: string;
  }>;
};

const PatternRecognition: React.FC<PatternRecognitionProps> = ({ 
  patterns = [
    {
      title: 'Rapid Betting',
      description: '100% of your bets are placed within 2 minutes of the previous bet. This may indicate impulsive betting.',
      recommendation: 'Take more time between bets to make thoughtful decisions. Consider setting a 5-minute cooling-off period between bets.'
    },
    {
      title: 'Large Stakes',
      description: '42% of your bets exceed 20% of your bankroll. Large stakes increase your risk of significant losses.',
      recommendation: 'Limit your bet sizes to 5-10% of your bankroll to ensure longevity and reduce the impact of losing streaks.'
    }
  ]
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold flex items-center">
          Pattern Recognition
          <button className="ml-1 text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </button>
        </h2>
        <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
          2 High
        </span>
      </div>

      <h3 className="text-lg font-medium mb-3">Detected Patterns</h3>
      
      <div className="space-y-2">
        {patterns.map((pattern, index) => (
          <DetectedPattern 
            key={index}
            title={pattern.title}
            description={pattern.description}
            recommendation={pattern.recommendation}
          />
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">About Pattern Recognition</h3>
        <p className="text-sm text-gray-600 mb-3">
          Our algorithm analyzes your betting history to detect potentially problematic patterns. 
          These patterns are common precursors to gambling problems and are categorized by severity:
        </p>
        <ul className="space-y-1 text-sm list-inside">
          <li className="flex items-center">
            <span className="text-red-600 mr-2">•</span>
            <span><span className="font-medium text-red-600">High severity:</span> Patterns that may lead to significant negative consequences if continued</span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-600 mr-2">•</span>
            <span><span className="font-medium text-yellow-600">Medium severity:</span> Patterns that indicate potential issues and should be monitored</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-600 mr-2">•</span>
            <span><span className="font-medium text-blue-600">Low severity:</span> Mild patterns that are worth being aware of</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PatternRecognition; 