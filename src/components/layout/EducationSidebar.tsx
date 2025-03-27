import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const educationSections = [
  { name: 'Overview', href: '#overview' },
  { name: 'Analytics & Insights', href: '#analytics-insights' },
  { name: 'Cognitive Biases', href: '#cognitive-biases' },
  { name: 'Probability & Odds', href: '#probability-odds' },
  { name: 'Healthy Habits', href: '#healthy-habits' },
  { name: 'Warning Signs', href: '#warning-signs' },
  { name: 'Research & Studies', href: '#research-studies' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Resource Library', href: '#resource-library' },
];

export default function EducationSidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState('#overview');
  
  // Effect to update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = educationSections.map(section => ({
        id: section.href.substring(1),
        offset: document.getElementById(section.href.substring(1))?.offsetTop || 0
      }));
      
      const scrollPosition = window.scrollY + 100; // Adding offset for better UX
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(`#${sections[i].id}`);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Education Resources</h3>
      <nav className="space-y-1">
        {educationSections.map((section) => {
          const isActive = activeSection === section.href;
          return (
            <button
              key={section.name}
              onClick={() => scrollToSection(section.href)}
              className={`block w-full text-left px-4 py-2 rounded-md text-sm ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {section.name}
            </button>
          );
        })}
      </nav>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Need Help?</h4>
        <Link
          href="/support"
          className="flex items-center px-4 py-2 text-sm text-indigo-600 hover:text-indigo-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Support Resources
        </Link>
      </div>
    </div>
  );
} 