'use client';

import { Geist } from 'next/font/google';
import React, { useState, useEffect } from 'react';

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
      <div
        style={{
          background:
            'linear-gradient(to right, transparent, violet, indigo, blue, green, yellow, orange, red, transparent)'
        }}
        className="w-full h-full absolute bottom-8 opacity-80 pointer-events-none left-0 z-0 blur-xl"
      />
      <div className="z-10 w-full flex gap-2 items-center justify-center h-[30px]">
        <div className={`text-sm font-bold text-gray-800 ${geist.className}`}>
          {isPastDate
            ? 'Solutions unlock soon'
            : `Solutions unlock in ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
