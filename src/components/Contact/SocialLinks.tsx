import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { DownloadButton } from "../common/DownloadButtom";
import { downloadResume } from "../../utils/downloadResume";

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://www.github.com/tapas-code",
    label: "GitHub",
    color: "hover:text-blue-400",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/tapashtanty",
    label: "LinkedIn",
    color: "hover:text-blue-500",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com",
    label: "Twitter",
    color: "hover:text-blue-400",
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4 items-center max-md:justify-center">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-2 rounded-full bg-white/5 backdrop-blur-sm
                    border border-gray-200 dark:border-gray-700
                    ${link.color} transition-all duration-200`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {link.icon}
        </motion.a>
      ))}
      <DownloadButton
        label="Resume"
        onClick={downloadResume}
        className="bg-gradient-to-r from-blue-500 to-purple-500"
      />
    </div>
  );
}
