'use client';

import { AnimatePresence } from 'framer-motion';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </div>
  );
};

export default RootLayout;
