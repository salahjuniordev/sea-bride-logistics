import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/track', label: t('nav.track') },
    { to: '/quote', label: t('nav.quote') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
    { to: '/faq', label: t('nav.faq') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Sea Bridge Logistics" className="h-10" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-primary-foreground/15 text-primary-foreground'
                    : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleLang}
              className="rounded-md border border-primary-foreground/30 px-3 py-1.5 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
            <Button variant="accent" size="sm" asChild>
              <Link to="/quote">{t('nav.quote')}</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              className="rounded-md border border-primary-foreground/30 px-2 py-1 text-xs font-bold text-primary-foreground"
            >
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-primary-foreground/10 bg-primary lg:hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname === link.to
                      ? 'bg-primary-foreground/15 text-primary-foreground'
                      : 'text-primary-foreground/80 hover:bg-primary-foreground/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="accent" className="mt-3 w-full" asChild>
                <Link to="/quote" onClick={() => setIsOpen(false)}>
                  {t('nav.quote')}
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
