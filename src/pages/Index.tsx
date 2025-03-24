
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, MapPin, Star, Dumbbell, ArrowRight } from 'lucide-react';
import GymCard from '@/components/GymCard';

// Sample data for featured gyms
const featuredGyms = [
  {
    id: "1",
    name: "Fitness Evolution",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    location: "Downtown, New York",
    rating: 4.8,
    reviewCount: 124,
    equipmentCount: 45
  },
  {
    id: "2",
    name: "Power House Gym",
    image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    location: "Midtown, Chicago",
    rating: 4.5,
    reviewCount: 89,
    equipmentCount: 38
  },
  {
    id: "3",
    name: "Elite Training Center",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    location: "Marina District, San Francisco",
    rating: 4.9,
    reviewCount: 156,
    equipmentCount: 52
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              Find your perfect gym today
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight md:leading-tight text-balance max-w-4xl mx-auto">
              Discover and share the best gyms in your community
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Connect with fellow fitness enthusiasts, share honest gym reviews, and find the perfect training spot for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="rounded-full text-base px-8 gap-2" 
                onClick={() => navigate('/gyms')}
              >
                Explore Gyms
                <ArrowRight size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full text-base px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gyms Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Featured Gyms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore top-rated fitness facilities loved by our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGyms.map((gym) => (
              <GymCard 
                key={gym.id}
                className="animate-scale-in" 
                {...gym} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              onClick={() => navigate('/gyms')}
              className="rounded-full px-8 py-6 text-base gap-2"
            >
              View All Gyms
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold mb-4">How GymShare Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find, review, and share your gym experiences in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary/10 p-5 rounded-full mb-6">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Discover Gyms</h3>
              <p className="text-muted-foreground">
                Find gyms in your area with detailed information about equipment, amenities, and peak hours.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary/10 p-5 rounded-full mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Read & Write Reviews</h3>
              <p className="text-muted-foreground">
                See honest opinions from other gym-goers and share your own experiences to help the community.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary/10 p-5 rounded-full mb-6">
                <Dumbbell className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Track Equipment</h3>
              <p className="text-muted-foreground">
                Check equipment availability and quality before you visit, saving you time and disappointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to find your perfect gym?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of fitness enthusiasts who are discovering new gyms and sharing their experiences.
            </p>
            <Button 
              size="lg" 
              className="rounded-full text-base px-8 gap-2"
              onClick={() => navigate('/gyms')}
            >
              Get Started
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
