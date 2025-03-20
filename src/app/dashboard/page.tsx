import React from 'react';
import ClientLayout from '../../components/ClientLayout';
import Link from 'next/link';

export default function DashboardPage() {
  // Mock data for demonstration - in a real app, this would come from API/database
  const userData = {
    isLoggedIn: true,
    name: "Alex Smith",
    riskScore: 35,
    riskCategory: "Low Risk",
    persona: "Measured Mark",
    simulationsSummary: {
      totalSimulations: 12,
      avgBetSize: 24.50,
      betSizeVsAvg: -15, // percentage below average
      winLossRatio: 0.92,
      winRateVsAvg: -5, // percentage below average
      longestWinStreak: 4,
      longestLossStreak: 3,
      preferredGames: ["Coin Flip", "Dice Roll"],
      highestRiskScore: 67,
      lowestRiskScore: 22
    },
    patterns: [
      "Increases bet size after wins",
      "Tends to avoid high-risk bets",
      "Takes breaks after loss streaks",
      "Shows consistent betting strategy"
    ],
    recommendations: [
      "Set consistent bet sizes to avoid chasing wins",
      "Establish stop-loss limits to protect your bankroll",
      "Continue taking strategic breaks",
      "Consider diversifying your betting events"
    ]
  };

  return (
    <ClientLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dashboard Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Personal Dashboard
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Track your risk profile, analyze your habits, and get personalized recommendations based on your simulator usage.
          </p>
        </div>

        {userData.isLoggedIn ? (
          <div>
            {/* User Welcome Section */}
            <div className="bg-indigo-50 p-6 rounded-lg mb-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-indigo-800">Welcome back, {userData.name}</h2>
                  <p className="text-indigo-600 mt-1">Here's your personal gambling insights dashboard</p>
                </div>
                <Link href="/simulator" className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Run New Simulation
                </Link>
              </div>
            </div>

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Risk Profile Card */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Your Risk Profile</h3>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Risk Score</span>
                      <span className="font-bold text-lg">{userData.riskScore}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${userData.riskScore}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Low Risk</span>
                      <span>Medium Risk</span>
                      <span>High Risk</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-1">Your Gambling Persona</h4>
                    <p className="text-gray-600 bg-blue-50 p-3 rounded">{userData.persona}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      This persona represents your gambling style based on your behavior in the simulator.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Behavior Patterns</h4>
                    <ul className="space-y-2">
                      {userData.patterns.map((pattern, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{pattern}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recommendations Card */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">Personalized Recommendations</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Based on your simulation results, we've generated these strategies to help you maintain 
                    responsible gambling habits.
                  </p>
                  
                  <ul className="space-y-4">
                    {userData.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 font-semibold text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-gray-700">{recommendation}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-4 border-t border-gray-200">
                    <Link href="/education" className="text-green-600 hover:text-green-800 font-medium flex items-center">
                      <span>View related educational resources</span>
                      <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Section */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Betting Analytics</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Metric Cards */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Total Simulations</h4>
                    <p className="text-2xl font-bold text-gray-900">{userData.simulationsSummary.totalSimulations}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Average Bet Size</h4>
                    <p className="text-2xl font-bold text-gray-900">${userData.simulationsSummary.avgBetSize}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {userData.simulationsSummary.betSizeVsAvg > 0 ? 
                        <span className="text-red-500">{userData.simulationsSummary.betSizeVsAvg}% above avg</span> : 
                        <span className="text-green-500">{Math.abs(userData.simulationsSummary.betSizeVsAvg)}% below avg</span>
                      }
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Win/Loss Ratio</h4>
                    <p className="text-2xl font-bold text-gray-900">{userData.simulationsSummary.winLossRatio}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {userData.simulationsSummary.winRateVsAvg > 0 ? 
                        <span className="text-green-500">{userData.simulationsSummary.winRateVsAvg}% above avg</span> : 
                        <span className="text-red-500">{Math.abs(userData.simulationsSummary.winRateVsAvg)}% below avg</span>
                      }
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Longest Win Streak</h4>
                    <p className="text-2xl font-bold text-gray-900">{userData.simulationsSummary.longestWinStreak}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 mb-4">Preferred Betting Events</h4>
                  <div className="flex flex-wrap gap-2">
                    {userData.simulationsSummary.preferredGames.map((game, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <Link href="/simulator" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Run New Simulation To Update Analytics
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Sign In Section */
          <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto text-center">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Sign in to access your dashboard</h2>
            <p className="mt-2 text-gray-600">
              Log in to view your personalized gambling profile and recommendations based on your simulator usage.
            </p>
            <div className="mt-8">
              <Link href="/login" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Sign in
              </Link>
              <div className="mt-4">
                <Link href="/simulator" className="text-indigo-600 hover:text-indigo-500">
                  Try the simulator without signing in
                </Link>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Dashboard Preview</h3>
              <p className="text-gray-600 mb-6">
                Once you sign in, you'll get access to:
              </p>
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized risk assessment based on your betting behavior</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Detailed analytics of your gambling patterns and habits</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Customized responsible gambling recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Progress tracking for your gambling behavior over time</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </ClientLayout>
  );
} 