'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';
import ConfigControls from './ui/config-controls';

const Avatars = [
  {
    image: 'https://i.pinimg.com/736x/63/59/30/635930ff1443908a33ee498a6acf1c2a.jpg',
    name: 'Bugs Bunny',
    imageClassName: 'scale-110'
  },
  {
    image: 'https://i.pinimg.com/564x/ef/8a/9d/ef8a9dd9d8e75a2d58c2692b1358c0ee.jpg',
    name: 'Daffy Duck'
  },
  {
    image: 'https://wallpapers.com/images/hd/tweety-bird-pictures-1000-x-1000-p1h0xeq5ls2h25tp.jpg',
    name: 'Tweety'
  },
  {
    image: 'https://i.pinimg.com/736x/45/52/ea/4552ea770417f484fb91fbf2e7237f37.jpg',
    name: 'Yosemite Sam'
  },
  {
    image: 'https://i.ytimg.com/vi/tRE52ZUJ0gc/maxresdefault.jpg',
    name: 'Taz'
  },
  {
    image: 'https://i.pinimg.com/474x/52/89/a7/5289a705d3199d01da547c58c217a21d.jpg',
    name: 'Road Runner'
  },
  {
    image: 'https://i.pinimg.com/736x/72/6b/18/726b189b2b8c64cfea3d78d7e4468ced.jpg',
    name: 'Sylvester'
  },
  {
    image: 'https://i.pinimg.com/474x/aa/26/4c/aa264c196cdf7a3bf8ab4d157e506472.jpg',
    name: 'Elmer Fudd'
  }
];

const AnimatedAvatarStack = () => {
  const [avatarSize, setAvatarSize] = useState(64);
  const [itemsLength, setItemsLength] = useState(5);
  const [borderWidth, setBorderWidth] = useState(4);
  const [hoveringItem, setHoveringItem] = useState<number | null>(null);
  const [avatarGap, setAvatarGap] = useState(avatarSize / 1.6);
  const TOTAL_WIDTH = avatarGap * itemsLength + avatarSize;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        {Avatars.filter((_, index) => index < itemsLength).map((avatar, index) => {
          return (
            <div
              style={{
                position: 'absolute',
                left: index * avatarGap - TOTAL_WIDTH / 2,
                height: avatarSize,
                width: avatarSize,
                zIndex: itemsLength - index
              }}
              key={avatar.name + index}
              className="group relative"
              onMouseEnter={() => setHoveringItem(index)}
              onMouseLeave={() => setHoveringItem(null)}
            >
              <div
                className={`z-10 absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300`}
                style={{
                  transform: hoveringItem === index ? `translateY(-${avatarSize / 2}px)` : 'none'
                }}
              >
                <svg width={avatarSize + 20} height={avatarSize + 20} viewBox="0 0 105 105">
                  <defs>
                    <path
                      id={`textPath-${index}`}
                      d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                      fill="none"
                    />
                  </defs>

                  <text className="text-sm font-medium uppercase">
                    <textPath href={`#textPath-${index}`} startOffset="4%">
                      {avatar.name}
                    </textPath>
                  </text>
                </svg>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 700,
                  damping: 30
                }}
                className="h-full w-full"
              >
                <div
                  className={`rounded-full transition-all duration-300 h-full w-full m-4 overflow-hidden border-black`}
                  style={{
                    borderWidth: borderWidth,
                    transform: hoveringItem === index ? `translateY(-${avatarSize / 2}px)` : 'none'
                  }}
                >
                  <Image
                    src={avatar.image}
                    alt={avatar.name}
                    width={100}
                    height={100}
                    className={`rounded-full h-full w-full object-cover ${avatar.imageClassName}`}
                  />
                </div>
              </motion.div>
            </div>
          );
        })}

        <div
          style={{
            position: 'absolute',
            left: itemsLength * avatarGap - TOTAL_WIDTH / 2 + avatarSize / 2,
            height: avatarSize,
            width: avatarSize
          }}
          className="group relative"
        >
          <div className={`h-full w-full m-4 flex items-center justify-start`}>
            <MoreHorizontal />
          </div>
        </div>
      </div>
      {/* Config Controls */}
      <div className="mt-[80px]">
        <ConfigControls
          items={itemsLength}
          setItems={setItemsLength}
          size={avatarSize}
          setSize={setAvatarSize}
          maxItems={Avatars.length}
          borderWidth={borderWidth}
          setBorderWidth={setBorderWidth}
          avatarGap={avatarGap}
          setAvatarGap={setAvatarGap}
          minAvatarGap={avatarSize / 2}
          maxAvatarGap={avatarSize / 1.3}
        />
      </div>
    </div>
  );
};

export default AnimatedAvatarStack;
