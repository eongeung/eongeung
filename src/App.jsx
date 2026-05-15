import { ThemeProvider } from './contexts/ThemeContext';
import { LangProvider } from './contexts/LangContext';
import ProgressBar from './components/ProgressBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ToTopButton from './components/ToTopButton';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Career from './sections/Career';
import Projects from './sections/Projects';
import Award from './sections/Award';
import Experience from './sections/Experience';
import License from './sections/License';
import Contact from './sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <ProgressBar />
        <div className="background-wrapper">
          <div className="side" />
          <div className="middle" />
          <div className="side" />
        </div>
        <Nav />
        <Hero />
        <div className="main-content">
          <About />
          <TechStack />
          <Career />
          <Projects />
          <Award />
          <Experience />
          <License />
          <Contact />
        </div>
        <ToTopButton />
      </LangProvider>
    </ThemeProvider>
  );
}
