'use client';

import { Geist } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const Topbar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isPastDate, setIsPastDate] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date('2025-09-01T00:00:00');

      // If we're past September 1st, 2024, show "soon" message
      if (now > targetDate) {
        setIsPastDate(true);
        return;
      }

      setIsPastDate(false);
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 w-full flex items-start justify-center h-[60px] z-10">
      <motion.div
        animate={{
          background: [
            'linear-gradient(to right, transparent, #00BFFF, #4169E1, #9370DB, #FF69B4, #FF6347, #FFD700, transparent)',
            'linear-gradient(to right, transparent, #FFD700, #00BFFF, #4169E1, #9370DB, #FF69B4, #FF6347, transparent)',
            'linear-gradient(to right, transparent, #FF6347, #FFD700, #00BFFF, #4169E1, #9370DB, #FF69B4, transparent)',
            'linear-gradient(to right, transparent, #FF69B4, #FF6347, #FFD700, #00BFFF, #4169E1, #9370DB, transparent)',
            'linear-gradient(to right, transparent, #9370DB, #FF69B4, #FF6347, #FFD700, #00BFFF, #4169E1, transparent)',
            'linear-gradient(to right, transparent, #4169E1, #9370DB, #FF69B4, #FF6347, #FFD700, #00BFFF, transparent)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="w-full h-full absolute bottom-8 pointer-events-none left-0 z-0 blur-3xl"
      />
      <div className="z-10 w-full flex gap-2 items-center justify-center h-[30px]"></div>
    </div>
  );
};

export default Topbar;
