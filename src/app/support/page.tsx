import React from 'react';
import ClientLayout from '../../components/ClientLayout';
import Link from 'next/link';

export default function SupportPage() {
  // Support resources categories
  const resources = [
    {
      title: "Crisis Support",
      description: "Immediate assistance for gambling-related emergencies",
      items: [
        {
          name: "National Problem Gambling Helpline",
          description: "24/7 confidential support for those affected by problem gambling",
          contact: "1-800-522-4700",
          website: "https://www.ncpgambling.org/help-treatment/national-helpline-1-800-522-4700/",
          isHotline: true
        },
        {
          name: "Crisis Text Line",
          description: "Text HOME to 741741 to connect with a Crisis Counselor",
          contact: "Text HOME to 741741",
          website: "https://www.crisistextline.org/",
          isHotline: true
        },
        {
          name: "Gamblers Anonymous Hotline",
          description: "Find local GA meetings and immediate support",
          contact: "1-888-424-3577",
          website: "https://www.gamblersanonymous.org/",
          isHotline: true
        }
      ]
    },
    {
      title: "Counseling & Treatment",
      description: "Professional help for gambling addiction",
      items: [
        {
          name: "SAMHSA Treatment Locator",
          description: "Find treatment facilities for gambling disorders in your area",
          contact: "1-800-662-4357",
          website: "https://findtreatment.samhsa.gov/",
          isHotline: false
        },
        {
          name: "Psychology Today Therapist Finder",
          description: "Search for therapists specializing in gambling addiction",
          contact: null,
          website: "https://www.psychologytoday.com/us/therapists/gambling",
          isHotline: false
        },
        {
          name: "American Addiction Centers",
          description: "Treatment centers specializing in gambling and co-occurring disorders",
          contact: "1-888-971-2965",
          website: "https://americanaddictioncenters.org/gambling-addiction",
          isHotline: false
        }
      ]
    },
    {
      title: "Support Groups",
      description: "Peer support for recovery",
      items: [
        {
          name: "Gamblers Anonymous",
          description: "12-step recovery program for problem gamblers",
          contact: null,
          website: "https://www.gamblersanonymous.org/",
          isHotline: false
        },
        {
          name: "Gam-Anon",
          description: "Support for family and friends affected by problem gambling",
          contact: null,
          website: "https://www.gam-anon.org/",
          isHotline: false
        },
        {
          name: "Smart Recovery",
          description: "Science-based addiction recovery support group",
          contact: null,
          website: "https://www.smartrecovery.org/",
          isHotline: false
        }
      ]
    },
    {
      title: "Financial Guidance",
      description: "Help with gambling-related financial problems",
      items: [
        {
          name: "National Foundation for Credit Counseling",
          description: "Free or low-cost financial counseling",
          contact: "1-800-388-2227",
          website: "https://www.nfcc.org/",
          isHotline: false
        },
        {
          name: "Debtors Anonymous",
          description: "Support group for managing debt and financial issues",
          contact: null,
          website: "https://debtorsanonymous.org/",
          isHotline: false
        },
        {
          name: "Consumer Financial Protection Bureau",
          description: "Financial education and resources",
          contact: null,
          website: "https://www.consumerfinance.gov/",
          isHotline: false
        }
      ]
    }
  ];

  return (
    <ClientLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Support Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Support Resources
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Get help for gambling-related issues with these professional resources and support options.
          </p>
        </div>

        {/* Emergency Support Banner */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-10 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">Need immediate help?</h3>
              <div className="mt-2 text-red-700">
                <p>
                  If you're experiencing a gambling crisis or having thoughts of self-harm, 
                  please call the National Problem Gambling Helpline at <strong>1-800-522-4700</strong> immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-16">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                <p className="mt-1 text-gray-600">{category.description}</p>
              </div>
              <ul className="divide-y divide-gray-200">
                {category.items.map((resource, resourceIndex) => (
                  <li key={resourceIndex} className={`p-6 ${resource.isHotline ? 'bg-indigo-50' : ''}`}>
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {resource.name}
                          {resource.isHotline && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Hotline
                            </span>
                          )}
                        </h3>
                        <p className="mt-1 text-gray-600">{resource.description}</p>
                        <div className="mt-3 space-y-1">
                          {resource.contact && (
                            <p className="text-indigo-700 font-medium">
                              {resource.isHotline ? '📞 ' : ''}
                              {resource.contact}
                            </p>
                          )}
                          {resource.website && (
                            <a 
                              href={resource.website} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-indigo-600 hover:text-indigo-800 inline-flex items-center"
                            >
                              Visit Website
                              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Self-Assessment */}
        <div className="mt-16 bg-indigo-50 rounded-lg p-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:flex-1">
              <h2 className="text-2xl font-bold text-gray-900">Are you concerned about your gambling?</h2>
              <p className="mt-3 text-lg text-gray-600">
                Our Risk-Reward Simulator can help you understand your gambling tendencies and risk factors in a safe, virtual environment.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <Link href="/simulator" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Try the Simulator
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form Teaser */}
        <div className="mt-16 bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900">Need personalized guidance?</h2>
          <p className="mt-3 text-lg text-gray-600">
            If you'd prefer to speak with a member of our support team about responsible gambling resources, please send us a message.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Contact our support team →
            </Link>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
} 