
import { ReactNode } from 'react';
import { NavigationProvider } from '@/contexts/NavigationContext';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <NavigationProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </div>
    </NavigationProvider>
  );
};

export default Layout;
