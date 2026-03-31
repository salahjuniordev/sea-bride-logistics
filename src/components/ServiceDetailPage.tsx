import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, type LucideIcon } from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface ServiceDetailProps {
  serviceKey: string;
  icon: LucideIcon;
  stepsCount: number;
  faqCount: number;
  features: string[];
}

const ServiceDetailPage = ({ serviceKey, icon: Icon, stepsCount, faqCount, features }: ServiceDetailProps) => {
  const { t } = useTranslation();
  const ns = `servicePages.${serviceKey}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={t(`${ns}.title`)} description={t(`${ns}.heroDesc`)} path={`/services/${serviceKey === 'supply' ? 'supply-chain' : serviceKey}`} />
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="mb-6 inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> {t('servicePages.backToServices')}
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20">
              <Icon className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground md:text-5xl">{t(`${ns}.title`)}</h1>
              <p className="mt-2 text-primary-foreground/70 text-lg">{t(`${ns}.subtitle`)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            {t(`${ns}.description`)}
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">{t(`${ns}.featuresTitle`)}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-foreground">{t(`${ns}.feature${i + 1}`)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">{t(`${ns}.processTitle`)}</h2>
          <div className="relative space-y-0">
            {Array.from({ length: stepsCount }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-4 pb-8"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  {i < stepsCount - 1 && <div className="mt-2 h-full w-0.5 bg-border" />}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-semibold text-foreground">{t(`${ns}.step${i + 1}Title`)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t(`${ns}.step${i + 1}Desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">{t(`${ns}.faqTitle`)}</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {Array.from({ length: faqCount }).map((_, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {t(`${ns}.faq${i + 1}Q`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t(`${ns}.faq${i + 1}A`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

export default ServiceDetailPage;
