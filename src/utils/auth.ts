'use client';

/**
 * Auth utility functions for client-side authentication
 */

/**
 * Check if the user is logged in by checking localStorage
 */
export const isLoggedIn = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('isLoggedIn') === 'true';
};

/**
 * Get the current user's email
 */
export const getUserEmail = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('userEmail');
};

/**
 * Log out the current user
 */
export const logout = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userEmail');
}; 