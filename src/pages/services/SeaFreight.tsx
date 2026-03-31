import { Ship } from 'lucide-react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const SeaFreightPage = () => (
  <ServiceDetailPage
    serviceKey="sea"
    icon={Ship}
    stepsCount={5}
    faqCount={4}
    features={Array(6).fill('')}
  />
);

export default SeaFreightPage;
