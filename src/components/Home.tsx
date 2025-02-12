import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Home() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center -mb-2"
        >
          <video autoPlay loop muted playsInline className="w-auto filter contrast-125 saturate-[75%] ">
            <source src="/boy-coder.webm" type="video/webm" />
          </video>
        </motion.div>
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4  bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text flex">
          Tapash Tanty
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
        >
          Software Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg
                     shadow-lg hover:shadow-xl transition-shadow"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.button onClick={() => scrollToSection("#about")}>
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.button>
      </motion.div>
    </section>
  );
}
