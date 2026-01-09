import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaCode, FaServer, FaDatabase, FaTools, FaPalette, 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
    FaGithub, FaWindows, FaPython, FaPaintBrush, FaCloud,
    FaMobileAlt, FaCheckCircle, FaBolt
} from 'react-icons/fa';

const skillCategories = [
    {
        title: "Backend & Programming",
        icon: <FaServer className="text-[#7B6CF6] text-2xl" />,
        skills: [
            { name: "C#", icon: <FaCode className="text-purple-600" />, level: 90 },
            { name: ".NET", icon: <FaWindows className="text-blue-600" />, level: 85 },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 80 },
            { name: "Python", icon: <FaPython className="text-yellow-600" />, level: 75 },
            { name: "REST APIs", icon: <FaCloud className="text-indigo-600" />, level: 85 },
            { name: "OOP", icon: <FaBolt className="text-red-600" />, level: 90 }
        ]
    },
    {
        title: "Front End",
        icon: <FaCode className="text-[#7B6CF6] text-2xl" />,
        skills: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-600" />, level: 95 },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
            { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 85 },
            { name: "React", icon: <FaReact className="text-blue-400" />, level: 80 },
            { name: "Flutter", icon: <FaMobileAlt className="text-blue-300" />, level: 70 }
        ]
    },
    {
        title: "Databases",
        icon: <FaDatabase className="text-[#7B6CF6] text-2xl" />,
        skills: [
            { name: "SQL Server", icon: <FaDatabase className="text-red-500" />, level: 85 },
            { name: "MongoDB", icon: <FaDatabase className="text-green-500" />, level: 75 },
            { name: "Database Design", icon: <FaCheckCircle className="text-blue-500" />, level: 80 },
            { name: "PHPMyAdmin", icon: <FaDatabase className="text-orange-500" />, level: 70 }
        ]
    },
    {
        title: "Tools & Platforms",
        icon: <FaTools className="text-[#7B6CF6] text-2xl" />,
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 85 },
            { name: "GitHub", icon: <FaGithub className="text-gray-800" />, level: 90 },
            { name: "Postman", icon: <FaCloud className="text-orange-500" />, level: 80 },
            { name: "Appian", icon: <FaTools className="text-blue-600" />, level: 75 }
        ]
    },
    {
        title: "Design",
        icon: <FaPalette className="text-[#7B6CF6] text-2xl" />,
        skills: [
            { name: "Figma", icon: <FaPaintBrush className="text-[#7B6CF6]" />, level: 85 },
            { name: "Canva", icon: <FaPalette className="text-blue-400" />, level: 90 }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Skills</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Comprehensive technical expertise across full-stack development
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#CDC1FF] to-[#7B6CF6] mx-auto mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-purple-100"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                            </div>
                            
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="mb-3">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2 shadow-sm">
                                                    {skill.icon}
                                                </div>
                                                <span className="font-medium text-gray-700">{skill.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;