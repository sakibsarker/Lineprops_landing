"use client"
import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedComponentProps {
    children: ReactNode; // Define the type of children
    delay?: number; // Optional delay prop with a default value
    className?: string;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children, delay = 0, className, ...props }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            className={className}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedComponent;
