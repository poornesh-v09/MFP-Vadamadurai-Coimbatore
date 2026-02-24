import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-lighter pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="col-span-1 sm:col-span-2">
                    <img
                        src="/mfp_vadamadurai_nobg_logo.png"
                        alt="MFP Vadamadurai"
                        className="h-16 w-auto mb-6"
                    />
                    <p className="text-gray-400 mb-6 max-w-sm">
                        Unleash your potential at Vadamadurai's premier fitness destination.
                        Functionality, Strength, and Passion combined.
                    </p>
                    <div className="mb-6">
                        <span className="text-primary font-poppins text-sm tracking-widest uppercase">Owner</span>
                        <p className="text-white font-bold text-lg">GajananAjith</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/mfp_unisex_gym_vadamadurai/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-dark transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61579465034208" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-dark transition-colors">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-poppins font-bold uppercase tracking-wider mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide">About Us</Link></li>
                        <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide">Classes</Link></li>
                        <li><Link to="/trainers" className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide">Trainers</Link></li>
                        <li><Link to="/membership" className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide">Membership</Link></li>
                        <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-poppins font-bold uppercase tracking-wider mb-6">Contact Us</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 text-gray-400">
                            <MapPin className="text-primary shrink-0" size={20} />
                            <p className="text-sm">
                                Appanaickenpalayam Road,<br />
                                Palanigounden Pudur,<br />
                                Vadamadurai, Coimbatore - 641 017.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400">
                            <Phone className="text-primary shrink-0" size={20} />
                            <div className="text-sm">
                                <p>+91 81222 97319</p>
                                <p>+91 94888 21600</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400">
                            <Mail className="text-primary shrink-0" size={20} />
                            <p className="text-sm">mfp_vadamadurai@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center">
                <p className="text-gray-600 text-sm">© {new Date().getFullYear()} MFP Vadamadurai Unisex Gym. By(Varnyx) All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
