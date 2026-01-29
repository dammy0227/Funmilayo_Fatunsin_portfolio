import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaDownload,
  FaEnvelope,
  FaArrowRight,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { motion } from "framer-motion";
import img from '../assets/profile.jpeg';
import cv from '../assets/cv.pdf';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
   
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; 
      const sectionTop = section.offsetTop - navbarHeight;

      // Custom smooth scroll with easing
      const startPosition = window.pageYOffset;
      const distance = sectionTop - startPosition;
      const duration = 1200; // 1.2 seconds for smooth scroll
      let startTime = null;

      // Easing function for smooth animation
      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * easeProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  // Navigation items with their section IDs
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Tools', id: 'tools' },
    { label: 'Projects', id: 'projects' },
    { label: 'Testimonials', id: 'testimonials' }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* NAVBAR - Fixed at top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-gray-900/90 via-purple-900/90 to-violet-900/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-3 focus:outline-none"
              >
                <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RF</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">
                    Rebecca VA
                  </h1>
                  <p className="text-xs text-purple-300">Virtual Assistant</p>
                </div>
              </button>
            </motion.div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-8 items-center">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.id === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        scrollToSection(item.id);
                      }
                    }}
                    className="text-purple-200 hover:text-white font-medium transition-colors relative group cursor-pointer focus:outline-none"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white text-2xl z-50 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:hidden fixed top-16 left-0 right-0 bg-linear-to-b from-purple-900 to-violet-900 border-t border-white/10 shadow-xl z-40"
              >
                <ul className="flex flex-col p-6">
                  {navItems.map((item) => (
                    <li key={item.id} className="border-b border-white/10 last:border-0">
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          if (item.id === 'home') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else {
                            scrollToSection(item.id);
                          }
                        }}
                        className="text-white hover:text-purple-300 block py-4 font-medium transition-colors w-full text-left focus:outline-none"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </div>
      </nav>

      {/* HERO CONTENT - Added padding-top for fixed navbar */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 lg:pt-30 pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Fatunsin Funmilayo <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Rebecca</span>
          </h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xl lg:text-2xl text-purple-200 font-light"
          >
            Virtual Assistant & Administrative Specialist
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-gray-300 max-w-2xl text-lg leading-relaxed"
          >
            I help busy professionals and entrepreneurs stay organized, productive, 
            and stress-free by providing efficient administrative support and 
            virtual assistance services.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-purple-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-purple-300">Client Satisfaction</div>
            </div>
            <div className="text-center col-span-2 lg:col-span-1">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-purple-300">Support Available</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href={cv}
              download
              className="group px-8 py-4 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-3"
            >
              <FaDownload className="w-5 h-5" />
              Download Resume
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=fatunsinrebecca@gmail.com&su=Hello%20Rebecca&body=I%20want%20to%20hire%20you"
              className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-3"
            >
              <FaEnvelope className="w-5 h-5" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Profile Image Container */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-3 border-white/10 bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm shadow-2xl">
              <img
                src={img}
                alt="Fatunsin Funmilayo Rebecca"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-float">
              <span className="text-white font-bold">VA</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl animate-float animation-delay-2000">
              <span className="text-white font-bold">95%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SOCIAL ICONS - Fixed to left side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:block fixed left-8 bottom-1/2 transform translate-y-1/2 z-30"
      >
        <div className="flex flex-col gap-6">
          <a
            href="https://www.facebook.com/share/181egNthi7/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110"
          >
            <FaFacebookF className="text-white group-hover:text-white" />
          </a>

          <a
            href="https://www.instagram.com/arike_ademi11?igsh=ZGk3MmozdWF5dHNt&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-linear-to-r from-purple-600 to-pink-600 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram className="text-white group-hover:text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/fatunsin-funmilayo-701145158?"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedinIn className="text-white group-hover:text-white" />
          </a>

          <a
            href="https://www.tiktok.com/@arike_ademi11?_r=1&_t=ZS-93S9LrhgTs8"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 hover:scale-110"
          >
            <FaTiktok className="text-white group-hover:text-white" />
          </a>

          {/* Vertical Line */}
          <div className="h-20 w-0.5 bg-linear-to-b from-purple-500 to-pink-500 mx-auto"></div>
        </div>
      </motion.div>

      {/* Mobile Social Icons at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="lg:hidden fixed bottom-8 left-0 right-0 z-30"
      >
        <div className="flex justify-center gap-8">
          {[
            { icon: FaFacebookF, href: "https://www.facebook.com/share/181egNthi7/?mibextid=wwXIfr", color: "hover:text-blue-500" },
            { icon: FaInstagram, href: "https://www.instagram.com/arike_ademi11?igsh=ZGk3MmozdWF5dHNt&utm_source=qr", color: "hover:text-pink-500" },
            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/fatunsin-funmilayo-701145158?", color: "hover:text-blue-400" },
            { icon: FaTiktok, href: "https://www.tiktok.com/@arike_ademi11?_r=1&_t=ZS-93S9LrhgTs8", color: "hover:text-gray-900" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white ${social.color} transition-all duration-300 hover:scale-110`}
            >
              <social.icon className="text-xl" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-30 right-8 hidden lg:block"
      >
        <div className="text-white text-sm flex items-center gap-2 rotate-90 origin-bottom-right">
          <span className="text-purple-300">Scroll</span>
          <div className="w-px h-8 bg-linear-to-b from-purple-500 to-transparent"></div>
        </div>
      </motion.div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;