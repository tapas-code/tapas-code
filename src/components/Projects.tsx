import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Video } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import { Navigation } from "swiper/modules"; // Import Navigation module from swiper directly
import "swiper/css/navigation"; // Import navigation styles
import { projects } from "../data/projects";

interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export function Projects() {
  return (
    <section className="py-20 px-10 bg-gray-50 dark:bg-gray-800/50">
      <motion.div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView="auto"
            loop={true} // Enables cyclic behavior
            centeredSlides={false} // Keeps the active slide centered
            navigation={{
              // Enable navigation
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1, // 1 slide per view on small screens
              },
              768: {
                slidesPerView: 2, // 2 slides per view on medium screens
              },
              1024: {
                slidesPerView: 3, // 3 slides per view on large screens
              },
            }}
            modules={[Navigation]} // Include the Navigation module
          >
            {projects.map((project: Project, index) => (
              <SwiperSlide key={index} className="pb-4">
                <motion.div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg min-h-[500px] cursor-grab">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 absolute bottom-10 ">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                          <Github className="w-5 h-5" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Demo
                        </a>
                      )}
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                          <Video className="w-5 h-5" />
                          Video
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev absolute top-1/2 -left-11 transform -translate-y-1/2 z-10 px-8 py-11 flex items-center justify-center  rounded-full  hover:bg-gray-600/20 dark:hover:bg-gray-700/20 transition-all">
            <ChevronLeft className="w-7 h-7 opacity-0 transition-transform transform hover:scale-110" />
          </div>
          <div className="swiper-button-next absolute top-1/2 -right-11 transform -translate-y-1/2 z-10 px-8 py-11 flex items-center justify-center  rounded-full  hover:bg-gray-600/20 dark:hover:bg-gray-700/20 transition-all">
            <ChevronRight className="w-7 h-7 opacity-0 transition-transform transform hover:scale-110" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
