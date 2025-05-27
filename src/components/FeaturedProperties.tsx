
import { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart, ArrowRight } from 'lucide-react';

const FeaturedProperties = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const properties = [
    {
      id: 1,
      title: "Seaside Serenity Villa",
      location: "Malibu, California",
      price: "$550,000",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop",
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: "Villa",
      featured: true
    },
    {
      id: 2,
      title: "Metropolitan Haven",
      location: "Downtown, New York",
      price: "$650,000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      beds: 3,
      baths: 2,
      sqft: 1900,
      type: "Apartment",
      featured: true
    },
    {
      id: 3,
      title: "Rustic Retreat Cottage",
      location: "Aspen, Colorado",
      price: "$350,000",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop",
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "Cottage",
      featured: true
    }
  ];

  return (
    <section id="properties" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Properties</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our handpicked selection of exceptional properties that offer the perfect blend of luxury, comfort, and location.
          </p>
          <button className="btn-secondary">
            View All Properties
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="property-card perspective-1000"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 group">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-electric-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                
                {/* Favorite Button */}
                <button className="absolute top-4 right-4 w-10 h-10 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                  <Heart className="w-5 h-5 text-white" />
                </button>
                
                {/* Quick View Button */}
                <button className="absolute bottom-4 right-4 btn-primary px-4 py-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Quick View
                </button>
              </div>

              {/* Property Details */}
              <div className="space-y-4">
                {/* Type and Location */}
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-3 py-1 rounded-full">
                    {property.type}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                </div>

                {/* Title and Price */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {property.title}
                  </h3>
                  <div className="text-2xl font-bold text-gradient">
                    {property.price}
                  </div>
                </div>

                {/* Property Features */}
                <div className="flex items-center justify-between text-gray-300 text-sm border-t border-gray-700 pt-4">
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group/btn ${
                  hoveredCard === property.id
                    ? 'btn-primary'
                    : 'glass-card text-white hover:bg-white/20'
                }`}>
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* 3D Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/0 to-purple-500/0 group-hover:from-electric-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary px-8 py-4 text-lg flex items-center space-x-2 mx-auto group">
            <span>Explore All Properties</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
