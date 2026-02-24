import React from 'react';
import PricingSection from '../components/sections/Pricing';
import SEO from '../components/SEO';

const Membership = () => {
    return (
        <>
            <SEO
                title="Membership Plans"
                description="Affordable gym membership plans at MFP Vadamadurai. Check our General and Transformation packages."
            />
            <div className="pt-20">
                <PricingSection />
            </div>
        </>
    );
};

export default Membership;
