import React from "react";
import { motion } from "framer-motion";
import { 
  FaSlack, 
  FaMicrosoft, 
  FaCalendarAlt, 
  FaTrello, 
  FaClock,  
  FaEnvelope,
  FaCommentDots,
  FaRobot,
  FaPenAlt,
  FaVideo,
  FaUsers,
  FaChartLine,
  FaFileAlt,
  FaPalette,
  FaCogs
} from "react-icons/fa";

// Tools data with React Icons and fallback images
const toolsData = [
  {
    category: "Communication",
    icon: <FaCommentDots className="text-2xl text-blue-500" />,
    tools: [
      { name: "Zoom", icon: <FaVideo className="w-8 h-8 text-blue-600" />, color: "bg-blue-50" },
      { name: "Slack", icon: <FaSlack className="w-8 h-8 text-purple-600" />, color: "bg-purple-50" },
      { name: "Microsoft Teams", icon: <FaMicrosoft className="w-8 h-8 text-blue-500" />, color: "bg-blue-50" },
      { name: "Gmail", icon: <FaEnvelope className="w-8 h-8 text-red-500" />, color: "bg-red-50" },
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    category: "Scheduling & Calendar",
    icon: <FaCalendarAlt className="text-2xl text-green-500" />,
    tools: [
      { name: "Google Calendar", icon: <FaCalendarAlt className="w-8 h-8 text-blue-500" />, color: "bg-blue-50" },
      { name: "Calendly", icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55Eb737igBQktFzlS1Utpv4vFnJ_BE_oGdA&s" alt="Calendly" className="w-8 h-8" />, color: "bg-purple-50" },
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    category: "Productivity & Project Management",
    icon: <FaChartLine className="text-2xl text-orange-500" />,
    tools: [
      { name: "Trello", icon: <FaTrello className="w-8 h-8 text-blue-600" />, color: "bg-blue-50" },
      { name: "Asana", icon: <img src="https://cdn.worldvectorlogo.com/logos/asana-1.svg" alt="Asana" className="w-8 h-8" />, color: "bg-purple-50" },
      { name: "ClickUp", icon: <img src="https://i.pinimg.com/736x/20/1e/7b/201e7b212bc74ab5805bd8eebc7567c3.jpg" alt="ClickUp" className="w-8 h-8" />, color: "bg-gray-50" },
      { name: "Notion", icon: <img src="https://cdn.worldvectorlogo.com/logos/onenote-2.svg" alt="Notion" className="w-8 h-8" />, color: "bg-gray-50" },
    ],
    gradient: "from-orange-500 to-amber-500"
  },
  {
    category: "Time Tracking",
    icon: <FaClock className="text-2xl text-purple-500" />,
    tools: [
      { name: "Toggl", icon: <img src="https://cdn.iconscout.com/icon/free/png-256/free-toggl-icon-svg-download-png-3030250.png" alt="Toggl" className="w-8 h-8" />, color: "bg-purple-50" },
      { name: "Clockify", icon: <FaClock className="w-8 h-8 text-purple-600" />, color: "bg-purple-50" },
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    category: "Customer Support & CRM",
    icon: <FaUsers className="text-2xl text-indigo-500" />,
    tools: [
      { name: "Zendesk", icon: <img src="https://cdn.worldvectorlogo.com/logos/zendesk-1.svg" alt="Zendesk" className="w-8 h-8" />, color: "bg-blue-50" },
      { name: "HubSpot", icon: <img src="https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" alt="HubSpot" className="w-8 h-8" />, color: "bg-orange-50" },
      { name: "Salesforce", icon: <img src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" alt="Salesforce" className="w-8 h-8" />, color: "bg-blue-50" },
      { name: "Freshdesk", icon: <img src="https://logowik.com/content/uploads/images/freshdesk9456.jpg" alt="Freshdesk" className="w-8 h-8" />, color: "bg-green-50" },
    ],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    category: "Content & Writing",
    icon: <FaPenAlt className="text-2xl text-pink-500" />,
    tools: [
      { name: "Canva", icon: <FaPalette className="w-8 h-8 text-teal-500" />, color: "bg-teal-50" },
      { name: "ChatGPT", icon: <FaRobot className="w-8 h-8 text-green-500" />, color: "bg-green-50" },
      { name: "Grammarly", icon: <FaPenAlt className="w-8 h-8 text-blue-500" />, color: "bg-blue-50" },
      { name: "Google Docs", icon: <FaFileAlt className="w-8 h-8 text-blue-500" />, color: "bg-blue-50" },
    ],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    category: "Cloud & Office Suite",
    icon: <FaCogs className="text-2xl text-cyan-500" />,
    tools: [
      { name: "Google Workspace", icon: <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-docs-logo-icon-svg-download-png-2416658.png" alt="Google Workspace" className="w-8 h-8" />, color: "bg-blue-50" },
      { name: "Microsoft 365", icon: <FaMicrosoft className="w-8 h-8 text-blue-600" />, color: "bg-blue-50" },
      { name: "Dropbox", icon: <img src="https://cdn.worldvectorlogo.com/logos/dropbox-2.svg" alt="Dropbox" className="w-8 h-8" />, color: "bg-blue-50" },
      { name: "OneDrive", icon: <img src="https://cdn.worldvectorlogo.com/logos/onedrive.svg" alt="OneDrive" className="w-8 h-8" />, color: "bg-blue-50" },
    ],
    gradient: "from-cyan-500 to-blue-500"
  }
];

const Tools = () => {
  return (
    <section id="tools" className="relative min-h-screen py-5 md:py-20 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-purple-50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-linear-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
            🛠️ TECH STACK
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tools & Technologies <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600">Mastery</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm proficient in a wide range of modern tools and platforms that enable me to deliver 
            efficient, high-quality virtual assistance and administrative support.
          </p>
        </motion.div>

        {/* Tools Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {toolsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              {/* Category Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group-hover:border-purple-200 overflow-hidden">
                {/* Category Header */}
                <div className={`bg-linear-to-r ${category.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className="flex items-center gap-4 relative">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                      <p className="text-white/90 text-sm mt-1">Professional tools for optimal results</p>
                    </div>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.tools.map((tool, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative"
                      >
                        <div className={`${tool.color} p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 group-hover:scale-105`}>
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                              {tool.icon}
                            </div>
                            <span className="text-gray-800 font-medium text-sm text-center leading-tight">
                              {tool.name}
                            </span>
                          </div>
                        </div>
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-linear-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300 -z-10"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -z-10 inset-0 bg-linear-to-r ${category.gradient} rounded-2xl blur-xl opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Tools;