import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const ContactPage = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Contact Us" description="Get in touch with Sea Bridge Logistics for freight quotes, shipment inquiries, and logistics support in Douala, Cameroon." path="/contact" />
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-5xl">{t('contact.title')}</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-xl border bg-card p-8 shadow-sm">
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-2xl font-bold text-foreground">Message Sent! ✓</div>
                  <p className="mt-2 text-muted-foreground">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {['name', 'email', 'subject'].map((key) => (
                    <div key={key}>
                      <label className="mb-1 block text-sm font-medium text-foreground">
                        {t(`contact.${key}`)}
                      </label>
                      <input
                        type={key === 'email' ? 'email' : 'text'}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                        className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">{t('contact.message')}</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                      rows={5}
                      className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    {t('contact.send')}
                  </Button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              {[
                { title: t('contact.kribiOffice'), address: 'Kribi, South Region, Cameroon' },
                { title: t('contact.doualaOffice'), address: 'Douala, Littoral Region, Cameroon' },
              ].map((office) => (
                <div key={office.title} className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    {office.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{office.address}</p>
                </div>
              ))}
              <div className="rounded-xl border bg-card p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <a href="tel:+237670390572" className="text-sm text-foreground hover:text-accent">+237 670 390 572</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href="mailto:info@seabridgelogistics.com" className="text-sm text-foreground hover:text-accent">info@seabridgelogistics.com</a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="overflow-hidden rounded-xl border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127350.12!2d9.87!3d2.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054f0!2sCameroon!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
