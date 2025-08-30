'use client';

import { Check, Trash2 } from 'lucide-react';
import React from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { Button } from './ui/button';

const Overlay = ({
  setOverlay,
  checkedItems
}: {
  setOverlay: (overlay: boolean) => void;
  checkedItems: number;
}) => {
  return (
    <>
      <motion.div
        style={{
          background: 'radial-gradient(circle at top left, #ff1100, transparent 50%)',
          height: '100%'
        }}
        initial={{
          top: '-100%',
          left: '-100%',
          opacity: 0
        }}
        animate={{
          top: 0,
          left: 0,
          opacity: 1
        }}
        exit={{
          top: '-100%',
          left: '-100%',
          opacity: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 30,
            delay: 0
          }
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 50,
          delay: 0.3
        }}
        className="absolute z-10 top-0 left-0 w-full"
      />
      <motion.div
        initial={{
          height: 0,
          width: '100px',
          background: '#000000',
          borderTopLeftRadius: '100%',
          borderTopRightRadius: '100%'
        }}
        animate={{
          height: '100%',
          width: '100%',
          background: '#FE343344',
          borderTopLeftRadius: '0%',
          borderTopRightRadius: '0%'
        }}
        exit={{
          height: 0,
          width: '100px',
          background: '#000000',
          borderTopLeftRadius: '100%',
          borderTopRightRadius: '100%'
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 40
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 blur-xl"
      ></motion.div>
      <motion.div
        initial={{
          height: '50%',
          opacity: 0,
          scaleX: 0.5,
          scaleY: 1.5,
          transform: 'skew(10deg, 10deg)'
        }}
        animate={{
          height: '100%',
          opacity: 1,
          scaleX: 1,
          scaleY: 1,
          transform: 'skew(0deg, 0deg)'
        }}
        exit={{
          height: '50%',
          opacity: '0',
          scaleX: 0.5,
          scaleY: 1.5,
          transform: 'skew(10deg, 10deg)',
          transition: {
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0
          }
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 30,
          delay: 0.2
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 text-black flex flex-col items-center justify-center w-full"
      >
        <p className="text-2xl font-semibold">
          {checkedItems} item{checkedItems > 1 ? 's' : ''}
        </p>
        <p className="text-base text-center">
          Are you sure you want to delete these
          <br />
          entries? You can&apos;t undo this action.
        </p>
        <Button variant="outline" className="rounded-full mt-8" onClick={() => setOverlay(false)}>
          Delete
        </Button>
        <Button
          variant="ghost"
          className="rounded-full mt-1 hover:bg-transparent"
          onClick={() => setOverlay(false)}
        >
          Cancel
        </Button>
      </motion.div>
      <motion.div
        style={{
          background: 'radial-gradient(circle at bottom right, #ff1100, transparent 50%)',
          height: '100%'
        }}
        initial={{
          top: '100%',
          left: '100%',
          opacity: 0
        }}
        animate={{
          top: 0,
          left: 0,
          opacity: 1
        }}
        exit={{
          top: '100%',
          left: '100%',
          opacity: 0,
          transition: {
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 0
          }
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 50,
          delay: 0.3
        }}
        className="absolute z-10 bottom-0 right-0 w-full"
      />
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          delay: 0.1
        }}
        className="absolute inset-0 z-0 backdrop-blur-sm"
      ></motion.div>
    </>
  );
};

type InboxItemData = {
  id: string;
  title: string;
  preview: string;
  checked: boolean;
};

const initialInboxItems: InboxItemData[] = [
  {
    id: '1',
    title: 'Weekly team update',
    preview:
      "Hi team, Just a quick update on our progress this week. We've made significant strides in th...",
    checked: true
  },
  {
    id: '2',
    title: 'Your subscription confirmation',
    preview:
      "Thank you for subscribing to our newsletter! You'll now receive updates about our latest...",
    checked: true
  },
  {
    id: '3',
    title: 'Invoice #1234 for April',
    preview:
      'Your monthly invoice is now available. Please find attached the detailed breakdown of your...',
    checked: false
  },
  {
    id: '4',
    title: 'Security alert: New login',
    preview:
      'We detected a new sign-in to your account from a new device or location. If this was you,...',
    checked: false
  },
  {
    id: '5',
    title: 'Upcoming maintenance notice',
    preview:
      'Please be advised that our platform will undergo scheduled maintenance this weeken...',
    checked: false
  }
];

function InboxItem({ item, onToggle }: { item: InboxItemData; onToggle: (id: string) => void }) {
  return (
    <div className="flex items-start justify-between gap-1 py-4 pr-1 border-b border-black/10">
      <div className="flex-1">
        <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
        <p className="text-black/70 text-xs mt-2 leading-relaxed line-clamp-1">{item.preview}</p>
      </div>
      <div className="shrink-0 pt-1">
        <button
          type="button"
          onClick={() => onToggle(item.id)}
          aria-label={item.checked ? 'selected' : 'not selected'}
          role="checkbox"
          aria-checked={item.checked}
          className={
            'inline-flex h-6 w-6 items-center justify-center rounded-md border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 ' +
            (item.checked
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'border-black/20 text-transparent hover:border-black/40')
          }
        >
          <Check size={14} />
        </button>
      </div>
    </div>
  );
}

const WarpOverlay = () => {
  const [items, setItems] = React.useState<InboxItemData[]>(initialInboxItems);
  const [overlay, setOverlay] = React.useState<boolean>(false);
  const controls = useAnimationControls();

  const toggleItem = (id: string) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it)));
  };

  const handleClick = async () => {
    setOverlay(true);
    await controls.start({
      scaleX: [1, 0.85, 1],
      scaleY: [1, 0.95, 1],
      transform: ['skew(0deg, 0deg)', 'skew(-2deg, -2deg)', 'skew(0deg, 0deg)'],
      filter: 'blur(10px)',
      transition: {
        delay: 0,
        duration: 0.35,
        ease: 'linear'
      }
    });
  };

  return (
    <div className="w-full max-w-md min-h-[700px] border-[12px] border-black/5 shadow-md rounded-xl relative overflow-hidden">
      <AnimatePresence mode="popLayout">
        {overlay && (
          <Overlay
            setOverlay={() => {
              setOverlay(false);
              controls.start({
                filter: 'blur(0px)'
              });
            }}
            checkedItems={items.filter((item) => item.checked).length}
          />
        )}
      </AnimatePresence>
      <motion.div animate={controls}>
        <div className="flex items-center justify-between px-6 py-5">
          <h2 className="text-xl font-bold">Inbox</h2>

          <Button
            aria-label="Delete"
            variant="outline"
            size="icon"
            className="rounded-full"
            type="button"
            onClick={handleClick}
            disabled={items.filter((item) => item.checked).length === 0}
          >
            <Trash2 size={20} />
          </Button>
        </div>

        <div className="px-6">
          {items.map((item, index) => (
            <InboxItem key={item.id} item={item} onToggle={toggleItem} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WarpOverlay;
