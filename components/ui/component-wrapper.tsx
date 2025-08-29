'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Lora } from 'next/font/google';
import { motion } from 'framer-motion';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin']
});

const ComponentWrapper = ({
  children,
  className,
  title,
  style
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      layout
      className={cn(
        'p-3 w-[300px] sm:w-[500px] md:w-[600px] border-[12px] border-black/5 bg-white min-h-[300px] flex items-center justify-center rounded-xl relative py-20',
        className
      )}
      style={style}
    >
      {title && (
        <div
          className={`absolute bottom-4 text-center w-full font-bold left-0 mb-2 ${lora.className}`}
        >
          {title}
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default ComponentWrapper;
