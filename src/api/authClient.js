import { supabase } from './supabaseClient';

function toError(supabaseError, fallbackMessage) {
  return new Error(supabaseError?.message || fallbackMessage);
}

// Drop-in replacement for the old base44.auth.* interface, so the
// Login/Register/ForgotPassword pages didn't need a rewrite -- just a
// different implementation underneath the same method names.
export const authClient = {
  auth: {
    async loginViaEmailPassword(email, password) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw toError(error, 'Invalid email or password');
    },

    async loginWithProvider(provider, redirectPath = '/') {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: `${window.location.origin}${redirectPath}` },
      });
      if (error) throw toError(error, `Failed to sign in with ${provider}`);
    },

    async register({ email, password }) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw toError(error, 'Registration failed');
    },

    // Requires the Supabase "Confirm signup" email template to use
    // {{ .Token }} instead of the default {{ .ConfirmationURL }} link --
    // see the setup notes.
    async verifyOtp({ email, otpCode }) {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otpCode,
        type: 'signup',
      });
      if (error) throw toError(error, 'Invalid verification code');
      return { access_token: data?.session?.access_token ?? null };
    },

    async resendOtp(email) {
      const { error } = await supabase.auth.resend({ type: 'signup', email });
      if (error) throw toError(error, 'Failed to resend code');
    },

    setToken() {
      // No-op: supabase-js persists the session itself once
      // signInWithPassword / verifyOtp / OAuth succeeds. Kept only so
      // existing call sites don't need to change.
    },

    async resetPasswordRequest(email) {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw toError(error, 'Failed to send reset email');
    },

    async resetPassword({ newPassword }) {
      // Relies on a recovery session already being active (see
      // ResetPassword.jsx) -- Supabase ties the reset token to the
      // session itself rather than passing it back in this call.
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw toError(error, 'Failed to reset password');
    },

    async logout(redirectUrl) {
      await supabase.auth.signOut();
      if (redirectUrl) window.location.href = redirectUrl;
    },

    redirectToLogin(returnTo) {
      const redirect = returnTo ? `?redirect=${encodeURIComponent(returnTo)}` : '';
      window.location.href = `/login${redirect}`;
    },

    async me() {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) throw toError(error, 'Not authenticated');
      return data.user;
    },
  },
};