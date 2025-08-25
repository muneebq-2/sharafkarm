import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "info@sharafkarmsolutions.com",
      href: "mailto:info@sharafkarmsolutions.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+92 3045410966",
      href: "tel:+92 3045410966"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "NUST, Islamabad.",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-dark-800 mb-4">Contact Us</h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Ready to start your next civil engineering project? Let's work together to bring 
            your vision to life with our expertise and dedication to excellence.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div className="card p-8 mb-12 lg:mb-0 animate-fade-in-left">
            <h3 className="text-2xl font-bold text-dark-800 mb-6">Get a Quote</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-primary-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-dark-800 mb-2">Message Sent Successfully!</h4>
                <p className="text-dark-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 shadow-soft focus:shadow-medium ${
                      errors.name ? 'border-red-300' : 'border-dark-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 shadow-soft focus:shadow-medium ${
                      errors.email ? 'border-red-300' : 'border-dark-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none shadow-soft focus:shadow-medium ${
                      errors.message ? 'border-red-300' : 'border-dark-300'
                    }`}
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <h3 className="text-2xl font-bold text-dark-800 mb-6">Let's Work Together</h3>
              <p className="text-dark-600 leading-relaxed mb-8">
                Whether you're planning a small residential project or a large commercial development, 
                our team is ready to provide the expertise and support you need. Contact us today to 
                discuss your requirements and discover how we can add value to your construction venture.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-3 rounded-xl shadow-soft">
                    <div className="text-primary-700">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-800">{info.label}</h4>
                    {info.href.startsWith('#') ? (
                      <p className="text-dark-600">{info.value}</p>
                    ) : (
                      <a
                        href={info.href}
                        className="text-primary-700 hover:text-primary-800 transition-colors duration-200 font-medium"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="card p-6">
              <h4 className="font-bold text-dark-800 mb-3">Availability</h4>
              <div className="space-y-2 text-sm text-dark-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-xl p-6 shadow-soft">
              <h4 className="font-bold text-primary-800 mb-2">Quick Response Guarantee</h4>
              <p className="text-primary-700 text-sm font-medium">
                We typically respond to all inquiries within 24 hours. For urgent projects, 
                please call us directly for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;