import {FaGamepad, FaDatabase, FaUsers, FaNetworkWired, FaBoxOpen, FaUserPlus, FaIndustry, FaHospital } from 'react-icons/fa';

export const projects = [ 
    {
        id: 1,
        title: "Coretech Telecom & ICT Website",
        description: "A corporate website for a telecommunications and ICT solutions provider specializing in telecom infrastructure, cybersecurity, and AI-driven software development.",
        technologies: [
            "React",
            "JavaScript",
            "Responsive Design",
            "UI/UX Design",
            "Content Architecture"
        ],
        github: "",
        live: "https://www.coretechpal.com",
        icon: <FaNetworkWired className="text-blue-600 text-2xl" />,
        color: "from-blue-500 to-indigo-300",        
        category: "Corporate Website",
        year: "2025",
    },
   
];

export const projectStats = {
    totalProjects: 15,
    featuredProjects: 6,
    technologiesUsed: 12,
    clientsServed: 8,
    satisfactionRate: "100%"
};