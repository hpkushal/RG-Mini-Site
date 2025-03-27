import React from 'react';

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  initials: string;
};

export default function TestimonialCard({ quote, author, role, initials }: TestimonialCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-all duration-300 hover-lift">
      <p className="text-sm italic text-gray-600">
        "{quote}"
      </p>
      <div className="mt-4 flex items-center">
        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
          <span className="text-indigo-600 font-medium">{initials}</span>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{author}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
} 