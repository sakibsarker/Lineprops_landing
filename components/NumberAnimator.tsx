"use client"
import React, { useEffect, useState } from 'react';

// Define a type for the component props
interface NumberAnimatorProps {
    start: number;
    end: number;
    isInView: boolean;
    intervalSet : number;
}

const NumberAnimator: React.FC<NumberAnimatorProps> = ({ start, end, isInView, intervalSet }) => {
    const [value, setValue] = useState<number>(start);

    useEffect(() => {
        if (!isInView) return;
        const interval = setInterval(() => {
            setValue((prevValue) => {
                if (prevValue < end) {
                    return prevValue + 1;
                } else {
                    clearInterval(interval);
                    return end;
                }
            });
        }, intervalSet); // Adjust interval as needed

        return () => clearInterval(interval);
    }, [start, end , isInView, intervalSet]);

    return <div>{Math.round(value)}</div>;
};

export default NumberAnimator;