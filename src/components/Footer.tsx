
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="font-medium text-lg">GymShare</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Discover and share the best gyms in your community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Community Guidelines</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Gym Owners</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Developers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} GymShare. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
