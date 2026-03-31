import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Plane, Ship, Truck, Warehouse, FileCheck, GitBranch, Zap, ShieldCheck, Eye, Star, ArrowRight, MapPin, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';
import heroImage from '@/assets/hero-port.jpg';

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-primary md:text-4xl">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const serviceIcons = {
  air: Plane,
  sea: Ship,
  road: Truck,
  warehousing: Warehouse,
  customs: FileCheck,
  supply: GitBranch,
};

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track?number=${encodeURIComponent(trackingNumber.trim())}`);
    }
  };

  const services = ['air', 'sea', 'road', 'warehousing', 'customs', 'supply'] as const;

  return (
    <div>
      <SEO title="Freight & Logistics in Cameroon" description="Sea Bridge Logistics — reliable freight forwarding across Cameroon and Central Africa. Air, sea, road freight, warehousing, and customs clearance." path="/" />
      <JsonLd />
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <img src={heroImage} alt="Cargo port" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="gradient-hero absolute inset-0" />
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-card md:text-5xl lg:text-6xl"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-card/80"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Tracking bar */}
          <motion.form
            onSubmit={handleTrack}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-8 flex max-w-lg overflow-hidden rounded-xl bg-card shadow-2xl"
          >
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder={t('hero.trackPlaceholder')}
              className="flex-1 px-4 py-3 text-sm text-foreground font-mono-track placeholder:font-sans placeholder:text-muted-foreground focus:outline-none"
            />
            <Button type="submit" variant="accent" className="rounded-none px-6">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">{t('hero.trackButton')}</span>
            </Button>
          </motion.form>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 flex flex-wrap justify-center gap-4"
          >
            <Button variant="hero" asChild>
              <Link to="/quote">{t('hero.getQuote')}</Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/services">{t('hero.ourServices')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="border-b bg-card py-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 md:grid-cols-4">
          <StatCard value={500} suffix="+" label={t('stats.shipments')} />
          <StatCard value={10} suffix="+" label={t('stats.regions')} />
          <StatCard value={15} suffix="+" label={t('stats.years')} />
          <StatCard value={24} suffix="/7" label={t('stats.support')} />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t('services.title')}</h2>
            <p className="mt-3 text-muted-foreground">{t('services.subtitle')}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((key, i) => {
              const Icon = serviceIcons[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{t(`services.${key}.title`)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(`services.${key}.desc`)}</p>
                  <Link
                    to={`/services/${key === 'supply' ? 'supply-chain' : key}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                  >
                    {t('services.learnMore')} <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kribi-Douala Corridor */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">{t('corridor.title')}</h2>
          <p className="mt-3 text-primary-foreground/70">{t('corridor.subtitle')}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: MapPin, value: t('corridor.distance'), label: t('corridor.distanceLabel') },
              { icon: Clock, value: t('corridor.transitTime'), label: t('corridor.transitLabel') },
              { icon: Shield, value: t('corridor.checkpoints'), label: t('corridor.checkpointsLabel') },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <Icon className="mx-auto mb-3 h-8 w-8 text-accent" />
                <div className="text-2xl font-bold text-primary-foreground">{value}</div>
                <div className="mt-1 text-sm text-primary-foreground/70">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">{t('whyUs.title')}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Zap, key: 'speed' },
              { icon: ShieldCheck, key: 'safety' },
              { icon: Eye, key: 'transparency' },
            ].map(({ icon: Icon, key }) => (
              <div key={key} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t(`whyUs.${key}.title`)}</h3>
                <p className="mt-2 text-muted-foreground">{t(`whyUs.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">{t('testimonials.title')}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {['t1', 't2', 't3'].map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border bg-card p-6 shadow-sm"
              >
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{t(`testimonials.${key}.quote`)}"</p>
                <div className="mt-4 border-t pt-4">
                  <div className="font-semibold text-foreground">{t(`testimonials.${key}.name`)}</div>
                  <div className="text-xs text-muted-foreground">{t(`testimonials.${key}.company`)}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">{t('cta.title')}</h2>
          <p className="mt-3 text-primary-foreground/70">{t('cta.subtitle')}</p>
          <Button variant="hero" className="mt-8" asChild>
            <Link to="/quote">{t('cta.button')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
