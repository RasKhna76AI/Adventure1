import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mountain, Waves, Plane, Fish, Sun } from 'lucide-react';
import { activities } from '../data/mockData';
import GlassCard from '../components/ui/GlassCard';
import GlowButton from '../components/ui/GlowButton';

const Activities: React.FC = () => {
  const iconMap = {
    Mountain,
    Waves,
    Plane,
    Fish,
    Sun
  };

  const activityRoutes = {
    'Trekking': '/activities/trekking',
    'River Rafting': '/activities/river-rafting',
    'Paragliding': '/activities/paragliding',
    'Skiing': '/activities/skiing',
    'Scuba Diving': '/activities/scuba-diving',
    'Desert Safari': '/activities/desert-safari'
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1600)'
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
            Thrilling <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Activities</span>
          </h1>
          <p className="text-xl text-gray-300">
            Push your limits with heart-pounding adventures designed for the bold and brave
          </p>
        </motion.div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = iconMap[activity.icon as keyof typeof iconMap] || Mountain;
              
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <GlassCard className="group cursor-pointer overflow-hidden h-full">
                    <div className="relative h-64">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${activity.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Difficulty Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                          activity.difficulty === 'Easy' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                            : activity.difficulty === 'Moderate'
                            ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                            : 'bg-red-500/20 text-red-400 border-red-500/30'
                        }`}>
                          {activity.difficulty}
                        </span>
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                          {activity.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                          {activity.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-6 flex-grow">
                        {activity.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-gray-300">
                          <span>Difficulty:</span>
                          <span className="font-medium">{activity.difficulty}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-300">
                          <span>Duration:</span>
                          <span className="font-medium">{activity.duration}</span>
                        </div>
                        <Link to={activityRoutes[activity.name as keyof typeof activityRoutes] || '/activities'}>
                          <GlowButton size="sm" className="w-full mt-4">
                            Explore Activity
                          </GlowButton>
                        </Link>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Makes Our Activities <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Special</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every adventure is carefully crafted with safety, excitement, and unforgettable memories in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Guides',
                description: 'Expert instructors with years of experience and local knowledge',
                icon: '👨‍🏫'
              },
              {
                title: 'Top Safety Standards',
                description: 'International safety protocols and premium equipment for every activity',
                icon: '🛡️'
              },
              {
                title: 'Small Groups',
                description: 'Maximum 8 people per group for personalized attention and better experience',
                icon: '👥'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 text-center h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Push Your Limits?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose your adventure and let us create an experience that will stay with you forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <GlowButton variant="secondary" size="lg">
                Book Activity Now
              </GlowButton>
              <GlowButton variant="ghost" size="lg">
                Talk to Expert
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Activities;