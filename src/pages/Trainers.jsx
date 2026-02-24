import React from 'react';
import TrainersSection from '../components/sections/Trainers';
import SEO from '../components/SEO';

const Trainers = () => {
    return (
        <>
            <SEO
                title="Our Trainers"
                description="Meet our expert trainers Abishek, Vipin, Manoj and Owner GajananAjith. Get the best coaching for your fitness journey."
            />
            <div className="pt-20">
                <TrainersSection />

                {/* Organic Content: Coaching Value */}
                <section className="py-20 bg-dark px-4">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">The Advantage</span>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white uppercase mb-6">
                                Why Choose a <span className="text-stroke-primary text-transparent">Coach?</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                                You can train alone, but even the best athletes in the world have coaches.
                                At MFP, our trainers don't just count reps; they analyze your form,
                                fix imbalances, and push you past mental barriers.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    { head: "Precision Programming", text: "Stop guessing. We build a roadmap specifically for your body type and goals." },
                                    { head: "Safety & Technique", text: "Avoid injury and longevity-ending mistakes by learning the correct mechanics from Day 1." },
                                    { head: "Unwavering Accountability", text: "Consistency is key. We are there to ensure you show up and put in the work, even on bad days." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-12 h-1 bg-primary mt-3 shrink-0" />
                                        <div>
                                            <h4 className="text-white font-bold uppercase mb-1">{item.head}</h4>
                                            <p className="text-gray-300 text-sm font-light tracking-wide">{item.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
                            <img
                                src="/IMG_8515.jpg"
                                alt="Trainer assisting client"
                                className="relative z-10 w-full rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Trainers;
