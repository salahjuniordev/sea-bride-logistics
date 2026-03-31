import { Plane } from 'lucide-react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const AirFreightPage = () => (
  <ServiceDetailPage
    serviceKey="air"
    icon={Plane}
    stepsCount={5}
    faqCount={4}
    features={Array(6).fill('')}
  />
);

export default AirFreightPage;
