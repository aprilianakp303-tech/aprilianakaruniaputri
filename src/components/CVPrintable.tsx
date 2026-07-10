import { motion } from 'motion/react';
import { X, Printer, Mail, Phone, MapPin, Globe, Award, Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo, educationHistory, workExperience, skillsList, certificatesList } from '../data';

interface CVPrintableProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVPrintable({ isOpen, onClose }: CVPrintableProps) {
  if (!isOpen) return null;

  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 no-print">
      
      {/* Outer Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-gray-100 dark:bg-slate-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-800 flex flex-col max-h-[95vh]"
      >
        
        {/* Floating Actions Bar (Header) */}
        <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-500" />
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
              Pratinjau CV Resmi (A4)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={triggerPrint}
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-xs sm:text-sm hover:opacity-90 shadow-sm cursor-pointer transition-all"
            >
              <Printer className="w-4 h-4" />
              Cetak / Simpan PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-gray-100 hover:bg-pink-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-400 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Sheet Container */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-8 bg-gray-100 dark:bg-slate-900/40">
          
          {/* Paper sheet */}
          <div
            id="printable-cv"
            className="bg-white text-slate-800 p-8 sm:p-12 shadow-md max-w-[210mm] mx-auto rounded-xl border border-gray-200/50 print:border-none print:shadow-none print:p-0 print:rounded-none"
            style={{ minHeight: '297mm' }}
          >
            
            {/* Header Section */}
            <div className="border-b-4 border-pink-500 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-pink-600 font-bold text-sm sm:text-base uppercase tracking-wider mt-1">
                  Sistem Informasi Graduate &bull; Junior Data Analyst
                </p>
                
                {/* Short intro */}
                <p className="text-xs text-slate-500 max-w-xl mt-3 leading-relaxed">
                  Lulusan Sarjana Komputer dengan pemahaman kuat dalam analisis kebutuhan sistem bisnis, perancangan model basis data SQL, visualisasi data, serta adaptasi solusi AI modern. Memiliki pengalaman kerja praktik selama 1 tahun.
                </p>
              </div>

              {/* Stamp Profile Photo inside CV */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-pink-100 overflow-hidden shrink-0 self-center">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Coordinates / Contacts Block */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-b border-gray-100 text-[11px] sm:text-xs text-slate-600 bg-gray-50/50 -mx-4 px-4 sm:-mx-12 sm:px-12">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0" />
                <span>Semarang, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-500 shrink-0" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-500 shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-pink-500 shrink-0" />
                <span className="truncate">linkedin.com/in/apriliana-kp</span>
              </div>
            </div>

            {/* Double Column layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
              
              {/* Left Column (Skills, Badges, Certs) */}
              <div className="md:col-span-4 space-y-6">
                
                {/* Technical Skills List */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1.5 uppercase tracking-wider">
                    Keahlian Teknis
                  </h3>
                  <div className="space-y-2">
                    {skillsList
                      .filter((s) => s.category === 'technical')
                      .map((skill) => (
                        <div key={skill.name} className="space-y-0.5">
                          <div className="flex justify-between text-[11px] font-medium text-slate-700">
                            <span>{skill.name}</span>
                          </div>
                          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-pink-500" style={{ width: `${skill.level}%` }} />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Software Tools */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1.5 uppercase tracking-wider">
                    Alat & Software
                  </h3>
                  <div className="space-y-2">
                    {skillsList
                      .filter((s) => s.category === 'tools')
                      .map((skill) => (
                        <div key={skill.name} className="space-y-0.5">
                          <div className="flex justify-between text-[11px] font-medium text-slate-700">
                            <span>{skill.name}</span>
                          </div>
                          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500" style={{ width: `${skill.level}%` }} />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Certificates */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1.5 uppercase tracking-wider">
                    Sertifikasi Resmi
                  </h3>
                  <div className="space-y-2.5">
                    {certificatesList.map((cert) => (
                      <div key={cert.id} className="text-[11px]">
                        <p className="font-bold text-slate-800 leading-tight">
                          {cert.title}
                        </p>
                        <p className="text-slate-500 font-medium">
                          {cert.issuer} ({cert.year})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft skills short listed */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1.5 uppercase tracking-wider">
                    Karakter / Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {skillsList
                      .filter((s) => s.category === 'soft')
                      .slice(0, 4)
                      .map((skill) => (
                        <span
                          key={skill.name}
                          className="px-2 py-0.5 bg-gray-100 text-slate-700 rounded text-[10px] font-medium border border-gray-200"
                        >
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>

              </div>

              {/* Right Column (Experiences, Education) */}
              <div className="md:col-span-8 space-y-6">
                
                {/* Work Experience */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-pink-500" />
                    Pengalaman Kerja (1 Tahun)
                  </h3>
                  
                  <div className="space-y-5">
                    {workExperience.map((exp) => (
                      <div key={exp.id} className="text-xs">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-bold text-slate-950 text-sm">
                            {exp.role}
                          </h4>
                          <span className="font-mono text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded shrink-0">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-pink-600 font-semibold mb-2">
                          {exp.company}
                        </p>
                        <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px] leading-relaxed">
                          {exp.description.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education timeline list */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-pink-500" />
                    Pendidikan Formal
                  </h3>
                  
                  <div className="space-y-4">
                    {educationHistory.map((edu) => (
                      <div key={edu.id} className="text-xs">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-bold text-slate-950">
                            {edu.degree}
                          </h4>
                          <span className="font-mono text-[10px] text-slate-500 shrink-0">
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-slate-600 font-medium">{edu.institution}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Verification & Signature footer block */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] text-slate-400">
              <p>Dibuat secara elektronik dan sah sebagai berkas lamaran resmi.</p>
              <p className="font-semibold text-slate-500 font-serif">Apriliana Karunia Putri, S.Kom.</p>
            </div>

          </div>

        </div>

        {/* Printable Footer Alert inside preview window */}
        <div className="bg-pink-50 dark:bg-slate-950 px-6 py-3.5 text-xs text-center border-t border-gray-200 dark:border-slate-800 text-gray-500">
          Tip: Saat jendela Cetak browser terbuka, pilih <strong className="text-pink-600 dark:text-pink-400">"Save as PDF"</strong> dan centang opsi <strong className="text-pink-600 dark:text-pink-400">"Background Graphics"</strong> untuk hasil warna terbaik.
        </div>

      </motion.div>
    </div>
  );
}
