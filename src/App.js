import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import './App.css';

function App() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Use the new Navbar component */}
            <Navbar />
            
            {/* Main Content - Add padding for fixed navbar */}
            <main className="pt-24 md:pt-32"> {/* Adjust based on navbar height */}
                <Hero />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Courses />
                <Contact />
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#7B6CF6] to-[#5A4AE3] text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="text-lg font-semibold mb-2">Areen Jawabreh</p>
                        <p className="text-purple-100 mb-4">Software Developer & Computer Engineer</p>
                        <div className="flex justify-center space-x-4 mb-4">
                            <a href="mailto:areenjawabreh55@gmail.com" className="hover:text-purple-200 transition">
                                areenjawabreh55@gmail.com
                            </a>                            
                        </div>
                        <p className="text-purple-200 text-sm">
                            © {new Date().getFullYear()} Areen Jawabreh. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScroll && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#CDC1FF] to-[#7B6CF6] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
                    >
                        <FaArrowUp />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;