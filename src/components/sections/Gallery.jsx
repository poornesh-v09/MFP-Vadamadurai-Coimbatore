import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';

const Gallery = () => {
    const images = [
        "/images/arena_studio.jpg",
        "/images/arena_office.jpg",
        "/images/arena_gym_floor.jpg",
        "/images/arena_weights.jpg",
        "/images/arena_parking.jpg",
        "/images/arena_lounge.jpg",
        "/images/arena_floor_view.jpg",
        "/images/arena_cardio_area.jpg",
        "/images/arena_equipment.png",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <SectionWrapper id="gallery" className="bg-dark-lighter">
            <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                    <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Gallery</span>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white uppercase">
                        Inside The <span className="text-primary">Arena</span>
                    </h2>
                </div>
                <div className="hidden md:block w-32 h-1 bg-primary mb-4" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
                {images.map((img, index) => (
                    <motion.div key={index} variants={itemVariants} className="relative overflow-hidden group h-64 border border-white/5">
                        <img
                            src={img}
                            alt={`Gallery ${index}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default Gallery;
