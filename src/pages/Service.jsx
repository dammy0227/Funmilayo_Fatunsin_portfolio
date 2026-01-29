import React from "react";
import { 
  FaCheckCircle, 
  FaCalendarAlt, 
  FaHeadset, 
  FaBullhorn, 
  FaTools,
  FaUsers,
  FaFileAlt,
  FaRocket,
  FaShieldAlt,
  FaLightbulb
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const serviceCategories = [
    {
      title: "Administrative Support",
      icon: <FaCalendarAlt className="text-3xl" />,
      services: [
        "Email & Calendar Management",
        "Document Preparation",
        "Digital File Organization",
        "Travel Coordination",
        "Meeting Scheduling",
        "Task Tracking & Follow-ups"
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Customer Support",
      icon: <FaHeadset className="text-3xl" />,
      services: [
        "Client Onboarding",
        "Email & Live Chat Support",
        "CRM Updates & Management",
        "Issue Resolution",
        "Customer Feedback Collection",
        "Support Ticket Management"
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Social & Marketing",
      icon: <FaBullhorn className="text-3xl" />,
      services: [
        "Social Media Engagement",
        "Content Creation Assistance",
        "Newsletter Management",
        "Canva Graphic Designs",
        "Community Management",
        "Brand Voice Consistency"
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Tech & Tools",
      icon: <FaTools className="text-3xl" />,
      services: [
        "Google Workspace Expert",
        "Microsoft Office Suite",
        "CRM Systems Setup",
        "Project Management Tools",
        "Automation Support",
        "Tech Troubleshooting"
      ],
      gradient: "from-orange-500 to-red-500",
    }
  ];

  const benefits = [
    {
      icon: <FaUsers />,
      title: "Dedicated Support",
      description: "Personalized attention to your specific needs"
    },
    {
      icon: <FaFileAlt />,
      title: "Quality Work",
      description: "High-quality deliverables with attention to detail"
    },
    {
      icon: <FaRocket />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: <FaShieldAlt />,
      title: "Reliable Service",
      description: "Consistent, dependable support you can count on"
    },
    {
      icon: <FaLightbulb />,
      title: "Proactive Approach",
      description: "Anticipating needs before they become problems"
    }
  ];

  return (
    <section id="services" className="relative py-5 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-purple-50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 bg-linear-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
            💼 PROFESSIONAL SERVICES
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Virtual <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">Assistance</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            I provide end-to-end virtual support solutions designed to streamline your operations, 
            enhance productivity, and help you focus on what matters most.
          </p>
        </motion.div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl p-6 lg:p-8 shadow-sm border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Why Choose My Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white text-2xl">
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-gray-100 group-hover:border-purple-200">
                {/* Header with Gradient */}
                <div className={`bg-linear-to-r ${category.gradient} p-4 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="relative flex items-center gap-3">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-white/80 mt-0.5 text-sm">Complete support solutions</p>
                    </div>
                  </div>
                </div>

                {/* Services List */}
                <div className="p-4">
                  <ul className="space-y-2.5">
                    {category.services.map((service, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 + 0.2 }}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className={`w-7 h-7 bg-linear-to-r ${category.gradient} rounded-lg flex items-center justify-center shrink-0 mt-0.5`}>
                          <FaCheckCircle className="text-white text-sm" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{service}</span>
                      </motion.li>
                    ))}
                  </ul>

              
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -z-10 inset-0 bg-linear-to-r ${category.gradient} rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
