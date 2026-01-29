import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Filter
} from "lucide-react";

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
  {
    title: "Task & Workflow Management",
    category: "Admin",
    tools: ["Trello", "Asana"],
    description:
      "Created and managed boards, workflows, and task assignments for productivity tracking.",
    images: [
      "/assets/projects/trello/trello.jpeg",
      "/assets/projects/trello/asana.jpeg"
    ]
  },
  {
    title: "Design & Visual Content",
    category: "Design",
    tools: ["Canva"],
    description:
      "Designed branded social media posts, documents, and presentations using Canva.",
    images: [
      "/assets/projects/design/canva1.jpeg"
    ]
  }
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
const AllProjects = () => {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(null);
  const [blurSensitive, setBlurSensitive] = useState(true);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Google", "CRM", "Design", "Admin"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-5">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-purple-600 font-medium hover:underline"
          >
            <ArrowLeft size={18} /> back
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            All Projects & Work Samples
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Screenshots of real administrative, CRM, and productivity work.
            Sensitive information is blurred for privacy.
          </p>
        </motion.div>

        {/* ===== FILTER & TOGGLE ===== */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    filter === cat
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                <Filter size={14} className="inline mr-1" />
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setBlurSensitive(!blurSensitive)}
            className="flex items-center gap-2 text-sm text-gray-600
              bg-white px-4 py-2 rounded-full shadow hover:bg-gray-100"
          >
            {blurSensitive ? <EyeOff size={16} /> : <Eye size={16} />}
            {blurSensitive ? "Blur On" : "Blur Off"}
          </button>
        </div>

        {/* ===== PROJECT GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              onClick={() => setActiveProject(project)}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className={`w-full h-48 object-cover ${
                  blurSensitive ? "blur-sm" : ""
                }`}
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-purple-600 font-medium">
                  View screenshots →
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== MODAL ===== */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white max-w-4xl w-full rounded-xl p-6 relative"
              >
                <button
                  className="absolute top-4 right-4 text-2xl"
                  onClick={() => setActiveProject(null)}
                >
                  &times;
                </button>

                <h3 className="text-2xl font-bold mb-2">
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
                        className={`w-full max-h-[70vh] object-contain rounded-lg ${
                          blurSensitive ? "blur-sm" : ""
                        }`}
                      />
                    </div>
                  ))}
                </Slider>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default AllProjects;
