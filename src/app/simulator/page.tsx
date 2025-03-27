import React from 'react';
import ClientLayout from '../../components/ClientLayout';
import Link from 'next/link';
import RiskRewardSimulator from '../../components/simulator/RiskRewardSimulator';

export default function SimulatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main layout with navigation */}
      <ClientLayout>
        {/* Top banner - positioned below navigation */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white sticky top-0 left-0 right-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-indigo-800">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <p className="ml-3 font-medium truncate">
                  <span className="md:hidden">Try our simulator and sign up for advanced analytics!</span>
                  <span className="hidden md:inline">Try our Risk-Reward Simulator now and sign up free to access your personalized analytics dashboard!</span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <Link
                  href="/signup"
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Sign up now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main simulator content */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Risk-Reward Simulator</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Experience virtual betting scenarios without real money. Analyze your gambling behavior, identify
                patterns, and learn responsible gambling habits.
              </p>
            </div>

            {/* Basic simulator content */}
            <div className="mt-10 bg-white p-8 shadow-sm ring-1 ring-gray-900/5 rounded-xl sm:p-10">
              {/* Simulator component */}
              <RiskRewardSimulator initialBalance={1000} targetBalance={5000} />
            </div>

            {/* Dashboard Preview - to entice signup */}
            <div className="mt-16 border-t pt-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Your Personal Analytics Dashboard</h3>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                Sign up to unlock your comprehensive analytics dashboard with detailed insights tailored to your specific gambling behavior and preferences.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg relative overflow-hidden shadow-sm border border-gray-100">
                {/* Blur overlay */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-10">
                  <div className="text-center p-8 max-w-md">
                    <h4 className="text-2xl font-bold text-indigo-600 mb-4">Unlock Your Complete Analytics</h4>
                    <p className="text-gray-600 mb-6">
                      Create a free account to access detailed metrics, pattern recognition, and personalized recommendations based on your betting behavior.
                    </p>
                    <Link 
                      href="/signup" 
                      className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-500"
                    >
                      Sign Up Now — It's Free
                    </Link>
                  </div>
                </div>

                {/* Blurred preview content */}
                <div className="opacity-70">
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Responsible Gambling Score</h4>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex flex-col items-center">
                        <div className="text-5xl font-bold text-yellow-500 mb-2">69/100</div>
                        <div className="text-sm text-gray-500 mb-3">Based on comparison with industry benchmarks</div>
                        <div className="w-full max-w-md bg-gray-200 rounded-full h-3 mb-1">
                          <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '69%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Betting Behavior Metrics</h4>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-600">Average Risk Level</span>
                              <span className="font-medium">40% <span className="text-xs text-gray-500">vs 40% or less</span></span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-600">Max Bet Size</span>
                              <span className="font-medium text-red-500">Infinity% <span className="text-xs text-gray-500">vs 10% or less</span></span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-600">Session Duration</span>
                              <span className="font-medium text-green-500">1 minute <span className="text-xs text-gray-500">vs 60 minutes or less</span></span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '2%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">How You Compare</h4>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600 mb-3">Based on your betting patterns, here's how your behavior compares to responsible gambling guidelines:</p>
                        <ul className="space-y-2">
                          <li className="flex">
                            <span className="text-red-500 mr-2">⚠️</span>
                            <span className="text-sm">Your risk level is 0% higher than recommended</span>
                          </li>
                          <li className="flex">
                            <span className="text-red-500 mr-2">⚠️</span>
                            <span className="text-sm">Your maximum bet size exceeds recommended bankroll percentages</span>
                          </li>
                          <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm">Your betting session durations are within healthy limits</span>
                          </li>
                          <li className="flex">
                            <span className="text-red-500 mr-2">⚠️</span>
                            <span className="text-sm">You should take breaks more frequently while betting</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Pattern Recognition</h4>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Detected Patterns</span>
                          <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                            2 High
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-red-50 border-l-4 border-red-400 p-3">
                            <div className="font-medium text-red-700">Rapid Betting</div>
                            <div className="text-xs text-gray-600">100% of your bets are placed within 2 minutes of the previous bet. This may indicate impulsive betting.</div>
                            <div className="text-xs text-red-600 mt-1">Recommendation: Take more time between bets to make thoughtful decisions. Consider setting a 5-minute cooling-off period between bets.</div>
                          </div>
                          <div className="bg-red-50 border-l-4 border-red-400 p-3">
                            <div className="font-medium text-red-700">Large Stakes</div>
                            <div className="text-xs text-gray-600">42% of your bets exceed 20% of your bankroll. Large stakes increase your risk of significant losses.</div>
                            <div className="text-xs text-red-600 mt-1">Recommendation: Limit your bet sizes to 5-10% of your bankroll to ensure longevity and reduce the impact of losing streaks.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Predictive Analytics</h4>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-600 mb-3">Projecting outcomes for your next 25 bets:</div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="bg-gray-50 p-3 rounded text-center">
                            <div className="text-sm text-gray-500">Projected Balance</div>
                            <div className="text-xl font-bold text-green-500">$79</div>
                            <div className="text-xs text-gray-400">+Infinity% from current</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded text-center">
                            <div className="text-sm text-gray-500">Win Rate</div>
                            <div className="text-xl font-bold">32.0%</div>
                            <div className="text-xs text-gray-400">Current: 41.7%</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded text-center">
                            <div className="text-sm text-gray-500">Bankruptcy Risk</div>
                            <div className="text-xl font-bold text-green-500">Low</div>
                            <div className="text-xs text-gray-400">Min projected: $0</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-800 mb-2">What This Means</div>
                        <div className="text-xs text-gray-600">
                          If you continue your current betting patterns for your next 25 bets:
                        </div>
                        <ul className="text-xs text-gray-600 mt-1 space-y-1 list-disc pl-4">
                          <li>Your average bet size will be approximately $245</li>
                          <li>Your balance could increase by about 79 ($79 total)</li>
                          <li>Your win rate is projected to be 32.0%</li>
                          <li>Your average risk level will be 40%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClientLayout>
    </div>
  );
} 