import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';
import ScrollToTop from './components/ScrollToTop';

// Public marketing pages
import Home from './pages/Home';
import Global from './pages/Global';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

// Auth pages
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

// NOTE: previously the entire site was gated behind a Base44 "is this
// user allowed to see this app at all" check, so every route -- including
// the public marketing homepage -- waited on an auth call before
// rendering anything. That doesn't apply to a public site with a handful
// of logged-in-only features, so routes render directly now. Wrap any
// future account-only page (e.g. a client dashboard) in <ProtectedRoute>,
// same component as before, unchanged.
function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/global" element={<Global />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App