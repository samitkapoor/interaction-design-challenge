import { cn } from '@/lib/utils';
import React from 'react';
import { Lora } from 'next/font/google';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin']
});

const ComponentWrapper = ({
  children,
  className,
  title
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  return (
    <div
      className={cn(
        'p-3 w-[300px] sm:w-[500px] md:w-[600px] bg-black/5 min-h-[300px] flex items-center justify-center rounded-xl',
        className
      )}
    >
      <div className="h-full w-full rounded-md bg-white flex items-center justify-center relative">
        {title && (
          <div
            className={`absolute bottom-4 text-center w-full font-bold left-0 mb-2 ${lora.className}`}
          >
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;
