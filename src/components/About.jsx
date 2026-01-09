import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const qualities = [
    {
      icon: <FaCode />,
      title: "Technical Expertise",
      description: "Strong background in multiple programming languages and frameworks"
    },
    {
      icon: <FaLightbulb />,
      title: "Quick Learner",
      description: "Adaptable to new tools and technologies with fast learning curve"
    },
    {
      icon: <FaRocket />,
      title: "Problem Solver",
      description: "Passionate about finding efficient solutions to complex challenges"
    }
  ];

  return (
    <section id="about" className="py-20">
      <h2 className="section-title">About Me</h2>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            I am a Software Developer with solid experience in programming and a strong passion 
            for technology. Currently working at CoreTech as a Project Manager while also having 
            experience as a Software Developer specializing in low-code development using Emakin Platform.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {qualities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="card-hover bg-white p-8 rounded-2xl shadow-lg border border-purple-100"
            >
              <div className="text-5xl text-purple-600 mb-6 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;