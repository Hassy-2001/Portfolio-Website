import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import { heroReveal, sectionEnter } from './utils/animations';

export default function App() {
  const appRef = useRef(null);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      heroReveal(appRef.current.querySelectorAll('[data-hero]'));
      appRef.current.querySelectorAll('[data-section]').forEach(sectionEnter);
    }, appRef);
    return () => context.revert();
  }, []);

  return (
    <div ref={appRef}>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
