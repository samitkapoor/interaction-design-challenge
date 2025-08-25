'use client';

import React from 'react';
import { Slider } from './slider';

interface ConfigSliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onValueChange: (value: number) => void;
}

const ConfigSlider: React.FC<ConfigSliderProps> = ({ label, min, max, value, onValueChange }) => {
  return (
    <div className="flex gap-4 items-center justify-start w-full">
      <p>{label}:</p>
      <div className="flex items-center justify-center gap-2">
        {min}
        <Slider
          value={[value]}
          min={min}
          max={max}
          onValueChange={(sliderValue) => onValueChange(sliderValue[0])}
          className="w-[200px]"
        />
        {max}
      </div>
    </div>
  );
};

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
    <div className="flex flex-col items-center justify-center gap-2">
      <ConfigSlider
        label="Items"
        min={minItems}
        max={maxItems}
        value={items}
        onValueChange={setItems}
      />
      <ConfigSlider label="Size" min={minSize} max={maxSize} value={size} onValueChange={setSize} />
    </div>
  );
};

export default ConfigControls;
