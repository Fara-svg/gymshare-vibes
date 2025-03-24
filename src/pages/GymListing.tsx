
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';
import GymCard from '@/components/GymCard';

// Sample data for gyms
const allGyms = [
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
  },
  {
    id: "4",
    name: "SweatBox Fitness",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    location: "West End, Boston",
    rating: 4.3,
    reviewCount: 72,
    equipmentCount: 30
  },
  {
    id: "5",
    name: "Iron Paradise",
    image: "https://images.unsplash.com/photo-1637666076872-e79a9e4e44de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    location: "Silver Lake, Los Angeles",
    rating: 4.7,
    reviewCount: 108,
    equipmentCount: 42
  },
  {
    id: "6",
    name: "Flex Fitness Center",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    location: "Downtown, Austin",
    rating: 4.4,
    reviewCount: 63,
    equipmentCount: 35
  }
];

const GymListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterExpanded, setFilterExpanded] = useState(false);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto">
        <div className="mb-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-semibold mb-4">Find Your Ideal Gym</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover and explore gyms in your area with detailed reviews and equipment information
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search for gyms by name or location" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 rounded-lg"
                />
              </div>
              <Button 
                variant="outline" 
                size="icon"
                className="h-12 w-12"
                onClick={() => setFilterExpanded(!filterExpanded)}
              >
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
              <Button className="h-12 px-6">Search</Button>
            </div>
          </div>
          
          {/* Filters */}
          {filterExpanded && (
            <div className="max-w-4xl mx-auto mb-8 bg-card rounded-lg p-6 shadow-sm border animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="City or Zip Code" className="pl-10" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Rating</SelectItem>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      <SelectItem value="4">4+ Stars</SelectItem>
                      <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Equipment</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Equipment Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Equipment</SelectItem>
                      <SelectItem value="cardio">Cardio</SelectItem>
                      <SelectItem value="weights">Free Weights</SelectItem>
                      <SelectItem value="machines">Weight Machines</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button variant="outline" size="sm" className="mr-2">Reset</Button>
                <Button size="sm">Apply Filters</Button>
              </div>
            </div>
          )}
          
          {/* Results Count */}
          <div className="text-sm text-muted-foreground mb-6">
            Showing {allGyms.length} gyms
          </div>
          
          {/* Gym Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allGyms.map((gym, index) => (
              <GymCard 
                key={gym.id}
                {...gym} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          
          {/* Pagination (placeholder) */}
          <div className="mt-12 flex justify-center">
            <nav className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" className="bg-primary/10">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymListing;
