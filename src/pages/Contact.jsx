import React from 'react';
import ContactSection from '../components/sections/Contact';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with MFP Vadamadurai. Visit us at Appanaickenpalayam Road, Coimbatore or call us at 81222 97319."
            />
            <div className="pt-20">
                <ContactSection />

                {/* Organic Content: FAQs */}
                <section className="py-20 bg-dark-lighter px-4 border-t border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Help Center</span>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white uppercase">
                                Frequently Asked <span className="text-primary">Questions</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { q: "What should I bring to my first session?", a: "Bring comfortable workout clothes, indoor training shoes, a water bottle, and a towel. We have filtered water stations and lockers available." },
                                { q: "Do you offer trial sessions?", a: "Yes! We offer a complimentary 1-day pass for local residents so you can experience our facility before committing." },
                                { q: "Is Personal Training included in the membership?", a: "Personal Training is an additional service. However, all memberships include a general orientation and chart to get you started." },
                                { q: "What are your operating hours?", a: "We are open from 5:30 AM to 12:00 PM (Morning) and 4:00 PM to 10:00 PM (Evening), Monday through Saturday. Sunday is rest day." }
                            ].map((item, i) => (
                                <div key={i} className="bg-dark p-6 border border-white/5 rounded-sm">
                                    <h4 className="text-lg font-poppins font-bold text-white uppercase mb-2 text-primary">{item.q}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed font-light tracking-wide">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
