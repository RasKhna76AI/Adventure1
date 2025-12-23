import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  label: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2, 
  label 
}) => {
  const [count, setCount] = useState(0);
  const { ref, controls } = useScrollAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleCounterAnimation = async () => {
      await controls.start('visible');
      
      if (!hasAnimated) {
        setHasAnimated(true);
        const timer = setInterval(() => {
          setCount(prev => {
            const increment = Math.ceil(end / (duration * 60));
            if (prev + increment >= end) {
              clearInterval(timer);
              return end;
            }
            return prev + increment;
          });
        }, 1000 / 60);

        return () => clearInterval(timer);
      }
    };

    handleCounterAnimation();
  }, [controls, end, duration, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;