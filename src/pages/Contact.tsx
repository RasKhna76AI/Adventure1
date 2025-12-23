import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GlowButton from '../components/ui/GlowButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    adventure: 'trekking'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@adventurex.com',
      description: 'Send us your questions anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      description: 'Mon-Sat, 9:00 AM - 6:00 PM'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Adventure Hub, Manali',
      description: 'Himachal Pradesh, India'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '9:00 AM - 6:00 PM',
      description: 'Monday to Saturday'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1600)'
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300">
            Ready to plan your next adventure? We're here to help make your dreams a reality.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Plan Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Adventure</span>
                    </h2>
                    <p className="text-gray-400">
                      Tell us about your dream adventure and we'll create a custom experience just for you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="adventure" className="block text-sm font-medium text-gray-300 mb-2">
                          Adventure Type
                        </label>
                        <select
                          id="adventure"
                          name="adventure"
                          value={formData.adventure}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        >
                          <option value="trekking">Trekking</option>
                          <option value="rafting">River Rafting</option>
                          <option value="paragliding">Paragliding</option>
                          <option value="skiing">Skiing</option>
                          <option value="diving">Scuba Diving</option>
                          <option value="safari">Desert Safari</option>
                          <option value="custom">Custom Adventure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about your adventure *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                        placeholder="Describe your ideal adventure, group size, preferred dates, and any special requirements..."
                      />
                    </div>

                    <GlowButton size="lg" className="w-full group">
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </GlowButton>
                  </form>
                </GlassCard>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {info.title}
                          </h3>
                          <p className="text-green-400 font-medium mb-1">
                            {info.content}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick Response */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <GlassCard className="p-6 text-center">
                  <h3 className="text-lg font-bold text-white mb-3">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    We respond to all inquiries within 2 hours during business hours.
                  </p>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full">
                    <span className="text-2xl">⚡</span>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Us in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Mountains</span>
            </h2>
            <p className="text-xl text-gray-400">
              Visit our adventure hub nestled in the beautiful valleys of Manali
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <GlassCard className="p-4">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5234567890123!2d77.1879!3d32.2396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE0JzIyLjYiTiA3N8KwMTEnMTYuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Adventure Hub Manali Location"
                />
              </div>
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-5 h-5 text-green-500 mr-2" />
                  <h3 className="text-lg font-bold text-white">Adventure Hub Manali</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Old Manali Road, Near Mall Road<br />
                  Manali, Himachal Pradesh 175131
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Got questions? We've got answers to help plan your adventure.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book my adventure?",
                answer: "We recommend booking at least 2-3 weeks in advance, especially during peak seasons (March-June, September-November). This ensures availability and allows us to prepare everything for your adventure."
              },
              {
                question: "What's included in the adventure packages?",
                answer: "Our packages typically include professional guides, safety equipment, accommodation (if multi-day), meals, transportation during the activity, and all necessary permits. Specific inclusions vary by package."
              },
              {
                question: "Do you provide equipment and gear?",
                answer: "Yes, we provide all necessary safety equipment and gear including helmets, harnesses, life jackets, and other activity-specific equipment. We also have rental options for personal gear like jackets and shoes."
              },
              {
                question: "What if the weather is bad?",
                answer: "Safety is our priority. If weather conditions are unsafe, we'll reschedule your adventure or offer alternative indoor activities. We provide flexible rescheduling options and weather updates."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;