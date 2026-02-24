import React from 'react';
import ServicesSection from '../components/sections/Services';
import SEO from '../components/SEO';

const Services = () => {
    return (
        <>
            <SEO
                title="Services & Facilities"
                description="Explore our world-class gym facilities including Strength Training, Cardio Zone, CrossFit, and Personal Training at MFP Vadamadurai."
            />
            <div className="pt-20">
                <ServicesSection />

                {/* Organic Content: Fitness Pillars */}
                <section className="py-20 bg-dark-lighter px-4 border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Knowledge Base</span>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white uppercase">
                                The Pillars of <span className="text-primary">Performance</span>
                            </h2>
                            <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-light tracking-wide">
                                Understanding why we train is just as important as how we train.
                                Our facility is designed around these core principles of human health.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                {
                                    title: "Progressive Overload",
                                    desc: "The foundation of strength. By gradually increasing the weight, frequency, or number of repetitions in your strength training routine, you challenge your body to adapt and grow stronger."
                                },
                                {
                                    title: "Metabolic Conditioning",
                                    desc: "More than just cardio. Optimizing your energy systems (aerobic and anaerobic) improves heart health, burns fat efficiently, and increases your stamina for daily life challenges."
                                },
                                {
                                    title: "Functional Movement",
                                    desc: "Training for life. We focus on compound movements—squats, hinges, pushes, pulls—that mimic real-world activities, reducing injury risk and improving overall mobility."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-dark p-8 border border-white/5 hover:border-primary/50 transition-colors duration-300">
                                    <h3 className="text-xl font-poppins font-bold text-white uppercase mb-4">{item.title}</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm font-light tracking-wide">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Services;
