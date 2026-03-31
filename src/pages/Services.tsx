import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plane, Ship, Truck, Warehouse, FileCheck, GitBranch, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const serviceData = [
  { key: 'air', icon: Plane, route: '/services/air' },
  { key: 'sea', icon: Ship, route: '/services/sea' },
  { key: 'road', icon: Truck, route: '/services/road' },
  { key: 'warehousing', icon: Warehouse, route: '/services/warehousing' },
  { key: 'customs', icon: FileCheck, route: '/services/customs' },
  { key: 'supply', icon: GitBranch, route: '/services/supply-chain' },
];

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Our Services" description="Explore Sea Bridge Logistics services: air freight, sea freight, road transport, warehousing, customs clearance, and supply chain management in Cameroon." path="/services" />
      {/* Hero */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-5xl">{t('services.title')}</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg">{t('services.subtitle')}</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceData.map(({ key, icon: Icon, route }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t(`services.${key}.title`)}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{t(`services.${key}.desc`)}</p>
                <Link
                  to={route}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all hover:gap-2"
                >
                  {t('services.learnMore')} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground">{t('cta.title')}</h2>
          <p className="mt-3 text-primary-foreground/70">{t('cta.subtitle')}</p>
          <Button variant="hero" className="mt-8" asChild>
            <Link to="/quote">{t('cta.button')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
