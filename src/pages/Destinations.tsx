import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Filter } from 'lucide-react';
import { destinations } from '../data/mockData';
import GlassCard from '../components/ui/GlassCard';
import GlowButton from '../components/ui/GlowButton';

const Destinations: React.FC = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'easy', name: 'Easy' },
    { id: 'moderate', name: 'Moderate' },
    { id: 'challenging', name: 'Challenging' }
  ];

  const handleFilter = (difficulty: string) => {
    setActiveFilter(difficulty);
    if (difficulty === 'all') {
      setFilteredDestinations(destinations);
    } else {
      setFilteredDestinations(destinations.filter(dest => 
        dest.difficulty.toLowerCase() === difficulty
      ));
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600)'
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
            Epic <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Destinations</span>
          </h1>
          <p className="text-xl text-gray-300">
            Discover breathtaking locations that will challenge your limits and create memories to last a lifetime
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="flex items-center space-x-2 mb-4 lg:mb-0">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 font-medium">Filter by difficulty:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => handleFilter(filter.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <GlassCard className="group cursor-pointer overflow-hidden">
                  <div className="relative h-64">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Difficulty Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                        destination.difficulty === 'Easy' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : destination.difficulty === 'Moderate'
                          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border-red-500/30'
                      }`}>
                        {destination.difficulty}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-xs font-medium">4.8</span>
                    </div>

                    {/* Quick Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white/80 text-sm mb-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{destination.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{destination.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {destination.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">
                          ₹{destination.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 text-sm ml-2">per person</span>
                      </div>
                      <GlowButton size="sm">
                        Explore
                      </GlowButton>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {filteredDestinations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg">
                No destinations found for the selected filter.
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Find Your Dream Destination?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let us create a custom adventure package just for you and your group.
            </p>
            <GlowButton size="lg">
              Plan Custom Trip
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;