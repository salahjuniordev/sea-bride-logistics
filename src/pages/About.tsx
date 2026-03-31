import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Eye, Calendar } from 'lucide-react';
import SEO from '@/components/SEO';

const AboutPage = () => {
  const { t } = useTranslation();

  const milestones = ['m1', 'm2', 'm3', 'm4'] as const;

  return (
    <div className="min-h-screen bg-background">
      <SEO title="About Us" description="Learn about Sea Bridge Logistics — 15+ years of trusted freight forwarding across Cameroon and Central Africa." path="/about" />
      {/* Hero */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-5xl">{t('about.title')}</h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-card p-8 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{t('about.mission')}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t('about.missionText')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-card p-8 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{t('about.vision')}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t('about.visionText')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-foreground mb-12">{t('about.milestones')}</h2>
          <div className="mx-auto max-w-2xl space-y-0">
            {milestones.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Calendar className="h-4 w-4" />
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-primary/30" />}
                </div>
                <div className="pb-10">
                  <div className="text-sm font-bold text-accent">{t(`about.${key}.year`)}</div>
                  <h3 className="text-lg font-bold text-foreground">{t(`about.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`about.${key}.desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
