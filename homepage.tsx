import { Link } from 'react-router-dom';
import { Monitor, Server, Laptop, Shield, Clock } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
            Expert IT Support When You Need It
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fadeInUp animation-delay-100">
            Professional, on-demand IT help. Virtual & in-person service for the St. Louis area.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp animation-delay-200">
            <Link
              to="/schedule"
              className="bg-white text-red-600 hover:bg-gray-100 text-lg font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Support
            </Link>
            <Link
              to="/services"
              className="bg-transparent hover:bg-red-500 text-white border-2 border-white text-lg font-bold py-3 px-8 rounded-lg transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Can Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-red-100 text-red-600 p-3 inline-block rounded-full mb-4">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Remote Support</h3>
              <p className="text-gray-600 mb-4">
                Quick help for software issues, email problems, and general troubleshooting from anywhere.
              </p>
              <Link to="/services" className="text-red-600 font-medium hover:underline inline-flex items-center">
                Learn more <span className="ml-1">→</span>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-red-100 text-red-600 p-3 inline-block rounded-full mb-4">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">In-Person Service</h3>
              <p className="text-gray-600 mb-4">
                Hands-on support for hardware issues, network setups, and complex problems at your location.
              </p>
              <Link to="/services" className="text-red-600 font-medium hover:underline inline-flex items-center">
                Learn more <span className="ml-1">→</span>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="bg-red-100 text-red-600 p-3 inline-block rounded-full mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security Solutions</h3>
              <p className="text-gray-600 mb-4">
                Protect your data with comprehensive security assessments, backups, and recovery plans.
              </p>
              <Link to="/services" className="text-red-600 font-medium hover:underline inline-flex items-center">
                Learn more <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose TechGuide</h2>
            <p className="text-lg text-gray-600">
              We provide reliable, friendly tech support with clear explanations and no technical jargon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 p-2 rounded-full mr-4">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-600">
                  Get help quickly with same-day appointments and rapid remote assistance for urgent issues.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-100 text-red-600 p-2 rounded-full mr-4">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expertise That Matters</h3>
                <p className="text-gray-600">
                  Benefit from years of experience solving complex IT problems for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Expert IT Support?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Book a session now and get your technology working for you, not against you.
          </p>
          <Link
            to="/schedule"
            className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-3 px-8 rounded-lg transition-all shadow-lg inline-block"
          >
            Schedule Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;