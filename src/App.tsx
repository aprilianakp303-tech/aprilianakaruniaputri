import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import { ArrowUp, Github, Linkedin, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from './data';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden selection:bg-pink-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="no-print">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Certificates />
      </main>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800/80 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Branding / Copyright */}
            <div className="text-center md:text-left">
              <span className="text-lg font-bold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent font-serif tracking-tight">
                Apriliana Karunia Putri, S.Kom.
              </span>
              <p className="text-xs text-slate-500 mt-1">
                &copy; {new Date().getFullYear()} &bull; Dibuat dengan penuh dedikasi menggunakan React, Vite, dan Tailwind CSS.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-850 hover:bg-pink-500 hover:text-white text-slate-400 border border-slate-800/60 transition-all duration-300 shadow-sm cursor-pointer"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-850 hover:bg-pink-500 hover:text-white text-slate-400 border border-slate-800/60 transition-all duration-300 shadow-sm cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-850 hover:bg-pink-500 hover:text-white text-slate-400 border border-slate-800/60 transition-all duration-300 shadow-sm cursor-pointer"
                title="Hubungi via WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>
      </footer>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3.5 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-pink-300/40 hover:opacity-95 transition-all z-40 cursor-pointer no-print border border-pink-400/20"
            title="Kembali ke Atas"
          >
            <ArrowUp className="w-5 h-5 animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
