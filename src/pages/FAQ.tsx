import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SEO from '@/components/SEO';

const faqItems = [
  { q: 'q1', a: 'a1' },
  { q: 'q2', a: 'a2' },
  { q: 'q3', a: 'a3' },
  { q: 'q4', a: 'a4' },
  { q: 'q5', a: 'a5' },
  { q: 'q6', a: 'a6' },
  { q: 'q7', a: 'a7' },
  { q: 'q8', a: 'a8' },
];

const FAQPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <SEO title="FAQ" description="Frequently asked questions about Sea Bridge Logistics services, shipping, customs clearance, and tracking in Cameroon." path="/faq" />
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-5xl">{t('faq.title')}</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg">{t('faq.subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map(({ q, a }) => (
              <AccordionItem
                key={q}
                value={q}
                className="rounded-xl border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {t(`faq.${q}`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t(`faq.${a}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
