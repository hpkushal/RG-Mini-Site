import React from 'react';
import Link from 'next/link';

export default function InsightsDashboard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Gambling Insights</h2>
        <p className="text-gray-600">
          These analytics provide insights into your betting behavior and help you develop healthier gambling habits.
        </p>
      </div>
      
      {/* Behavioral Analysis */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Behavioral Analysis</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Betting Frequency</h4>
            <p className="text-gray-700 mb-1">Average time between bets: <span className="font-medium">2 seconds</span></p>
            <p className="text-yellow-600 text-sm">You place bets rapidly. Consider taking more time between decisions.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Risk Appetite</h4>
            <p className="text-gray-700 mb-1">Average risk level: <span className="font-medium">40.1%</span></p>
            <p className="text-gray-700">Consistency: <span className="font-medium">Variable</span></p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Reaction to Losses</h4>
            <div className="flex justify-around text-center my-2">
              <div>
                <p className="font-medium text-gray-900">1</p>
                <p className="text-sm text-gray-600">Increased Bets</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">4</p>
                <p className="text-sm text-gray-600">Same Level</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">2</p>
                <p className="text-sm text-gray-600">Decreased Bets</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Emotional Betting</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm text-gray-600">After wins:</p>
                <p className="font-medium text-gray-900">26.5%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">After losses:</p>
                <p className="font-medium text-gray-900">41.4%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Financial Metrics */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Metrics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Win/Loss Summary</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm text-gray-600">Win/Loss Ratio</p>
                <p className="font-medium text-gray-900">0.71</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Win Rate</p>
                <p className="font-medium text-gray-900">41.7%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Profit & Loss</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm text-gray-600">Net Profit</p>
                <p className="font-medium text-red-600">-$1,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ROI</p>
                <p className="font-medium text-red-600">-38.46%</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Stake Sizing</h4>
            <div className="mb-2">
              <p className="text-sm text-gray-600">Avg Bet Size</p>
              <p className="font-medium text-gray-900">Infinity% of bankroll</p>
            </div>
            <p className="text-yellow-600 text-sm">Your largest bets are quite high relative to your bankroll. Consider reducing your maximum stake size.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Risk Metrics</h4>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <p className="text-sm text-gray-600">Max Drawdown</p>
                <p className="font-medium text-gray-900">100.0%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Recovery Rate</p>
                <p className="font-medium text-gray-900">33.3%</p>
              </div>
            </div>
            <p className="text-yellow-600 text-sm">Your maximum drawdown is significant. Consider implementing stricter stop-loss strategies.</p>
          </div>
        </div>
      </section>
      
      {/* Pattern Recognition */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">Pattern Recognition</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            2 High
          </span>
        </div>
        
        <div className="space-y-4 mb-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <h4 className="font-semibold text-red-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Rapid Betting
            </h4>
            <p className="text-gray-700 mt-1 text-sm">100% of your bets are placed within 2 minutes of the previous bet. This may indicate impulsive betting.</p>
            <p className="text-red-700 text-sm mt-2 font-medium">Recommendation: Take more time between bets to make thoughtful decisions.</p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <h4 className="font-semibold text-red-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Large Stakes
            </h4>
            <p className="text-gray-700 mt-1 text-sm">42% of your bets exceed 20% of your bankroll. Large stakes increase your risk of significant losses.</p>
            <p className="text-red-700 text-sm mt-2 font-medium">Recommendation: Limit your bet sizes to 5-10% of your bankroll.</p>
          </div>
        </div>
      </section>
      
      {/* Recommendations */}
      <section>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recommendations</h3>
        <ul className="space-y-2 ml-5 list-disc text-gray-700">
          <li>Consider reducing your average bet size to below 10% of your bankroll for better longevity</li>
          <li>Implement stop-loss limits to prevent significant drawdowns</li>
          <li>Review your betting strategy - you're currently losing money overall</li>
          <li>Take more time between bets to make thoughtful decisions</li>
          <li>Take a break after every 4 bets to maintain perspective</li>
        </ul>
        
        <div className="mt-8 text-center">
          <Link href="/education/analytics-insights" className="inline-block px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
            Learn More About Your Analytics
          </Link>
        </div>
      </section>
    </div>
  );
} 