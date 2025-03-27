import React from 'react';
import ClientLayout from '../../components/ClientLayout';
import Link from 'next/link';
import RiskRewardFullTool from '../../components/simulator/RiskRewardFullTool';

export default function FullVersionToolPage() {
  // This is a placeholder for authentication status
  // In a real app, you would check if the user is authenticated
  const isAuthenticated = false;

  // If user isn't authenticated, show the signup prompt
  if (!isAuthenticated) {
    return (
      <ClientLayout>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-50 px-6 py-24 text-center shadow-md sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Advanced Analytics Dashboard Access
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Sign up to access our comprehensive analytics dashboard with detailed insights about your gambling behavior.
              </p>
              <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="rounded-lg bg-white shadow-md overflow-hidden">
                  <div className="px-6 py-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Comprehensive Analytics</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          A complete view of your gambling data
                        </p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Premium</span>
                    </div>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-2 text-gray-700">Detailed metrics on risk levels and gambling patterns</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-2 text-gray-700">Behavioral analysis and risk appetite assessment</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-2 text-gray-700">Game-specific performance and win/loss metrics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <div className="text-sm text-gray-500">
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <p className="text-blue-700">
                          See how your gambling behavior compares to responsible gambling guidelines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white shadow-md overflow-hidden">
                  <div className="px-6 py-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">AI-Powered Insights</h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Smart detection of problematic patterns
                        </p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Premium</span>
                    </div>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-2 text-gray-700">Pattern recognition for potentially problematic behaviors</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-2 text-gray-700">Predictive analytics for future gambling outcomes</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-2 text-gray-700">Personalized recommendations for healthier gambling</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <div className="text-sm text-gray-500">
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                        <p className="text-yellow-700">
                          Our AI detects patterns like rapid betting and large stakes that may indicate risk
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="inline-flex items-center justify-center">
                  <span className="text-green-600 font-semibold mr-2">Free Access</span>
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/signup"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up for free
                </Link>
                <Link href="/login" className="text-sm font-semibold leading-6 text-indigo-600">
                  Log in if you already have an account <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Sample dashboard preview */}
              <div className="mt-16 overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="px-6 py-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Preview of Your Analytics Dashboard</h3>
                  <div className="relative">
                    {/* Blur overlay */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-10">
                      <div className="text-center p-8">
                        <h4 className="text-xl font-bold text-indigo-600 mb-4">Sign Up to Access</h4>
                        <p className="text-gray-600 mb-6">Create a free account to unlock your complete analytics dashboard</p>
                      </div>
                    </div>
                    
                    {/* Dashboard preview */}
                    <div className="opacity-70">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="col-span-3 md:col-span-1">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">Responsible Gambling Score</h4>
                            <div className="text-center">
                              <div className="text-4xl font-bold text-yellow-500 mb-2">69/100</div>
                              <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500 rounded-full" style={{ width: '69%' }}></div>
                              </div>
                              <div className="text-xs text-gray-500 mt-2">Based on comparison with industry benchmarks</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-span-3 md:col-span-2">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">Betting Behavior Metrics</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                              <div>
                                <div className="text-sm text-gray-500">Average Risk</div>
                                <div className="font-bold">40%</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Max Bet Size</div>
                                <div className="font-bold text-red-500">High</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Session Duration</div>
                                <div className="font-bold text-green-500">1 min</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Win Rate</div>
                                <div className="font-bold">41.7%</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Game Diversity</div>
                                <div className="font-bold text-green-500">83.3%</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Loss Chasing</div>
                                <div className="font-bold text-green-500">9.1%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">Pattern Recognition</h4>
                            <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-2">
                              <div className="flex">
                                <div className="text-red-500 font-medium">Rapid Betting</div>
                              </div>
                              <div className="text-xs text-gray-500">100% of your bets are placed within 2 minutes</div>
                            </div>
                            <div className="bg-red-50 border-l-4 border-red-400 p-3">
                              <div className="flex">
                                <div className="text-red-500 font-medium">Large Stakes</div>
                              </div>
                              <div className="text-xs text-gray-500">42% of your bets exceed 20% of bankroll</div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">Predictive Analytics</h4>
                            <div className="text-sm mb-2">Projecting outcomes for your next 25 bets:</div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="bg-white p-3 rounded shadow-sm text-center">
                                <div className="text-sm text-gray-500">Projected Balance</div>
                                <div className="text-xl font-bold text-green-500">$79</div>
                              </div>
                              <div className="bg-white p-3 rounded shadow-sm text-center">
                                <div className="text-sm text-gray-500">Win Rate</div>
                                <div className="text-xl font-bold">32.0%</div>
                              </div>
                              <div className="bg-white p-3 rounded shadow-sm text-center">
                                <div className="text-sm text-gray-500">Bankruptcy Risk</div>
                                <div className="text-xl font-bold text-green-500">Low</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-24 -right-24 opacity-25"
                aria-hidden="true"
              >
                <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  <path d="M150 0C232.843 0 300 67.1573 300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0Z" fill="#4F46E5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </ClientLayout>
    );
  }

  // If user is authenticated, show the actual dashboard
  // This would be the full dashboard implementation
  return (
    <ClientLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Your Analytics Dashboard</h1>
        {/* Full dashboard content would go here */}
      </div>
    </ClientLayout>
  );
} 