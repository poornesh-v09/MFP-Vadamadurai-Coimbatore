import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const TextReveal = ({ children, className = '', delay = 0 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const text = typeof children === 'string' ? children : '';
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * 0.3 },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            style={{ overflow: "hidden", display: "inline-block" }}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em", display: "inline-block" }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TextReveal;
