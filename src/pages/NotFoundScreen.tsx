import React from 'react';
import { Button } from '../components/ui';
import { useNavigate } from 'react-router-dom';
import { SearchX } from 'lucide-react';

export default function NotFoundScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1 bg-background px-4 md:px-8 py-12 lg:py-16 min-h-[70vh] items-center justify-center w-full">
      <div className="max-w-[500px] mx-auto text-center">
        <div className="w-24 h-24 bg-primary-light rounded-[24px] flex items-center justify-center mx-auto mb-8 text-primary shadow-sm rotate-3">
           <SearchX size={48} />
        </div>
        <h1 className="text-h1 mb-4">Page Not Found</h1>
        <p className="text-body text-text-secondary text-lg mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Button size="lg" onClick={() => navigate('/')}>Go Home</Button>
           <Button variant="secondary" size="lg" onClick={() => navigate('/contact')}>Contact Support</Button>
        </div>
      </div>
    </div>
  );
}
