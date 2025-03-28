
import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Star, Dumbbell, Smile, Calendar, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export interface InfluencerRecommendationProps {
  influencerName: string;
  influencerImage: string;
  influencerFollowers: string;
  gymName: string;
  gymImage: string;
  rating: number;
  facilities: string;
  atmosphere: string;
  cleanliness: string;
  membershipFlexibility: string;
  pricing: string;
  className?: string;
  style?: React.CSSProperties;
}

const InfluencerRecommendation: React.FC<InfluencerRecommendationProps> = ({
  influencerName,
  influencerImage,
  influencerFollowers,
  gymName,
  gymImage,
  rating,
  facilities,
  atmosphere,
  cleanliness,
  membershipFlexibility,
  pricing,
  className,
  style
}) => {
  const isMobile = useIsMobile();
  
  // Function to render rating stars
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} 
        />
      );
    }
    return stars;
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-2xl shadow-md overflow-hidden border border-border transition-all duration-300 hover:shadow-lg",
        isMobile ? "w-[85vw] mx-auto" : "",
        className
      )}
      style={style}
    >
      {/* Gym Image Banner */}
      <div className="relative h-32 overflow-hidden">
        <img 
          src={gymImage} 
          alt={gymName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-medium">{gymName}</h3>
            <div className="flex items-center mt-1">
              {renderRatingStars(rating)}
            </div>
          </div>
        </div>
      </div>
      
      {/* Influencer Info */}
      <div className="p-4 flex items-center border-b border-border">
        <Avatar className="h-12 w-12 mr-3">
          <img src={influencerImage} alt={influencerName} className="object-cover" />
        </Avatar>
        <div>
          <h4 className="font-medium">{influencerName}</h4>
          <p className="text-sm text-muted-foreground">{influencerFollowers} followers</p>
        </div>
      </div>
      
      {/* Recommendation Details */}
      <div className="p-4 space-y-3">
        <div className="flex items-start gap-2">
          <Dumbbell className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-sm">Facilities</p>
            <p className="text-sm text-muted-foreground">{facilities}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <Smile className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-sm">Atmosphere</p>
            <p className="text-sm text-muted-foreground">{atmosphere}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-sm">Cleanliness & Hygiene</p>
            <p className="text-sm text-muted-foreground">{cleanliness}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-sm">Membership Flexibility</p>
            <p className="text-sm text-muted-foreground">{membershipFlexibility}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <DollarSign className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-sm">Pricing</p>
            <p className="text-sm text-muted-foreground">{pricing}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerRecommendation;
