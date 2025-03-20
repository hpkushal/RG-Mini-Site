import ClientLayout from '../../components/ClientLayout';
import Link from 'next/link';

export default function CommunityPage() {
  const stories = [
    {
      name: 'James R.',
      title: 'Finding My Way Back',
      preview: 'After five years of struggling with gambling addiction, I finally found the support I needed...',
      profileImg: '/profile1.jpg',
      date: 'March 15, 2023'
    },
    {
      name: 'Sarah T.',
      title: 'One Day at a Time',
      preview: 'My recovery journey taught me the importance of taking things one day at a time...',
      profileImg: '/profile2.jpg',
      date: 'February 3, 2023'
    },
    {
      name: 'Michael K.',
      title: 'Supporting My Partner',
      preview: 'When my partner developed a gambling problem, I didn\'t know how to help...',
      profileImg: '/profile3.jpg',
      date: 'January 20, 2023'
    },
  ];

  const forumCategories = [
    {
      name: 'Recovery Support',
      description: 'Share experiences and support each other through the recovery process.',
      threads: 156,
      posts: 1893
    },
    {
      name: 'Family & Friends',
      description: 'A space for those affected by a loved one\'s gambling behavior.',
      threads: 98,
      posts: 1243
    },
    {
      name: 'Success Stories',
      description: 'Share your wins, milestones, and achievements in your recovery journey.',
      threads: 112,
      posts: 876
    },
    {
      name: 'Challenges & Solutions',
      description: 'Discuss challenges and brainstorm practical solutions together.',
      threads: 134,
      posts: 1567
    },
  ];

  return (
    <ClientLayout>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Community</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with others, share experiences, and find support on your responsible gambling journey.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="space-y-16">
              {/* Discussion Forums Section */}
              <div className="bg-gray-50 p-8 rounded-2xl ring-1 ring-gray-200">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">Discussion Forums</h3>
                <div className="mt-6 space-y-6">
                  <p className="text-base leading-7 text-gray-600">
                    Engage in moderated discussions about responsible gambling practices, recovery strategies, 
                    and personal experiences. Our forums provide a safe space for open dialogue.
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-medium text-gray-900">Recovery Stories</h4>
                      <p className="mt-2 text-sm text-gray-500">Share your journey and learn from others</p>
                      <p className="mt-4 text-sm text-indigo-600">24 active discussions</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-medium text-gray-900">Support Circle</h4>
                      <p className="mt-2 text-sm text-gray-500">Get advice and encouragement</p>
                      <p className="mt-4 text-sm text-indigo-600">36 active discussions</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-medium text-gray-900">Responsible Strategies</h4>
                      <p className="mt-2 text-sm text-gray-500">Tips for maintaining healthy gambling habits</p>
                      <p className="mt-4 text-sm text-indigo-600">18 active discussions</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Join the Discussion
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Community Events Section */}
              <div className="bg-gray-50 p-8 rounded-2xl ring-1 ring-gray-200">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">Community Events</h3>
                <div className="mt-6 space-y-6">
                  <p className="text-base leading-7 text-gray-600">
                    Participate in virtual and in-person events designed to educate, support, and connect 
                    individuals interested in responsible gambling practices.
                  </p>
                  <div className="overflow-hidden bg-white shadow sm:rounded-md">
                    <ul role="list" className="divide-y divide-gray-200">
                      <li>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="truncate text-sm font-medium text-indigo-600">Online Workshop: Understanding Gambling Triggers</p>
                            <div className="ml-2 flex flex-shrink-0">
                              <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                Virtual
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                July 15, 2023 • 7:00 PM EST
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="truncate text-sm font-medium text-indigo-600">Support Group Meeting: Weekly Check-in</p>
                            <div className="ml-2 flex flex-shrink-0">
                              <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                Virtual
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                Every Tuesday • 6:30 PM EST
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="truncate text-sm font-medium text-indigo-600">Panel Discussion: Advances in Gambling Harm Reduction</p>
                            <div className="ml-2 flex flex-shrink-0">
                              <p className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
                                In-person
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                August 5, 2023 • New York, NY
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View All Events
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Volunteer Opportunities Section */}
              <div className="bg-gray-50 p-8 rounded-2xl ring-1 ring-gray-200">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">Get Involved</h3>
                <div className="mt-6 space-y-6">
                  <p className="text-base leading-7 text-gray-600">
                    Contribute to our community by volunteering, sharing your story, or participating in research 
                    to advance responsible gambling education and support.
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm">
                      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </div>
                      <h4 className="text-center font-medium text-gray-900">Become a Peer Mentor</h4>
                      <p className="mt-2 text-center text-sm text-gray-500">Support others on their journey</p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm">
                      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                      </div>
                      <h4 className="text-center font-medium text-gray-900">Share Your Story</h4>
                      <p className="mt-2 text-center text-sm text-gray-500">Help others learn from your experience</p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm">
                      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                      </div>
                      <h4 className="text-center font-medium text-gray-900">Participate in Research</h4>
                      <p className="mt-2 text-center text-sm text-gray-500">Contribute to evidence-based solutions</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Learn How to Get Involved
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
} 