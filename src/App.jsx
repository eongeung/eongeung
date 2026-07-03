import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LangProvider } from './contexts/LangContext';
import { useState, useEffect } from 'react';
import useReveal from './hooks/useReveal';
import ProgressBar from './components/ProgressBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import AwardsLicenses from './sections/AwardsLicenses';
import Contact from './sections/Contact';
import NotFound from './pages/NotFound';


function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`scroll-top-btn${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="맨 위로"
    >
      ↑
    </button>
  );
}

function Main() {
  useReveal();
  return (
    <ThemeProvider>
      <LangProvider>
        <ProgressBar />
        <Nav />
        <Hero />
        <div className="main-content">
          <About />
          <Projects />
          <TechStack />
          <AwardsLicenses />
          <Experience />
          <Contact />
        </div>
        <ScrollToTop />
      </LangProvider>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
