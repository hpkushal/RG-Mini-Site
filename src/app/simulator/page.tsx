import React from 'react';
import Link from 'next/link';
import RiskRewardSimulator from '../../components/simulator/RiskRewardSimulator';
import AnalyticsDashboard from '../../components/analytics/AnalyticsDashboard';

// Define props for the page component
interface SimulatorPageProps {
  isLoggedIn?: boolean; // Make isLoggedIn optional as it's injected by ClientLayout
}

export default function SimulatorPage({ isLoggedIn }: SimulatorPageProps) {
  return (
    <>
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
                <span className="md:hidden">{isLoggedIn ? 'View your analytics dashboard' : 'Try our simulator!'}</span>
                <span className="hidden md:inline">{isLoggedIn ? 'Welcome back! View your personalized analytics dashboard below.' : 'Try our Risk-Reward Simulator now and sign up free!'}</span>
              </p>
            </div>
            {!isLoggedIn && (
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <Link
                  href="/signup"
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Sign up now
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main simulator content */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {isLoggedIn ? (
            // --- Logged In View --- 
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-10">Your Personalized Dashboard</h2>
              {/* 
                Here you would fetch real user data and pass it to AnalyticsDashboard.
                For now, using placeholder data.
              */}
              <AnalyticsDashboard 
                gameHistory={[{ type: 'Spin', amount: 10, result: 'win', balanceChange: 20, multiplier: 2 }]} 
                currentBalance={1010} 
                initialBalance={1000} 
              />
            </div>
          ) : (
            // --- Logged Out View --- 
            <>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Risk-Reward Simulator</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Experience virtual betting scenarios without real money. Analyze your gambling behavior, identify
                  patterns, and learn responsible gambling habits.
                </p>
              </div>
              <div className="mt-10 bg-white p-8 shadow-sm ring-1 ring-gray-900/5 rounded-xl sm:p-10">
                <RiskRewardSimulator initialBalance={1000} targetBalance={5000} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
} 