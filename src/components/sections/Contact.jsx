import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Button from '../ui/Button';

const Contact = () => {
    return (
        <SectionWrapper id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info & Hours */}
                <div>
                    <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-poppins font-black text-white uppercase mb-8">
                        Visit The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Hall of Pain</span>
                    </h2>

                    <div className="bg-dark-lighter border-l-4 border-primary p-6 mb-8">
                        <h3 className="text-xl font-poppins text-white uppercase mb-4">Operating Hours</h3>
                        <div className="space-y-2 text-gray-300">
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span>Morning</span>
                                <span className="text-primary font-bold">5:30 AM - 12:30 PM</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span>Evening</span>
                                <span className="text-primary font-bold">4:00 PM - 10:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-primary font-bold">8:00 AM - 12:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Name" className="bg-dark-lighter border border-white/10 p-4 text-white focus:outline-none focus:border-primary w-full" />
                            <input type="tel" placeholder="Phone" className="bg-dark-lighter border border-white/10 p-4 text-white focus:outline-none focus:border-primary w-full" />
                        </div>
                        <input type="email" placeholder="Email" className="bg-dark-lighter border border-white/10 p-4 text-white focus:outline-none focus:border-primary w-full" />
                        <textarea rows="4" placeholder="Message / Goals" className="bg-dark-lighter border border-white/10 p-4 text-white focus:outline-none focus:border-primary w-full"></textarea>
                        <Button type="submit" variant="primary" className="w-full">Message Us</Button>
                    </form>
                </div>

                {/* Map */}
                <div className="h-[350px] lg:h-full min-h-[300px] lg:min-h-[400px] border border-white/10 relative overflow-hidden bg-dark-lighter flex items-center justify-center group cursor-pointer" onClick={() => window.open("https://maps.app.goo.gl/wKiEujJWo8Vu4GSy5", "_blank")}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.3957829311453!2d76.92450407482272!3d11.083851689084208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f72c04889731%3A0xaa76b821ba9a4aee!2sMFP%20Unisex%20Gym%20-Vadamadurai!5e0!3m2!1sen!2sin!4v1771353456396!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0%)' }} // Made colorful
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="pointer-events-none" // Disable interaction with iframe to allow parent click
                    ></iframe>
                    <div className="absolute inset-0 bg-transparent group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-primary text-dark font-bold px-4 py-2 rounded transform scale-75 group-hover:scale-100 transition-all duration-300">
                            Open in Maps
                        </span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
