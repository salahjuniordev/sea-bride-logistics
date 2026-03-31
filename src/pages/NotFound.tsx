import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <Anchor className="mx-auto h-16 w-16 text-primary/30" />
        <h1 className="mt-6 text-6xl font-bold text-primary">404</h1>
        <h2 className="mt-2 text-2xl font-bold text-foreground">{t('notFound.title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('notFound.subtitle')}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="accent" asChild>
            <Link to="/">{t('notFound.home')}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/track">{t('notFound.track')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
