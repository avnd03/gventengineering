import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Globe, Briefcase, Camera } from 'lucide-react';
import { companyInfo } from '../data/siteData';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary dark:bg-gray-950 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-[Poppins]">Stay Updated</h3>
              <p className="text-gray-300 mt-2 text-base leading-relaxed">Subscribe to our newsletter for engineering insights and company updates.</p>
            </div>
            <form onSubmit={handleNewsletter} className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full md:w-80 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors text-base"
                required
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-accent hover:bg-accent-dark rounded-xl font-semibold transition-colors whitespace-nowrap flex items-center gap-2 text-base"
              >
                {subscribed ? 'Subscribed ✓' : 'Subscribe'}
                {!subscribed && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img src="/images/logo_light.png" alt="Logo" className='w-35' />
            </div>
            <p className="text-gray-300 text-sm leading-[1.8] mb-8">
              Providing innovative engineering solutions from design to maintenance. Trusted partner for commercial and industrial projects in Singapore.
            </p>
            <div className="flex gap-3">
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Globe className="w-4 h-4" />
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Briefcase className="w-4 h-4" />
              </a>
              <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Camera className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-[Poppins] mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Our Clients', path: '/clients' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-[Poppins] mb-8">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'ACMV System & Maintenance', slug: 'acmv-system-maintenance' },
                { name: 'Plumbing & Sanitary', slug: 'plumbing-sanitary' },
                { name: 'Structural Engineering', slug: 'structural-design-engineering' },
                { name: 'Fire Protection', slug: 'fire-protection-system' },
                { name: 'A&A Services', slug: 'addition-alteration-services' },
              ].map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-accent text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold font-[Poppins] mb-8">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">{companyInfo.registeredAddress}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-accent text-sm transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-accent text-sm transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} GVENT Engineering Pte Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
