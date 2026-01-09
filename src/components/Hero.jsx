import { motion } from "framer-motion";
import { FaCode, FaUsers, FaLightbulb } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-50 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <div className="w-36 h-36 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(to right, #CDC1FF, #A594F9)' }}
            >
              <span className="text-4xl text-white font-bold">
                <img
                  src="/Areen.png"
                  alt="AJ Logo"
                  className="w-36 h-36 object-cover rounded-full"
                />
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Passionate{" "}
              <span className="text-[#7B6CF6]">Software Developer</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I turn ideas into practical, high-quality applications using
              cutting-edge technology. Skilled in full-stack development with a
              focus on innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FaCode className="text-[#CDC1FF] text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Full-Stack Development
              </h3>
              <p className="text-gray-600">
                Expert in both frontend and backend technologies
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FaUsers className="text-[#CDC1FF] text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Effective group work and project management
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FaLightbulb className="text-[#CDC1FF] text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Innovation Focus
              </h3>
              <p className="text-gray-600">
                Creating practical, high-quality solutions
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-[#CDC1FF] rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#CDC1FF] rounded-full opacity-10"></div>
    </section>
  );
};

export default Hero;