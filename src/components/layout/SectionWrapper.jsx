import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children, id, className = '' }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id={id} className={`w-full py-12 sm:py-16 md:py-20 px-4 md:px-8 relative overflow-hidden ${className}`}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto z-10 relative"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
