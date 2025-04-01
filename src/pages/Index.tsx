import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, MapPin, Star, Dumbbell, ArrowRight } from 'lucide-react';
import GymCard from '@/components/GymCard';
import InfluencerRecommendation from '@/components/InfluencerRecommendation';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    location: "Marina District, San Francisco",
    rating: 4.9,
    reviewCount: 156,
    equipmentCount: 52
  }
];

// Sample data for influencer recommendations
const influencerRecommendations = [
  {
    influencerName: "Alex Fitness",
    influencerImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    influencerFollowers: "125K",
    gymName: "Elevate Fitness Club",
    gymImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.9,
    facilities: "Top-notch equipment with dedicated zones for strength, cardio, and functional training.",
    atmosphere: "Energetic and motivating with great music and friendly staff.",
    cleanliness: "Spotlessly clean with regular equipment sanitization and well-maintained changing rooms.",
    membershipFlexibility: "Flexible monthly plans with no long-term commitment required.",
    pricing: "$89/month with student and corporate discounts available."
  },
  {
    influencerName: "Samantha Strong",
    influencerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    influencerFollowers: "89K",
    gymName: "Urban Strength Collective",
    gymImage: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.7,
    facilities: "Excellent free weight area with competition-grade equipment and specialized lifting platforms.",
    atmosphere: "Serious training environment perfect for dedicated lifters.",
    cleanliness: "Very well maintained with regular cleaning throughout the day.",
    membershipFlexibility: "Monthly and annual plans with a 7-day free trial for new members.",
    pricing: "$75/month with discounts for 6-month commitments."
  },
  {
    influencerName: "Mike Muscle",
    influencerImage: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    influencerFollowers: "212K",
    gymName: "PowerFlex Gym",
    gymImage: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.8,
    facilities: "Huge selection of machines and free weights with 24/7 access and dedicated CrossFit area.",
    atmosphere: "Welcoming to all fitness levels with a supportive community feel.",
    cleanliness: "Excellent standards with staff regularly sanitizing equipment and areas.",
    membershipFlexibility: "Flexible options including day passes and various membership tiers.",
    pricing: "$65/month with family plan discounts and corporate rates."
  },
  {
    influencerName: "Fitness Fanatic",
    influencerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    influencerFollowers: "78K",
    gymName: "The Fitness Hub",
    gymImage: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.6,
    facilities: "Modern equipment with great variety and specialized studios for classes.",
    atmosphere: "Vibrant and social with a mix of serious trainers and casual gym-goers.",
    cleanliness: "Well-maintained facilities with regular cleaning and modern locker rooms.",
    membershipFlexibility: "Pay-as-you-go options or monthly memberships with easy cancellation.",
    pricing: "$79/month with free personal training session for new members."
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
              Your passport to a world of fitness, allowing you to seamlessly discover, share and access top-rated gyms with just a QR code
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              GymShare connects you to trusted gym influencers, real-time facility insights, and flexible membership options—empowering you to work out where and when you want.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Your passport to a world of fitness, allowing you to seamlessly discover, compare, and access top-rated gyms with just a QR code.
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

      {/* Influencer Recommendations Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Influencer Recommendations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what fitness influencers are saying about local gyms
            </p>
          </div>
          
          <div className="mt-10 px-4 md:px-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {influencerRecommendations.map((rec, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                      <InfluencerRecommendation {...rec} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="relative static -translate-y-0 left-0" />
                <CarouselNext className="relative static -translate-y-0 right-0" />
              </div>
            </Carousel>
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
