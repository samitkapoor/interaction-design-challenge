'use client';

import { CAR_WISHLIST } from '@/data/car-wishlist';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Lora } from 'next/font/google';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin']
});

const CarPage = () => {
  const searchParams = useSearchParams();

  const carName = searchParams.get('car');
  const car = CAR_WISHLIST.find((car) => car.name === carName);

  if (!car) return null;

  return (
    <div className="h-screen w-screen flex items-center justify-center relative">
      <motion.img
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 50,
          delay: 0.2
        }}
        src={car.backgroundImage}
        height={1000}
        width={1000}
        className="absolute h-full w-full object-cover z-[-1]"
      />
      <div className="absolute inset-0 z-0 ">
        {/* <p className={car.descriptionClassName}>{car.description}</p> */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className={cn(
            'absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] whitespace-nowrap text-black/10 font-black'
          )}
        >
          {car.boldText}
        </motion.div>
      </div>
      <motion.img
        layoutId={car.image}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 50
        }}
        src={car.image}
        height={1000}
        width={1000}
        className="w-full h-full object-cover z-10"
      />
      <div className="absolute inset-0 z-20">
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.5
          }}
          className="absolute bottom-10 right-10 text-4xl font-medium"
        >
          {car.price}
        </motion.div> */}
      </div>
    </div>
  );
};

export default CarPage;
