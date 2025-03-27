import React from 'react';

export default function AnimationStyles() {
  return (
    <style jsx global>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes pulseSlow {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      
      .animate-fade-in {
        opacity: 0;
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animation-delay-100 {
        animation-delay: 0.1s;
      }
      
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
      
      .animation-delay-300 {
        animation-delay: 0.3s;
      }
      
      .animation-delay-400 {
        animation-delay: 0.4s;
      }
      
      .animate-pulse-slow {
        animation: pulseSlow 3s infinite;
      }
      
      @media (hover: hover) {
        .hover-lift {
          transition: transform 0.2s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-3px);
        }
      }
    `}</style>
  );
} 