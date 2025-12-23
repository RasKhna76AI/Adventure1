import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, MapPin, Shield, Award, Heart } from 'lucide-react';
import { destinations, testimonials } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import GlassCard from '../components/ui/GlassCard';
import GlowButton from '../components/ui/GlowButton';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const Home: React.FC = () => {
  const heroAnimation = useScrollAnimation();
  const destinationsAnimation = useScrollAnimation();
  const activitiesAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();

  const activities = [
    {
      name: 'Trekking',
      icon: '🏔️',
      description: 'Conquer majestic peaks'
    },
    {
      name: 'Rafting',
      icon: '🚣',
      description: 'Navigate wild rapids'
    },
    {
      name: 'Paragliding',
      icon: '🪂',
      description: 'Soar through clouds'
    },
    {
      name: 'Safari',
      icon: '🦁',
      description: 'Wildlife encounters'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Professional guides and top-tier safety equipment'
    },
    {
      icon: Award,
      title: 'Expert Guides',
      description: '10+ years of adventure experience'
    },
    {
      icon: Heart,
      title: 'Trusted',
      description: '5000+ happy adventurers and counting'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&w=1600)'
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* Content */}
        <motion.div
          ref={heroAnimation.ref}
          initial="hidden"
          animate={heroAnimation.controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 1, staggerChildren: 0.3 }
            }
          }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Feel the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Rush</span>.
            <br />
            Live the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Adventure</span>.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Discover extraordinary experiences in the world's most breathtaking destinations. 
            Your next adventure awaits.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <GlowButton size="lg" className="group">
              Explore More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </GlowButton>   
            <GlowButton variant="ghost" size="lg">
              Book Your Trip
            </GlowButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent rounded-full" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        ref={statsAnimation.ref}
        initial="hidden"
        animate={statsAnimation.controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="py-20 bg-gradient-to-r from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCounter end={5000} label="Adventures" />
            <AnimatedCounter end={150} label="Destinations" />
            <AnimatedCounter end={25} label="Expert Guides" />
            <AnimatedCounter end={98} label="Satisfaction Rate" />
          </div>
        </div>
      </motion.section>

      {/* Popular Destinations */}
      <section className="py-20 bg-black">
        <motion.div
          ref={destinationsAnimation.ref}
          initial="hidden"
          animate={destinationsAnimation.controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Destinations</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the most sought-after adventure destinations handpicked by our experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.slice(0, 6).map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="group cursor-pointer h-96 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                        {destination.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {destination.location}
                      </div>
                      <div className="text-white font-semibold">
                        ₹{destination.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <GlowButton size="lg">
              View All Destinations
            </GlowButton>
          </div>
        </motion.div>
      </section>

      {/* Adventure Activities */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          ref={activitiesAnimation.ref}
          initial="hidden"
          animate={activitiesAnimation.controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Adventure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Activities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose your thrill from our curated selection of heart-pumping activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <GlassCard className="p-8 text-center group cursor-pointer">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{activity.name}</h3>
                  <p className="text-gray-400 text-sm">{activity.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're committed to making your adventure dreams come true safely and memorably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <motion.div
          ref={testimonialsAnimation.ref}
          initial="hidden"
          animate={testimonialsAnimation.controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Adventurers</span> Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real stories from real adventurers who've experienced the thrill with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-3 italic">"{testimonial.comment}"</p>
                  <p className="text-green-400 text-xs font-medium">{testimonial.trip}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600 relative overflow-hidden">
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
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of adventurers who've discovered their limits and exceeded them. 
            Your extraordinary journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton variant="secondary" size="lg">
              Book Adventure Now
            </GlowButton>
            <GlowButton variant="ghost" size="lg">
              Download Brochure
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;