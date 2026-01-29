import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaDownload
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <FaArrowUp className="text-white" />
      </motion.button>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RF</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Fatunsin Funmilayo Rebecca
                </h2>
                <p className="text-purple-300 text-sm">Virtual Assistant & Administrative Specialist</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Helping busy professionals and entrepreneurs stay organized, productive, 
              and stress-free through efficient virtual assistance services.
            </p>

          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-linear-to-r from-purple-500 to-pink-500"></span>
            </h3>
            
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Tools', 'Testimonials'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-6"
            >
              <a
                href="/assets/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm font-medium"
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-linear-to-r from-purple-500 to-pink-500"></span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center hrink-0 mt-1">
                  <FaEnvelope className="text-purple-300" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">Email Address</p>
                  <a 
                    href="mailto:fatunsinrebecca@gmail.com"
                    className="text-white hover:text-purple-300 transition-colors font-medium"
                  >
                    fatunsinrebecca@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <FaPhone className="text-purple-300" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">Phone Number</p>
                  <a 
                    href="tel:+2348168450697"
                    className="text-white hover:text-purple-300 transition-colors font-medium"
                  >
                    +234 906 742 9958
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-purple-300" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">Location</p>
                  <p className="text-white font-medium">Lagos, Nigeria</p>
                  <p className="text-gray-400 text-sm">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&to=fatunsinrebecca@gmail.com&su=Hello%20Rebecca&body=I%20want%20to%20hire%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 w-full text-center font-medium"
              >
                <FaEnvelope className="w-4 h-4" />
                Send Message
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="my-12 border-t border-white/10"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Fatunsin Funmilayo Rebecca. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <span className="text-gray-600">•</span>
              <p className="text-purple-300 text-sm font-medium">
                100% Client Satisfaction Guaranteed
              </p>
            </div>
          </div>

          {/* Attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-500 text-xs"
          >
            Designed with care to help you stay organized and productive.
          </motion.p>
        </motion.div>
      </div>

      {/* Mobile CTA Banner */}
      <div className="lg:hidden sticky bottom-0 bg-linear-to-r from-purple-900 to-violet-900 border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-white text-sm font-medium">Ready to work together?</p>
              <p className="text-purple-300 text-xs">Get in touch now</p>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&to=fatunsinrebecca@gmail.com&su=Hello%20Rebecca&body=I%20want%20to%20hire%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 whitespace-nowrap"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;