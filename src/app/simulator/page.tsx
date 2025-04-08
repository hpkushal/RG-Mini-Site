import React from 'react';
import dynamic from 'next/dynamic';

// Import the client component with no SSR to avoid hydration issues
const SimulatorClient = dynamic(() => import('../../components/simulator/SimulatorClient'), {
  ssr: false,
});

// This is a server component that dynamically imports the client component
// Updated for Vercel deployment - triggering a new build
export default function SimulatorPage() {
  return <SimulatorClient />;
} 