import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Sea Bridge Logistics" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/services', label: t('nav.services') },
                { to: '/track', label: t('nav.track') },
                { to: '/quote', label: t('nav.quote') },
                { to: '/about', label: t('nav.about') },
                { to: '/faq', label: t('nav.faq') },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/70 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold">{t('footer.contactUs')}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Kribi, Cameroon</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Douala, Cameroon</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+237670390572" className="hover:text-accent">+237 670 390 572</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:info@seabridgelogistics.com" className="hover:text-accent">info@seabridgelogistics.com</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-bold">{t('footer.followUs')}</h4>
            <div className="space-y-2 text-sm">
              <Link to="/privacy" className="block text-primary-foreground/70 hover:text-accent">{t('footer.privacy')}</Link>
              <Link to="/terms" className="block text-primary-foreground/70 hover:text-accent">{t('footer.terms')}</Link>
              <Link to="/cookies" className="block text-primary-foreground/70 hover:text-accent">{t('footer.cookies')}</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Sea Bridge Logistics. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
