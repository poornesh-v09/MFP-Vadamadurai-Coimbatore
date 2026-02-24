import React from 'react';
import AboutSection from '../components/sections/About';
import SEO from '../components/SEO';

const About = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn about MFP Vadamadurai's history, vision, and our owner GajananAjith's mission to transform lives through fitness."
            />
            <div className="pt-20">
                <AboutSection />

                {/* Founder's Vision Section */}
                <section className="py-20 bg-dark px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Our Philosophy</span>
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white uppercase mb-8">
                            Forged in <span className="text-primary">Passion</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            "I started MFP Vadamadurai with a single mission: to bring world-class fitness training to our community.
                            We aren't just a gym; we are a family of individuals committed to becoming better every single day.
                            Whether you are a beginner stepping into a gym for the first time or an athlete looking to compete,
                            we have the tools, the knowledge, and the environment to help you succeed."
                        </p>
                        <div className="flex justify-center items-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                                <img src="/trainer1.jpg" alt="GajananAjith" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-white font-poppins font-bold uppercase">GajananAjith</h4>
                                <p className="text-primary text-sm uppercase tracking-wider">Owner & Head Coach</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Organic Content: Gym Values */}
                <section className="py-20 bg-dark-lighter px-4 border-t border-white/5">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Our Culture</span>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white uppercase mb-6">
                                The MFP <span className="text-stroke-primary text-transparent">Code</span>
                            </h2>
                            <p className="text-gray-400 mb-8">
                                To maintain a high-standard training environment, we live by a simple code.
                            </p>
                            <div className="space-y-8">
                                {[
                                    { title: "Respect the Iron", desc: "Re-rack your weights. Wipe down machines. Leave the station better than you found it." },
                                    { title: "Leave Your Ego", desc: "Form comes first. We train for longevity and strength, not to impress others with unsafe lifting." },
                                    { title: "Support the Tribe", desc: "We are a community. Encourage your peers, share the equipment, and bring positive energy." }
                                ].map((rule, i) => (
                                    <div key={i}>
                                        <h4 className="text-white font-bold uppercase text-lg mb-2 border-l-4 border-primary pl-4">{rule.title}</h4>
                                        <p className="text-gray-300 pl-5 text-sm font-light tracking-wide">{rule.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="h-full min-h-[400px] bg-[url('/arena4.jpg')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 rounded-sm border border-white/10" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
