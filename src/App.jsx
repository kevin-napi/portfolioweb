import { useState, useEffect } from 'react';

import { useCursor }  from './hooks/useCursor';
import { useReveal }  from './hooks/useReveal';

import Cursor      from './components/Cursor';
import Splash      from './components/Splash';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Engineering from './components/Engineering';
import ArtGallery  from './components/ArtGallery';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

import './styles/globals.css';

export default function App() {
  const [splashVisible, setSplashVisible] = useState(true);

  // Custom cursor
  useCursor();

  // Trigger reveal animations after splash fades
  useReveal([splashVisible]);

  useEffect(() => {
    const timer = setTimeout(() => setSplashVisible(false), 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      <Splash visible={splashVisible} />

      <div style={{ opacity: splashVisible ? 0 : 1, transition: 'opacity 0.8s ease 0.1s' }}>
        <Navbar />
        <Hero />
        <About />
        <Engineering />
        <ArtGallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
