
import { useState } from 'react';
import { Home, Search, Mail, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card-dark border-b border-electric-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-electric-500 to-purple-500 rounded-lg flex items-center justify-center animate-glow">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Hive&in</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-cyan-400 transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#properties" className="text-white hover:text-cyan-400 transition-colors duration-300 relative group">
              Properties
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-white hover:text-cyan-400 transition-colors duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-white hover:text-cyan-400 transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-white hover:text-cyan-400 transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-4">
            <a href="#home" className="block text-white hover:text-cyan-400 transition-colors duration-300">Home</a>
            <a href="#properties" className="block text-white hover:text-cyan-400 transition-colors duration-300">Properties</a>
            <a href="#services" className="block text-white hover:text-cyan-400 transition-colors duration-300">Services</a>
            <a href="#about" className="block text-white hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#contact" className="block text-white hover:text-cyan-400 transition-colors duration-300">Contact</a>
            <button className="btn-primary w-full mt-4">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
