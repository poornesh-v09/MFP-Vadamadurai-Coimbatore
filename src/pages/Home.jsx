import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Trainers from '../components/sections/Trainers';
import Pricing from '../components/sections/Pricing';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Home"
                description="MFP Vadamadurai - The best unisex gym in Vadamadurai, Coimbatore. Join now for fitness, strength training, and transformation."
            />
            <Hero />

            {/* Tagline Banner */}
            <div className="bg-primary py-12 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 pattern-grid-lg opacity-20" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-poppins font-black text-dark uppercase tracking-tight leading-[1.2] py-2">
                        "Nothing Changes if <span className="text-white text-stroke-dark">Nothing Changes</span>"
                    </h2>
                </div>
            </div>

            <About />
            <Services />

            {/* Daily Grind: Motivation & Tips */}
            <section className="py-20 bg-dark-lighter border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase mb-4 block">The Daily Grind</span>
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white uppercase">
                            Fuel Your <span className="text-stroke-primary text-transparent">Ambition</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Consistency is King", text: "Motivation gets you started. Habit keeps you going. Show up even on the days you don't feel like it." },
                            { title: "Nutrition Matters", text: "You can't out-train a bad diet. Fuel your body with whole foods, protein, and hydration to see real results." },
                            { title: "Rest & Recover", text: "Muscles grow while you sleep, not while you lift. Prioritize 7-8 hours of quality sleep to maximize your gains." }
                        ].map((tip, i) => (
                            <div key={i} className="bg-dark p-8 border-l-4 border-primary relative overflow-hidden group hover:bg-white/5 transition-colors">
                                <span className="absolute -right-4 -bottom-4 text-9xl font-poppins font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">0{i + 1}</span>
                                <h3 className="text-xl font-poppins font-bold text-white uppercase mb-4 relative z-10">{tip.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed relative z-10 font-light tracking-wide">{tip.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* SEO Content: Service Areas */}
                    <div className="bg-dark border border-white/5 p-8 rounded-sm">
                        <h3 className="text-white font-poppins font-bold uppercase mb-4 text-lg">Proudly Serving Coimbatore</h3>
                        <p className="text-gray-300 text-sm leading-relaxed font-light tracking-wide">
                            Looking for a <strong>gym near me</strong> in <strong>Vadamadurai</strong> or <strong>Thudiyalur</strong>?
                            MFP (Muscle Fitness Point) is the premier <strong>Unisex Gym</strong> destination in North Coimbatore.
                            Located conveniently on Appanaickenpalayam Road, we are accessible to residents of
                            <strong>Vadamadurai, Thudiyalur, Periyanaickenpalayam,</strong> and surrounding areas.
                            Whether you are into <strong>bodybuilding, weight loss,</strong> or <strong>functional training</strong>,
                            MFP Vadamadurai offers world-class equipment and expert coaching to help you reach your goals.
                        </p>
                    </div>
                </div>
            </section>

            <Pricing />
            <Gallery />
            <Contact />
        </>
    );
};

export default Home;
