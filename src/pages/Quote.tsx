import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Ship, Truck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const steps = ['step1', 'step2', 'step3', 'step4'] as const;

const QuotePage = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [form, setForm] = useState({
    origin: '', destination: '', freightType: '', commodity: '',
    weight: '', dimensions: '', quantity: '',
    name: '', email: '', phone: '', company: '', message: '',
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    const ref = `QT-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9999)).padStart(4, '0')}`;
    setRefNumber(ref);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md text-center rounded-xl border bg-card p-10 shadow-lg"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">{t('quote.success')}</h2>
          <p className="mt-2 text-muted-foreground">{t('quote.successDesc')}</p>
          <div className="mt-3 text-xl font-bold font-mono-track text-accent">{refNumber}</div>
          <p className="mt-4 text-sm text-muted-foreground">{t('quote.successMsg')}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <SEO title="Request a Quote" description="Get a free freight quote from Sea Bridge Logistics. Air, sea, and road transport across Cameroon and Central Africa." path="/quote" />
      <div className="container mx-auto max-w-2xl px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">{t('quote.title')}</h1>
          <p className="mt-3 text-muted-foreground">{t('quote.subtitle')}</p>
        </div>

        {/* Progress bar */}
        <div className="mb-10 flex items-center justify-between">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    i <= currentStep
                      ? 'bg-accent text-accent-foreground'
                      : 'border-2 border-muted bg-background text-muted-foreground'
                  }`}
                >
                  {i + 1}
                </div>
                <span className="mt-1 text-xs text-muted-foreground hidden sm:block">{t(`quote.${step}`)}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`mx-2 h-0.5 flex-1 ${i < currentStep ? 'bg-accent' : 'bg-muted'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">{t('quote.origin')}</label>
                    <input
                      value={form.origin}
                      onChange={(e) => update('origin', e.target.value)}
                      className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Kribi, Cameroon"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">{t('quote.destination')}</label>
                    <input
                      value={form.destination}
                      onChange={(e) => update('destination', e.target.value)}
                      className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Douala, Cameroon"
                    />
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <label className="mb-2 block text-sm font-medium text-foreground">{t('quote.freightType')}</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { key: 'air', icon: Plane },
                      { key: 'sea', icon: Ship },
                      { key: 'road', icon: Truck },
                    ].map(({ key, icon: Icon }) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => update('freightType', key)}
                        className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                          form.freightType === key
                            ? 'border-accent bg-accent/5 text-accent'
                            : 'border-border text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        <Icon className="h-8 w-8" />
                        <span className="text-sm font-semibold capitalize">{key}</span>
                      </button>
                    ))}
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">{t('quote.commodity')}</label>
                    <input
                      value={form.commodity}
                      onChange={(e) => update('commodity', e.target.value)}
                      className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">{t('quote.weight')}</label>
                    <input
                      type="number"
                      value={form.weight}
                      onChange={(e) => update('weight', e.target.value)}
                      className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">{t('quote.dimensions')}</label>
                    <input
                      value={form.dimensions}
                      onChange={(e) => update('dimensions', e.target.value)}
                      className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="100 × 50 × 50"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">{t('quote.quantity')}</label>
                    <input
                      type="number"
                      value={form.quantity}
                      onChange={(e) => update('quantity', e.target.value)}
                      className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  {[
                    { key: 'name', type: 'text' },
                    { key: 'email', type: 'email' },
                    { key: 'phone', type: 'tel' },
                    { key: 'company', type: 'text' },
                  ].map(({ key, type }) => (
                    <div key={key}>
                      <label className="mb-1 block text-sm font-medium text-foreground">{t(`quote.${key}`)}</label>
                      <input
                        type={type}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => update(key, e.target.value)}
                        className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">{t('quote.message')}</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={3}
                      className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-6 flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep((s) => s - 1)}
              disabled={currentStep === 0}
            >
              {t('quote.previous')}
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button variant="accent" onClick={() => setCurrentStep((s) => s + 1)}>
                {t('quote.next')}
              </Button>
            ) : (
              <Button variant="accent" onClick={handleSubmit}>
                {t('quote.submit')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
