import React, { useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";

const testimonials = [
  {
    type: "Training Feedback",
    rating: 5,
    quote: "Rebecca demonstrated exceptional organizational skills and professionalism throughout her training. She handled tasks efficiently.",
    name: "Esther Aruoture",
    role: "Training Supervisor",
    company: "Virtual Assistant Program",
    image: "/assets/projects/image1.jpeg",
    color: "from-blue-500 to-cyan-500"
  },
  {
    type: "Supervisor Review",
    rating: 5,
    quote: "She is reliable, proactive, and works independently with minimal supervision. Rebecca consistently met deadlines and exceeded expectations.",
    name: "Oderinde Adebowale",
    role: "Operations Supervisor",
    company: "Admin Solutions Inc.",
     image: "/assets/projects/image2.jpeg",
    color: "from-purple-500 to-pink-500"
  },
  {
    type: "Customer Review",
    rating: 5,
    quote: "Working with Rebecca has been a game changer. She keeps everything organized and ensures nothing slips through the cracks. My productivity increased by 40%.",
    name: "Pearl Ansa imabong",
    role: "Business Owner",
    company: "Growth Ventures",
     image: "/assets/projects/image4.jpeg",
    color: "from-green-500 to-emerald-500"
  },
  {
    type: "Customer Review",
    rating: 5,
    quote: "Rebecca's communication and attention to detail are excellent. She made my workload lighter and my workflow smoother. Highly recommended!",
    name: "Damilare John",
    role: "Startup Founder",
    company: "Tech Innovations",
    image: "/assets/projects/image3.jpeg",
    color: "from-orange-500 to-amber-500"
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="relative py-5 md:py-20 bg-white overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-50/50 via-white to-pink-50/50"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4  bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 text-purple-700 rounded-full text-sm font-semibold mb-6"
          >
            Client Testimonials
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">
              Clients Say
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by professionals and businesses who value efficiency and reliability
          </p>
        </motion.div>

        {/* Desktop Slider */}
        <div className="hidden lg:flex relative items-center">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:border-purple-300 hover:shadow-lg transition-all duration-300 z-10"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <div className="w-full">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className="px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 h-full overflow-hidden group border border-gray-100 p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-center mb-4">
                        <StarRating rating={item.rating} />
                        <span
                          className={`px-3 py-1 text-xs font-semibold bg-linear-to-r ${item.color} bg-clip-text text-transparent border border-gray-200 rounded-full`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-6">
                        "{item.quote}"
                      </p>

                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <div className="relative">
                          <div
                            className={`absolute inset-0 bg-linear-to-r ${item.color} rounded-full blur-md opacity-30`}
                          ></div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-white relative z-10 shadow-sm"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">{item.name}</h4>
                          <p className="text-gray-600 text-sm">{item.role}</p>
                          <p className="text-gray-500 text-xs">{item.company}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:border-purple-300 hover:shadow-lg transition-all duration-300 z-10"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto scrollbar-hide  px-2">
          {testimonials.map((item, index) => (
            <div key={index} className="shrink-0 w-80">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 h-full overflow-hidden group border border-gray-100 p-6 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center mb-4">
                  <StarRating rating={item.rating} />
                  <span
                    className={`px-3 py-1 text-xs font-semibold bg-linear-to-r ${item.color} bg-clip-text text-transparent border border-gray-200 rounded-full`}
                  >
                    {item.type}
                  </span>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-6">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${item.color} rounded-full blur-md opacity-30`}
                    ></div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white relative z-10 shadow-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.role}</p>
                    <p className="text-gray-500 text-xs">{item.company}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
