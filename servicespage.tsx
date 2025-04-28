import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Laptop, 
  Cloud, 
  Shield, 
  Wifi, 
  Printer, 
  HardDrive, 
  Smartphone 
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Remote Support",
      description: "Quick, convenient help from anywhere via screen sharing and remote access.",
      icon: <Monitor className="w-6 h-6" />,
      features: [
        "Software troubleshooting",
        "Email configuration",
        "Virus removal",
        "System optimization"
      ]
    },
    {
      id: 2,
      title: "In-Person Service",
      description: "Hands-on support at your home or business in the St. Louis area.",
      icon: <Laptop className="w-6 h-6" />,
      features: [
        "Hardware installation",
        "Computer repairs",
        "Office setups",
        "Equipment upgrades"
      ]
    },
    {
      id: 3,
      title: "Cloud Services",
      description: "Secure, reliable cloud solutions for storage, backup, and collaboration.",
      icon: <Cloud className="w-6 h-6" />,
      features: [
        "Cloud migration",
        "Microsoft 365 setup",
        "Google Workspace",
        "Data backup strategies"
      ]
    },
    {
      id: 4,
      title: "Security Solutions",
      description: "Protect your data and systems from threats and unauthorized access.",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Security assessments",
        "Antivirus implementation",
        "Password management",
        "Data encryption"
      ]
    },
    {
      id: 5,
      title: "Network Setup",
      description: "Design and implement reliable, secure networks for home or business.",
      icon: <Wifi className="w-6 h-6" />,
      features: [
        "Wi-Fi optimization",
        "Router configuration",
        "Network troubleshooting",
        "VPN setup"
      ]
    },
    {
      id: 6,
      title: "Printer Support",
      description: "Resolve printer issues and optimize your printing environment.",
      icon: <Printer className="w-6 h-6" />,
      features: [
        "Printer installation",
        "Wireless printing setup",
        "Driver updates",
        "Print server configuration"
      ]
    },
    {
      id: 7,
      title: "Data Recovery",
      description: "Recover important files from damaged or corrupted storage devices.",
      icon: <HardDrive className="w-6 h-6" />,
      features: [
        "Hard drive recovery",
        "Deleted file restoration",
        "Corrupted storage repair",
        "Backup implementation"
      ]
    },
    {
      id: 8,
      title: "Mobile Device Help",
      description: "Support for smartphones, tablets, and other mobile devices.",
      icon: <Smartphone className="w-6 h-6" />,
      features: [
        "Device setup",
        "App troubleshooting",
        "Email configuration",
        "Data transfer"
      ]
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our IT Support Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional technology solutions to keep your systems running smoothly.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="bg-red-100 text-red-600 p-3 inline-flex rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-red-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/schedule" 
                    className="block text-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Schedule Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Something Specific?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Don't see exactly what you're looking for? We offer customized IT solutions 
            tailored to your unique needs and challenges.
          </p>
          <Link 
            to="/schedule" 
            className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;