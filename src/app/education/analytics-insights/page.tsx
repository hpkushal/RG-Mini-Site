import React from 'react';
import Link from 'next/link';

export default function AnalyticsInsightsPage() {
  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Analytics & Insights
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Understanding your gambling data can transform how you play and help you develop healthier habits.
        </p>
      </div>

      {/* Introduction Card */}
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg overflow-hidden shadow-lg mb-12">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">How Analytics Can Transform Your Gambling</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our simulator doesn't just let you practice—it provides powerful insights into your gambling behavior, helping you:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Identify Patterns</h3>
              <p className="text-gray-600">
                Recognize behavioral trends you might not notice during actual gambling sessions
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Improve Decision-Making</h3>
              <p className="text-gray-600">
                Make data-driven decisions that lead to better risk management and outcomes
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Develop Awareness</h3>
              <p className="text-gray-600">
                Build self-awareness about your triggers, biases, and gambling tendencies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Behavioral Analysis Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Behavioral Analysis</h2>
        <p className="text-lg text-gray-600 mb-8">
          Understanding how you bet is the first step toward responsible gambling. Our behavioral metrics reveal your unconscious patterns:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Betting Frequency</h3>
            <p className="text-gray-600 mb-4">
              This metric reveals how quickly you place bets, which can indicate impulsivity or thoughtful decision-making.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <span className="text-sm text-gray-500">Example insight:</span>
              <p className="text-md font-medium text-gray-800 mt-1">Average time between bets: 2 seconds</p>
              <p className="text-yellow-600 mt-2">You place bets rapidly. Consider taking more time between decisions.</p>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">How This Helps You:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Identifies if you're gambling impulsively</li>
              <li>Helps you develop more deliberate betting habits</li>
              <li>Prevents emotion-driven decisions</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Appetite</h3>
            <p className="text-gray-600 mb-4">
              Your willingness to take risks can determine your long-term gambling success and financial health.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <span className="text-sm text-gray-500">Example insight:</span>
              <p className="text-md font-medium text-gray-800 mt-1">Average risk level: 40.1%</p>
              <p className="text-md font-medium text-gray-800">Consistency: Variable</p>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">How This Helps You:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Shows your natural risk tolerance</li>
              <li>Helps you set appropriate betting limits</li>
              <li>Identifies inconsistencies in your risk-taking that may indicate emotional betting</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Reaction to Losses</h3>
            <p className="text-gray-600 mb-4">
              How you respond after losing is one of the strongest predictors of potential gambling problems.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <span className="text-sm text-gray-500">Example pattern:</span>
              <div className="grid grid-cols-3 gap-4 text-center mt-2">
                <div>
                  <p className="text-lg font-medium text-gray-800">1</p>
                  <p className="text-sm text-gray-600">Increased Bets</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800">4</p>
                  <p className="text-sm text-gray-600">Same Level</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800">2</p>
                  <p className="text-sm text-gray-600">Decreased Bets</p>
                </div>
              </div>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">How This Helps You:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Identifies if you're chasing losses — a key risk factor</li>
              <li>Shows your emotional stability during gambling sessions</li>
              <li>Helps you develop healthier responses to losses</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Emotional Betting</h3>
            <p className="text-gray-600 mb-4">
              How emotions affect your betting decisions after wins versus losses can reveal important patterns.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <span className="text-sm text-gray-500">Example insight:</span>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-md font-medium text-gray-800">Average risk after wins: 26.5%</p>
                </div>
                <div>
                  <p className="text-md font-medium text-gray-800">Average risk after losses: 41.4%</p>
                </div>
              </div>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">How This Helps You:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Reveals if you bet more aggressively after losses (a red flag)</li>
              <li>Shows if you become overconfident after wins</li>
              <li>Helps you maintain emotional consistency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Financial Metrics Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Financial Metrics</h2>
        <p className="text-lg text-gray-600 mb-8">
          Understanding the financial impact of your gambling habits is crucial for maintaining control:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Win/Loss Summary</h3>
            <p className="text-gray-600 mb-4">
              These metrics give you an honest picture of your gambling performance over time.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Win/Loss Ratio</p>
                  <p className="text-lg font-medium text-gray-800 mt-1">0.71</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Win Rate</p>
                  <p className="text-lg font-medium text-gray-800 mt-1">41.7%</p>
                </div>
              </div>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">How This Helps You:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Provides an objective measure of your gambling outcomes</li>
              <li>Helps dispel cognitive biases about your "luckiness"</li>
              <li>Creates awareness of the real financial impact</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Profit & Loss</h3>
            <p className="text-gray-600 mb-4">
              The bottom line of your gambling activities, showing the actual monetary outcome.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Net Profit</p>
                  <p className="text-lg font-medium text-red-600 mt-1">-$1,000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">ROI</p>
                  <p className="text-lg font-medium text-red-600 mt-1">-38.46%</p>
                </div>
              </div>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">How This Helps You:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Reveals the true cost of your gambling entertainment</li>
              <li>Provides context for whether your current approach is sustainable</li>
              <li>Helps you make informed decisions about your gambling budget</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Stake Sizing</h3>
            <p className="text-gray-600 mb-4">
              How much you bet relative to your bankroll is a critical factor in responsible gambling.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <span className="text-sm text-gray-500">Example insight:</span>
              <p className="text-yellow-600 mt-2">Your largest bets are quite high relative to your bankroll. Consider reducing your maximum stake size.</p>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">How This Helps You:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Reveals if you're risking too much on individual bets</li>
              <li>Helps you develop a sustainable staking strategy</li>
              <li>Prevents bankroll depletion from variance</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Metrics</h3>
            <p className="text-gray-600 mb-4">
              These metrics help you understand your vulnerability to losing streaks and bankroll depletion.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Max Drawdown</p>
                  <p className="text-lg font-medium text-gray-800 mt-1">100.0%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Recovery Rate</p>
                  <p className="text-lg font-medium text-gray-800 mt-1">33.3%</p>
                </div>
              </div>
              <p className="text-yellow-600 mt-2">Your maximum drawdown is significant. Consider implementing stricter stop-loss strategies.</p>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">How This Helps You:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Shows how vulnerable you are to losing streaks</li>
              <li>Helps you implement appropriate stop-loss measures</li>
              <li>Provides insight into your ability to recover from losses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pattern Recognition Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pattern Recognition</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our algorithm identifies potentially problematic gambling patterns you might not recognize yourself:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Detected Patterns</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4 py-3">
              <h4 className="text-lg font-medium text-gray-900 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Rapid Betting
              </h4>
              <p className="text-gray-600 mt-1">100% of your bets are placed within 2 minutes of the previous bet. This may indicate impulsive betting.</p>
              <p className="text-red-600 font-medium mt-2">Recommendation: Take more time between bets to make thoughtful decisions. Consider setting a 5-minute cooling-off period between bets.</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 py-3">
              <h4 className="text-lg font-medium text-gray-900 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Large Stakes
              </h4>
              <p className="text-gray-600 mt-1">42% of your bets exceed 20% of your bankroll. Large stakes increase your risk of significant losses.</p>
              <p className="text-red-600 font-medium mt-2">Recommendation: Limit your bet sizes to 5-10% of your bankroll to ensure longevity and reduce the impact of losing streaks.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">About Pattern Recognition</h3>
          <p className="text-gray-600 mb-4">
            Our algorithm analyzes your betting history to detect potentially problematic patterns. These patterns are common precursors to gambling problems and are categorized by severity:
          </p>
          <ul className="space-y-3">
            <li className="flex">
              <span className="text-red-600 font-medium mr-2">•</span>
              <div>
                <span className="text-red-600 font-medium">High severity:</span>
                <span className="text-gray-600"> Patterns that may lead to significant negative consequences if continued</span>
              </div>
            </li>
            <li className="flex">
              <span className="text-yellow-600 font-medium mr-2">•</span>
              <div>
                <span className="text-yellow-600 font-medium">Medium severity:</span>
                <span className="text-gray-600"> Patterns that indicate potential issues and should be monitored</span>
              </div>
            </li>
            <li className="flex">
              <span className="text-blue-600 font-medium mr-2">•</span>
              <div>
                <span className="text-blue-600 font-medium">Low severity:</span>
                <span className="text-gray-600"> Mild patterns that are worth being aware of</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Predictive Analytics Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Predictive Analytics</h2>
        <p className="text-lg text-gray-600 mb-8">
          Using your past behavior, we can project future outcomes to help you understand the long-term impact of your current habits:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What This Means For You</h3>
          <p className="text-gray-600 mb-6">
            If you continue your current betting patterns for your next 25 bets:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Your average bet size will be approximately $245</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Your balance could increase by about 79 ($79 total)</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Your win rate is projected to be 32.0%</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Your average risk level will be 40%</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-green-600">You have high profit potential if your win rate stays consistent</span>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Projected Balance</h3>
            <div className="text-center py-4">
              <p className="text-3xl font-bold text-green-500">$79</p>
              <p className="text-gray-500 text-sm mt-1">+Infinity% from current</p>
            </div>
            <p className="text-gray-600 mt-4">
              This projection shows the expected change in your bankroll based on your current betting patterns.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Projected Win Rate</h3>
            <div className="text-center py-4">
              <p className="text-3xl font-bold text-gray-800">32.0%</p>
              <p className="text-gray-500 text-sm mt-1">Current: 41.7%</p>
            </div>
            <p className="text-gray-600 mt-4">
              Based on your betting patterns, we project your success rate will change over your next 25 bets.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bankruptcy Risk</h3>
            <div className="text-center py-4">
              <p className="text-3xl font-bold text-green-500">Low</p>
              <p className="text-gray-500 text-sm mt-1">Min projected: $0</p>
            </div>
            <p className="text-gray-600 mt-4">
              The likelihood that your current betting patterns could lead to depleting your bankroll completely.
            </p>
          </div>
        </div>
      </section>

      {/* Try the Simulator CTA */}
      <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-12 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Discover Your Gambling Insights?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Our simulator provides all these analytics and more in a risk-free environment. Start building healthier gambling habits today.
          </p>
          <Link href="/simulator" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 shadow-sm transition-colors duration-300">
            Try the Simulator
          </Link>
        </div>
      </div>
    </>
  );
} 