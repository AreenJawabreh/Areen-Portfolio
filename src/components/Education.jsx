import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-purple-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                            <FaGraduationCap className="text-[#7B6CF6] text-2xl" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#CDC1FF] to-[#7B6CF6] mx-auto"></div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex items-start">
                            <div className="mr-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-[#CDC1FF] to-[#7B6CF6] rounded-xl flex items-center justify-center">
                                    <FaGraduationCap className="text-white text-3xl" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    Bachelor's Degree in Computer Engineering
                                </h3>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <span className="font-semibold text-gray-700">An-Najah University</span>
                                    <span className="mx-2">•</span>
                                    <FaMapMarkerAlt className="text-[#7B6CF6] mr-1" />
                                    <span>Nablus, Rafidia</span>
                                </div>
                                <div className="flex items-center text-[#7B6CF6] font-semibold mb-6">
                                    <FaCalendarAlt className="mr-2" />
                                    <span>Graduated: July 2024</span>
                                </div>
                                
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <h4 className="font-semibold text-gray-700 mb-3">Key Achievements:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-[#7B6CF6] rounded-full mt-2 mr-3"></div>
                                            <span className="text-gray-600">Completed comprehensive computer engineering curriculum</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-[#7B6CF6] rounded-full mt-2 mr-3"></div>
                                            <span className="text-gray-600">Developed strong foundation in software development principles</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-[#7B6CF6] rounded-full mt-2 mr-3"></div>
                                            <span className="text-gray-600">Gained practical experience through university projects</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;