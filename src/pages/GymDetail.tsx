
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  Users, 
  MessageSquare, 
  Dumbbell,
  ThumbsUp,
  ThumbsDown,
  Share2
} from 'lucide-react';

// Sample gym data
const gymData = {
  "1": {
    id: "1",
    name: "Fitness Evolution",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      "https://images.unsplash.com/photo-1637666076872-e79a9e4e44de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    ],
    description: "Fitness Evolution is a premium gym facility offering state-of-the-art equipment, dedicated training zones, and expert staff. Our mission is to provide a welcoming environment for fitness enthusiasts of all levels.",
    location: "500 Broadway, Downtown, New York, NY 10012",
    hours: "Mon-Fri: 5:00 AM - 11:00 PM\nSat-Sun: 7:00 AM - 9:00 PM",
    phone: "+1 (212) 555-7890",
    website: "https://fitnessevolution.example.com",
    rating: 4.8,
    reviewCount: 124,
    memberCount: 2500,
    priceRange: "$$$",
    amenities: ["Free Parking", "Showers", "Lockers", "Sauna", "Towel Service", "Nutritionist"],
    equipment: [
      { name: "Treadmills", count: 15, status: "Excellent" },
      { name: "Exercise Bikes", count: 12, status: "Good" },
      { name: "Rowing Machines", count: 8, status: "Excellent" },
      { name: "Free Weights", count: "Extensive", status: "Excellent" },
      { name: "Smith Machines", count: 4, status: "Good" },
      { name: "Cable Machines", count: 6, status: "Excellent" }
    ],
    reviews: [
      {
        id: "r1",
        user: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        date: "2023-05-15",
        text: "This gym has everything you could possibly need. The equipment is always well-maintained and the staff is incredibly helpful. I've been a member for over a year and have never had any issues with overcrowding, even during peak hours.",
        likes: 24,
        dislikes: 2
      },
      {
        id: "r2",
        user: "Sarah Miller",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        date: "2023-04-22",
        text: "Great gym with tons of equipment. The only reason I'm not giving 5 stars is because it can get pretty busy after work hours. Morning sessions are perfect though. Love the clean facilities and friendly atmosphere.",
        likes: 18,
        dislikes: 1
      },
      {
        id: "r3",
        user: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
        rating: 5,
        date: "2023-03-10",
        text: "Best gym in the area by far. The free weight section is extensive and they have all the specialized equipment I need for my training routine. Staff is knowledgeable and the whole place is kept spotless.",
        likes: 32,
        dislikes: 0
      }
    ]
  },
  "2": {
    id: "2",
    name: "Power House Gym",
    images: [
      "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ],
    description: "Power House Gym is dedicated to serious fitness enthusiasts. Our facility features premium strength training equipment, specialized zones for powerlifting, and expert trainers available for personalized guidance.",
    location: "350 N Michigan Ave, Midtown, Chicago, IL 60601",
    hours: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 8:00 AM - 8:00 PM",
    phone: "+1 (312) 555-4210",
    website: "https://powerhousegym.example.com",
    rating: 4.5,
    reviewCount: 89,
    memberCount: 1800,
    priceRange: "$$$",
    amenities: ["Free Parking", "Showers", "Lockers", "Smoothie Bar", "Personal Training"],
    equipment: [
      { name: "Squat Racks", count: 8, status: "Excellent" },
      { name: "Bench Press Stations", count: 6, status: "Excellent" },
      { name: "Deadlift Platforms", count: 4, status: "Excellent" },
      { name: "Free Weights", count: "Extensive", status: "Good" },
      { name: "Cardio Machines", count: 20, status: "Good" },
      { name: "Cable Machines", count: 5, status: "Excellent" }
    ],
    reviews: [
      {
        id: "r1",
        user: "Thomas Wright",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        date: "2023-06-05",
        text: "Best gym for serious lifters in Chicago. They have multiple squat racks and deadlift platforms that are always available. The atmosphere is motivating and the staff knows their stuff. Highly recommend for anyone serious about strength training.",
        likes: 35,
        dislikes: 1
      },
      {
        id: "r2",
        user: "Jennifer Lopez",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 4,
        date: "2023-05-12",
        text: "Great selection of free weights and machines. The staff is helpful but not intrusive. The only downside is that it can get quite crowded during evening hours, especially around the bench press area.",
        likes: 22,
        dislikes: 3
      }
    ]
  },
  "3": {
    id: "3",
    name: "Elite Training Center",
    images: [
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      "https://images.unsplash.com/photo-1637666076872-e79a9e4e44de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    ],
    description: "Elite Training Center offers a comprehensive fitness experience with cutting-edge equipment, specialized training programs, and a supportive community. Our facility is designed to help members achieve their fitness goals efficiently.",
    location: "1234 Marina Blvd, Marina District, San Francisco, CA 94123",
    hours: "Mon-Fri: 5:30 AM - 11:30 PM\nSat-Sun: 6:30 AM - 9:30 PM",
    phone: "+1 (415) 555-3890",
    website: "https://elitetraining.example.com",
    rating: 4.9,
    reviewCount: 156,
    memberCount: 3200,
    priceRange: "$$$$",
    amenities: ["Premium Parking", "Luxury Showers", "Digital Lockers", "Sauna", "Steam Room", "Recovery Center", "Nutrition Bar"],
    equipment: [
      { name: "Treadmills", count: 20, status: "Excellent" },
      { name: "Ellipticals", count: 15, status: "Excellent" },
      { name: "Rowing Machines", count: 10, status: "Excellent" },
      { name: "Free Weights", count: "Extensive", status: "Excellent" },
      { name: "Smith Machines", count: 5, status: "Excellent" },
      { name: "Functional Training Area", count: "Large", status: "Excellent" }
    ],
    reviews: [
      {
        id: "r1",
        user: "Emily Watson",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
        date: "2023-06-28",
        text: "Absolutely worth every penny! The equipment is always pristine, and the amenities are top-notch. I particularly love the recovery center with massage chairs and compression therapy. The trainers are incredibly knowledgeable and have helped me achieve results I never thought possible.",
        likes: 42,
        dislikes: 1
      },
      {
        id: "r2",
        user: "David Park",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        rating: 5,
        date: "2023-05-30",
        text: "Elite Training Center lives up to its name. The equipment selection is unmatched in the city, and everything is maintained perfectly. I appreciate the spacious layout that prevents overcrowding even during peak hours. The staff remembers your name which adds a nice personal touch.",
        likes: 38,
        dislikes: 0
      },
      {
        id: "r3",
        user: "Sophia Martinez",
        avatar: "https://randomuser.me/api/portraits/women/34.jpg",
        rating: 4,
        date: "2023-04-15",
        text: "Great facility with all the latest equipment. Clean, well-maintained, and the staff is friendly. The only reason for 4 stars instead of 5 is the price point, which is quite high even for San Francisco standards. That said, if you can afford it, it's definitely one of the best options in the city.",
        likes: 27,
        dislikes: 2
      }
    ]
  }
};

const GymDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!id || !gymData[id as keyof typeof gymData]) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-2xl font-medium mb-4">Gym not found</h1>
        <p className="text-muted-foreground">The gym you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  const gym = gymData[id as keyof typeof gymData];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-muted'}`} 
      />
    ));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gym.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? gym.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">{gym.name}</h1>
              <div className="flex items-center mt-2 text-sm">
                <div className="flex mr-2">{renderStars(gym.rating)}</div>
                <span className="font-medium">{gym.rating.toFixed(1)}</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">{gym.reviewCount} reviews</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-muted-foreground">{gym.priceRange}</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-1"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button size="sm" className="bg-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-10 relative overflow-hidden rounded-xl">
          <div 
            className="aspect-[21/9] bg-muted relative overflow-hidden"
            style={{
              backgroundImage: `url(${gym.images[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
              onClick={prevImage}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
              onClick={nextImage}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {gym.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Gym Info */}
          <div className="md:col-span-2">
            <Tabs defaultValue="info">
              <TabsList className="mb-6">
                <TabsTrigger value="info">Information</TabsTrigger>
                <TabsTrigger value="equipment">Equipment</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="animate-fade-in">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3">About</h3>
                    <p className="text-muted-foreground">{gym.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 gap-y-2">
                      {gym.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3">Member Insights</h3>
                    <div className="flex items-center mb-3">
                      <Users className="w-5 h-5 mr-2 text-muted-foreground" />
                      <span>Approximately {gym.memberCount} active members</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on member check-ins and community data
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="equipment" className="animate-fade-in">
                <h3 className="text-xl font-medium mb-4">Available Equipment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gym.equipment.map((item) => (
                    <div 
                      key={item.name} 
                      className="flex items-start p-4 rounded-lg border"
                    >
                      <Dumbbell className="w-5 h-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <div className="text-sm text-muted-foreground mt-1">
                          <p>Quantity: {item.count}</p>
                          <p>Condition: {item.status}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-medium">Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                
                <div className="space-y-6">
                  {gym.reviews.map((review) => (
                    <div key={review.id} className="border rounded-lg p-5">
                      <div className="flex justify-between mb-3">
                        <div className="flex items-center">
                          <img 
                            src={review.avatar} 
                            alt={review.user} 
                            className="w-10 h-10 rounded-full mr-3" 
                          />
                          <div>
                            <h4 className="font-medium">{review.user}</h4>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <div className="flex mr-2">
                                {renderStars(review.rating)}
                              </div>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{review.text}</p>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          <span>{review.likes}</span>
                        </button>
                        <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                          <ThumbsDown className="w-4 h-4 mr-1" />
                          <span>{review.dislikes}</span>
                        </button>
                        <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="md:col-span-1">
            <div className="rounded-lg border p-5 sticky top-24">
              <h3 className="font-medium text-lg mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">{gym.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-0.5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium mb-1">Hours</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{gym.hours}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-0.5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">{gym.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="w-5 h-5 mr-3 mt-0.5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium mb-1">Website</h4>
                    <a 
                      href={gym.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <Button className="w-full">Get Directions</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDetail;
