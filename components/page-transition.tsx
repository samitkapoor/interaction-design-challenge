'use client';

import { CAR_WISHLIST } from '@/data/car-wishlist';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

const CarCard = ({ car }: { car: (typeof CAR_WISHLIST)[number] }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/car?car=${car.name}`);
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className="w-full max-w-[250px] h-full flex flex-col relative items-center justify-center gap-2 cursor-pointer group"
    >
      <motion.img
        src={car.image}
        alt={car.name}
        layoutId={car.image}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 50
        }}
        className={cn('object-contain w-[300px]', car.cardImageClassName)}
      />

      <div className="w-full h-full z-20 flex flex-col items-center justify-end gap-2">
        <p className="text-black px-2 text-center text-sm">{car.name}</p>
      </div>
    </div>
  );
};

const PageTransition = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start pt-10">
      <p className="text-center w-full mb-4 font-medium text-lg">Car Wishlist</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-2">
        {CAR_WISHLIST.map((car, index) => {
          return (
            <div
              key={car.name}
              className="w-full h-full flex flex-col items-center justify-center gap-2"
            >
              <CarCard car={car} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageTransition;
