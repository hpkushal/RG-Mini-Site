'use client';

import React from 'react';
import ClientLayout from '@/components/ClientLayout';
import Link from 'next/link';

const EventSelectionPage = () => {
  return (
    <ClientLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/full-version-tool" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Simulator
          </Link>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-green-700 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Event Selection Strategies</h1>
            <p className="text-green-200 mt-1">Understanding odds, probabilities, and selecting optimal betting opportunities</p>
          </div>
          
          <div className="p-6">
            <div className="prose prose-green max-w-none">
              <h2>Choosing the Right Betting Events</h2>
              <p>
                Selecting the right events to bet on is a crucial skill for successful gambling. It involves 
                understanding the odds, evaluating the true probability of outcomes, and identifying situations 
                where you may have an edge.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
                <p className="font-semibold">For illustration purposes only</p>
                <p className="text-sm">
                  This educational content is provided for responsible gambling awareness and education. 
                  The strategies discussed are theoretical and should be approached with caution.
                </p>
              </div>
              
              <h3>Understanding Odds and Probability</h3>
              <p>
                Before selecting any betting event, it's essential to understand the relationship between odds and probability:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-gray-100 p-4 rounded-md">
                  <h4 className="font-medium">Decimal Odds</h4>
                  <p className="text-sm">
                    In decimal odds format (e.g., 2.00, 3.50), the odds represent the total return on a winning bet, including the stake.
                  </p>
                  <p className="text-sm mt-2">
                    Implied probability = 1 / decimal odds
                  </p>
                  <p className="text-sm mt-2">
                    Example: Odds of 2.00 imply a 50% chance (1/2.00 = 0.50 or 50%)
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-md">
                  <h4 className="font-medium">Expected Value (EV)</h4>
                  <p className="text-sm">
                    Expected value measures the average amount you can expect to win (or lose) per bet.
                  </p>
                  <p className="text-sm mt-2">
                    EV = (Probability of winning × Amount won per bet) - (Probability of losing × Amount lost per bet)
                  </p>
                  <p className="text-sm mt-2">
                    Positive EV bets are favorable in the long run.
                  </p>
                </div>
              </div>
              
              <h3>Events in Our Simulator</h3>
              <p>
                In the Risk-Reward Simulator, we offer various events with different risk-reward profiles:
              </p>
              
              <table className="min-w-full divide-y divide-gray-200 my-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Odds</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Probability</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Coin Flip</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.0x</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Low</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dice Roll</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6.0x</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16.7%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Medium</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bullseye</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.0x</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">33%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Medium</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Roulette</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35.0x</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.7%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">High</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Stock Market</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10.0x</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">High</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Lottery</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1000.0x</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.1%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Very High</td>
                  </tr>
                </tbody>
              </table>
              
              <h3>Event Selection Strategy</h3>
              <p>
                When selecting events to bet on, consider the following factors:
              </p>
              
              <ol>
                <li>
                  <strong>Risk tolerance:</strong> Choose events with risk levels that match your comfort level and risk tolerance.
                </li>
                <li>
                  <strong>Bankroll size:</strong> Higher-risk events require a larger bankroll to withstand the variance.
                </li>
                <li>
                  <strong>Expected value:</strong> In real gambling, look for events where you believe the true probability differs from the implied odds probability.
                </li>
                <li>
                  <strong>Diversification:</strong> Consider spreading your bets across different types of events to manage risk.
                </li>
                <li>
                  <strong>Expertise:</strong> Focus on areas where you have knowledge or an edge.
                </li>
              </ol>
              
              <h3>Low-Risk vs. High-Risk Strategies</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-medium text-green-800">Low-Risk Approach</h4>
                  <ul className="text-sm">
                    <li>Focus on events with higher probabilities (Coin Flip, Bullseye)</li>
                    <li>Use small, consistent bet sizes (1-3% of bankroll)</li>
                    <li>Aim for slow, steady growth</li>
                    <li>Lower variance but also lower potential for large wins</li>
                    <li>Good for beginners or conservative players</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-md">
                  <h4 className="font-medium text-yellow-800">High-Risk Approach</h4>
                  <ul className="text-sm">
                    <li>Include low-probability, high-payout events (Roulette, Lottery)</li>
                    <li>Requires larger bankroll to withstand losing streaks</li>
                    <li>Higher variance with potential for large swings</li>
                    <li>May generate excitement but carries greater risk of significant losses</li>
                    <li>Requires strong discipline and emotional control</li>
                  </ul>
                </div>
              </div>
              
              <h3>Optimal Event Selection in the Simulator</h3>
              <p>
                For beginners, we recommend the following progression:
              </p>
              
              <ol>
                <li>Start with Coin Flip events until you build your bankroll by 20-30%</li>
                <li>Gradually introduce Bullseye and Dice Roll events as your bankroll increases</li>
                <li>Consider higher-risk events only when your bankroll is at least double your starting amount</li>
                <li>Always allocate no more than 20% of your bankroll to high-risk events</li>
              </ol>
              
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h4 className="text-yellow-800 font-medium">Responsible Gambling Reminder</h4>
                <p className="text-yellow-700">
                  In real gambling scenarios, all games have a built-in house edge, meaning the expected value is negative in the long run.
                  This educational content focuses on risk management rather than profit generation. Always gamble responsibly.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Link 
                  href="/education/risk-management"
                  className="bg-white p-4 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <h4 className="text-indigo-600 font-medium">Risk Management</h4>
                  <p className="text-sm text-gray-600 mt-1">Learn strategies to protect your bankroll</p>
                </Link>
                <Link 
                  href="/education/session-planning" 
                  className="bg-white p-4 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <h4 className="text-indigo-600 font-medium">Session Planning</h4>
                  <p className="text-sm text-gray-600 mt-1">Structure your gambling sessions effectively</p>
                </Link>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/full-version-tool"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
              >
                Try Different Events in the Simulator
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>This content is for educational purposes only.</p>
          <p>Always gamble responsibly and within your means.</p>
        </div>
      </div>
    </ClientLayout>
  );
};

export default EventSelectionPage; 