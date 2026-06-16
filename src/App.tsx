import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import { useDarkMode } from './hooks/useDarkMode';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-text-dark dark:text-gray-100">
        <ScrollToTop />
        <Header isDark={isDark} toggleDark={toggleDark} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        {!isAdmin && <Footer />}
        <WhatsAppButton />
        <BackToTop />
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold font-[Poppins] text-accent mb-4">404</h1>
        <h2 className="text-3xl font-bold font-[Poppins] text-primary dark:text-white mb-4">Page Not Found</h2>
        <p className="text-secondary dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <HashRouter>
      <AppLayout isDark={isDark} toggleDark={toggle} />
    </HashRouter>
  );
}
