import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  const appRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(appRef.current, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power1.out' });
  }, []);

  return (
    <div ref={appRef} className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <AnimatedCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}