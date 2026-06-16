import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Clients', path: '/clients' },
  { name: 'Contact', path: '/contact' },
];

export default function Header({ isDark, toggleDark }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-14 opacity-100'}`}>
        <div className="bg-primary text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center py-2.5 text-sm">
            <div className="flex items-center gap-5">
              <a href="tel:+6561234567" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5" />
                +65 6123 4567
              </a>
              <span className="hidden sm:inline text-white/30">|</span>
              <a href="mailto:info@gvent.com.sg" className="hidden sm:inline hover:text-accent transition-colors">
                info@gvent.com.sg
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden md:inline text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 md:w-12 md:h-12 bg-accent rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg md:text-xl font-[Poppins]">G</span>
            </div>
            <div>
              <span className={`text-lg md:text-xl font-bold font-[Poppins] tracking-tight ${
                isScrolled ? 'text-primary dark:text-white' : 'text-white'
              }`}>
                GVENT
              </span>
              <span className={`hidden sm:block text-[10px] uppercase tracking-[0.2em] mt-0.5 ${
                isScrolled ? 'text-secondary dark:text-gray-400' : 'text-gray-300'
              }`}>
                Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-accent'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-5 right-5 h-0.5 bg-accent rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDark}
              className={`p-2.5 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95"
            >
              Get Free Consultation
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2.5 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-xl overflow-hidden"
          >
            <nav className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-5 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-accent/10 text-accent'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="block w-full px-5 py-4 bg-accent text-white text-center text-base font-semibold rounded-xl"
                >
                  Get Free Consultation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
