import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { certificatesList } from '../data';

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-20 bg-white dark:bg-slate-900"
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
            Sertifikasi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 font-serif"
          >
            Sertifikat Profesional
          </motion.h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative bg-gradient-to-br from-pink-50/10 via-purple-50/10 to-white dark:from-slate-950 dark:to-slate-900/40 p-6 sm:p-8 rounded-3xl border border-pink-100/20 dark:border-slate-800 shadow-sm hover:border-pink-300 dark:hover:border-pink-900 hover:shadow-md transition-all duration-300"
            >
              {/* Top abstract light orb background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-purple-500/10 rounded-bl-full blur-xl group-hover:scale-125 transition-transform duration-500" />

              <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                {/* Badge Icon container */}
                <div className="p-3.5 bg-pink-100 dark:bg-pink-950/50 rounded-2xl text-pink-500 group-hover:bg-gradient-to-tr group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <div className="space-y-2 flex-grow">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-pink-500" />
                    <span>Lulus Sertifikasi</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between gap-2 pt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {cert.issuer}
                      </span>
                      <span>Tahun Rilis: {cert.year}</span>
                    </div>

                    {/* Verify trigger */}
                    <a
                      href={cert.credentialUrl}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-pink-50 border border-gray-100 dark:border-slate-800 text-pink-500 hover:text-pink-600 font-semibold text-xs transition-all shrink-0 cursor-pointer"
                    >
                      Verifikasi
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Status details bullet lists */}
              <div className="mt-6 pt-4 border-t border-gray-50 dark:border-slate-800/80 space-y-2 relative z-10">
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Kredensial Resmi Terdaftar</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Diverifikasi Secara Global</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
