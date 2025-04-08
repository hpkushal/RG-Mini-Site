import Link from 'next/link';
import Image from 'next/image';

export default function SignUp() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:flex">
          {/* Left column: Sign-up form */}
          <div className="lg:w-1/2 lg:pr-12">
            <div className="mx-auto max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Unlock Your Complete Gambling Analytics
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Sign up for free to access our full analytics dashboard and gain deeper insights into your gambling patterns. Make informed decisions based on comprehensive data analysis.
              </p>
              
              <form className="mt-10 space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="new-password"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="terms" className="text-sm leading-6 text-gray-600">
                        I agree to the{' '}
                        <Link href="/terms" className="font-semibold text-indigo-600">
                          terms and conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Create my free account
                  </button>
                </div>
                <p className="mt-4 text-center text-sm text-gray-500">
                  Already have an account?{' '}
                  <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
          
          {/* Right column: Dashboard preview */}
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <div className="relative overflow-hidden rounded-xl bg-gray-50 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Premium Analytics Dashboard</h3>
              
              <div className="space-y-6">
                {/* Example dashboard section */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-medium text-gray-900">Comparative Analytics</h4>
                  <p className="text-sm text-gray-500 mb-3">See how your gambling behavior compares to others</p>
                  <div className="relative h-48 bg-gray-100 rounded overflow-hidden">
                    <div className="absolute inset-0 opacity-80 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-3xl font-bold text-yellow-500 mb-2">69/100</div>
                        <div className="text-sm text-gray-500">Responsible Gambling Score</div>
                        <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: '69%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Pattern Recognition */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-medium text-gray-900">Pattern Recognition</h4>
                  <p className="text-sm text-gray-500 mb-3">AI-powered insights detect potential risk patterns</p>
                  <div className="relative h-48 bg-gray-100 rounded overflow-hidden">
                    <div className="absolute inset-0 opacity-80 flex items-center justify-center">
                      <div className="w-full p-4">
                        <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-2">
                          <div className="flex">
                            <div className="text-red-500 font-medium">Rapid Betting Pattern Detected</div>
                          </div>
                          <div className="text-xs text-gray-500">Quick consecutive bets may indicate impulsive behavior</div>
                        </div>
                        <div className="bg-green-50 border-l-4 border-green-400 p-3">
                          <div className="flex">
                            <div className="text-green-500 font-medium">Healthy Game Diversification</div>
                          </div>
                          <div className="text-xs text-gray-500">You're playing a healthy mix of different games</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Financial Metrics */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-medium text-gray-900">Financial Metrics</h4>
                  <p className="text-sm text-gray-500 mb-3">Track your financial performance and risk exposure</p>
                  <div className="relative h-48 bg-gray-100 rounded overflow-hidden">
                    <div className="absolute inset-0 opacity-80 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-4 p-4 w-full">
                        <div className="bg-white p-3 rounded shadow-sm">
                          <div className="text-sm text-gray-500">Win/Loss Ratio</div>
                          <div className="text-xl font-bold">0.71</div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                          <div className="text-sm text-gray-500">Win Rate</div>
                          <div className="text-xl font-bold text-blue-500">41.7%</div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                          <div className="text-sm text-gray-500">ROI</div>
                          <div className="text-xl font-bold text-red-500">-38.46%</div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                          <div className="text-sm text-gray-500">Max Drawdown</div>
                          <div className="text-xl font-bold">100.0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-24 -right-24 opacity-25">
                <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  <path d="M150 0C232.843 0 300 67.1573 300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0Z" fill="#4F46E5" />
                </svg>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-lg font-semibold text-gray-900">And much more...</div>
                <p className="text-sm text-gray-500 mt-2">
                  Betting patterns, behavioral analysis, predictive analytics, and personalized recommendations
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Free Premium Access</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Sign Up For The Full Version?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive analytics platform provides valuable insights to help you understand and manage your gambling behavior better.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
                  </svg>
                  Advanced Analytics Dashboard
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Access detailed metrics about your gambling behavior, including risk levels, betting patterns, and financial outcomes.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                  Pattern Recognition
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Our AI system identifies potentially problematic gambling patterns and provides personalized recommendations.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                  </svg>
                  Predictive Analytics
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Project future outcomes based on your current betting behavior and understand potential financial impacts.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 