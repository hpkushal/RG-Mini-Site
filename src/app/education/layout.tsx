'use client';

import React from 'react';
import ClientLayout from '../../components/ClientLayout';
import EducationSidebar from '../../components/layout/EducationSidebar';

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-6">
              <EducationSidebar />
            </div>
          </div>
          <main className="lg:col-span-9">
            {children}
          </main>
        </div>
      </div>
    </ClientLayout>
  );
} 