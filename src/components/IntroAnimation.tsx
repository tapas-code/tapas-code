import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function IntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            transition: { duration: 1.5, repeat: Infinity }
          }}
          className="mb-4"
        >
          <Code2 className="w-16 h-16 text-cyan-500 mx-auto" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text"
        >
          Tapas Tanty
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400 mt-2"
        >
          Software Developer
        </motion.p>
      </motion.div>
    </motion.div>
  );
}