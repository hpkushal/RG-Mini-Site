'use client';

import React from 'react';
import ClientLayout from '@/components/ClientLayout';
import Link from 'next/link';

const SessionPlanningPage = () => {
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
          <div className="bg-blue-700 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Session Planning Strategies</h1>
            <p className="text-blue-200 mt-1">Structure your gambling sessions for better control and outcomes</p>
          </div>
          
          <div className="p-6">
            <div className="prose prose-blue max-w-none">
              <h2>The Importance of Session Planning</h2>
              <p>
                Planning your gambling sessions is a crucial aspect of responsible gambling. Well-structured sessions 
                can help you maintain control, manage your bankroll effectively, and improve your overall experience.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                <p className="font-semibold">For illustration purposes only</p>
                <p className="text-sm">
                  This educational content is provided for responsible gambling awareness and education. 
                  The strategies discussed are theoretical and should be approached with caution.
                </p>
              </div>
              
              <h3>Setting Session Parameters</h3>
              <p>
                Before starting any gambling session, establish clear parameters to guide your activity:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-gray-100 p-4 rounded-md">
                  <h4 className="font-medium">Time Limits</h4>
                  <ul className="text-sm">
                    <li>Set a specific duration for your session (e.g., 1 hour)</li>
                    <li>Use a timer or alarm to track your time</li>
                    <li>Take regular breaks (5-10 minutes every hour)</li>
                    <li>Avoid extending sessions when tired or emotional</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-md">
                  <h4 className="font-medium">Financial Limits</h4>
                  <ul className="text-sm">
                    <li>Establish a session bankroll (amount you can afford to lose)</li>
                    <li>Set a win goal (e.g., 20% increase in bankroll)</li>
                    <li>Determine a stop-loss limit (e.g., 50% of session bankroll)</li>
                    <li>Consider using a "lock-in profits" strategy after big wins</li>
                  </ul>
                </div>
              </div>
              
              <h3>The Three-Session Approach</h3>
              <p>
                A structured approach to gambling involves dividing your activities into three distinct phases:
              </p>
              
              <div className="bg-blue-50 p-4 rounded-md my-6">
                <ol className="space-y-6">
                  <li>
                    <h4 className="font-medium text-blue-800">Pre-Session Planning</h4>
                    <ul className="text-sm">
                      <li>Determine your session bankroll (separate from other funds)</li>
                      <li>Set clear win goals and loss limits</li>
                      <li>Choose which games/events to focus on</li>
                      <li>Establish your bet sizing strategy</li>
                      <li>Ensure you're in a good mental state (not tired, stressed, or emotional)</li>
                      <li>Plan your session duration and schedule breaks</li>
                    </ul>
                  </li>
                  
                  <li>
                    <h4 className="font-medium text-blue-800">During the Session</h4>
                    <ul className="text-sm">
                      <li>Stick to your predetermined bet sizes</li>
                      <li>Take your scheduled breaks, even if on a winning streak</li>
                      <li>Track your results (wins, losses, bankroll changes)</li>
                      <li>Stay hydrated and avoid excessive alcohol</li>
                      <li>Be mindful of emotional responses to wins and losses</li>
                      <li>Stop when you reach your win goal or loss limit</li>
                    </ul>
                  </li>
                  
                  <li>
                    <h4 className="font-medium text-blue-800">Post-Session Review</h4>
                    <ul className="text-sm">
                      <li>Record your session outcomes (final balance, biggest win/loss, etc.)</li>
                      <li>Analyze your decision-making and emotional responses</li>
                      <li>Identify patterns or trends over multiple sessions</li>
                      <li>Adjust your strategy for future sessions based on your analysis</li>
                      <li>Ensure you have a "cooling off" period between sessions</li>
                    </ul>
                  </li>
                </ol>
              </div>
              
              <h3>Common Session Planning Mistakes</h3>
              <p>
                Avoid these common pitfalls when planning your gambling sessions:
              </p>
              
              <ul>
                <li>
                  <strong>Undefined limits:</strong> Gambling without clear financial and time boundaries
                </li>
                <li>
                  <strong>Chasing losses:</strong> Extending sessions to recover losses
                </li>
                <li>
                  <strong>Emotional decision-making:</strong> Letting excitement or frustration dictate your betting
                </li>
                <li>
                  <strong>Neglecting record-keeping:</strong> Failing to track results and learn from patterns
                </li>
                <li>
                  <strong>Inadequate breaks:</strong> Gambling for extended periods without rest
                </li>
                <li>
                  <strong>Session overlap:</strong> Not having clear separation between gambling sessions
                </li>
              </ul>
              
              <h3>Example Session Plan Template</h3>
              
              <div className="border border-gray-300 rounded-md p-4 my-6">
                <h4 className="font-medium text-center border-b pb-2 mb-4">Gambling Session Plan</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-sm">Session Parameters</h5>
                    <ul className="text-sm mt-2">
                      <li><strong>Date:</strong> [Date]</li>
                      <li><strong>Start Time:</strong> [Time]</li>
                      <li><strong>Duration:</strong> [Hours/Minutes]</li>
                      <li><strong>Session Bankroll:</strong> $[Amount]</li>
                      <li><strong>Win Goal:</strong> $[Amount]</li>
                      <li><strong>Stop-Loss:</strong> $[Amount]</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm">Betting Strategy</h5>
                    <ul className="text-sm mt-2">
                      <li><strong>Events:</strong> [Types]</li>
                      <li><strong>Bet Size:</strong> [% of Bankroll]</li>
                      <li><strong>Max Bet:</strong> $[Amount]</li>
                      <li><strong>Risk Level:</strong> [Low/Medium/High]</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-sm">Post-Session Review</h5>
                    <ul className="text-sm mt-2">
                      <li><strong>End Time:</strong> [Time]</li>
                      <li><strong>Final Balance:</strong> $[Amount]</li>
                      <li><strong>Net Win/Loss:</strong> $[Amount]</li>
                      <li><strong>Notes:</strong> [Observations]</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h3>Applying Session Planning in the Simulator</h3>
              <p>
                Use the Risk-Reward Simulator to practice your session planning skills:
              </p>
              
              <ol>
                <li>Create a written session plan before starting</li>
                <li>Set a timer for your session</li>
                <li>Record your results during play</li>
                <li>Complete a post-session analysis</li>
                <li>Compare outcomes across different session strategies</li>
              </ol>
              
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h4 className="text-yellow-800 font-medium">Responsible Gambling Reminder</h4>
                <p className="text-yellow-700">
                  Session planning is a tool for responsible gambling, not a guarantee of success. 
                  Always view gambling as entertainment, not as a source of income. If you ever feel 
                  you're losing control of your gambling habits, seek professional help.
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
                  href="/education/event-selection" 
                  className="bg-white p-4 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <h4 className="text-indigo-600 font-medium">Event Selection</h4>
                  <p className="text-sm text-gray-600 mt-1">Understanding odds and selecting optimal betting opportunities</p>
                </Link>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/full-version-tool"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Practice Session Planning in the Simulator
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

export default SessionPlanningPage; 