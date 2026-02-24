import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { Trophy, Users, Clock, Zap } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }) => (
    <div className="flex flex-col items-center p-6 bg-dark-lighter border border-white/5 hover:border-primary/50 transition-colors duration-300 group">
        <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-4xl font-poppins font-bold text-white mb-2">{value}</span>
        <span className="text-gray-400 uppercase text-sm tracking-wider">{label}</span>
    </div>
);

const About = () => {
    const stats = [
        { icon: Users, value: "300+", label: "Happy Members" },
        { icon: Trophy, value: "4+", label: "Expert Trainers" },
        { icon: Clock, value: "16hrs", label: "Daily Open" },
        { icon: Zap, value: "100%", label: "Results" },
    ];

    return (
        <SectionWrapper id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="space-y-8">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-poppins font-black text-white mt-2 leading-tight">
                            MORE THAN JUST <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">A GYM.</span>
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        At MFP Vadamadurai, we believe fitness is not a hobby, it's a lifestyle.
                        We provide a high-energy atmosphere where you can push your limits and achieve your goals.
                        Whether you want to lose weight, build muscle, or improve endurance, our facility gives you the tools to succeed.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <StatCard key={index} {...stat} />
                        ))}
                    </div>
                </div>

                {/* Visual */}
                <div className="relative">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-primary/20 to-transparent z-0 -translate-y-8 translate-x-8" />
                    <div className="relative z-10 w-full h-[300px] md:h-[450px] lg:h-[600px] bg-dark-lighter overflow-hidden border-2 border-white/5">
                        <img
                            src="/images/about_mfp_neon.jpg"
                            alt="MFP - Inspiring Confidence in Motion"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
