import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-8 py-3 font-semibold uppercase tracking-wider transition-all duration-300 clip-path-polygon";

    const variants = {
        primary: "bg-primary text-dark hover:bg-white hover:text-dark hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]",
        secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-dark hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]",
        outline: "bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
