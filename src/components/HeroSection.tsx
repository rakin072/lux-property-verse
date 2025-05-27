
import { useState, useEffect } from 'react';
import { Search, MapPin, Home, ArrowRight } from 'lucide-react';

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
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Discover Your{' '}
                <span className="text-gradient animate-glow">Dream</span>
                <br />
                Property with{' '}
                <span className="text-gradient">Estatein</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Your gateway to finding the perfect home. Experience premium real estate 
                service with our innovative platform and expert guidance.
              </p>
            </div>

            {/* Search Bar */}
            <div className="glass-card p-2 rounded-2xl max-w-md">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search properties..."
                    className="w-full bg-transparent border-none outline-none pl-12 pr-4 py-3 text-white placeholder-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="btn-primary px-6 py-3 rounded-xl flex items-center space-x-2 group">
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-8 py-4 text-lg flex items-center justify-center space-x-2 group">
                <span>Browse Properties</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary px-8 py-4 text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Content - 3D Building */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main Building */}
              <div className="relative perspective-1000">
                <div className="glass-card-dark p-8 transform-gpu transition-all duration-1000 hover:rotate-y-2 animate-float preserve-3d">
                  <div className="space-y-6">
                    {/* Building Floors */}
                    <div className="space-y-2">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="h-8 bg-gradient-to-r from-electric-500/20 to-purple-500/20 rounded border border-electric-500/30 relative overflow-hidden"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                          {/* Windows */}
                          <div className="flex justify-around items-center h-full px-2">
                            {[...Array(4)].map((_, j) => (
                              <div
                                key={j}
                                className="w-2 h-4 bg-cyan-400/50 rounded-sm animate-glow"
                                style={{ animationDelay: `${(i + j) * 0.2}s` }}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Building Base */}
                    <div className="h-12 bg-gradient-to-r from-electric-600 to-purple-600 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      <div className="flex items-center justify-center h-full">
                        <Home className="w-6 h-6 text-white animate-bounce" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements Around Building */}
              <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 glass-card rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg">200+</div>
                  <div className="text-xs text-gray-300">Properties</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <Search className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
