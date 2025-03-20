import React from 'react';
import ClientLayout from '../../components/ClientLayout';
import Link from 'next/link';
import RiskRewardSimulator from '../../components/simulator/RiskRewardSimulator';

export default function SimulatorPage() {
  return (
    <ClientLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Risk-Reward Simulator
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Understand your risk profile and betting behavior in a safe environment without using real money.
          </p>
          <div className="mt-8">
            <Link href="#simulator" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Try the Simulator
            </Link>
          </div>
        </div>

        {/* Simulator Section */}
        <div id="simulator" className="mt-16">
          <RiskRewardSimulator initialBalance={1000} targetBalance={5000} />
        </div>
        
        {/* How It Works Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            How the Simulator Works
          </h2>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Start with Virtual Currency</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Begin with a set amount of virtual money that you can use to place bets without any real financial risk.
                </dd>
              </div>
              
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Monitor Your Risk Level</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  As you play, our algorithm tracks your betting patterns and provides real-time feedback on your risk level.
                </dd>
              </div>
              
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Review Your Performance</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  After your session, get detailed insights about your gambling behavior, risk tolerance, and tendencies.
                </dd>
              </div>
              
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Learn Responsible Habits</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Receive personalized recommendations to develop healthier gambling habits based on your simulation results.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        
        {/* Educational Section */}
        <div className="mt-20 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Understanding Probability</h3>
              <p className="text-gray-500">
                Learn how odds work in different gambling scenarios and why the house always has an edge in the long run.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Risk Management</h3>
              <p className="text-gray-500">
                Discover techniques for managing your bankroll and setting appropriate limits on your gambling activities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Cognitive Biases</h3>
              <p className="text-gray-500">
                Identify common thinking patterns that can lead to problem gambling and learn strategies to overcome them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
} 