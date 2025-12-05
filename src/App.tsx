import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useMutation } from 'convex/react';
import { api } from '../convex/_generated/api';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader';
import FloatingAction from './components/FloatingAction';
import { ThemeProvider } from './contexts/ThemeContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dbInitialized, setDbInitialized] = useState(false);
  
  const initializeDatabase = useMutation(api.init.initializeDatabase);

  useEffect(() => {
    const initApp = async () => {
      try {
        // Initialize database with seed data
        if (!dbInitialized) {
          await initializeDatabase();
          setDbInitialized(true);
        }
      } catch (error) {
        console.error('Failed to initialize database:', error);
      } finally {
        // Simulate loading time for better UX
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    initApp();
  }, [initializeDatabase, dbInitialized]);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-all duration-500">
          <ScrollProgress />
          <Navigation />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
          <FloatingAction />
          <Toaster position="top-right" />
        </div>
      </Router>
    </ThemeProvider>
  );
}
