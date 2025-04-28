import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Monitor, 
  Laptop, 
  User, 
  Mail, 
  Phone,
  AlertCircle,
  Check
} from 'lucide-react';
import { toast } from 'react-hot-toast';

// Service type options
const serviceTypes = [
  { id: 'remote', label: 'Remote Support', icon: <Monitor className="w-5 h-5" /> },
  { id: 'inperson', label: 'In-Person Service', icon: <Laptop className="w-5 h-5" /> }
];

// Available time slots (would come from API in real implementation)
const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
  '2:00 PM', '3:00 PM', '4:00 PM'
];

const SchedulePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issue: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Generate available dates (next 14 days, excluding weekends)
  useEffect(() => {
    const dates: Date[] = [];
    const currentDate = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      
      // Skip weekends (0 = Sunday, 6 = Saturday)
      const day = nextDate.getDay();
      if (day !== 0 && day !== 6) {
        dates.push(nextDate);
      }
    }
    
    setAvailableDates(dates);
  }, []);
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  
  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStep = () => {
    // Validate current step
    if (step === 1 && !selectedService) {
      toast.error('Please select a service type');
      return;
    }
    
    if (step === 2 && !selectedDate) {
      toast.error('Please select a date');
      return;
    }
    
    if (step === 3 && !selectedTime) {
      toast.error('Please select a time slot');
      return;
    }
    
    setStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
  };
  
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.issue) {
      toast.error('Please fill out all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this to your backend
      // For demo purposes, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to thank you page
      navigate('/thankyou');
    } catch (error) {
      toast.error('There was an error scheduling your appointment. Please try again.');
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Schedule IT Support</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Book your appointment in just a few simple steps.
          </p>
        </div>
      </section>
      
      {/* Scheduling Widget */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Progress Steps */}
            <div className="bg-gray-100 px-6 py-4">
              <div className="flex justify-between">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-red-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-red-100 text-red-600 border-2 border-red-600' : 'bg-gray-200 text-gray-500'}`}>
                    1
                  </div>
                  <span className="text-xs mt-1">Service</span>
                </div>
                <div className="flex-1 flex items-center">
                  <div className={`h-1 w-full ${step >= 2 ? 'bg-red-600' : 'bg-gray-300'}`}></div>
                </div>
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-red-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-red-100 text-red-600 border-2 border-red-600' : 'bg-gray-200 text-gray-500'}`}>
                    2
                  </div>
                  <span className="text-xs mt-1">Date</span>
                </div>
                <div className="flex-1 flex items-center">
                  <div className={`h-1 w-full ${step >= 3 ? 'bg-red-600' : 'bg-gray-300'}`}></div>
                </div>
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-red-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 3 ? 'bg-red-100 text-red-600 border-2 border-red-600' : 'bg-gray-200 text-gray-500'}`}>
                    3
                  </div>
                  <span className="text-xs mt-1">Time</span>
                </div>
                <div className="flex-1 flex items-center">
                  <div className={`h-1 w-full ${step >= 4 ? 'bg-red-600' : 'bg-gray-300'}`}></div>
                </div>
                <div className={`flex flex-col items-center ${step >= 4 ? 'text-red-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 4 ? 'bg-red-100 text-red-600 border-2 border-red-600' : 'bg-gray-200 text-gray-500'}`}>
                    4
                  </div>
                  <span className="text-xs mt-1">Details</span>
                </div>
              </div>
            </div>
            
            {/* Step Content */}
            <div className="p-6">
              {/* Step 1: Select Service */}
              {step === 1 && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6 text-center">Select Service Type</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceTypes.map((service) => (
                      <button
                        key={service.id}
                        className={`p-6 border-2 rounded-lg flex flex-col items-center transition-all ${
                          selectedService === service.id 
                          ? 'border-red-600 bg-red-50' 
                          : 'border-gray-200 hover:border-red-300'
                        }`}
                        onClick={() => handleServiceSelect(service.id)}
                      >
                        <div className={`p-3 rounded-full mb-3 ${
                          selectedService === service.id ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{service.label}</h3>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Step 2: Select Date */}
              {step === 2 && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6 text-center">Select Date</h2>
                  <div className="flex items-center justify-center mb-6">
                    <Calendar className="w-5 h-5 mr-2 text-red-600" />
                    <span className="text-gray-600">Available dates (next 2 weeks)</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {availableDates.map((date, index) => (
                      <button
                        key={index}
                        className={`p-3 border rounded-lg text-center transition-all ${
                          selectedDate && selectedDate.toDateString() === date.toDateString() 
                          ? 'border-red-600 bg-red-50 text-red-600' 
                          : 'border-gray-200 hover:border-red-300'
                        }`}
                        onClick={() => handleDateSelect(date)}
                      >
                        <div className="text-sm">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                        <div className="text-xl font-bold">{date.getDate()}</div>
                        <div className="text-sm">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Step 3: Select Time */}
              {step === 3 && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6 text-center">Select Time</h2>
                  {selectedDate && (
                    <div className="text-center mb-6 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 mb-1 mx-auto text-red-600" />
                      <p className="font-medium">{formatDate(selectedDate)}</p>
                    </div>
                  )}
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5 mr-2 text-red-600" />
                    <span className="text-gray-600">Available time slots</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        className={`p-3 border rounded-lg text-center transition-all ${
                          selectedTime === time
                          ? 'border-red-600 bg-red-50 text-red-600' 
                          : 'border-gray-200 hover:border-red-300'
                        }`}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Step 4: Contact Info & Issue */}
              {step === 4 && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6 text-center">Your Details</h2>
                  <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Appointment Summary</span>
                    </div>
                    <div className="flex items-start mb-2">
                      <div className="p-1 bg-red-100 text-red-600 rounded-full mr-3">
                        {selectedService === 'remote' ? (
                          <Monitor className="w-4 h-4" />
                        ) : (
                          <Laptop className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">
                          {selectedService === 'remote' ? 'Remote Support' : 'In-Person Service'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mb-2">
                      <div className="p-1 bg-red-100 text-red-600 rounded-full mr-3">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">
                          {selectedDate ? formatDate(selectedDate) : ''}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-1 bg-red-100 text-red-600 rounded-full mr-3">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">{selectedTime}</p>
                      </div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          Name <span className="text-red-600">*</span>
                        </div>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          Email <span className="text-red-600">*</span>
                        </div>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          Phone Number
                        </div>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="issue">
                        <div className="flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          Describe Your Issue <span className="text-red-600">*</span>
                        </div>
                      </label>
                      <textarea
                        id="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center bg-red-600 text-white py-3 px-4 rounded-md font-medium ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'
                      } transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Check className="w-5 h-5 mr-1" />
                          Confirm Appointment
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
            
            {/* Navigation Buttons */}
            <div className="bg-gray-50 px-6 py-4 flex justify-between">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {step < 4 && (
                <button
                  onClick={nextStep}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">How does remote support work?</h3>
              <p className="text-gray-600">
                After scheduling, you'll receive a link to connect with our technician. They'll use secure screen sharing to view your computer and help resolve your issues without having to visit in person.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">What if I need to reschedule?</h3>
              <p className="text-gray-600">
                No problem! You can reschedule your appointment by calling us directly at (314) 548-9256 or by replying to your confirmation email.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">How are payments handled?</h3>
              <p className="text-gray-600">
                Payment is collected after your service is complete. We accept all major credit cards, PayPal, and Venmo. For remote sessions, we'll send a secure payment link. For in-person visits, we can process payment on-site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;