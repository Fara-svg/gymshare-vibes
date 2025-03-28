
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dumbbell, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Dumbbell className="h-8 w-8 text-primary" />
          <span className="font-medium text-xl tracking-tight">GymShare</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/gyms" className="text-foreground/80 hover:text-primary transition-colors">
            Find Gyms
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground/80 hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary text-white rounded-full px-6">
              Sign Up
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2 rounded-full hover:bg-background/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white/95 backdrop-blur-sm z-40 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <Link 
              to="/" 
              className="py-3 px-4 text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/gyms" 
              className="py-3 px-4 text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Gyms
            </Link>
            <div className="pt-4 flex flex-col space-y-4 mt-auto">
              <Button variant="ghost" size="lg" className="w-full justify-center text-lg">
                Sign In
              </Button>
              <Button size="lg" className="bg-primary text-white w-full text-lg">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
