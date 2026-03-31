import { Warehouse } from 'lucide-react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const WarehousingPage = () => (
  <ServiceDetailPage
    serviceKey="warehousing"
    icon={Warehouse}
    stepsCount={4}
    faqCount={4}
    features={Array(6).fill('')}
  />
);

export default WarehousingPage;
