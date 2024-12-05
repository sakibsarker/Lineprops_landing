"use client"
import React, { useState, useEffect } from 'react';

type IconName = 'chevronRight' | 'plus' | 'chevronDown'; // Add more icon names as needed

type Props = {
    iconName: IconName;
    iconColor: string;
    className?: string;
    width: number; // Optional width prop
    height: number; // Optional height prop
};

const icons: Record<IconName, JSX.Element> = {
    chevronRight: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6-6 6" />
        </svg>
    ),
    plus: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
        </svg>
    ),
    chevronDown: ( // Added chevronDown icon
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 9l6 6 6-6" />
        </svg>
    ),
    // Add more icons here as needed
};

function Icon({ iconName, iconColor, className, width = 100, height = 100 }: Props) {
    const [dynamicSize, setDynamicSize] = useState({ width, height });

    useEffect(() => {
        function handleResize() {
            const isMobile = window.innerWidth <= 768;
            setDynamicSize({
                width: isMobile ? width / 2 : width, // Adjust size ratio as needed
                height: isMobile ? height / 2 : height, // Adjust size ratio as needed
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial size

        return () => window.removeEventListener('resize', handleResize);
    }, [width, height]);

    const IconSvg = React.cloneElement(icons[iconName], {
        width: dynamicSize.width,
        height: dynamicSize.height,
    });

    return (
        <div className={`${className}`} style={{ color: iconColor }}>
            {IconSvg}
        </div>
    );
}

export default Icon;