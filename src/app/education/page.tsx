'use client';

import React from 'react';
import Link from 'next/link';
import FloatingHelpButton from '@/components/ui/FloatingHelpButton';

export default function EducationPage() {
  return (
    <div className="education-page">
      {/* Education Header */}
      <div className="text-center mb-12" id="overview">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Responsible Gambling Education
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Learn about gambling mechanics, cognitive biases, and strategies for maintaining healthy gambling habits.
        </p>
      </div>

      {/* Analytics & Insights Section */}
      <section id="analytics-insights" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Analytics & Insights
          </h2>
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
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Behavioral Analysis</h3>
          <p className="text-lg text-gray-600 mb-8">
            Understanding how you bet is the first step toward responsible gambling. Our behavioral metrics reveal your unconscious patterns:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Betting Frequency</h4>
              <p className="text-gray-600 mb-4">
                This metric reveals how quickly you place bets, which can indicate impulsivity or thoughtful decision-making.
              </p>
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <span className="text-sm text-gray-500">Example insight:</span>
                <p className="text-md font-medium text-gray-800 mt-1">Average time between bets: 2 seconds</p>
                <p className="text-yellow-600 mt-2">You place bets rapidly. Consider taking more time between decisions.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Risk Appetite</h4>
              <p className="text-gray-600 mb-4">
                Your willingness to take risks can determine your long-term gambling success and financial health.
              </p>
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <span className="text-sm text-gray-500">Example insight:</span>
                <p className="text-md font-medium text-gray-800 mt-1">Average risk level: 40.1%</p>
                <p className="text-md font-medium text-gray-800">Consistency: Variable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cognitive Biases Section */}
      <section id="cognitive-biases" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Cognitive Biases
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Discover the cognitive biases that can lead to problematic gambling behavior.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Gambling Fallacies</h3>
            <p className="text-gray-600 mb-6">
              Cognitive biases can distort our perception of gambling outcomes and lead to poor decisions. Recognizing these biases is the first step to overcoming them:
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4 py-3">
                <h4 className="text-lg font-medium text-gray-900">The Gambler's Fallacy</h4>
                <p className="text-gray-600 mt-1">Believing that past events affect the probability of future outcomes in random events.</p>
                <p className="text-gray-600 mt-2">
                  <span className="font-medium">Example:</span> Thinking that after 10 reds in roulette, black is "due" to come up next.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4 py-3">
                <h4 className="text-lg font-medium text-gray-900">The Hot Hand Fallacy</h4>
                <p className="text-gray-600 mt-1">Believing that a person who has experienced success has a greater chance of further success.</p>
                <p className="text-gray-600 mt-2">
                  <span className="font-medium">Example:</span> Increasing bet sizes after winning several hands in a row, believing you're "on a streak."
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4 py-3">
                <h4 className="text-lg font-medium text-gray-900">Illusion of Control</h4>
                <p className="text-gray-600 mt-1">Overestimating one's ability to control events that are actually determined by chance.</p>
                <p className="text-gray-600 mt-2">
                  <span className="font-medium">Example:</span> Believing certain rituals or behaviors will influence random outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Probability & Odds Section */}
      <section id="probability-odds" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Probability & Odds
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Learn how odds work in different gambling scenarios and why the house always has an edge.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding the House Edge</h3>
            <p className="text-gray-600 mb-6">
              Every casino game is designed with a mathematical advantage for the house. This ensures that over time, the casino will always profit.
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
            
            <p className="text-gray-600 mt-4">
              Understanding these odds is crucial for responsible gambling. Remember: the longer you play, the more likely the house edge will affect your results.
            </p>
          </div>
        </div>
      </section>

      {/* Healthy Habits Section */}
      <section id="healthy-habits" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Healthy Habits
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Practical strategies to maintain control and ensure gambling remains an enjoyable activity.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Building Sustainable Gambling Habits</h3>
            <p className="text-gray-600 mb-6">
              These strategies can help you maintain a healthy relationship with gambling:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 mr-3">1</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Set strict limits</h4>
                  <p className="text-gray-600">Decide on time and money limits before you start and stick to them. Never exceed these limits.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 mr-3">2</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Never chase losses</h4>
                  <p className="text-gray-600">Accepting losses is part of gambling. Trying to win back lost money often leads to bigger losses.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 mr-3">3</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Take regular breaks</h4>
                  <p className="text-gray-600">Stepping away from gambling regularly helps maintain perspective and avoid impulsive decisions.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 mr-3">4</span>
                <div>
                  <h4 className="font-semibold text-gray-900">View gambling as entertainment</h4>
                  <p className="text-gray-600">Think of gambling expenses as the cost of entertainment, not as a way to make money.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700 mr-3">5</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Keep gambling balanced</h4>
                  <p className="text-gray-600">Ensure gambling is just one of many activities you enjoy, not a central focus of your life.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section id="warning-signs" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Warning Signs
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Recognize potential red flags that may indicate problematic gambling behavior.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">When Gambling Becomes a Problem</h3>
            <p className="text-gray-600 mb-6">
              Gambling becomes problematic when it starts to negatively impact different areas of your life. Here are some warning signs to watch for:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-red-800 mb-2">Financial Warning Signs</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Borrowing money to gamble</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Difficulty paying bills due to gambling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Depleting savings for gambling</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-red-800 mb-2">Behavioral Warning Signs</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Lying about gambling habits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Neglecting work or family obligations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Feeling restless or irritable when not gambling</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Getting Help</h4>
              <p className="text-gray-700 mb-3">
                If you recognize these warning signs in yourself or someone else, it's important to seek help. Resources include:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  National Problem Gambling Helpline: 1-800-522-4700
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Gamblers Anonymous: <a href="https://www.gamblersanonymous.org" className="text-blue-600 hover:underline">www.gamblersanonymous.org</a>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Local mental health professionals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Studies Section */}
      <section id="research-studies" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Research & Studies
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Scientific research on gambling behavior, addiction, and treatment approaches.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Research Findings</h3>
            <p className="text-gray-600 mb-6">
              Recent studies have provided valuable insights into gambling behavior and effective interventions:
            </p>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Understanding Near Misses</h4>
                    <p className="text-sm text-gray-500 mb-2">Journal of Gambling Studies, 2021</p>
                    <p className="text-gray-600">
                      Research shows that "near miss" outcomes in gambling (e.g., getting 2 out of 3 matching symbols) trigger a similar brain response to actual wins, encouraging continued play despite being losses.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Effectiveness of Self-Exclusion Programs</h4>
                    <p className="text-sm text-gray-500 mb-2">International Gambling Studies, 2022</p>
                    <p className="text-gray-600">
                      A comprehensive review found that self-exclusion programs can be effective interventions, with 80% of participants reporting decreased gambling urges and improved quality of life.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Cognitive-Behavioral Therapy for Gambling Disorder</h4>
                    <p className="text-sm text-gray-500 mb-2">Journal of Clinical Psychology, 2020</p>
                    <p className="text-gray-600">
                      Studies indicate that Cognitive-Behavioral Therapy (CBT) remains one of the most effective treatments for gambling disorder, helping to identify and change unhealthy gambling behaviors and thoughts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Answers to common questions about responsible gambling and our tools.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How accurate is the gambling simulator?</h3>
                <p className="text-gray-600">
                  Our simulator is designed to accurately reflect real gambling mechanics and odds. It uses verified random number generation and implements the same house edge found in actual gambling venues. While no simulation can perfectly replicate real-world conditions, our tool provides a realistic approximation of gambling experiences.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Can I use the analytics tools if I gamble on other websites?</h3>
                <p className="text-gray-600">
                  Currently, our analytics tools only track activity within our simulator. However, we're developing features to allow manual entry of gambling data from other sources. In the meantime, you can still learn valuable lessons from the simulator that apply to your gambling elsewhere.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How do I know if my gambling is becoming problematic?</h3>
                <p className="text-gray-600">
                  Signs of problematic gambling include spending more time or money than planned, gambling to escape problems, lying about gambling habits, or experiencing negative consequences in your personal or financial life. Our self-assessment tool can help you evaluate your gambling behavior. If you're concerned, we encourage you to seek professional advice from a counselor specializing in gambling disorders.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What makes gambling addictive?</h3>
                <p className="text-gray-600">
                  Gambling can trigger the brain's reward system, releasing dopamine similar to other addictive activities. The variable reward schedule (unpredictable wins) is particularly effective at reinforcing behavior. Additionally, factors like near-misses, the illusion of control, and the possibility of recovering losses can make gambling particularly compelling for some individuals.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Are some forms of gambling more addictive than others?</h3>
                <p className="text-gray-600">
                  Research suggests that games with faster play speeds, frequent near-misses, and higher levels of player involvement (like making decisions that affect outcomes) tend to have higher addiction potential. Slot machines and electronic gaming machines are often cited as having particularly high addiction rates, while games like lottery have lower rates but still carry risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library Section */}
      <section id="resource-library" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Resource Library
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Additional materials to support your responsible gambling journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Recommended Books</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Addiction by Design</span> - Natasha Dow Schüll</li>
                <li><span className="font-medium">The Easy Way to Stop Gambling</span> - Allen Carr</li>
                <li><span className="font-medium">Gambling: Don't Bet on It</span> - Paul Petry</li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">See full reading list →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Video Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Understanding the Psychology of Gambling</li>
                <li>How to Set Effective Gambling Limits</li>
                <li>Testimonials: Recovery Stories</li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">View video library →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Downloadable Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Weekly Gambling Budget Tracker</li>
                <li>Cognitive Distortions Worksheet</li>
                <li>Self-Exclusion Guide & Form</li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">Download resources →</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Help Button */}
      <FloatingHelpButton href="/support" />
    </div>
  );
}