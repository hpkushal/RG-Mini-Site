'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Define testimonial type for better type safety
type Testimonial = {
  quote: string;
  author: string;
};

export default function HeroSection() {
  // Testimonials that will rotate
  const testimonials: Testimonial[] = [
    {
      quote: "This simulator helped me recognize my risky betting patterns before they became a problem.",
      author: "Alex P."
    },
    {
      quote: "I discovered I have a tendency to chase losses. This tool highlighted patterns I never noticed before.",
      author: "Maria J."
    },
    {
      quote: "Using this helped me set much better limits when I gamble. Now I stay in control.",
      author: "Jason T."
    },
    {
      quote: "The simulator showed me exactly how cognitive biases were affecting my gambling decisions.",
      author: "Sam R."
    }
  ];

  // State for the current testimonial index
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Rotate testimonials every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-100 to-indigo-50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-in">
            Think You're in Control of Your Gambling?
          </h1>
          <p className="mt-4 text-2xl font-semibold text-indigo-600 animate-fade-in animation-delay-100">
            Find Out — Without Risk, Without Judgment.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in animation-delay-100">
            Our Virtual Bet Simulator helps you explore your gambling habits in a safe, risk-free environment.
            See how you respond to wins, losses, and temptation — all without using real money.
          </p>
          <div className="mt-4 flex justify-center items-center text-sm text-indigo-600 bg-indigo-50 py-2 px-4 rounded-full animate-fade-in animation-delay-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Helping over 5,000 users develop healthier gambling habits
          </div>
          
          {/* Rotating testimonials */}
          <div className="mt-6 h-24 relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center
                           ${index === currentTestimonialIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <p className="text-sm italic text-gray-600">"{testimonial.quote}"</p>
                <p className="mt-2 text-sm font-medium text-gray-800">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-y-0 sm:gap-x-6 animate-fade-in animation-delay-400">
            <Link
              href="/simulator"
              className="w-full sm:w-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Free Simulation
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom background decorative element */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-200 to-indigo-100 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
} 