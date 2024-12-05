import { useEffect, useState } from "react";

const useCountUp = (start: number, end: number, isInView: boolean) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue < end) {
            return prevValue + 1; // Increment by 1, adjust as needed
          } else {
            clearInterval(interval);
            return end;
          }
        });
      }, 1000 / 60); // Adjust timing as needed
    }
  }, [isInView, end]);

  return value;
};

export default useCountUp;