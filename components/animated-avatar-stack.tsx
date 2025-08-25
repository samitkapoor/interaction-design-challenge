'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  }
];

const AnimatedAvatarStack = () => {
  const [avatarSize, setAvatarSize] = useState(64);
  const [itemsLength, setItemsLength] = useState(4);
  const AVATAR_GAP = avatarSize / 1.75;
  const TOTAL_WIDTH = AVATAR_GAP * itemsLength + avatarSize;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <AnimatePresence>
          {Avatars.filter((_, index) => index < itemsLength).map((avatar, index) => {
            return (
              <div
                style={{
                  position: 'absolute',
                  left: index * AVATAR_GAP - TOTAL_WIDTH / 2,
                  height: avatarSize,
                  width: avatarSize,
                  zIndex: itemsLength - index
                }}
                key={avatar.name + index}
                className="group relative"
              >
                <div
                  className={`z-10 absolute inset-0 opacity-0 group-hover:translate-y-[-${
                    avatarSize / 2
                  }px] group-hover:opacity-100 transition-all duration-300`}
                >
                  <svg width={avatarSize + 20} height={avatarSize + 20} viewBox="0 0 105 105">
                    <defs>
                      <path
                        id={`textPath-${index}`}
                        d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                        fill="none"
                      />
                    </defs>

                    <text className="text-base font-medium">
                      <textPath href={`#textPath-${index}`} startOffset="4%">
                        {avatar.name}
                      </textPath>
                    </text>
                  </svg>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0, transition: { duration: 0.1 } }}
                  transition={{
                    type: 'spring',
                    stiffness: 700,
                    damping: 30
                  }}
                  className="h-full w-full"
                >
                  <div
                    className={`rounded-full group-hover:translate-y-[-${
                      avatarSize / 2
                    }px] transition-all duration-300 h-full w-full m-4 overflow-hidden border-4 border-black`}
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
        </AnimatePresence>

        <div
          style={{
            position: 'absolute',
            left: itemsLength * AVATAR_GAP - TOTAL_WIDTH / 2 + avatarSize / 2,
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
        />
      </div>
    </div>
  );
};

export default AnimatedAvatarStack;
