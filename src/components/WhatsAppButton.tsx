import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const WhatsAppButton = () => {
  const location = useLocation();
  
  // Hide on admin routes
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <a
      href="https://wa.me/237670390572"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      title="Chat with us"
    >
      <MessageCircle className="h-7 w-7 text-card" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
