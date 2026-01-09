import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/mnjjajle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast.success("Message sent successfully! I'll get back to you soon.", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "colored"
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again later.', {
                position: "top-right",
                autoClose: 5000,
                theme: "colored"
            });
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <ToastContainer />
            <div className="container mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Interested in working together? Feel free to reach out!
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#CDC1FF] to-[#7B6CF6] mx-auto mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                    <FaEnvelope className="text-[#7B6CF6] text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Email</h4>
                                    <a
                                        href="mailto:areenjawabreh55@gmail.com"
                                        className="text-gray-600 hover:text-[#7B6CF6] transition"
                                    >
                                        areenjawabreh55@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                    <FaMapMarkerAlt className="text-[#7B6CF6] text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Location</h4>
                                    <p className="text-gray-600">Palestine - Nablus</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h4 className="font-semibold text-gray-700 mb-4">Connect with me</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/areen-jawabreh-058363241/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition"
                                >
                                    <FaLinkedin className="text-[#7B6CF6] text-xl" />
                                </a>
                                <a
                                    href="https://github.com/AreenJawabreh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition"
                                >
                                    <FaGithub className="text-[#7B6CF6] text-xl" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7B6CF6] focus:ring-2 focus:ring-purple-200 outline-none transition"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7B6CF6] focus:ring-2 focus:ring-purple-200 outline-none transition"
                            />

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your message here..."
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7B6CF6] focus:ring-2 focus:ring-purple-200 outline-none resize-none transition"
                            />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-[#CDC1FF] to-[#7B6CF6] text-white font-semibold rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                            >
                                <FaPaperPlane className="mr-2" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;