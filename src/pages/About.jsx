import React from "react";
import { 
  FaMapMarkerAlt, 
  FaGlobe, 
  FaClock, 
  FaCheckCircle,
  FaUserTie,
  FaCertificate,
  FaStar
} from "react-icons/fa";
import { motion } from "framer-motion";
import img from '../assets/profile.jpeg';

const About = () => {
  const skills = [
    "Virtual Assistance",
    "Calendar Management",
    "CRM Systems",
    "Document Preparation",
    "Customer Support",
    "Workflow Optimization"
  ];

  const features = [
    { icon: <FaUserTie />, title: "Professional", desc: "5+ years experience" },
    { icon: <FaCertificate />, title: "Certified", desc: "VA Training Complete" },
    { icon: <FaStar />, title: "Reliable", desc: "100% client satisfaction" },
    { icon: <FaGlobe />, title: "Remote", desc: "International friendly" }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-linear-to-b from-white to-gray-50 py-10 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            GET TO KNOW ME
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">Rebecca</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            Professional Virtual Assistant dedicated to making your work life easier and more productive
          </p>

          {/* ✅ View Certificate Button */}
          <a href="/assets/projects/certificate.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition">
            <FaCertificate className="text-white" />
            View Certificate
          </a>

        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT: Profile Image & Badges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src={img}
                    alt="Fatunsin Funmilayo Rebecca"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 -right-4 lg:right-6 bg-white shadow-xl rounded-2xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5+</div>
                    <div className="text-sm text-gray-600">Years Exp.</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 -left-4 lg:left-6 bg-white shadow-xl rounded-2xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <FaGlobe className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Remote</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
          >
            {/* Introduction */}
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Hello! I'm <span className="text-purple-600">Fatunsin Funmilayo Rebecca</span>
              </h3>
              <p className="text-gray-700 text-md  leading-relaxed mb-6">
                As a highly organized Virtual and Executive Assistant, I provide seamless administrative support to 
                busy professionals and executive teams. Skilled in time management, communication, and problem-solving,
                I streamline operations, manage schedules, and handle tasks with precision. Experienced in remote
                and in-office settings, I bring discretion, tech-savviness, and a proactive approach to every task. 
                I help leaders stay organized, productive, and ahead of schedule.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <div className="text-white text-lg">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{feature.title}</div>
                      <div className="text-sm text-gray-600">{feature.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Skills & Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Location & Availability */}
            <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Location & Availability</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-purple-600 w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-sm text-gray-600">Lagos, Nigeria</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaGlobe className="text-purple-600 w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Service</div>
                    <div className="text-sm text-gray-600">Remote / International</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaClock className="text-purple-600 w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Availability</div>
                    <div className="text-sm text-gray-600">Flexible Hours</div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
