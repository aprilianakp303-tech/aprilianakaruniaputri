import { motion } from 'motion/react';
import { FolderOpen, Tag } from 'lucide-react';
import { projectsList } from '../data';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-pink-50/10 dark:bg-slate-950/20 border-t border-b border-pink-50/50 dark:border-slate-800/50"
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
            Portofolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 font-serif"
          >
            Proyek Pilihan & Studi Kasus
          </motion.h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
            Daftar rancangan sistem dan pengolahan data riil yang mengombinasikan keahlian Sistem Informasi dan analisis data.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-pink-200 dark:hover:border-pink-900 transition-all duration-500"
            >
              {/* Image Thumbnail with Overlay */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                
                {/* Visual Glassmorphic gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-950/70 via-purple-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold text-pink-300 uppercase tracking-widest block mb-1">
                      {project.category}
                    </span>
                    <h4 className="text-lg font-bold font-serif leading-tight">
                      {project.title}
                    </h4>
                  </div>
                </div>

                {/* Top Category Badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-purple-600 dark:text-purple-300 shadow-sm uppercase tracking-wide">
                  <FolderOpen className="w-3.5 h-3.5 text-pink-500" />
                  {project.category}
                </span>
              </div>

              {/* Card Body Info */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Stacks Tags */}
                <div className="pt-4 border-t border-gray-50 dark:border-slate-800/80 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-pink-50 dark:bg-pink-950/20 text-pink-600 dark:text-pink-400 border border-pink-100/10"
                      >
                        <Tag className="w-2.5 h-2.5 text-purple-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
