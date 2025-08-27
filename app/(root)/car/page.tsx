'use client';

import { CAR_WISHLIST } from '@/data/car-wishlist';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

const CarPage = () => {
  const searchParams = useSearchParams();

  const carName = searchParams.get('car');
  const car = CAR_WISHLIST.find((car) => car.name === carName);

  if (!car) return null;

  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-hidden">
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
          delay: 0.3
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
            filter: 'blur(10px)'
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)'
          }}
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 50,
            delay: 0.6
          }}
          className={cn(
            'absolute leading-0 text-[300px]  whitespace-nowrap',
            car.boldTextPosition || 'top-1/6 left-1/2 -translate-x-1/2'
          )}
        >
          {car.boldText}
        </motion.div>
      </div>

      {/* car image */}
      <motion.img
        layoutId={car.image}
        key={car.image}
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
      {(car.variant === 'trippy' || car.variant === 'trippy-reverse') && (
        <>
          <motion.img
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.3,
              delay: 0.35
            }}
            key="trippy-1"
            src={car.image}
            height={1000}
            width={1000}
            className={cn(
              'w-full h-full object-cover z-10 absolute top-0 left-0',
              car.variant === 'trippy' ? '-rotate-6' : 'rotate-6'
            )}
          />
          <motion.img
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.3,
              delay: 0.45
            }}
            key="trippy-2"
            src={car.image}
            height={1000}
            width={1000}
            className={cn(
              'w-full h-full object-cover z-10 absolute top-0 left-0',
              car.variant === 'trippy' ? '-rotate-12' : 'rotate-12'
            )}
          />
        </>
      )}
      <div className="absolute inset-0 z-20">
        {car.price && (
          <motion.div
            initial={{
              opacity: 0,
              filter: 'blur(10px)'
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)'
            }}
            transition={{
              type: 'spring',
              stiffness: 700,
              damping: 50,
              delay: 1
            }}
            className={car.priceClassName}
          >
            {car.price}
          </motion.div>
        )}
        <motion.div
          initial={{
            opacity: 0,
            filter: 'blur(10px)'
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)'
          }}
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 50,
            delay: 0.8
          }}
          className={car.descriptionClassName}
        >
          {car.description}
        </motion.div>
      </div>
    </div>
  );
};

const CarPageWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarPage />
    </Suspense>
  );
};

export default CarPageWrapper;
