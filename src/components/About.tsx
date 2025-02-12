import { motion } from "framer-motion";
import { Code, Database } from "lucide-react";
import { FaReact } from "react-icons/fa";

interface SkillProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Skill({ icon, title, description }: SkillProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-lg bg-opacity-10 backdrop-blur-sm
                 dark:bg-white dark:bg-opacity-5 bg-black
                 border border-gray-200 dark:border-gray-800"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <p className="text-md text-center mb-16 text-gray-600 dark:text-gray-400">
          Tapas is a skilled <strong>Software Developer</strong> having a solid
          background in <strong>Frontend Development </strong>and{" "}
          <strong>Backend Engineering</strong>. He specializes in building{" "}
          <strong>scalable, high-performance web applications</strong> with
          modern technologies, ensuring seamless user experiences and robust
          backend systems. With a deep understanding of{" "}
          <strong>React.js, Next.js, TypeScript, and Tailwind CSS</strong>, he
          creates visually appealing, responsive interfaces that enhance
          usability. As a <strong>Full-Stack Engineer</strong>, Tapas leverages
          his expertise in{" "}
          <strong>Node.js, Express, PostgreSQL, and MongoDB</strong> to design
          optimized APIs, implement secure authentication, and develop efficient
          database solutions. His passion for{" "}
          <strong>
            performance optimization, system scalability, and problem-solving
          </strong>{" "}
          allows him to build innovative solutions that drive efficiency and
          improve application performance.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Skill
            icon={<FaReact className="w-8 h-8 text-blue-500" />}
            title="Frontend Development"
            description="Expert in building modern UIs using React.js, Next.js, TypeScript, and Tailwind CSS."
          />
          <Skill
            icon={<Database className="w-8 h-8 text-green-500" />}
            title="Backend Development"
            description="Building scalable APIs and databases with Node.js, Express, PostgreSQL, and Redis."
          />
          <Skill
            icon={<Code className="w-8 h-8 text-purple-500" />}
            title="Full-Stack Integration"
            description="Creating end-to-end solutions with MERN/PERN stack and RESTful API design."
          />
        </div>
      </motion.div>
    </section>
  );
}
