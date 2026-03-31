import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, PackageCheck, Truck, Anchor, MapPin, CheckCircle, PackageX } from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const statusSteps = [
  { key: 'ordered', icon: ShoppingCart },
  { key: 'picked_up', icon: PackageCheck },
  { key: 'in_transit', icon: Truck },
  { key: 'arrived_at_port', icon: Anchor },
  { key: 'out_for_delivery', icon: MapPin },
  { key: 'delivered', icon: CheckCircle },
];

// Demo data for preview
const demoShipment = {
  tracking_number: 'SBL-2026-00001',
  customer_name: 'Jean-Pierre Mbarga',
  origin: 'Kribi, Cameroon',
  destination: 'Douala, Cameroon',
  freight_type: 'sea',
  status: 'in_transit',
  estimated_delivery: '2026-04-05',
  updated_at: '2026-03-27T14:30:00Z',
};

const TrackPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [trackingInput, setTrackingInput] = useState(searchParams.get('number') || '');
  const [result, setResult] = useState<typeof demoShipment | null>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);
    // Simulate search — in production, query Supabase
    setTimeout(() => {
      if (trackingInput.toUpperCase().includes('SBL')) {
        setResult(demoShipment);
      } else {
        setResult(null);
      }
      setLoading(false);
    }, 1000);
  };

  const currentStepIndex = result
    ? statusSteps.findIndex((s) => s.key === result.status)
    : -1;

  return (
    <div className="min-h-screen bg-background py-16">
      <SEO title="Track Shipment" description="Track your Sea Bridge Logistics shipment in real-time. Enter your tracking number to see the current status and location." path="/track" />
      <div className="container mx-auto max-w-2xl px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">{t('track.title')}</h1>
          <p className="mt-3 text-muted-foreground">{t('track.subtitle')}</p>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex overflow-hidden rounded-xl border bg-card shadow-sm">
          <input
            type="text"
            value={trackingInput}
            onChange={(e) => setTrackingInput(e.target.value)}
            placeholder={t('track.placeholder')}
            className="flex-1 px-4 py-3 text-sm font-mono-track bg-transparent text-foreground placeholder:font-sans placeholder:text-muted-foreground focus:outline-none"
          />
          <Button type="submit" variant="accent" className="rounded-none px-6">
            <Search className="h-4 w-4" />
            {t('track.button')}
          </Button>
        </form>

        {/* Loading */}
        {loading && (
          <div className="mt-10 space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-12 animate-pulse rounded-lg bg-muted" />
            ))}
          </div>
        )}

        {/* Result */}
        {!loading && searched && result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded-xl border bg-card p-6 shadow-sm"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
              <div>
                <div className="text-xs text-muted-foreground">Tracking Number</div>
                <div className="text-lg font-bold font-mono-track text-foreground">{result.tracking_number}</div>
              </div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent uppercase">
                {result.freight_type}
              </span>
            </div>

            {/* Route */}
            <div className="mt-4 flex items-center gap-4 text-sm">
              <div>
                <div className="text-xs text-muted-foreground">Origin</div>
                <div className="font-medium text-foreground">{result.origin}</div>
              </div>
              <div className="flex-1 border-t border-dashed border-border" />
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Destination</div>
                <div className="font-medium text-foreground">{result.destination}</div>
              </div>
            </div>

            {/* Stepper */}
            <div className="mt-8 space-y-0">
              {statusSteps.map((step, i) => {
                const Icon = step.icon;
                const isCompleted = i < currentStepIndex;
                const isCurrent = i === currentStepIndex;
                const isFuture = i > currentStepIndex;

                return (
                  <div key={step.key} className="flex gap-4">
                    {/* Indicator */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          isCompleted
                            ? 'bg-primary text-primary-foreground'
                            : isCurrent
                            ? 'bg-accent text-accent-foreground animate-pulse-orange'
                            : 'border-2 border-muted bg-background text-muted-foreground'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <Icon className="h-5 w-5" />
                        )}
                      </div>
                      {i < statusSteps.length - 1 && (
                        <div
                          className={`w-0.5 h-8 ${
                            i < currentStepIndex ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      )}
                    </div>
                    {/* Label */}
                    <div className={`pb-8 ${isFuture ? 'opacity-40' : ''}`}>
                      <div className={`font-semibold text-sm ${isCurrent ? 'text-accent' : 'text-foreground'}`}>
                        {step.key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t(`track.statuses.${step.key}`)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ETA */}
            <div className="mt-2 flex flex-wrap gap-4 border-t pt-4 text-xs text-muted-foreground">
              <div>ETA: <span className="font-medium text-foreground">{result.estimated_delivery}</span></div>
              <div>Last update: <span className="font-medium text-foreground">{new Date(result.updated_at).toLocaleString()}</span></div>
            </div>
          </motion.div>
        )}

        {/* Not found */}
        {!loading && searched && !result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded-xl border bg-card p-10 text-center shadow-sm"
          >
            <PackageX className="mx-auto h-16 w-16 text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-bold text-foreground">{t('track.notFound')}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t('track.notFoundDesc')}</p>
            <Button variant="accent" className="mt-6" asChild>
              <Link to="/contact">{t('track.contactUs')}</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TrackPage;
