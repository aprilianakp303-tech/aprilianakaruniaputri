import { motion } from 'motion/react';
import { Mail, Phone, MapPin, GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { personalInfo, educationHistory } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 border-t border-pink-50/50 dark:border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-pink-600 dark:text-pink-400 text-sm font-bold tracking-wider uppercase"
          >
            Tentang Saya
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 font-serif"
          >
            Mengenal Lebih Dekat
          </motion.h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio & Contact Card (Left Grid) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Biography Details */}
            <div className="bg-gradient-to-br from-pink-50/40 via-purple-50/20 to-white dark:from-slate-950 dark:to-slate-900/40 p-8 rounded-3xl border border-pink-100/30 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Profil Profesional
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.bio}
              </p>
            </div>

            {/* Quick Contact Info Card */}
            <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-5">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3">
                Informasi Kontak
              </h4>
              
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/20 text-pink-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-mono">Domisili</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {personalInfo.domicile}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/20 text-purple-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-mono">Email Resmi</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 text-indigo-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-mono">Telepon / WhatsApp</p>
                  <a
                    href={personalInfo.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education History (Right Grid) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-pink-100 dark:bg-pink-950/40 rounded-2xl text-pink-600 dark:text-pink-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Sejarah Pendidikan
                </h3>
              </div>

              {/* Education Timeline */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-pink-100 dark:border-slate-800 space-y-10">
                {educationHistory.map((edu, idx) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Timeline Node Point */}
                    <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-pink-500 text-pink-500 z-10 shadow-sm">
                      <BookOpen className="w-3 h-3" />
                    </span>

                    {/* Timeline Card */}
                    <div className="group bg-gradient-to-r from-gray-50 to-white dark:from-slate-900/30 dark:to-slate-900/50 hover:from-pink-50/20 dark:hover:from-pink-950/10 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 transition-all duration-300 hover:border-pink-200 dark:hover:border-pink-950 hover:shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.year}
                        </span>
                        <span className="text-xs bg-pink-50 dark:bg-pink-950/20 px-3 py-1 rounded-full text-pink-600 dark:text-pink-400 font-medium w-max">
                          Semarang
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-200">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        {edu.institution}
                      </p>
                      
                      {edu.description && (
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2 border-t border-gray-100 dark:border-slate-800/80 pt-2">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
