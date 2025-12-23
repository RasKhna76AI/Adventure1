import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Clock, Users, Star, MapPin, Shield, Award, Heart } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import GlowButton from '../../components/ui/GlowButton';

const Skiing: React.FC = () => {
  const skiingPackages = [
    {
      id: 1,
      name: 'Gulmarg Powder Skiing',
      location: 'Kashmir',
      duration: '5 days',
      difficulty: 'Challenging',
      price: 24999,
      image: 'https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience world-class powder skiing in the pristine slopes of Gulmarg.',
      highlights: ['World-class powder', 'Gondola access', 'Professional instructors', 'Equipment included']
    },
    {
      id: 2,
      name: 'Manali Solang Skiing',
      location: 'Himachal Pradesh',
      duration: '3 days',
      difficulty: 'Moderate',
      price: 12999,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Learn to ski on the gentle slopes of Solang Valley with stunning mountain views.',
      highlights: ['Beginner friendly', 'Ski lessons included', 'Mountain views', 'Safety gear provided']
    },
    {
      id: 3,
      name: 'Auli Alpine Skiing',
      location: 'Uttarakhand',
      duration: '4 days',
      difficulty: 'Moderate',
      price: 18999,
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ski through oak and coniferous forests with panoramic Himalayan views.',
      highlights: ['Panoramic views', 'Forest skiing', 'Cable car access', 'Certified instructors']
    }
  ];

  const skiingFeatures = [
    {
      icon: Shield,
      title: 'Professional Instruction',
      description: 'Certified ski instructors with international training and local expertise.'
    },
    {
      icon: Award,
      title: 'Premium Equipment',
      description: 'Top-quality skis, boots, and safety equipment from leading brands.'
    },
    {
      icon: Heart,
      title: 'All Skill Levels',
      description: 'Programs designed for beginners to advanced skiers with personalized instruction.'
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
              backgroundImage: 'url(https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&w=1600)'
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
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
          >
            <Mountain className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Alpine <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skiing</span>
            <br />Adventures
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Carve through pristine powder snow on the majestic slopes of the Himalayas. 
            Experience the thrill of alpine skiing in India's most spectacular mountain destinations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton size="lg" className="group">
              Book Ski Trip
            </GlowButton>
            <GlowButton variant="ghost" size="lg">
              View Ski Resorts
            </GlowButton>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">8+</div>
              <div className="text-gray-400">Ski Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1500+</div>
              <div className="text-gray-400">Skiers Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15</div>
              <div className="text-gray-400">Certified Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Safety Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skiing Packages */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skiing Destinations</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From gentle learning slopes to challenging powder runs - discover India's premier skiing destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skiingPackages.map((skiing, index) => (
              <motion.div
                key={skiing.id}
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
                      style={{ backgroundImage: `url(${skiing.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                        skiing.difficulty === 'Easy' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : skiing.difficulty === 'Moderate'
                          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border-red-500/30'
                      }`}>
                        {skiing.difficulty}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{skiing.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{skiing.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{skiing.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{skiing.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {skiing.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">₹{skiing.price.toLocaleString()}</span>
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

      {/* Skiing Features */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Skiing Programs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Learn from the best and ski with confidence on India's most beautiful slopes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skiingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
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
            Ready to Hit the Slopes?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the thrill of skiing through pristine Himalayan powder. Your alpine adventure awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton variant="secondary" size="lg">
              Book Ski Adventure
            </GlowButton>
            <GlowButton variant="ghost" size="lg">
              Talk to Instructor
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skiing;