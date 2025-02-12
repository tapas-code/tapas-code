import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";

interface DownloadButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export function DownloadButton({
  label,
  onClick,
  className = "",
}: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick();
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isLoading}
      className={`
        px-4 py-2 rounded-lg
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white font-medium
        flex items-center justify-center gap-2
        shadow-lg hover:shadow-xl
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {isLoading ? (
        <>
          <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
          {label}
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          {label}
        </>
      )}
    </motion.button>
  );
}
