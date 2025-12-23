import { useEffect, useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
};