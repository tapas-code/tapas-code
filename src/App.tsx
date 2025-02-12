import { useState, useEffect } from 'react';
import { IntroAnimation } from './components/IntroAnimation';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { ParticleBackground } from './components/ParticleBackground';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills'; 
import { useTheme } from './hooks/useTheme';
import Footer from './components/Footer';
import { Contact } from './components/Contact/Contact';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <IntroAnimation />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <ParticleBackground />
      <Navigation />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pt-1">
        <Home />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
