import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram } from 'lucide-react';

const RateCard = ({ title, content, footer }) => (
    <div className="w-full max-w-md mx-auto bg-dark text-white overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] border border-white/5 relative">
        {/* Glossy Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />

        {/* Header */}
        <div className="pt-8 pb-4 text-center relative z-20">
            <div className="w-24 h-auto mx-auto mb-2">
                <img src="/mfp_vadamadurai_nobg_logo.png" alt="MFP Logo" className="w-full h-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm tracking-widest uppercase mb-1">Vadamadurai</p>
            <h3 className="text-primary text-lg font-bold tracking-wider uppercase font-poppins">THE HALL OF PAIN</h3>
        </div>

        {/* Content Body */}
        <div className="px-8 pb-8 relative z-20 space-y-6">
            {content}
        </div>

        {/* Footer Strip */}
        <div className="bg-primary p-4 text-center text-dark relative z-20">
            <p className="text-xs font-semibold leading-tight mb-2">
                Appanaickenpalayam Road, Palanigounden Pudur, <br />
                Vadamadurai, Coimbatore - 641 017.
            </p>
            <div className="flex justify-center items-center gap-4 text-sm font-bold">
                <span className="flex items-center gap-1"><Phone size={12} fill="currentColor" /> 81222 97319</span>
                <span className="hidden md:inline">|</span>
                <span className="flex items-center gap-1">94888 21600</span>
            </div>
            <div className="flex justify-center items-center gap-1 text-sm font-bold mt-1">
                <Instagram size={12} /> mfp_vadamadurai
            </div>
        </div>
    </div>
);

const PricingRow = ({ label, value, isHighlight = false }) => (
    <div className={`flex justify-between items-end border-b border-white/5 pb-1 ${isHighlight ? 'text-primary' : 'text-gray-200'}`}>
        <span className={`font-medium ${isHighlight ? 'text-lg font-bold' : 'text-base'}`}>{label}</span>
        <span className={`font-poppins tracking-wide ${isHighlight ? 'text-xl font-bold' : 'text-lg'}`}>₹ {value}</span>
    </div>
);

const SectionHeader = ({ text }) => (
    <div className="relative text-center my-6">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
        </div>
        <div className="relative z-10 inline-block bg-dark px-4">
            <span className="text-primary bg-gradient-to-r from-transparent via-primary/10 to-transparent px-4 py-1 rounded font-bold uppercase tracking-wider text-sm shadow-[0_0_10px_rgba(255,215,0,0.1)]">
                {text}
            </span>
        </div>
    </div>
);

const Pricing = () => {
    return (
        <SectionWrapper id="membership" className="bg-dark">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-poppins font-black text-white uppercase">
                    Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Rate Cards</span>
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-16 items-start">

                {/* 1. General Rate Card */}
                <RateCard
                    content={
                        <>
                            <PricingRow label="Admission Fee" value="500" isHighlight={true} />

                            <div className="space-y-3 mt-4">
                                <PricingRow label="For 1 Month" value="1999" />
                                <PricingRow label="For 3 Months" value="4499" />
                                <PricingRow label="For 6 Months" value="6999" />
                                <PricingRow label="For 12 Months" value="10999" />
                                <PricingRow label="For 2 Years" value="15999" />
                            </div>

                            <SectionHeader text="Timings" />
                            <div className="text-center text-sm space-y-1 text-gray-300">
                                <p><span className="text-gray-400">Morning :</span> 5.30am to 12.30pm</p>
                                <p><span className="text-gray-400">Evening :</span> 4.00pm to 10.00pm</p>
                                <p><span className="text-gray-400">Sunday-Morning :</span> 8.00 am to 12.00pm</p>
                            </div>

                        </>
                    }
                />

                {/* 2. Transformation Rate Card */}
                <RateCard
                    content={
                        <>
                            <div className="mt-4">
                                <SectionHeader text="Transformation Package" />
                                <div className="text-center py-2">
                                    <h4 className="text-2xl font-bold text-white mb-1">90 Days</h4>
                                    <p className="text-3xl font-poppins text-primary font-bold">₹ 9999</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <SectionHeader text="Transformation Package" />
                                <div className="text-center py-2">
                                    <h4 className="text-2xl font-bold text-white mb-1">120 Days</h4>
                                    <p className="text-3xl font-poppins text-primary font-bold">₹ 11999</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <SectionHeader text="Contest Preparation" />
                                <div className="text-center py-2">
                                    <p className="text-3xl font-poppins text-primary font-bold">₹ 11999</p>
                                </div>
                            </div>

                            <div className="mt-8 mb-4">
                                <SectionHeader text="Post - Pregnancy" />
                                <div className="text-center py-2">
                                    <h4 className="text-lg font-bold text-white leading-tight mb-2">Weight Loss & Toning</h4>
                                    <div className="inline-block border border-primary px-4 py-2 rounded">
                                        <span className="block text-sm text-gray-300">60 Days</span>
                                        <span className="text-2xl font-poppins text-primary font-bold">₹ 9999</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                />

            </div>
        </SectionWrapper>
    );
};

export default Pricing;
