import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';

const ServiceCard = ({ title, description, image, index }) => (
    <div className="group relative h-full w-full cursor-pointer overflow-hidden">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10" />

        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-baseline gap-2 mb-2">
                <span className="text-primary font-poppins text-5xl font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                    0{index + 1}
                </span>
                <h3 className="text-3xl font-poppins font-bold text-white uppercase leading-none group-hover:text-primary transition-colors">
                    {title}
                </h3>
            </div>
            <p className="text-gray-300 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 transform translate-y-4 group-hover:translate-y-0">
                {description}
            </p>
        </div>

        {/* Top Border Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30" />
    </div>
);

const Services = () => {
    const services = [
        {
            title: "Strength Training",
            description: "Experience the pinnacle of resistance training with our wide range of free weights and Hammer Strength machines. Designed to maximize hypertrophy and strength gains for all levels.",
            // Intense, moody dumbbell press - high quality
            image: "/service1_strength.jpg"
        },
        {
            title: "Cardio Zone",
            description: "Elevate your endurance in our state-of-the-art cardio theater. Featuring advanced treadmills, ellipticals, and stationary bikes to keep your heart healthy and stamina peak.",
            // Modern treadmill array - high quality
            image: "/service2.jpg"
        },
        {
            title: "Personal Training",
            description: "Accelerate your results with 1-on-1 coaching. Our expert trainers provide personalized workout plans, nutritional guidance, and the motivation you need to surpass your limits.",
            // Trainer correcting form - high quality
            image: "/service3.jpg"
        },
        {
            title: "Functional Fitness",
            description: "Train for real-world movement. This dynamic zone features battle ropes, plyoboxes, and kettlebells to improve your agility, power, and overall athletic performance.",
            // Crossfit / Ropes style - high quality
            image: "/service4.jpg"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <SectionWrapper id="classes" className="bg-dark">
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Our Facilities</span>
                <h2 className="text-4xl md:text-6xl font-poppins font-black text-white uppercase leading-none">
                    World Class <span className="text-stroke-primary text-transparent">Standards</span>
                </h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-0" // Removing gap for seamless look on larger screens
            >
                {services.map((service, index) => (
                    <motion.div key={index} variants={itemVariants} className="aspect-[4/3] sm:aspect-[3/4]">
                        <ServiceCard {...service} index={index} />
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default Services;
