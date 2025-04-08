import React from 'react';
import dynamic from 'next/dynamic';

// Import the client component with no SSR to avoid hydration issues
const SimulatorClient = dynamic(() => import('../../components/simulator/SimulatorClient'), {
  ssr: false,
});

// Next.js App Router page component must be a Server Component with no props
export default function SimulatorPage() {
  return <SimulatorClient />;
} 