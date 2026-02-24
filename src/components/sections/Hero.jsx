import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import TextReveal from '../ui/TextReveal';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="home" className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-28 md:pt-20">
            {/* Parallax Background */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent z-10" />
                <div className="absolute inset-0 bg-dark/40 z-10 mix-blend-multiply" />
                <div className="w-full h-[120%] -top-[10%] relative bg-[url('/IMG_8527.jpg')] bg-cover bg-center animate-scale-slow" />
            </motion.div>

            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-dark via-transparent to-primary/10 opacity-60 mix-blend-overlay" />

            <motion.div
                style={{ y: y2 }}
                className="relative z-20 text-center px-4 max-w-6xl mx-auto flex flex-col items-center gap-6 md:gap-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="h-1 w-12 bg-primary mb-4" />
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm block mb-1">
                        Welcome to the Arena
                    </span>
                    <p className="text-gray-400 text-sm tracking-widest uppercase font-medium">
                        Muscle Fitness Point Vadamadurai
                    </p>
                </motion.div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-poppins font-black text-white uppercase leading-[1.1] tracking-tight drop-shadow-2xl">
                    <div className="overflow-hidden">
                        <TextReveal delay={0.2}>Inspiring</TextReveal>
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-300% animate-gradient pb-2">
                        <TextReveal delay={0.6}>Confidence In Motion</TextReveal>
                    </div>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-gray-300 text-sm sm:text-base md:text-xl max-w-2xl font-light tracking-wide"
                >
                    Where <span className="text-white font-bold">Pain</span> meets <span className="text-primary font-bold">Progress</span>.
                    Step inside the ultimate training ground designed for champions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 md:mt-8"
                >
                    <Link to="/membership">
                        <Button variant="primary" className="bg-primary hover:bg-white text-dark shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] px-10">
                            Start Your Journey
                        </Button>
                    </Link>
                    <Button variant="outline" className="border-white/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm px-10">
                        Explore Facilities
                    </Button>
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-10 hidden lg:block z-20">
                <div className="flex flex-col gap-4">
                    {['Strength', 'Power', 'Legacy'].map((text, i) => (
                        <span key={i} className="text-white/20 font-poppins font-black uppercase tracking-widest text-4xl">
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-10 right-10 z-20 flex gap-4">
                <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="w-full h-full bg-primary"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
