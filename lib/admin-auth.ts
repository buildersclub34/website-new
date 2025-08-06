'use client';

export const isAdminAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem('admin-authenticated') === 'true';
};

export const requireAdminAuth = (): boolean => {
  const isAuthenticated = isAdminAuthenticated();
  if (!isAuthenticated && typeof window !== 'undefined') {
    window.location.href = '/admin';
    return false;
  }
  return true;
};
