import React, { ReactNode } from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  stat?: string;
  icon?: ReactNode;
};

export default function FeatureCard({ title, description, stat, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover-lift">
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
        {icon}
        {title}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">
          {description}
        </p>
        {stat && (
          <p className="mt-2 text-sm text-indigo-600">
            {stat}
          </p>
        )}
      </dd>
    </div>
  );
} 