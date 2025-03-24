
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GymCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviewCount: number;
  equipmentCount: number;
  className?: string;
  style?: React.CSSProperties;
}

const GymCard: React.FC<GymCardProps> = ({ 
  id, 
  name, 
  image, 
  location, 
  rating, 
  reviewCount, 
  equipmentCount,
  className,
  style
}) => {
  return (
    <Link 
      to={`/gym/${id}`} 
      className={cn(
        "gym-card group block overflow-hidden h-full", 
        className
      )}
      style={style}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-lg line-clamp-1">{name}</h3>
          <span className="flex items-center text-amber-500 font-medium">
            <Star className="w-4 h-4 fill-current mr-1" />
            {rating.toFixed(1)}
          </span>
        </div>
        
        <div className="flex items-center text-muted-foreground text-sm">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-border text-sm">
          <div className="flex items-center text-muted-foreground">
            <Dumbbell className="w-4 h-4 mr-1" />
            <span>{equipmentCount} equipment</span>
          </div>
          <span className="text-muted-foreground">{reviewCount} reviews</span>
        </div>
      </div>
    </Link>
  );
};

export default GymCard;
