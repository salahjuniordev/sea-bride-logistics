import { GitBranch } from 'lucide-react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const SupplyChainPage = () => (
  <ServiceDetailPage
    serviceKey="supply"
    icon={GitBranch}
    stepsCount={5}
    faqCount={4}
    features={Array(6).fill('')}
  />
);

export default SupplyChainPage;
