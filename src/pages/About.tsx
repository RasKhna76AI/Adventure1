import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Heart, Award, Shield } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority. We follow international safety standards and use premium equipment for every adventure.'
    },
    {
      icon: Heart,
      title: 'Passion for Adventure',
      description: 'We live and breathe adventure. Our team shares the same passion for exploration and creating unforgettable experiences.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building a community of adventurers who support and inspire each other to reach new heights.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from planning to execution.'
    }
  ];

  const team = [
    {
      name: 'Arjun Thakur',
      role: 'Founder & Lead Guide',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '12 years',
      specialty: 'Mountain Expeditions'
    },
    {
      name: 'Priya Sharma',
      role: 'Safety Coordinator',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '8 years',
      specialty: 'Risk Assessment'
    },
    {
      name: 'Vikram Singh',
      role: 'Adventure Specialist',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '10 years',
      specialty: 'Water Sports'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">AdventureX</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Born from a passion for exploration and a commitment to safety, we've been creating 
            extraordinary adventures for thrill-seekers and nature lovers since 2015.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  What started as a small group of friends sharing their love for mountains and rivers 
                  has grown into India's premier adventure travel company. We believe that everyone 
                  deserves to experience the transformative power of nature and adventure.
                </p>
                <p>
                  Over the years, we've guided thousands of adventurers through breathtaking landscapes, 
                  from the snow-capped peaks of the Himalayas to the pristine beaches of the Andaman Islands. 
                  Each journey is carefully crafted to ensure maximum safety while delivering maximum thrills.
                </p>
                <p>
                  Our team consists of certified guides, safety experts, and passionate adventurers who 
                  understand that the best experiences come from stepping out of your comfort zone while 
                  feeling completely secure in professional hands.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Adventure" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img 
                    src="https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Rafting" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Mountains" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <img 
                    src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Paragliding" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To make adventure accessible to everyone while maintaining the highest standards of safety 
                  and environmental responsibility. We strive to create transformative experiences that inspire 
                  people to connect with nature, challenge their limits, and build lasting memories with fellow adventurers.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the world's most trusted adventure travel company, known for creating life-changing 
                  experiences while promoting sustainable tourism and conservation. We envision a world where 
                  adventure brings people together and fosters a deeper appreciation for our planet's natural beauty.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do and every adventure we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate adventurers and safety experts dedicated to creating unforgettable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center overflow-hidden">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-green-400 font-medium mb-4">{member.role}</p>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex justify-between">
                        <span>Experience:</span>
                        <span className="text-white">{member.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Specialty:</span>
                        <span className="text-white">{member.specialty}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-white/90">
              Every number represents a life changed, a limit pushed, and a dream realized
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCounter end={5000} label="Happy Adventurers" />
            <AnimatedCounter end={150} label="Destinations Covered" />
            <AnimatedCounter end={9} label="Years of Experience" />
            <AnimatedCounter end={98} label="Safety Record %" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;