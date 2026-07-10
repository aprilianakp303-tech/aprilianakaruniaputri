import { motion } from 'motion/react';
import { Briefcase, Calendar, Building, ChevronRight } from 'lucide-react';
import { workExperience } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
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
            Pengalaman Kerja
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 font-serif"
          >
            Perjalanan Karir Profesional
          </motion.h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l-2 border-pink-100 dark:border-slate-800 space-y-12 py-2">
            
            {workExperience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Decorative timeline node icon */}
                <span className="absolute -left-[35px] sm:-left-[49px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white shadow-md shadow-pink-200 dark:shadow-none ring-4 ring-white dark:ring-slate-900">
                  <Briefcase className="w-4 h-4" />
                </span>

                {/* Experience Detail Container */}
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-950 dark:to-slate-900/40 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-slate-800 hover:border-pink-200 dark:hover:border-pink-900 transition-all duration-300 shadow-sm hover:shadow-md group">
                  
                  {/* Header Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                        <Building className="w-4 h-4 text-pink-500" />
                        <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 border border-pink-100/30 w-max shrink-0 h-max">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullet points description list */}
                  <ul className="space-y-3">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="mt-1.5 shrink-0">
                          <ChevronRight className="w-4 h-4 text-pink-500" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
