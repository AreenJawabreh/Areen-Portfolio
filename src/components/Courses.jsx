import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    FaGraduationCap, FaCalendarAlt, FaYoutube, FaCertificate,
    FaDatabase, FaCode, FaLaptop, FaChartLine, FaUsers,
    FaFlask, FaBook, FaNetworkWired
} from 'react-icons/fa';

const courses = [
    {
        title: "Databases (SQL Server)",
        provider: "Metigator Channel - YouTube",
        date: "November 2025",
        icon: <FaDatabase className="text-red-600 text-xl" />,
        category: "Database"
    },
    {
        title: "Mastering C#.NET",
        provider: "Metigator Channel - YouTube",
        date: "October 2025",
        icon: <FaCode className="text-purple-600 text-xl" />,
        category: "Programming"
    },
    {
        title: "C# Basics course",
        provider: "Guruhub",
        date: "October 2025",
        icon: <FaCode className="text-blue-600 text-xl" />,
        category: "Programming"
    },
    {
        title: "PCB Design",
        provider: "IEEE",
        date: "Nov 2021",
        icon: <FaLaptop className="text-blue-800 text-xl" />,
        category: "Hardware"
    },
    {
        title: "Computer Hardware Basics",
        provider: "Cisco Networking Academy",
        date: "August 2025",
        icon: <FaLaptop className="text-blue-800 text-xl" />,
        category: "Hardware"
    },
    {
        title: "Emakin Development",
        provider: "Emakin platform",
        date: "March 2025",
        icon: <FaCode className="text-green-600 text-xl" />,
        category: "Low-Code"
    },
    {
      title: "Digital Forensics Training",
      provider: "Gaza Sky Geeks",
      date: "August 2024",
      icon: <FaCode className="text-green-600 text-xl"/>,
      category: "Programming"
    },
    {
        title: "JavaScript training program",
        provider: "Gaza Sky Geeks",
        date: "May 2023",
        icon: <FaCode className="text-orange-500 text-xl" />,
        category: "Programming"
    },
    {
        title: "Front-End Developer Intership",
        provider: "Asal Technologies",
        date: "Nov 2022",
        icon: <FaCode className="text-orange-500 text-xl" />,
        category: "Programming"
    },
    {
        title: "Project Management",
        provider: "Injaz Organization",
        date: "August 2023",
        icon: <FaUsers className="text-purple-600 text-xl" />,
        category: "Management"
    },
    {
        title: "Version Control with Git",
        provider: "learn.udacity.com",
        date: "2022",
        icon: <FaNetworkWired className="text-blue-500 text-xl" />,
        category: "Tools"
    }
];

const categoryColors = {
    "Programming": "bg-blue-100 text-blue-800",
    "Database": "bg-green-100 text-green-800",
    "Hardware": "bg-purple-100 text-purple-800",
    "Low-Code": "bg-purple-50 text-[#7B6CF6]", // Changed to purple theme
    "Data Science": "bg-indigo-100 text-indigo-800",
    "Management": "bg-yellow-100 text-yellow-800",
    "Research": "bg-red-100 text-red-800",
    "Tools": "bg-gray-100 text-gray-800"
};

const Courses = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(courses.map(course => course.category))];

    const filteredCourses = filter === 'All' 
        ? courses 
        : courses.filter(course => course.category === filter);

    return (
        <section id="courses" className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                        <FaGraduationCap className="text-[#7B6CF6] text-2xl" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Courses & Certifications</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                        Continuous learning and professional development
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#CDC1FF] to-[#7B6CF6] mx-auto"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full font-medium transition-all ${
                                filter === category
                                    ? 'bg-gradient-to-r from-[#CDC1FF] to-[#7B6CF6] text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-purple-50 shadow'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-lg ${categoryColors[course.category].split(' ')[0]} mr-4`}>
                                        {course.icon}
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[course.category]}`}>
                                        {course.category}
                                    </span>
                                </div>
                                
                                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#7B6CF6] transition">
                                    {course.title}
                                </h3>
                                
                                <div className="flex items-center text-gray-600 mb-3">
                                    <span>{course.provider}</span>
                                </div>
                                
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex items-center text-sm text-[#7B6CF6] font-medium">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>{course.date}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition">
                                        <span className="text-[#7B6CF6] font-bold">✓</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#CDC1FF] to-[#7B6CF6] text-white rounded-full font-semibold">
                        <FaGraduationCap className="mr-2" />
                        {filteredCourses.length} Courses Completed
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Courses;