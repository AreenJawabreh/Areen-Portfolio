import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt,
    FaBars, FaTimes, FaHome, FaBriefcase, FaGraduationCap,
    FaCode, FaProjectDiagram, FaBook, FaAddressBook
} from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home', icon: <FaHome /> },
        { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
        { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
        { id: 'skills', label: 'Skills', icon: <FaCode /> },
        { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
        { id: 'courses', label: 'Courses', icon: <FaBook /> },
        { id: 'contact', label: 'Contact', icon: <FaAddressBook /> },
    ];

    const scrollToSection = (sectionId) => {
        if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <motion.nav 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden md:flex bg-white shadow-lg fixed top-0 left-0 right-0 z-50"
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center space-x-6">
                           
                            <div className="flex items-center space-x-2 text-gray-600">
                                <FaMapMarkerAlt className="text-[#7B6CF6]" />
                                <span className="text-sm">Palestine - Nablus</span>
                            </div>
                            <a 
                                href="mailto:areenjawabreh55@gmail.com"
                                className="flex items-center space-x-2 text-gray-600 hover:text-[#7B6CF6] transition"
                            >
                                <FaEnvelope className="text-[#7B6CF6]" />
                                <span className="text-sm">areenjawabreh55@gmail.com</span>
                            </a>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <a 
                                href="https://www.linkedin.com/in/areen-jawabreh-058363241/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition"
                            >
                                <FaLinkedin className="text-[#7B6CF6]" />
                            </a>
                            <a 
                                href="https://github.com/AreenJawabreh" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition"
                            >
                                <FaGithub className="text-[#7B6CF6]" />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-3">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-gray-800">Areen Jawabreh</h1>
                        </div>

                        <div className="flex space-x-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex items-center space-x-2 text-gray-700 hover:text-[#7B6CF6] font-medium transition group"
                                >
                                    <span className="text-[#7B6CF6]">{item.icon}</span>
                                    <span>{item.label}</span>
                                    <span className="w-0 group-hover:w-full h-0.5 bg-[#7B6CF6] transition-all duration-300"></span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.nav>

            <motion.nav 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:hidden bg-white shadow-lg fixed top-0 left-0 right-0 z-50"
            >
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Areen Jawabreh</h1>
                            <p className="text-[#7B6CF6] font-semibold text-sm">Software Developer</p>
                        </div>
                        
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-gray-700"
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="py-4 border-t border-gray-100">

                                    <div className="mb-6 space-y-3">
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <FaPhone className="text-[#7B6CF6]" />
                                            <span>+970599777973</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <FaMapMarkerAlt className="text-[#7B6CF6]" />
                                            <span>Palestine - Nablus</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <FaEnvelope className="text-[#7B6CF6]" />
                                            <span>areenjawabreh55@gmail.com</span>
                                        </div>
                                        <div className="flex space-x-4 pt-2">
                                            <a 
                                                href="https://www.linkedin.com/in/areen-jawabreh-058363241/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition"
                                            >
                                                <FaLinkedin className="text-[#7B6CF6]" />
                                            </a>
                                            <a 
                                                href="https://github.com/AreenJawabreh" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition"
                                            >
                                                <FaGithub className="text-[#7B6CF6]" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {navItems.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:text-[#7B6CF6] hover:bg-purple-50 rounded-lg transition"
                                            >
                                                <span className="text-[#7B6CF6]">{item.icon}</span>
                                                <span className="font-medium">{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </>
    );
};

export default Navbar;