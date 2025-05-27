
import { useState, useEffect } from 'react';
import { Search, MapPin, Home, ArrowRight, Heart, Star } from 'lucide-react';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 15
    }));
    setFloatingElements(particles);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        {/* Floating Particles */}
        {floatingElements.map((particle) => (
          <div
            key={particle.id}
            className="floating-particle bg-gradient-to-r from-electric-500/30 to-purple-500/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-electric-500/10 via-transparent to-purple-500/10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy-900 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-cyan-300 font-medium">Trusted by 10,000+ Happy Families</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Find Your{' '}
                <span className="text-gradient animate-glow">Perfect</span>
                <br />
                Family Home with{' '}
                <span className="text-gradient">Hive&in</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Where luxury meets comfort. Transform your family's future with our exclusive collection of 
                premium properties designed for modern living and lasting memories.
              </p>

              <div className="flex items-center space-x-6 text-sm text-cyan-300">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Family-Focused Designs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="w-4 h-4 text-electric-400" />
                  <span>Luxury Amenities</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="glass-card p-2 rounded-2xl max-w-md glow-border">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search your dream home..."
                    className="w-full bg-transparent border-none outline-none pl-12 pr-4 py-3 text-white placeholder-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="btn-primary px-6 py-3 rounded-xl flex items-center space-x-2 group">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-8 py-4 text-lg flex items-center justify-center space-x-2 group">
                <span>View Premium Homes</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary px-8 py-4 text-lg">
                Book Free Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-xs text-gray-400">Luxury Properties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-400">98%</div>
                <div className="text-xs text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-xs text-gray-400">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Family Home Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* 3D Family Image Container */}
              <div className="relative perspective-1000">
                <div className="glass-card-dark p-4 transform-gpu transition-all duration-1000 hover:rotate-y-2 animate-float preserve-3d overflow-hidden rounded-3xl">
                  {/* Family Image with 3D effects */}
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Happy family in their dream home"
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* 3D Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-electric-500/20 rounded-2xl" />
                    
                    {/* Floating Elements on Image */}
                    <div className="absolute top-4 right-4 glass-card p-3 rounded-xl animate-float" style={{ animationDelay: '0.5s' }}>
                      <div className="text-center">
                        <Heart className="w-6 h-6 text-red-400 mx-auto mb-1" />
                        <div className="text-xs text-white font-medium">Dream Home</div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 glass-card p-3 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-medium">5.0 Rating</span>
                      </div>
                    </div>
                  </div>

                  {/* Luxury Features Showcase */}
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">Luxury Features:</span>
                      <span className="text-cyan-400 font-medium">Premium Quality</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="glass-card p-2 rounded-lg text-center">
                        <div className="text-electric-400 font-bold">5</div>
                        <div className="text-gray-300">Bedrooms</div>
                      </div>
                      <div className="glass-card p-2 rounded-lg text-center">
                        <div className="text-purple-400 font-bold">4</div>
                        <div className="text-gray-300">Bathrooms</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Floating Elements Around Image */}
              <div className="absolute -top-6 -right-6 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float glow-border" style={{ animationDelay: '1.5s' }}>
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 glass-card rounded-full flex items-center justify-center animate-float glow-border" style={{ animationDelay: '2.5s' }}>
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg">$2M+</div>
                  <div className="text-xs text-gray-300">Avg Value</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 w-14 h-14 glass-card rounded-full flex items-center justify-center animate-float glow-border" style={{ animationDelay: '0.8s' }}>
                <Home className="w-7 h-7 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
