import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your appointment has been scheduled successfully.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">What Happens Next</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <div className="bg-red-100 text-red-600 p-2 rounded-full mr-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Confirmation Email</p>
                  <p className="text-gray-600">
                    You'll receive a confirmation email with your appointment details
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 text-red-600 p-2 rounded-full mr-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Reminder</p>
                  <p className="text-gray-600">
                    We'll send a reminder email 24 hours before your scheduled appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-x-4">
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Return to Home
            </Link>
            <Link 
              to="/services" 
              className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;