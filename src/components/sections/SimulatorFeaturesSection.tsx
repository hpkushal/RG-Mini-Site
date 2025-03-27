import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import TestimonialCard from '../ui/TestimonialCard';

export default function SimulatorFeaturesSection() {
  const features = [
    {
      title: "Risk Management System",
      description: "Dynamic risk meter (0-100%) with visual indicators helps you understand your gambling tendencies and risk tolerance.",
      stat: "Users typically identify their risk threshold within 10-15 simulated bets",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
        </svg>
      )
    },
    {
      title: "Persona-based Gameplay",
      description: "Discover your gambling persona — from cautious Baby Betsy to all-in YOLO Yolanda — and learn how it affects your decisions.",
      stat: "Understanding your persona helps reduce impulsive betting by up to 40%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      title: "Diverse Betting Events",
      description: "Experience a variety of betting scenarios from coin flips to lottery tickets, each with different risk levels and payouts.",
      stat: "Over 15 different betting scenarios help you recognize real-world gambling triggers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "I've always struggled with setting limits when gambling. The simulator helped me see exactly how quickly things can go wrong when I chase losses.",
      author: "Jamie M.",
      role: "Using simulator for 4 months",
      initials: "JM"
    },
    {
      quote: "As a counselor specializing in gambling addiction, I recommend this tool to all my clients. It creates powerful 'aha moments' about risk in a safe environment.",
      author: "Dr. Rachel T.",
      role: "Addiction Counselor",
      initials: "DR"
    }
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Virtual Bet Simulator</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Experience Risk Without Consequences
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our simulator starts you with $1,000 in virtual currency and challenges you to reach $10,000 
            while avoiding bankruptcy. Learn about risk management in a safe environment.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative h-64 w-full max-w-lg rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-indigo-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-indigo-600 font-bold text-2xl">Simulator Preview</div>
                  <div className="mt-2 text-indigo-800">Interactive visualization of your betting journey</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-sm text-indigo-700 bg-indigo-50 py-2 px-4 rounded-lg inline-block">
            93% of users report better understanding of gambling risks after using our simulator
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title}
                description={feature.description}
                stat={feature.stat}
                icon={feature.icon}
              />
            ))}
          </dl>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h3 className="text-base font-semibold leading-7 text-center text-gray-900">What Our Users Say</h3>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                initials={testimonial.initials}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 