import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    const defaultKeywords = "MFP Vadamadurai, Gym Vadamadurai, Gym Thudiyalur, MFP Gym, Gym Near Me, Fitness Center Coimbatore, Bodybuilding, Weight Loss, Personal Training Vadamadurai";

    return (
        <Helmet>
            <title>{title} | MFP Vadamadurai</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta property="og:title" content={`${title} | MFP Vadamadurai`} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
};

export default SEO;
