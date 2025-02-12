import { motion } from 'framer-motion';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiPostgresql, SiMongodb, SiRedis, SiGraphql, SiGit, SiJest, SiFastapi, SiFigma, SiKnexdotjs, SiCss3, SiSass, SiBootstrap, SiFramer, SiGreensock, SiStyledcomponents, SiTestinglibrary, SiVite, SiPrisma, SiSequelize, SiJsonwebtokens, SiAuth0, SiGithub, SiGitlab, SiSwagger, SiEslint, SiPrettier } from 'react-icons/si';
import { FaKey, FaServer } from 'react-icons/fa';
import { FaNode } from "react-icons/fa";
import { AiOutlineApi } from 'react-icons/ai';
import { VscCode } from 'react-icons/vsc';

export function Skills() {

  const frontendSkills = [
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "React.js", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#DC382D" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Redux", Icon: SiRedux, color: "#764ABC" },
    { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
    { name: "SASS/SCSS", Icon: SiSass, color: "#CC6699" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
    { name: "GSAP", Icon: SiGreensock, color: "#88CE02" },
    { name: "GraphQL", Icon: SiGraphql, color: "#E535AB" },
    { name: "Styled Components", Icon: SiStyledcomponents, color: "#DB7093" },
    { name: "Jest", Icon: SiJest, color: "#C21325" },
    { name: "Testing Library", Icon: SiTestinglibrary, color: "#E33332" },
    { name: "Vite", Icon: SiVite, color: "#646CFF" },
  ];

  const backendSkills = [
    { name: "Node.js", Icon: FaNode, color: "#8CC84B" },
    { name: "Express.js", Icon: SiExpress, color: "#FF6F00" },
    { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "Redis", Icon: SiRedis, color: "#DC382D" },
    { name: "GraphQL", Icon: SiGraphql, color: "#E535AB" },
    { name: "Knex.js", Icon: SiKnexdotjs, color: "#764ABC" },
    { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
    { name: "Sequelize", Icon: SiSequelize, color: "#52B0E7" },
    { name: "REST APIs", Icon: AiOutlineApi, color: "#4A90E2" },
    { name: "JWT", Icon: SiJsonwebtokens, color: "#646CFF" },
    { name: "OAuth", Icon: FaKey, color: "#1A73E8" },
    { name: "Auth0", Icon: SiAuth0, color: "#EB5424" },
    { name: "Testing (Jest)", Icon: SiJest, color: "#C21325" },
  ];

  const toolsAndTesting = [
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "Jest", Icon: SiJest, color: "#C21325" },
    { name: "Postman", Icon: FaServer, color: "#FF6F00" },
    { name: "GitHub", Icon: SiGithub, color: "#DC382D" },
    { name: "GitLab", Icon: SiGitlab, color: "#FC6D26" },
    { name: "Swagger", Icon: SiSwagger, color: "#85EA2D" },
    { name: "ESLint", Icon: SiEslint, color: "#4B32C3" },
    { name: "Prettier", Icon: SiPrettier, color: "#F7B93E" },
    { name: "VS Code", Icon: VscCode, color: "#007ACC" }
  ];

  return (
    <section id="skills" className="py-20 px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
        My Skills
      </h2>

      <div className="flex flex-col gap-12">
        {/* Frontend Development Section */}
        <div>
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-300 mb-6">Frontend Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {frontendSkills.map(({ name, Icon, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ color }}
                  className="text-4xl"
                >
                  <Icon />
                </motion.div>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 dark:border-gray-700" />

        {/* Backend Development Section */}
        <div>
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-300 mb-6">Backend Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {backendSkills.map(({ name, Icon, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ color }}
                  className="text-4xl"
                >
                  <Icon />
                </motion.div>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 dark:border-gray-700" />

        {/* Tools & Testing Section */}
        <div>
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-300 mb-6">Tools & Testing</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {toolsAndTesting.map(({ name, Icon, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ color }}
                  className="text-4xl"
                >
                  <Icon />
                </motion.div>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
