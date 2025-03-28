
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow ${isMobile ? 'pt-16' : 'pt-20'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
