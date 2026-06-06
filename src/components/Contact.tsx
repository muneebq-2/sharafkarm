import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xzzjonlv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
      } else {
        setErrors({ submit: 'Failed to send message. Please try again.' });
      }
    } catch {
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@sharafkarmsolutions.com',
      href: 'mailto:info@sharafkarmsolutions.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 304 541 0966',
      href: 'tel:+923045410966',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'NUST, Islamabad',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Tell us about your project"
          description="Share your scope, drawings, and timeline. We respond within 24 hours."
        />

        <div className="lg:grid lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3 card p-8 mb-10 lg:mb-0">
            <h3 className="text-xl font-bold text-dark-900 mb-6">Request a quote</h3>

            {isSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle className="h-14 w-14 text-primary-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-dark-900 mb-2">Message sent</h4>
                <p className="text-dark-600">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        errors.name ? 'border-red-300' : 'border-dark-200'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        errors.email ? 'border-red-300' : 'border-dark-200'
                      }`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-1.5">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+92 ..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1.5">
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors.message ? 'border-red-300' : 'border-dark-200'
                    }`}
                    placeholder="Scope, timeline, drawings available..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
                {errors.submit && <p className="text-sm text-red-600">{errors.submit}</p>}
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-50 text-primary-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-primary-700 hover:text-primary-800 text-sm">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-dark-600 text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <a
              href="https://wa.me/923045410966"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 card p-5 hover:border-primary-200 transition-colors"
            >
              <div className="p-3 rounded-lg bg-green-50 text-green-700">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-dark-900">WhatsApp</p>
                <p className="text-sm text-dark-600">Quick chat for urgent inquiries</p>
              </div>
            </a>

            <div className="card p-5 text-sm text-dark-600 space-y-2">
              <p className="font-semibold text-dark-900 mb-2">Availability</p>
              <div className="flex justify-between"><span>Mon – Fri</span><span>9 AM – 10 PM</span></div>
              <div className="flex justify-between"><span>Saturday</span><span>10 AM – 8 PM</span></div>
              <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
