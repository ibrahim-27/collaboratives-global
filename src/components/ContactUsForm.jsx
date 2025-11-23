import React, { useState } from 'react';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: '',
            phone: ''
        });
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="bg-primary p-10 md:w-2/5 text-white flex flex-col justify-center">
                        <h3 className="text-3xl font-display font-bold mb-6">Get in Touch</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Ready to transform your business? Contact us today for a consultation.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <span>+92 300 8477546</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <span className="break-all">asim.nazir@collaborativesglobal.com</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-10 md:w-3/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-gray-50"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-gray-50"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-gray-50"
                                    placeholder="+1 (234) 567-8900"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-gray-50"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsForm;