import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-3 right-3 p-2 rounded-full bg-opacity-20 backdrop-blur-sm
                 dark:bg-white dark:bg-opacity-10 bg-black transition-all duration-300
                 hover:scale-110 z-50"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );
}