import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer Intern",
    company: "Spikewell India Pvt. Ltd.",
    location: "Bhubaneswar, Odisha",
    period: "Jan 2024 - July 2024",
    description: [
      "Developed a comprehensive healthcare platform with product listings, user account management, and secure transactions.",
      "Implemented full-stack development techniques to ensure scalability and seamless functionality.",
      "Collaborated with cross-functional teams to build a user-friendly, high-performance web application.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company: "Raphacure",
    location: "Bengaluru, Karnataka",
    period: "Aug 2024 - Oct 2024",
    description: [
      "Built and optimized backend services using Node.js and PostgreSQL for a healthcare platform.",
      "Enhanced system reliability by 30% with secure data handling and best practices.",
      "Worked with frontend teams to optimize data flow, reducing latency by 15% and improving overall performance.",
    ],
  },
  {
    title: "ReactJS Developer Intern",
    company: "Cling Multi Solutions",
    location: "Remote",
    period: "Mar 2023 - June 2023",
    description: [
      "Designed and developed interactive and responsive web interfaces using React.js and Figma.",
      "Integrated APIs with the frontend, ensuring 100% alignment with client requirements.",
      "Delivered 5+ client projects, improving user satisfaction by 20% through better UI/UX design.",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {exp.company}
                </p>
                <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
