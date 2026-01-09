import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTasks, FaCode, FaLaptopCode } from 'react-icons/fa';

const experiences = [
    {
        title: "Project Manager",
        company: "CoreTech",
        location: "Nablus, Rafidia",
        period: "March 2025 - Present",
        description: "Monitored project progress, risks, and timelines using agile methodologies.Reviewed technical implementations to ensure alignment with project goals and quality standards.",
        icon: <FaTasks className="text-[#7B6CF6] text-2xl" />,
        color:  "from-[#CDC1FF] to-[#7B6CF6]"
    },
    {
        title: "Software Developer",
        company: "Experts Turnkey Solutions",
        location: "Ramallah, Batn El-Hawa",
        period: "December 2024 - May 2025",
        description: "Worked as a software developer specializing in low-code development using Emakin Platform to build and automate business processes for Palestine Standards Institutions(PSI).",
        icon: <FaCode className="text-[#7B6CF6] text-2xl" />,
        color:  "from-[#CDC1FF] to-[#7B6CF6]"
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                        <FaBriefcase className="text-[#7B6CF6] text-2xl" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#CDC1FF] to-[#7B6CF6] mx-auto"></div>
                </motion.div>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200"></div>
                    
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`mb-12 relative ${index % 2 === 0 ? 'md:pr-1/2 md:pl-4' : 'md:pl-1/2 md:pr-4'}`}
                        >
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7B6CF6]">
                                <div className="flex items-start mb-4">
                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} mr-4`}>
                                        {exp.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                                            <span className="px-3 py-1 bg-purple-100 text-[#7B6CF6] rounded-full text-sm font-medium">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-gray-600 mb-3">
                                            <span className="font-semibold text-gray-700">{exp.company}</span>
                                            <span className="mx-2">•</span>
                                            <FaMapMarkerAlt className="text-[#7B6CF6] mr-1" />
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#7B6CF6] rounded-full border-4 border-white"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;