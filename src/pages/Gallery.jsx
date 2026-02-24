import React from 'react';
import GallerySection from '../components/sections/Gallery';
import SEO from '../components/SEO';

const Gallery = () => {
    return (
        <>
            <SEO
                title="Gallery"
                description="See inside MFP Vadamadurai. Check out our latest gym photos, workout sessions, and transformations."
            />
            <div className="pt-20">
                <GallerySection />
            </div>
        </>
    );
};

export default Gallery;
