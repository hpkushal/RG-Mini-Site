'use client';

import React from 'react';
import ClientLayout from '@/components/ClientLayout';
import Link from 'next/link';

const RiskManagementPage = () => {
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
          <div className="bg-indigo-700 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Risk Management Strategies</h1>
            <p className="text-indigo-200 mt-1">Learn how to protect your bankroll and make intelligent betting decisions</p>
          </div>
          
          <div className="p-6">
            <div className="prose prose-indigo max-w-none">
              <h2>Understanding Risk in Gambling</h2>
              <p>
                Risk management is essential for responsible gambling. It involves strategies to protect your bankroll, 
                make informed decisions, and prevent significant losses. Effective risk management can help you enjoy 
                gambling as entertainment while minimizing the negative financial impact.
              </p>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-4">
                <p className="font-semibold">For illustration purposes only</p>
                <p className="text-sm">
                  This educational content is provided for responsible gambling awareness and education. 
                  The strategies discussed are theoretical and should be approached with caution.
                </p>
              </div>
              
              <h3>The Kelly Criterion</h3>
              <p>
                The Kelly Criterion is a mathematical formula that helps determine the optimal size of bets. It suggests 
                betting a percentage of your bankroll based on your perceived edge. The formula is:
              </p>
              
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="font-mono">Kelly % = (bp - q) / b</p>
                <p className="text-sm mt-2">
                  where:<br />
                  b = the odds received on the bet (decimal odds - 1)<br />
                  p = the probability of winning<br />
                  q = the probability of losing (1 - p)
                </p>
              </div>
              
              <p>
                For example, if you're betting on a coin flip with 2.0 decimal odds (even money) and you believe you have a 52% 
                chance of winning, the Kelly Criterion would suggest:
              </p>
              
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="font-mono">Kelly % = (1 × 0.52 - 0.48) / 1 = 0.04 or 4%</p>
                <p className="text-sm mt-2">
                  This means you should bet 4% of your bankroll on this wager.
                </p>
              </div>
              
              <h3>Bankroll Management Rules</h3>
              <ol>
                <li>
                  <strong>Set a budget:</strong> Only gamble with money you can afford to lose. Separate your gambling funds from essential expenses.
                </li>
                <li>
                  <strong>Consistent bet sizing:</strong> Use a fixed percentage of your bankroll (typically 1-5%) for each bet to ensure you can withstand losing streaks.
                </li>
                <li>
                  <strong>Track results:</strong> Keep detailed records of all bets to identify patterns and adjust your strategy.
                </li>
                <li>
                  <strong>Set win/loss limits:</strong> Decide in advance how much you're willing to win or lose in a session and stick to it.
                </li>
                <li>
                  <strong>Avoid chasing losses:</strong> Increasing bet sizes after losses (known as the Martingale system) is extremely risky and can lead to catastrophic losses.
                </li>
              </ol>
              
              <h3>Risk Score in the Simulator</h3>
              <p>
                In our Risk-Reward Simulator, your risk score is calculated based on several factors:
              </p>
              
              <ul>
                <li>Bet size relative to bankroll</li>
                <li>Event selection (higher risk events increase score)</li>
                <li>Betting patterns (increasing bets after losses increases score)</li>
                <li>Session duration and frequency</li>
              </ul>
              
              <p>
                A lower risk score indicates more conservative betting behavior, while a higher score suggests more aggressive behavior 
                that could put your bankroll at risk.
              </p>
              
              <h3>Practical Exercise</h3>
              <p>
                Try implementing these risk management strategies in the Risk-Reward Simulator:
              </p>
              
              <ol>
                <li>Set a fixed percentage (e.g., 5%) of your bankroll for each bet</li>
                <li>Track your results after 20 bets</li>
                <li>Compare with a session where you vary your bet sizes</li>
                <li>Note the difference in your ending balance and risk score</li>
              </ol>
              
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h4 className="text-yellow-800 font-medium">Responsible Gambling Reminder</h4>
                <p className="text-yellow-700">
                  No risk management strategy can eliminate the inherent house edge in gambling activities. 
                  If you're concerned about your gambling habits, seek help from professional resources:
                </p>
                <ul className="text-yellow-700 mt-2">
                  <li>National Problem Gambling Helpline: 1-800-522-4700</li>
                  <li>GamCare: www.gamcare.org.uk</li>
                  <li>Gamblers Anonymous: www.gamblersanonymous.org</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Link 
                  href="/education/event-selection"
                  className="bg-white p-4 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <h4 className="text-indigo-600 font-medium">Event Selection</h4>
                  <p className="text-sm text-gray-600 mt-1">Learn how to evaluate different betting opportunities</p>
                </Link>
                <Link 
                  href="/education/session-planning" 
                  className="bg-white p-4 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <h4 className="text-indigo-600 font-medium">Session Planning</h4>
                  <p className="text-sm text-gray-600 mt-1">Strategies for structured and disciplined betting sessions</p>
                </Link>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/full-version-tool"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Try These Strategies in the Simulator
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

export default RiskManagementPage; 