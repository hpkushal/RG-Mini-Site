import React from 'react';
import Link from 'next/link';

type QuestionOption = {
  text: string;
  value: number;
};

type Question = {
  id: number;
  text: string;
  options: QuestionOption[];
};

export default function AssessmentToolSection() {
  const questions: Question[] = [
    {
      id: 1,
      text: "How often do you think about gambling when you're not doing it?",
      options: [
        { text: "Never", value: 0 },
        { text: "Sometimes", value: 1 },
        { text: "Often", value: 2 },
        { text: "Almost always", value: 3 }
      ]
    },
    {
      id: 2,
      text: "Have you ever lied to family or friends about your gambling?",
      options: [
        { text: "Never", value: 0 },
        { text: "Once or twice", value: 1 },
        { text: "Several times", value: 2 },
        { text: "Regularly", value: 3 }
      ]
    },
    {
      id: 3,
      text: "Do you feel the need to gamble with increasing amounts of money to get the same excitement?",
      options: [
        { text: "Never", value: 0 },
        { text: "Sometimes", value: 1 },
        { text: "Often", value: 2 },
        { text: "Almost always", value: 3 }
      ]
    }
  ];

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Quick Self-Assessment</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Evaluate Your Gambling Habits
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Take a quick assessment to understand your gambling patterns and get personalized recommendations.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        <div className="space-y-8">
          {questions.map((question) => (
            <AssessmentQuestion key={question.id} question={question} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/assessment"
            className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300"
          >
            Get Your Results
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Want a more comprehensive assessment?{' '}
          <Link href="/full-assessment" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Take the full assessment
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

function AssessmentQuestion({ question }: { question: Question }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
      <p className="text-base font-medium text-gray-900">{question.text}</p>
      <div className="mt-4 space-y-2">
        {question.options.map((option, index) => (
          <label key={index} className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 cursor-pointer transition-colors duration-200">
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.value}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span className="text-sm text-gray-700">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
} 