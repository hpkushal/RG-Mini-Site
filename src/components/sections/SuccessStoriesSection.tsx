import React from 'react';
import Link from 'next/link';

type SuccessStory = {
  title: string;
  quote: string;
  date: string;
  author: string;
  category: string;
  gradientFrom: string;
  gradientTo: string;
  href: string;
};

export default function SuccessStoriesSection() {
  const stories: SuccessStory[] = [
    {
      title: "From Weekend Losses to Mindful Betting",
      quote: "I was spending every weekend placing bets on games and slowly watching my savings disappear. The simulator helped me realize I was chasing losses and making emotional decisions.",
      date: "2023-03-16",
      author: "Michael",
      category: "Sports Betting",
      gradientFrom: "indigo-100",
      gradientTo: "indigo-200",
      href: "/community/stories/michael"
    },
    {
      title: "Setting Boundaries Changed Everything",
      quote: "After my assessment revealed I was a high-risk gambler, I used the tools to set strict time and money limits. Six months later, I'm still enjoying gambling but in a controlled way.",
      date: "2023-05-23",
      author: "Sarah",
      category: "Casino Games",
      gradientFrom: "indigo-100",
      gradientTo: "purple-200",
      href: "/community/stories/sarah"
    },
    {
      title: "From Problem Gambler to Advocate",
      quote: "The education resources helped me understand the cognitive biases affecting my decisions. I'm now helping others in the community forums recognize similar patterns in their own gambling.",
      date: "2023-07-12",
      author: "David",
      category: "Online Poker",
      gradientFrom: "blue-100",
      gradientTo: "indigo-200",
      href: "/community/stories/david"
    }
  ];

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Success Stories</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Real Journeys to Responsible Gambling
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Read how others have used our tools to develop healthier gambling habits and regain control.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {stories.map((story, index) => (
          <StoryCard 
            key={index}
            title={story.title}
            quote={story.quote}
            date={story.date}
            author={story.author}
            category={story.category}
            gradientFrom={story.gradientFrom}
            gradientTo={story.gradientTo}
            href={story.href}
          />
        ))}
      </div>
    </div>
  );
}

type StoryCardProps = {
  title: string;
  quote: string;
  date: string;
  author: string;
  category: string;
  gradientFrom: string;
  gradientTo: string;
  href: string;
};

function StoryCard({ 
  title, 
  quote, 
  date, 
  author, 
  category, 
  gradientFrom, 
  gradientTo, 
  href 
}: StoryCardProps) {
  return (
    <article className="flex flex-col items-start hover-lift transition-all duration-300">
      <div className="rounded-lg overflow-hidden bg-gray-100 w-full aspect-[16/9] shadow-sm hover:shadow-md transition-all duration-300">
        <div className={`w-full h-full ${gradientFrom === 'indigo-100' && gradientTo === 'indigo-200' 
          ? 'bg-gradient-to-br from-indigo-100 to-indigo-200' 
          : gradientFrom === 'indigo-100' && gradientTo === 'purple-200'
          ? 'bg-gradient-to-br from-indigo-100 to-purple-200'
          : 'bg-gradient-to-br from-blue-100 to-indigo-200'
        } flex items-center justify-center`}>
          <div className="text-indigo-800 font-medium">Photo: {author}'s Story</div>
        </div>
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-gray-500">{formatDate(date)}</time>
          <span className="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600">{category}</span>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
            <Link href={href}>
              <span className="absolute inset-0"></span>
              {title}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">
            "{quote}"
          </p>
        </div>
      </div>
    </article>
  );
}

// Helper function to format dates
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
} 