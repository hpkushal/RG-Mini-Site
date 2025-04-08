'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

// Create auth context
interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: LayoutProps) {
  // Use localStorage to persist login state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  // Initialize login state from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') { // Check if running in browser
      const storedLoginState = localStorage.getItem('isLoggedIn');
      if (storedLoginState === 'true') {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const handleLogin = () => {
    console.log('ClientLayout: Logging in');
    setIsLoggedIn(true);
    // Store login state in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
    }
  };

  const handleLogout = () => {
    console.log('ClientLayout: Logging out');
    setIsLoggedIn(false);
    // Remove login state from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
    }
  };

  // Create context value
  const contextValue: AuthContextType = {
    isLoggedIn,
    login: handleLogin,
    logout: handleLogout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
} 