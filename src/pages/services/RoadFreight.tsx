import { Truck } from 'lucide-react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const RoadFreightPage = () => (
  <ServiceDetailPage
    serviceKey="road"
    icon={Truck}
    stepsCount={5}
    faqCount={4}
    features={Array(6).fill('')}
  />
);

export default RoadFreightPage;
