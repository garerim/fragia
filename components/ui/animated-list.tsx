"use client";

import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 1000 }: AnimatedListProps) => {
    const [visibleItems, setVisibleItems] = useState<React.ReactNode[]>([]);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      if (visibleItems.length >= childrenArray.length) return;
      
      const interval = setInterval(() => {
        setVisibleItems(prev => {
          if (prev.length >= childrenArray.length) {
            clearInterval(interval);
            return prev;
          }
          return [...prev, childrenArray[prev.length]];
        });
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray, delay, visibleItems.length]);

    return (
      <div className={`flex flex-col-reverse items-center gap-4 ${className}`}>
        <AnimatePresence>
          {visibleItems.map((item, idx) => (
            <AnimatedListItem key={(item as ReactElement).key || idx}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}
