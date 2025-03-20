import React from 'react';
import ClientLayout from '../../components/ClientLayout';
import Link from 'next/link';

export default function EducationPage() {
  return (
    <ClientLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Education Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Responsible Gambling Education
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Learn about gambling mechanics, cognitive biases, and strategies for maintaining healthy gambling habits.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:flex-shrink-0 flex items-center justify-center bg-indigo-600 md:w-48 p-8">
              <svg className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-indigo-900">Understanding Your Risk Profile</h2>
              <p className="mt-4 text-lg text-gray-600">
                Learn how the Risk-Reward Simulator helps identify your gambling tendencies and what your risk score means for your habits.
              </p>
              <div className="mt-6">
                <Link href="/simulator" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Try the Simulator
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Cognitive Biases */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Common Gambling Fallacies</h3>
              <p className="text-gray-600 mb-4">
                Discover the cognitive biases that can lead to problematic gambling behavior and how to recognize them in yourself.
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">The Gambler's Fallacy</h4>
                  <p className="text-sm text-gray-600">Believing that past events affect the probability of future outcomes in random events.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">The Hot Hand Fallacy</h4>
                  <p className="text-sm text-gray-600">Believing that a person who has experienced success has a greater chance of further success.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">Illusion of Control</h4>
                  <p className="text-sm text-gray-600">Overestimating one's ability to control events that are actually determined by chance.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Probability and Odds */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Understanding Probability</h3>
              <p className="text-gray-600 mb-4">
                Learn how odds work in different gambling scenarios and why the house always has an edge in the long run.
              </p>
              <table className="min-w-full divide-y divide-gray-200 mb-4">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Game</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Player Odds</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">House Edge</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Blackjack</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">49.5%</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">0.5-2%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Roulette (American)</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">47.4%</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">5.26%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Slots</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Varies</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">2-15%</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500">
                The Risk-Reward Simulator helps you experience these probabilities in a risk-free environment.
              </p>
            </div>
          </div>
          
          {/* Responsible Gambling Strategies */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healthy Gambling Habits</h3>
              <p className="text-gray-600 mb-4">
                Practical strategies to maintain control and ensure gambling remains an enjoyable activity rather than a problem.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-2 text-sm font-semibold">1</span>
                  <span className="text-gray-600">Set strict time and money limits before playing</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-2 text-sm font-semibold">2</span>
                  <span className="text-gray-600">Never chase losses by betting more than planned</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-2 text-sm font-semibold">3</span>
                  <span className="text-gray-600">View gambling as entertainment, not income</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-2 text-sm font-semibold">4</span>
                  <span className="text-gray-600">Take regular breaks to maintain perspective</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-2 text-sm font-semibold">5</span>
                  <span className="text-gray-600">Never gamble under the influence of alcohol or drugs</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                The simulator helps you practice these strategies in a safe environment.
              </p>
            </div>
          </div>
        </div>

        {/* Risk Profile Explanation */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900">
            <h2 className="text-2xl font-bold text-white">Understanding Risk Profiles</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Our Risk-Reward Simulator calculates your risk profile based on your betting behavior. 
              Understanding your personal risk profile is key to developing responsible gambling habits.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-green-500 py-2 px-4">
                  <h3 className="text-white font-semibold">Low Risk (0-33)</h3>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Common Traits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Small, consistent bet sizes</li>
                    <li>• Strict adherence to limits</li>
                    <li>• Regular breaks during play</li>
                    <li>• Focuses on entertainment value</li>
                  </ul>
                  <h4 className="font-medium text-gray-900 mt-4 mb-2">Personas:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Cautious Chris</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Measured Mark</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-yellow-500 py-2 px-4">
                  <h3 className="text-white font-semibold">Medium Risk (34-66)</h3>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Common Traits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Variable bet sizing</li>
                    <li>• Occasional limit stretching</li>
                    <li>• Some chasing of losses</li>
                    <li>• Emotional responses to wins/losses</li>
                  </ul>
                  <h4 className="font-medium text-gray-900 mt-4 mb-2">Personas:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Varying Victor</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Emotional Ella</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-red-500 py-2 px-4">
                  <h3 className="text-white font-semibold">High Risk (67-100)</h3>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Common Traits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Large, inconsistent betting</li>
                    <li>• Frequently exceeding limits</li>
                    <li>• Strong tendency to chase losses</li>
                    <li>• Gambling for financial recovery</li>
                  </ul>
                  <h4 className="font-medium text-gray-900 mt-4 mb-2">Personas:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Risky Rick</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Chasing Charlie</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/simulator" className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Discover Your Risk Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Further Resources */}
        <div className="bg-indigo-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Further Resources</h2>
          <p className="text-gray-600 mb-6">
            If you or someone you know is struggling with problem gambling, these resources can help:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">National Problem Gambling Helpline</h3>
              <p className="text-gray-600 mb-2">24/7 confidential support for those affected by problem gambling.</p>
              <p className="text-indigo-600 font-medium">1-800-522-4700</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">Gamblers Anonymous</h3>
              <p className="text-gray-600 mb-2">A fellowship of people who share their experience to help each other.</p>
              <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium">www.gamblersanonymous.org</a>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">National Council on Problem Gambling</h3>
              <p className="text-gray-600 mb-2">Advocating for programs and services to assist problem gamblers.</p>
              <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium">www.ncpgambling.org</a>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">BeGambleAware</h3>
              <p className="text-gray-600 mb-2">Free, confidential help and support with gambling problems.</p>
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium">www.begambleaware.org</a>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
} 