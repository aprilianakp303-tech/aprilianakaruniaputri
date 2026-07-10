import { useState } from 'react';
import { motion } from 'motion/react';
import { Database, Laptop, Heart, CheckCircle } from 'lucide-react';
import { skillsList } from '../data';

type SkillCategory = 'technical' | 'tools' | 'soft';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('technical');

  const categories = [
    { id: 'technical', label: 'Teknis & Pemrograman', icon: Database },
    { id: 'tools', label: 'Alat & Software', icon: Laptop },
    { id: 'soft', label: 'Soft Skills', icon: Heart },
  ];

  const filteredSkills = skillsList.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="py-20 bg-pink-50/20 dark:bg-slate-950/40 border-t border-b border-pink-50/50 dark:border-slate-800/50"
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
            Keahlian
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 font-serif"
          >
            Kompetensi & Keahlian
          </motion.h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
            Dipetakan dari tingkat pemula hingga menengah sesuai dengan kualifikasi Sistem Informasi.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as SkillCategory)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-transparent shadow-pink-200 dark:shadow-none'
                    : 'bg-white hover:bg-pink-50/30 text-gray-700 dark:bg-slate-900 dark:text-gray-300 dark:border-slate-800 hover:border-pink-200'
                }`}
              >
                <Icon className={`w-4.5 h-4.5 ${isActive ? 'text-white' : 'text-pink-500'}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:border-pink-100 dark:hover:border-pink-950 transition-all duration-300 group hover:shadow-md"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {skill.levelLabel}
                </span>
              </div>

              {/* Custom Styled Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono text-gray-400">
                  <span>Tingkat Penguasaan</span>
                  <span>{skill.level}%</span>
                </div>
                
                <div className="w-full h-2.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Professional Summary Quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 italic leading-relaxed">
            *Pemetaan keahlian di atas didasarkan pada kurikulum akademis Sistem Informasi Universitas Semarang, pelatihan intensif sertifikasi Coursera, dan portofolio proyek riil yang dikerjakan selama 1 tahun terakhir.
          </p>
        </div>

      </div>
    </section>
  );
}
