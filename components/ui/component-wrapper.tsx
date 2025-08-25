import { cn } from '@/lib/utils';
import React from 'react';

const ComponentWrapper = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'p-3 w-[300px] sm:w-[500px] md:w-[600px] bg-black/10 min-h-[300px] flex items-center justify-center rounded-xl',
        className
      )}
    >
      <div className="h-full w-full rounded-md bg-white flex items-center justify-center shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;
