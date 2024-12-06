"use client";

import React, { useEffect, useState } from "react";

interface NumberAnimatorProps {
  start: number;
  end: number;
  isInView: boolean;
  intervalSet: number;
}

const NumberAnimator: React.FC<NumberAnimatorProps> = ({
  start,
  end,
  isInView,
  intervalSet,
}) => {
  const [value, setValue] = useState<number>(start);

  useEffect(() => {
    if (!isInView) return;

    setValue(start); // Reset to start
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < end) {
          return prevValue + 1;
        } else {
          clearInterval(interval);
          return end;
        }
      });
    }, intervalSet);

    return () => clearInterval(interval);
  }, [isInView, start, end, intervalSet]);

  return <div>{Math.round(value)}</div>;
};

export default NumberAnimator;
