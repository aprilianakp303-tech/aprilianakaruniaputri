import { motion } from 'motion/react';
import { Download, MapPin, Mail, Phone, FileText } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  onOpenCV: () => void;
}

export default function Hero({ onOpenCV }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-gradient-to-b from-pink-50/50 via-purple-50/30 to-white dark:from-slate-950 dark:via-purple-950/10 dark:to-slate-900"
    >
      {/* Dynamic Background Decorative Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Info (Left Column) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-pink-100 text-pink-700 border border-pink-200/50 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800/40 mb-6">
                <MapPin className="w-3.5 h-3.5" />
                {personalInfo.domicile}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Halo, Saya <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                Apriliana Karunia Putri
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6 font-serif"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Lulusan Sarjana Komputer (S.Kom.) program studi <strong className="text-pink-600 dark:text-pink-400 font-semibold">Sistem Informasi</strong> dari Universitas Semarang (USM). Memiliki keahlian teruji di bidang analisis data, manajemen sistem informasi, dan teknologi modern dengan pengalaman kerja praktis selama 1 tahun.
            </motion.p>

            {/* Quick Contact & Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                onClick={onOpenCV}
                className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold text-base shadow-lg shadow-pink-200 dark:shadow-none hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Unduh CV / Cetak PDF
                <span className="absolute -top-1.5 -right-1.5 px-2 py-0.5 text-[9px] font-bold bg-indigo-600 text-white rounded-full uppercase tracking-wider animate-pulse">
                  Hot
                </span>
              </button>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start items-center gap-y-4 gap-x-6 pt-4 border-t border-gray-100 dark:border-slate-800"
            >
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                <span>1 Tahun Pengalaman</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <span>Sertifikasi Coursera</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <span>AI Dev Certificate</span>
              </div>
            </motion.div>
          </div>

          {/* Profile Photo with Beautiful Flower Ornaments (Right Column) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="relative"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse" />

              {/* Picture circular container with custom hover wiggles */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative z-10 w-64 h-64 sm:w-76 sm:h-76 md:w-85 md:h-85 rounded-full overflow-visible border-[6px] border-white dark:border-slate-800 shadow-2xl flex items-center justify-center bg-pink-50 group cursor-pointer"
              >
                {/* Real Profile Image with filter adjustments */}
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* FLOWERS ORNAMENT OVERLAY (Top Right side of the circular frame as a border frame ornament) */}
                <motion.div
                  className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-24 h-24 sm:w-32 sm:h-32 z-20 pointer-events-auto"
                  whileHover={{ 
                    rotate: [0, -8, 8, -4, 4, 0],
                    scale: 1.15
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <svg
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-md filter hover:brightness-105"
                  >
                    {/* Flower 1 (Large - Pink Peony/Sakura) */}
                    <g transform="translate(60, 60)">
                      {/* Leaf Left */}
                      <path
                        d="M-20 -10 C-35 -25 -45 -10 -40 10 C-30 20 -20 10 -20 -10 Z"
                        fill="#65a30d"
                        opacity="0.8"
                      />
                      {/* Leaf Right */}
                      <path
                        d="M10 -30 C30 -40 40 -20 30 -5 C20 10 10 -15 10 -30 Z"
                        fill="#4d7c0f"
                        opacity="0.9"
                      />
                      {/* Petals */}
                      <circle cx="0" cy="-22" r="16" fill="#f472b6" opacity="0.9" />
                      <circle cx="22" cy="0" r="16" fill="#ec4899" opacity="0.95" />
                      <circle cx="0" cy="22" r="16" fill="#db2777" opacity="0.9" />
                      <circle cx="-22" cy="0" r="16" fill="#f472b6" opacity="0.95" />
                      
                      <circle cx="-15" cy="-15" r="14" fill="#d946ef" opacity="0.85" />
                      <circle cx="15" cy="-15" r="14" fill="#a855f7" opacity="0.85" />
                      <circle cx="15" cy="15" r="14" fill="#ec4899" opacity="0.85" />
                      <circle cx="-15" cy="15" r="14" fill="#e879f9" opacity="0.85" />
                      
                      {/* Flower Center */}
                      <circle cx="0" cy="0" r="12" fill="#facc15" />
                      <circle cx="0" cy="0" r="7" fill="#fbbf24" />
                      {/* Stamen details */}
                      <circle cx="-3" cy="-3" r="1.5" fill="white" />
                      <circle cx="3" cy="3" r="1.5" fill="white" />
                      <circle cx="3" cy="-3" r="1.5" fill="white" />
                      <circle cx="-3" cy="3" r="1.5" fill="white" />
                    </g>
                    
                    {/* Flower 2 (Smaller - Violet/Lavender) at top left of main cluster */}
                    <g transform="translate(25, 25)">
                      <circle cx="0" cy="-10" r="8" fill="#c084fc" />
                      <circle cx="10" cy="0" r="8" fill="#a855f7" />
                      <circle cx="0" cy="10" r="8" fill="#c084fc" />
                      <circle cx="-10" cy="0" r="8" fill="#a855f7" />
                      <circle cx="0" cy="0" r="5" fill="#fef08a" />
                    </g>

                    {/* Flower 3 (Smallest - Pastel Rose) at bottom right */}
                    <g transform="translate(90, 85)">
                      <circle cx="0" cy="-8" r="6" fill="#f472b6" />
                      <circle cx="8" cy="0" r="6" fill="#f43f5e" />
                      <circle cx="0" cy="8" r="6" fill="#fb7185" />
                      <circle cx="-8" cy="0" r="6" fill="#f472b6" />
                      <circle cx="0" cy="0" r="4" fill="#fef08a" />
                    </g>

                    {/* Decorative gold sparkles */}
                    <path d="M75,15 L78,22 L85,25 L78,28 L75,35 L72,28 L65,25 L72,22 Z" fill="#fbbf24" />
                    <path d="M10,80 L12,84 L16,86 L12,88 L10,92 L8,88 L4,86 L8,84 Z" fill="#fcd34d" />
                  </svg>
                </motion.div>

                {/* Small floating flower petals background layer on hover */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-pink-300/40 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-spin-slow" />
              </motion.div>

              {/* Caption or subtext indicator */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-5 py-2 rounded-full shadow-lg border border-pink-100 dark:border-pink-950/40 flex items-center gap-2 z-20 whitespace-nowrap">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Sistem Informasi &bull; S.Kom
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
