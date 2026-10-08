import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import { useTheme } from './hooks/useTheme';
import {
  About,
  Experience,
  Skills,
  Education,
  Certifications,
  Contact,
  Footer,
} from './components/Sections';
import './styles/globals.css';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Nav theme={theme} onThemeToggle={toggle} />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
