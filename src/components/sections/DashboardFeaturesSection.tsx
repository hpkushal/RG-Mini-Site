import React from 'react';
import Link from 'next/link';

type FeatureItem = {
  title: string;
  description: string;
  bulletPoints: string[];
  linkText: string;
  linkHref: string;
};

export default function DashboardFeaturesSection() {
  const featureItems: FeatureItem[] = [
    {
      title: "Risk Assessment",
      description: "Use our advanced simulator to understand your gambling patterns and identify potential risks before they become problems.",
      bulletPoints: [
        "Identifies your \"loss chasing\" threshold",
        "Measures your betting consistency",
        "Tracks emotional responses to wins/losses"
      ],
      linkText: "Try Simulator",
      linkHref: "/simulator"
    },
    {
      title: "Education & Resources",
      description: "Access comprehensive educational materials about responsible gambling, cognitive biases, and financial management.",
      bulletPoints: [
        "Personalized learning paths",
        "Interactive bias training tools",
        "Financial planning resources"
      ],
      linkText: "Learn More",
      linkHref: "/education"
    },
    {
      title: "Support Network",
      description: "Connect with professional help, support groups, and a community of individuals on similar journeys to recovery.",
      bulletPoints: [
        "24/7 chat support with counselors",
        "Moderated peer discussion forums",
        "Local resource finder tool"
      ],
      linkText: "Get Support",
      linkHref: "/support"
    }
  ];

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Your Journey to Control</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Data-Driven Insights for Responsible Gambling
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our personalized dashboard analyzes your betting behavior to identify patterns, risk profiles, and 
          educate you on the right strategies for responsible gambling.
        </p>
      </div>
      
      {/* User Journey Visualization */}
      <div className="mt-10 flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-1/2 -ml-px w-0.5 bg-indigo-200 z-0"></div>
          <div className="relative z-10 flex flex-col items-center space-y-8">
            <JourneyStep number={1} title="Simulation" description="Experience betting in a risk-free environment" />
            <JourneyStep number={2} title="Analysis" description="Receive personalized insights about your behaviors" />
            <JourneyStep number={3} title="Education" description="Learn strategies to improve gambling decisions" />
            <JourneyStep number={4} title="Growth" description="Develop healthier gambling habits over time" />
          </div>
        </div>
      </div>
      
      {/* Did You Know Section */}
      <div className="mt-16 bg-indigo-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-indigo-800">Did You Know?</h3>
        <p className="mt-2 text-indigo-600">
          People who set strict time and money limits before gambling are 73% less likely to develop problematic gambling behaviors.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <QuizCard 
            question="What cognitive bias affects your gambling the most?" 
            links={[
              { text: "Gambler's Fallacy", href: "/education/biases/gamblers-fallacy" },
              { text: "Confirmation Bias", href: "/education/biases/confirmation" }
            ]} 
          />
          <QuizCard 
            question="How much of your income should be your gambling limit?" 
            links={[
              { text: "Learn about budgeting", href: "/education/budgeting" }
            ]} 
          />
          <QuizCard 
            question="Do you know your primary gambling trigger?" 
            links={[
              { text: "Identify triggers", href: "/education/triggers" }
            ]} 
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {featureItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                {item.title}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  {item.description}
                </p>
                <ul className="mt-2 text-sm space-y-1 list-disc list-inside text-indigo-600">
                  {item.bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p className="mt-6">
                  <Link href={item.linkHref} className="text-sm font-semibold leading-6 text-indigo-600">
                    {item.linkText} <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

type JourneyStepProps = {
  number: number;
  title: string;
  description: string;
};

function JourneyStep({ number, title, description }: JourneyStepProps) {
  return (
    <div className="flex items-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
        {number}
      </div>
      <div className="ml-4 p-3 bg-white rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

type QuizCardProps = {
  question: string;
  links: Array<{
    text: string;
    href: string;
  }>;
};

function QuizCard({ question, links }: QuizCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-sm font-medium text-gray-900">{question}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {links.map((link, index) => (
          <Link 
            key={index}
            href={link.href} 
            className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full hover:bg-indigo-200 transition-colors duration-300"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
} 