import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/trainers" element={<PageTransition><Trainers /></PageTransition>} />
        <Route path="/membership" element={<PageTransition><Membership /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-dark font-inter flex flex-col">
          <Navbar />
          <main className="flex-grow flex flex-col">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
