import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resources</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Educational materials and resources to promote responsible gambling.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {/* Resource Category 1 */}
            <div>
              <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                <div className="flex items-center gap-x-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Educational Materials</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Learn about gambling risks, odds and probability, and how to develop healthy gambling habits.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <Link href="/resources/understanding-odds" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Understanding Odds and Probability
                    </Link>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <Link href="/resources/gambling-myths" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Common Gambling Myths
                    </Link>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <Link href="/resources/decision-making" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Decision Making in Gambling
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Resource Category 2 */}
            <div>
              <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                <div className="flex items-center gap-x-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Risk Assessment</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Tools and quizzes to help assess your gambling behavior and potential risks.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <Link href="/resources/self-assessment" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Gambling Behavior Self-Assessment
                    </Link>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <Link href="/resources/risk-factors" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Risk Factors and Warning Signs
                    </Link>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <Link href="/resources/personal-limits" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Setting Personal Gambling Limits
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Resource Category 3 */}
            <div>
              <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                <div className="flex items-center gap-x-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Help and Support</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Resources for seeking help and support for problematic gambling behavior.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <Link href="/resources/helplines" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      National Gambling Helplines
                    </Link>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <Link href="/resources/support-groups" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Support Groups and Communities
                    </Link>
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <Link href="/resources/treatment-options" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Treatment Options and Counseling
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 