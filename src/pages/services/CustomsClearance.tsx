import { FileCheck } from 'lucide-react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const CustomsClearancePage = () => (
  <ServiceDetailPage
    serviceKey="customs"
    icon={FileCheck}
    stepsCount={5}
    faqCount={4}
    features={Array(6).fill('')}
  />
);

export default CustomsClearancePage;
