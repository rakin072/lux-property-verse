
import { Home, TrendingUp, Settings, Lightbulb } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Find Your Dream Home",
      description: "Explore our extensive portfolio of premium properties tailored to your unique preferences and lifestyle requirements.",
      features: ["Personalized Search", "Expert Guidance", "Virtual Tours", "Market Insights"],
      color: "from-electric-500 to-cyan-400"
    },
    {
      icon: TrendingUp,
      title: "Unlock Property Value",
      description: "Maximize your property's potential with our comprehensive valuation services and strategic market positioning.",
      features: ["Property Valuation", "Market Analysis", "Investment Strategy", "ROI Optimization"],
      color: "from-purple-500 to-electric-500"
    },
    {
      icon: Settings,
      title: "Effortless Management",
      description: "Streamline your property management with our end-to-end services, from maintenance to tenant relations.",
      features: ["Tenant Screening", "Maintenance Coordination", "Financial Reporting", "Legal Compliance"],
      color: "from-cyan-400 to-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Smart Investments",
      description: "Make informed investment decisions with our expert analysis and comprehensive market intelligence.",
      features: ["Investment Analysis", "Risk Assessment", "Portfolio Diversification", "Growth Strategies"],
      color: "from-electric-500 to-purple-400"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-electric-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-electric-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive real estate solutions designed to exceed your expectations and deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card-dark p-8 group transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon and Title */}
                <div className="flex items-start space-x-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-gray-300 text-sm"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-electric-500/0 to-purple-500/0 group-hover:from-electric-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-500 pointer-events-none`} />

                {/* Decorative Line */}
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-500 mt-6`} />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 glass-card-dark p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let our experts guide you through your real estate journey with personalized service and proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3">Schedule Consultation</button>
            <button className="btn-secondary px-8 py-3">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
