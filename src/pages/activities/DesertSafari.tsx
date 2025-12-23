import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Clock, Users, Star, MapPin, Shield, Award, Heart } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import GlowButton from '../../components/ui/GlowButton';

const DesertSafari: React.FC = () => {
  const safariPackages = [
    {
      id: 1,
      name: 'Rajasthan Desert Safari',
      location: 'Jaisalmer, Rajasthan',
      duration: '3 days',
      difficulty: 'Easy',
      price: 12999,
      image: 'https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience the magic of the Thar Desert with camel rides, cultural shows, and starlit nights.',
      highlights: ['Camel safari', 'Desert camping', 'Cultural performances', 'Stargazing nights']
    },
    {
      id: 2,
      name: 'Rann of Kutch Safari',
      location: 'Gujarat',
      duration: '2 days',
      difficulty: 'Easy',
      price: 8999,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Explore the white salt desert during the full moon for a surreal landscape experience.',
      highlights: ['White salt desert', 'Full moon experience', 'Local handicrafts', 'Traditional cuisine']
    },
    {
      id: 3,
      name: 'Ladakh Desert Safari',
      location: 'Ladakh',
      duration: '4 days',
      difficulty: 'Moderate',
      price: 18999,
      image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Journey through the high-altitude cold desert with double-humped Bactrian camels.',
      highlights: ['High-altitude desert', 'Bactrian camels', 'Nubra Valley', 'Monastery visits']
    }
  ];

  const safariFeatures = [
    {
      icon: Shield,
      title: 'Expert Guides',
      description: 'Local desert guides with deep knowledge of terrain, culture, and wildlife.'
    },
    {
      icon: Award,
      title: 'Authentic Experience',
      description: 'Genuine cultural immersion with local communities and traditional practices.'
    },
    {
      icon: Heart,
      title: 'Comfortable Camping',
      description: 'Well-equipped desert camps with modern amenities and traditional hospitality.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1600)'
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center"
          >
            <Sun className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Desert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Safari</span>
            <br />Adventures
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Journey through vast golden dunes, experience ancient cultures, and sleep under a blanket of stars. 
            Discover the mystical beauty and timeless charm of India's magnificent deserts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton size="lg" className="group">
              Book Safari Now
            </GlowButton>
            <GlowButton variant="ghost" size="lg">
              View Desert Tours
            </GlowButton>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-gray-400">Desert Routes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">3500+</div>
              <div className="text-gray-400">Desert Explorers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">25</div>
              <div className="text-gray-400">Local Guides</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Cultural Authenticity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Safari Packages */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Desert Expeditions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From golden sand dunes to white salt deserts - explore India's diverse and magnificent desert landscapes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {safariPackages.map((safari, index) => (
              <motion.div
                key={safari.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="overflow-hidden h-full">
                  <div className="relative h-64">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${safari.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                        safari.difficulty === 'Easy' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : safari.difficulty === 'Moderate'
                          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border-red-500/30'
                      }`}>
                        {safari.difficulty}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{safari.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{safari.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{safari.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{safari.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {safari.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Star className="w-3 h-3 text-orange-400 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">₹{safari.price.toLocaleString()}</span>
                        <span className="text-gray-400 text-sm ml-2">per person</span>
                      </div>
                      <GlowButton size="sm">Book Now</GlowButton>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Features */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Desert Safaris</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the desert's magic with authentic cultural immersion and comfortable adventures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safariFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Desert Magic?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the timeless beauty of the desert, rich cultures, and starlit nights. Your desert adventure awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton variant="secondary" size="lg">
              Book Desert Safari
            </GlowButton>
            <GlowButton variant="ghost" size="lg">
              Talk to Guide
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesertSafari;