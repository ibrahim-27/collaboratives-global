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
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            message: '',
            phone: ''
        });
    };

    return (
        <div>
        <h3 className='text-2xl font-bold text-center'>Contact Us</h3>
        <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-1/2 mx-auto flex flex-col gap-6 p-6 bg-white shadow-md rounded-lg">
            <div className="">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                />
            </div>
            <div className="">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                    />
            </div>
            <div className="">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                    />
            </div>
            <div className="">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-32 mx-auto bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary"
            >
                Send
            </button>
        </form>
        </div>
    );
};

export default ContactUsForm;