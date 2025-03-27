'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function SimulatorError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Simulator error:', error);
  }, [error]);

  return (
    <div className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-max mx-auto">
        <main className="sm:flex flex-col items-center text-center">
          <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl mb-4">Simulator Error</p>
          <div className="sm:ml-6">
            <div className="sm:px-6">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
                We encountered an issue with the simulator
              </h1>
              <p className="mt-1 text-base text-gray-500">
                The risk simulation tool is temporarily unavailable. We're working to fix it.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 justify-center">
              <button
                onClick={() => reset()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 