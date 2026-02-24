import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';
import { Instagram } from 'lucide-react';

const TrainerCard = ({ name, specialty, image, instagram }) => (
    <div className="relative group bg-dark-lighter overflow-hidden border border-white/5">
        <div className="h-72 sm:h-80 lg:h-96 overflow-hidden">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
            />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90" />

        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-2xl font-poppins font-bold text-white uppercase">{name}</h3>
            <p className="text-primary font-medium tracking-wide mb-4">{specialty}</p>

            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-dark transition-colors">
                    <Instagram size={18} />
                </a>
            </div>
        </div>
    </div>
);

const Trainers = () => {
    const trainers = [
        {
            name: "GajananAjith",
            specialty: "Owner & Head Coach",
            image: "/trainer1.jpg",
            instagram: "https://www.instagram.com/gajanan_ajith"
        },
        {
            name: "Abishek",
            specialty: "Fitness Trainer",
            image: "/trainer_abishek.jpg",
            instagram: "https://www.instagram.com/abxe_.xz._"
        },
        {
            name: "Vipin",
            specialty: "Fitness Trainer",
            image: "/trainer3.jpg",
            instagram: "https://www.instagram.com/flexvith.v"
        },
        {
            name: "Manoj",
            specialty: "Fitness Trainer",
            image: "/trainer_manoj.jpg",
            instagram: "https://www.instagram.com/manoj__mfp"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <SectionWrapper id="trainers">
            <div className="mb-16 flex flex-col items-center text-center">
                <span className="text-primary font-bold tracking-widest uppercase mb-2">Expert Coaching</span>
                <h2 className="text-4xl md:text-5xl font-poppins font-black text-white uppercase">
                    Train With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">The Best</span>
                </h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {trainers.map((trainer, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <TrainerCard {...trainer} />
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default Trainers;
