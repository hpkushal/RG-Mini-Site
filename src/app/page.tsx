'use client';

import HeroSection from '../components/sections/HeroSection';
import SimulatorFeaturesSection from '../components/sections/SimulatorFeaturesSection';
import DashboardFeaturesSection from '../components/sections/DashboardFeaturesSection';
import SuccessStoriesSection from '../components/sections/SuccessStoriesSection';
import ResourcesPreviewSection from '../components/sections/ResourcesPreviewSection';
import FloatingHelpButton from '../components/ui/FloatingHelpButton';
import AnimationStyles from '../components/ui/AnimationStyles';

/**
 * Homepage component for the Responsible Gambling website
 * 
 * This page serves as the main entry point for users, providing a comprehensive overview
 * of the site's features and resources for understanding responsible gambling.
 */
export default function Home() {
  return (
    <>
      <div className="bg-white">
        <HeroSection />
        <SimulatorFeaturesSection />
        <DashboardFeaturesSection />
        <SuccessStoriesSection />
        <ResourcesPreviewSection />
      </div>

      <FloatingHelpButton href="/support/chat" />
      <AnimationStyles />
    </>
  );
} 