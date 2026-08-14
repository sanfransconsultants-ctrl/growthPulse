import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '@/api/supabaseClient';
import { authClient } from '@/api/authClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    checkUserAuth();

    // Keep state in sync with sign-in, sign-out, token refresh, etc.
    // happening anywhere in the app (including the OAuth redirect back
    // from Google, and the email link that lands on /reset-password).
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsAuthenticated(!!session?.user);
      setIsLoadingAuth(false);
      setAuthChecked(true);
    });

    return () => listener?.subscription?.unsubscribe();
  }, []);

  const checkUserAuth = async () => {
    setIsLoadingAuth(true);
    setAuthError(null);
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      setUser(data.session?.user ?? null);
      setIsAuthenticated(!!data.session?.user);
    } catch (error) {
      console.error('Session check failed:', error);
      setUser(null);
      setIsAuthenticated(false);
      setAuthError({ type: 'unknown', message: error.message || 'Failed to check session' });
    } finally {
      setIsLoadingAuth(false);
      setAuthChecked(true);
    }
  };

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    authClient.auth.logout(shouldRedirect ? '/' : undefined);
  };

  const navigateToLogin = () => {
    authClient.auth.redirectToLogin(window.location.pathname);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        authChecked,
        authError,
        logout,
        navigateToLogin,
        checkUserAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};