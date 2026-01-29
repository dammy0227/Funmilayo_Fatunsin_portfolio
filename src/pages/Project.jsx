import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ================= PROJECT DATA ================= */
const projects = [
  { 
    title: "Email & Calendar Management",
    category: "Admin",
    tools: ["Gmail", "Google Calendar"],
    description:
      "Managed inbox organization, email labeling, follow-ups, and calendar scheduling for efficient daily operations.",
    images: [
      "/assets/projects/email/inbox.jpeg",
      "/assets/projects/email/inbox1.jpeg", 
      "/assets/projects/email/google.jpeg",
    ]
  },
  {
    title: "Student Registration (Google Docs & Sheets)",
    category: "Google",
    tools: ["Google Docs", "Google Sheets"],
    description:
      "Handled student registration data, documentation, and records using Google Docs and Sheets.",
    images: [
      "/assets/projects/google/sheets1.jpeg",
      "/assets/projects/google/sheets2.jpeg",
      "/assets/projects/google/sheets3.jpeg",
      "/assets/projects/google/googlesheet.jpeg"
    ]
  },
  {
    title: "CRM & Customer Support",
    category: "CRM",
    tools: ["HubSpot", "Zendesk"],
    description:
      "Managed customer inquiries, CRM updates, ticket tracking, and client follow-ups.",
    images: [
      "/assets/projects/crm/hubspot.jpeg",
      "/assets/projects/crm/hubspot1.jpeg",
      "/assets/projects/crm/hubspot2.jpeg",
      "/assets/projects/crm/zendesk.jpeg",
      "/assets/projects/crm/zendesk1.jpeg"
    ]
  },
];

/* ================= CUSTOM ARROWS ================= */
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-3 top-1/2 -translate-y-1/2 z-10
      bg-white/80 hover:bg-white shadow rounded-full
      w-10 h-10 flex items-center justify-center text-2xl"
  >
    ‹
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-3 top-1/2 -translate-y-1/2 z-10
      bg-white/80 hover:bg-white shadow rounded-full
      w-10 h-10 flex items-center justify-center text-2xl"
  >
    ›
  </button>
);

/* ================= SLIDER SETTINGS ================= */
const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />
};

/* ================= COMPONENT ================= */
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="bg-gray-50 py-20"> {/* ADDED id="projects" HERE */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Projects & <span className="text-purple-600">Work Samples</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real examples of administrative, customer support, and productivity
            systems I have managed for clients and training programs.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                  {project.category}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 mt-3">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-purple-600 mt-4 font-medium">
                  View screenshots →
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-block px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            View All Projects →
          </Link>
        </div>

        {/* Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
            <div className="bg-white max-w-4xl w-full rounded-xl relative p-6">
              <button
                className="absolute top-4 right-4 text-gray-500 text-2xl"
                onClick={() => setActiveProject(null)}
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {activeProject.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {activeProject.description}
              </p>

              <Slider {...sliderSettings}>
                {activeProject.images.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full max-h-[70vh] object-contain rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;