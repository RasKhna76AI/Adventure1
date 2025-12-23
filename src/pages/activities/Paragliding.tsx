import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Clock, Users, Star, MapPin, Shield, Award, Heart } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import GlowButton from '../../components/ui/GlowButton';

const Paragliding: React.FC = () => {
  const paraglidingPackages = [
    {
      id: 1,
      name: 'Bir Billing Paragliding',
      location: 'Himachal Pradesh',
      duration: '1 day',
      difficulty: 'Easy',
      price: 3999,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Soar through the skies at the paragliding capital of India with stunning valley views.',
      highlights: ['World-class flying site', '30-45 min flight', 'Professional pilots', 'HD video recording']
    },
    {
      id: 2,
      name: 'Manali Solang Valley',
      location: 'Himachal Pradesh',
      duration: '1 day',
      difficulty: 'Easy',
      price: 2999,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience the thrill of flying over snow-capped peaks and lush green valleys.',
      highlights: ['Snow-capped views', '20-30 min flight', 'Beginner friendly', 'Safety briefing included']
    },
    {
      id: 3,
      name: 'Nainital Paragliding',
      location: 'Uttarakhand',
      duration: '1 day',
      difficulty: 'Moderate',
      price: 3499,
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fly over the beautiful lake city with panoramic views of the Himalayas.',
      highlights: ['Lake city views', '25-35 min flight', 'Himalayan panorama', 'Certificate provided']
    }
  ];

  const flyingFeatures = [
    {
      icon: Shield,
      title: 'Certified Pilots',
      description: 'APPI certified pilots with thousands of hours of flying experience.'
    },
    {
      icon: Award,
      title: 'Premium Equipment',
      description: 'Latest paragliding equipment from top international brands for maximum safety.'
    },
    {
      icon: Heart,
      title: 'Perfect Weather',
      description: 'We only fly in optimal weather conditions for the safest and best experience.'
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
              backgroundImage: 'url(https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1600)'
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
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center"
          >
            <Plane className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Soar Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">the Clouds</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the ultimate freedom as you glide through the sky like a bird. 
            Discover breathtaking aerial views and feel the magic of flight with our tandem paragliding adventures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton size="lg" className="group">
              Book Flight Now
            </GlowButton>
            <GlowButton variant="ghost" size="lg">
              View Flying Sites
            </GlowButton>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Flying Sites</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-gray-400">Successful Flights</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">20</div>
              <div className="text-gray-400">Certified Pilots</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Safety Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Paragliding Packages */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Flying Experiences</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from India's most spectacular paragliding destinations for an unforgettable aerial adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paraglidingPackages.map((paragliding, index) => (
              <motion.div
                key={paragliding.id}
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
                      style={{ backgroundImage: `url(${paragliding.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                        paragliding.difficulty === 'Easy' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : paragliding.difficulty === 'Moderate'
                          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border-red-500/30'
                      }`}>
                        {paragliding.difficulty}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{paragliding.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{paragliding.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{paragliding.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{paragliding.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {paragliding.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Star className="w-3 h-3 text-orange-400 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">₹{paragliding.price.toLocaleString()}</span>
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

      {/* Flying Features */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Fly <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">With Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the safest and most thrilling paragliding adventures with our expert team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flyingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
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
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 relative overflow-hidden">
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
            Ready to Touch the Sky?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the freedom of flight and see the world from a bird's eye view. Your sky adventure begins now.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton variant="secondary" size="lg">
              Book Your Flight
            </GlowButton>
            <GlowButton variant="ghost" size="lg">
              Talk to Pilot
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paragliding;