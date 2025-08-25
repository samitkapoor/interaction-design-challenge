'use client';

import React from 'react';
import { Slider } from './slider';

interface ConfigControlsProps {
  items: number;
  setItems: (value: number) => void;
  size: number;
  setSize: (value: number) => void;
  minItems?: number;
  maxItems?: number;
  minSize?: number;
  maxSize?: number;
}

const ConfigControls: React.FC<ConfigControlsProps> = ({
  items,
  setItems,
  size,
  setSize,
  minItems = 3,
  maxItems = 6,
  minSize = 55,
  maxSize = 80
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center">
        <p>Items</p>
        <div className="flex items-center justify-center gap-2">
          {minItems}
          <Slider
            value={[items]}
            min={minItems}
            max={maxItems}
            onValueChange={(value) => setItems(value[0])}
            className="w-[200px]"
          />
          {maxItems}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Size</p>
        <div className="flex items-center justify-center gap-2">
          {minSize}
          <Slider
            value={[size]}
            min={minSize}
            max={maxSize}
            onValueChange={(value) => setSize(value[0])}
            className="w-[200px]"
          />
          {maxSize}
        </div>
      </div>
    </div>
  );
};

export default ConfigControls;
