'use client';

import { motion, useAnimationControls } from 'framer-motion';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { LoaderCircle } from 'lucide-react';

const PeerlistAutofill = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [value, setValue] = useState('');
  const blobOne = useAnimationControls();
  const blobTwo = useAnimationControls();
  const shield = useAnimationControls();

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(async () => {
      await Promise.all([
        blobOne.start({
          width: ['50px', '120px', '50px'],
          height: ['50px', '60px', '50px'],
          transition: {
            repeat: 1,
            duration: 1,
            repeatDelay: 0.15,
            repeatType: 'loop',
            ease: 'linear'
          }
        }),
        blobTwo.start({
          width: ['50px', '120px', '50px'],
          height: ['50px', '60px', '50px'],
          transition: {
            repeat: 1,
            duration: 1,
            repeatDelay: 0.15,
            repeatType: 'loop',
            ease: 'linear'
          }
        })
      ]);

      // go to ends horizontally
      await Promise.all([
        blobOne.start({
          x: '-140px',
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        }),
        blobTwo.start({
          x: '140px',
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        })
      ]);

      // go to ends vertically
      await Promise.all([
        blobOne.start({
          x: '-140px',
          y: '45px',
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        }),
        blobTwo.start({
          x: '140px',
          y: '45px',
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        })
      ]);

      // meet in the middle
      await Promise.all([
        shield
          .start({
            opacity: 1,
            transition: { duration: 0.1 }
          })
          .then(() => {
            shield.start({
              y: '100px',
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'linear'
              }
            });
          }),
        blobOne.start({
          x: '-50px',
          y: '45px',
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        }),
        blobTwo.start({
          x: '50px',
          y: '45px',
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        })
      ]);
      await Promise.all([
        blobOne.start({
          x: '10px',
          y: '45px',
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        }),
        blobTwo.start({
          x: '-10px',
          y: '45px',
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        })
      ]);

      setIsAnimating(false);
      blobOne.stop();
      blobTwo.stop();
      shield.stop();
    }, 50);
  };

  return (
    <div className="relative max-w-[400px] max-h-[400px] h-full w-full flex items-center justify-center overflow-hidden">
      {/* frame div */}
      <div
        style={{
          clipPath:
            'polygon(evenodd, 0px 0px, 0px 400px, 400px 400px, 400px 0px, 0px 0px, 58px 83.5px, 52px 89.5px, 52px 176.5px, 58px 182.5px, 342px 182.5px, 348px 176.5px, 348px 89.5px, 342px 83.5px, 58px 83.5px)'
        }}
        className="absolute top-0 left-0 max-w-[400px] max-h-[400px] h-full w-full backdrop-blur-xl z-10 pointer-events-none"
      ></div>

      {/* animated blobs */}
      {isAnimating && (
        <>
          <motion.div
            initial={{
              x: '-10px',
              y: '-40px',
              width: '50px',
              height: '50px'
            }}
            animate={blobOne}
            style={{
              background: 'radial-gradient(circle, #00ee00, transparent 80%)'
            }}
            className="absolute rounded-full blur-[1px]"
          />
          <motion.div
            initial={{
              x: '10px',
              y: '-40px',
              width: '50px',
              height: '50px'
            }}
            animate={blobTwo}
            style={{
              background: 'radial-gradient(circle, #00ee00, transparent 80%)'
            }}
            className="absolute rounded-full blur-[1px]"
          />
          {/* animating shield */}
          <motion.div
            initial={{
              y: '58px',
              opacity: 0
            }}
            animate={shield}
            className="w-[300px] bg-gradient-to-b from-transparent via-green-500 to-transparent h-[20px] absolute"
          ></motion.div>
        </>
      )}

      <div className="h-[95px] w-[292px] border rounded-md bg-gradient-to-b from-white to-gray-200 flex flex-col z-20 p-2">
        <p className="text-xs font-semibold">Autofill details with AI</p>
        <p className="text-[10px]">Input your project URL, and we&apos;ll handle the rest!</p>
        <div className="flex items-center gap-1 mt-auto">
          <Input
            className="w-full rounded-md bg-white text-xs h-8 placeholder:text-xs px-1.5"
            placeholder="https://"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            onClick={() => {
              if (value.trim() === '') return;
              startAnimation();
            }}
            disabled={isAnimating || value.trim() === ''}
            size="sm"
            className="w-fit rounded-xl text-xs cursor-pointer"
          >
            Autofill {isAnimating && <LoaderCircle className="animate-spin" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PeerlistAutofill;
