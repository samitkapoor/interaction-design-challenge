'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

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
  const AVATAR_SIZE = 64;
  const AVATAR_GAP = AVATAR_SIZE / 1.75;
  const TOTAL_WIDTH = AVATAR_GAP * Avatars.length;

  return (
    <div className="relative flex justify-center">
      {Avatars.map((avatar, index) => {
        return (
          <div
            style={{
              position: 'absolute',
              left: index * AVATAR_GAP - TOTAL_WIDTH / 2,
              height: AVATAR_SIZE,
              width: AVATAR_SIZE,
              zIndex: Avatars.length - index
            }}
            key={avatar.name + index}
            className="group relative"
          >
            <div
              className={`z-10 absolute inset-0 opacity-0 group-hover:translate-y-[-${
                AVATAR_SIZE / 2
              }px] group-hover:opacity-100 transition-all duration-300`}
            >
              <svg width={AVATAR_SIZE + 20} height={AVATAR_SIZE + 20} viewBox="0 0 105 105">
                <defs>
                  <path
                    id={`textPath-${index}`}
                    d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                    fill="none"
                  />
                </defs>

                <text className="text-base font-medium fill-gray-600">
                  <textPath href={`#textPath-${index}`} startOffset="5%">
                    {avatar.name}
                  </textPath>
                </text>
              </svg>
            </div>
            <div
              className={`rounded-full group-hover:translate-y-[-${
                AVATAR_SIZE / 2
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
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedAvatarStack;
