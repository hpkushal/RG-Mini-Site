import React, { ReactNode } from 'react';
import Link from 'next/link';

type ResourceItem = {
  title: string;
  description: string;
  views: number;
  readTime: number; // in minutes
  href: string;
  icon: ReactNode;
};

export default function ResourcesPreviewSection() {
  const resources: ResourceItem[] = [
    {
      title: "Understanding Cognitive Biases",
      description: "Learn about the mental shortcuts that can lead to problematic gambling behaviors.",
      views: 5237,
      readTime: 12,
      href: "/education/biases",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 flex-none text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      )
    },
    {
      title: "Responsible Budgeting for Gambling",
      description: "Practical strategies for setting and sticking to financial limits when gambling.",
      views: 8192,
      readTime: 8,
      href: "/education/budgeting",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 flex-none text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75" />
        </svg>
      )
    },
    {
      title: "Warning Signs of Problem Gambling",
      description: "How to identify when recreational gambling starts to become problematic.",
      views: 12457,
      readTime: 10,
      href: "/education/warning-signs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 flex-none text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Educational Resources</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Learning Materials
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse our most helpful resources on responsible gambling, cognitive biases, and healthy habits.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {resources.map((resource, index) => (
            <ResourceCard 
              key={index}
              title={resource.title}
              description={resource.description}
              views={resource.views}
              readTime={resource.readTime}
              href={resource.href}
              icon={resource.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type ResourceCardProps = {
  title: string;
  description: string;
  views: number;
  readTime: number;
  href: string;
  icon: ReactNode;
};

function ResourceCard({ 
  title, 
  description, 
  views, 
  readTime, 
  href, 
  icon 
}: ResourceCardProps) {
  // Format views with commas
  const formattedViews = views.toLocaleString();
  
  return (
    <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all duration-300 hover-lift">
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        {icon}
        <div className="text-sm font-medium leading-6 text-gray-900">{title}</div>
      </div>
      <div className="p-6">
        <p className="text-sm leading-6 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center gap-x-4">
          <div className="text-xs text-gray-500">{formattedViews} views</div>
          <div className="text-xs text-gray-500">{readTime} min read</div>
        </div>
        <div className="mt-6">
          <Link href={href} className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 transition-colors duration-300">
            Read Guide <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 