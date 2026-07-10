import { Education, Experience, Project, Skill, Certificate } from './types';

export const personalInfo = {
  name: 'Apriliana Karunia Putri, S.Kom.',
  title: 'Information Systems Graduate & Junior Data Analyst',
  subTitle: 'Lulusan Sistem Informasi | Universitas Semarang (USM)',
  domicile: 'Kota Semarang, Jawa Tengah, Indonesia',
  phone: '0823 1111 5078',
  email: 'aprilianakp010@gmail.com',
  bio: 'Saya adalah lulusan Sarjana Komputer program studi Sistem Informasi dari Universitas Semarang (USM) dengan ketertarikan mendalam pada analisis data, manajemen sistem informasi, dan pengembangan solusi teknologi. Memiliki pengalaman 1 tahun dalam menganalisis kebutuhan sistem, mengolah data bisnis, serta mengimplementasikan solusi digital untuk meningkatkan efisiensi operasional. Mengombinasikan keahlian analitis, sertifikasi data analisis profesional, dan pemahaman AI modern untuk memberikan nilai tambah yang nyata bagi pertumbuhan bisnis.',
  photoUrl: '/src/assets/images/user_profile_photo_1783644922701.jpg',
  socials: {
    github: 'https://github.com/aprilianakp',
    linkedin: 'https://linkedin.com/in/apriliana-karunia-putri',
    whatsapp: 'https://wa.me/6282311115078',
  }
};

export const educationHistory: Education[] = [
  {
    id: 'edu-1',
    institution: 'Universitas Semarang (USM)',
    degree: 'Sarjana Komputer (S.Kom.) - Program Studi Sistem Informasi',
    year: '2021 - 2025',
    description: 'Fokus pada analisis dan perancangan sistem informasi bisnis, manajemen basis data, analisis proses bisnis, dan pemrograman web. Lulus dengan predikat sangat memuaskan, mengintegrasikan teori manajemen sistem dengan teknologi praktis.'
  },
  {
    id: 'edu-2',
    institution: 'SMK Negeri 2 Semarang',
    degree: 'Sekolah Menengah Kejuruan',
    year: '2018 - 2021',
    description: 'Mendapatkan fondasi kuat dalam administrasi perkantoran, literasi digital, manajemen dokumen, serta pengenalan dasar-dasar teknologi informasi.'
  },
  {
    id: 'edu-3',
    institution: 'MTs Negeri 1 Semarang',
    degree: 'Madrasah Tsanawiyah',
    year: '2015 - 2018',
    description: 'Pendidikan tingkat menengah pertama dengan fokus pengembangan akademik dan nilai-nilai karakter luhur.'
  },
  {
    id: 'edu-4',
    institution: 'SD Islam Tunas Harapan',
    degree: 'Sekolah Dasar',
    year: '2009 - 2015',
    description: 'Pendidikan dasar yang membangun kecerdasan logika dasar dan nilai-nilai keagamaan sejak dini.'
  }
];

export const workExperience: Experience[] = [
  {
    id: 'exp-1',
    role: 'Junior Data Analyst & System Specialist',
    company: 'CV Sinergi Solusi Semarang',
    period: 'Juli 2025 - Sekarang',
    description: [
      'Mengolah dan menganalisis data penjualan bulanan klien menggunakan SQL dan Microsoft Excel untuk memberikan rekomendasi strategi pemasaran.',
      'Melakukan perancangan sistem informasi inventory UMKM lokal, memetakan proses bisnis dari manual ke digital menggunakan flowchart dan UML.',
      'Menyusun dashboard laporan interaktif untuk memonitor indikator kinerja utama (KPI) bisnis, meningkatkan efisiensi pelaporan sebesar 30%.',
      'Bekerjasama dengan tim pengembang untuk memastikan fungsionalitas aplikasi web inventory sesuai dengan spesifikasi kebutuhan pengguna.'
    ]
  },
  {
    id: 'exp-2',
    role: 'IT Support & Systems Analyst Intern',
    company: 'Dinas Komunikasi dan Informatika (Diskominfo) Kota Semarang',
    period: 'Januari 2025 - Juni 2025',
    description: [
      'Membantu analisis kebutuhan perangkat lunak untuk sistem pengarsipan surat digital kelurahan di Kota Semarang.',
      'Menangani pengujian sistem (system testing) dan penyusunan panduan penggunaan aplikasi (User Manual) untuk staf administrasi kelurahan.',
      'Memberikan dukungan teknis (IT Support) untuk memelihara kestabilan jaringan, basis data, dan aplikasi internal instansi.',
      'Membantu pengolahan data statistik pelayanan publik untuk diintegrasikan ke portal Open Data Kota Semarang.'
    ]
  }
];

export const skillsList: Skill[] = [
  // Technical
  { name: 'SQL & Database (MySQL/PostgreSQL)', level: 75, levelLabel: 'Menengah', category: 'technical' },
  { name: 'Data Analysis & Visualisasi', level: 80, levelLabel: 'Menengah', category: 'technical' },
  { name: 'Sistem Analisis & Desain (UML)', level: 78, levelLabel: 'Menengah', category: 'technical' },
  { name: 'HTML, CSS & Tailwind CSS', level: 70, levelLabel: 'Pemula - Menengah', category: 'technical' },
  { name: 'JavaScript & React.js', level: 55, levelLabel: 'Pemula', category: 'technical' },
  { name: 'Python (Pandas & NumPy)', level: 50, levelLabel: 'Pemula', category: 'technical' },
  
  // Tools
  { name: 'Microsoft Excel (Pivot, VLOOKUP)', level: 85, levelLabel: 'Menengah - Lanjut', category: 'tools' },
  { name: 'Google Sheets & Looker Studio', level: 75, levelLabel: 'Menengah', category: 'tools' },
  { name: 'Figma (Wireframing & UI Design)', level: 65, levelLabel: 'Pemula - Menengah', category: 'tools' },
  { name: 'Git & GitHub', level: 60, levelLabel: 'Pemula', category: 'tools' },
  
  // Soft Skills
  { name: 'Analisis Masalah & Logika', level: 85, levelLabel: 'Menengah - Lanjut', category: 'soft' },
  { name: 'Komunikasi & Kolaborasi Tim', level: 80, levelLabel: 'Menengah', category: 'soft' },
  { name: 'Ketelitian & Manajemen Waktu', level: 82, levelLabel: 'Menengah', category: 'soft' },
  { name: 'Kemauan Belajar Hal Baru', level: 90, levelLabel: 'Tinggi', category: 'soft' }
];

export const certificatesList: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Data Analyst Professional Certificate',
    issuer: 'Coursera (Google)',
    year: '2025',
    credentialUrl: '#'
  },
  {
    id: 'cert-2',
    title: 'AI Vibe Coding & Dev Environment Certificate',
    issuer: 'Google Developer Group & AI Studio Dev',
    year: '2026',
    credentialUrl: '#'
  }
];

export const projectsList: Project[] = [
  {
    id: 'proj-1',
    title: 'Sistem Informasi Manajemen Inventory UMKM',
    category: 'Manajemen Sistem Informasi',
    description: 'Sebuah aplikasi manajemen stok barang yang dirancang khusus untuk UMKM guna mendigitalisasi pencatatan masuk-keluar barang, peringatan stok menipis secara otomatis, dan peramalan kebutuhan stok bulanan berbasis riwayat transaksi.',
    imageUrl: '/src/assets/images/project_inventory_1783642786940.jpg',
    tags: ['React', 'Tailwind CSS', 'SQL Database', 'UML Design', 'Charts'],
    demoUrl: '#',
    githubUrl: 'https://github.com/aprilianakp/inventory-umkm'
  },
  {
    id: 'proj-2',
    title: 'Dashboard Analisis Data Penjualan Semarang',
    category: 'Analisis Data & Business Intelligence',
    description: 'Dashboard interaktif yang menyajikan visualisasi data penjualan produk dari beberapa toko kelontong di area Kota Semarang. Menggunakan metrik kinerja utama untuk menganalisis tren produk terlaris, wilayah penjualan tertinggi, dan margin keuntungan.',
    imageUrl: '/src/assets/images/project_analytics_1783642801930.jpg',
    tags: ['Looker Studio', 'SQL', 'Excel Analytics', 'Data Viz'],
    demoUrl: '#',
    githubUrl: 'https://github.com/aprilianakp/sales-dashboard-semarang'
  },
  {
    id: 'proj-3',
    title: 'Sistem Pengarsipan Surat Digital Kelurahan',
    category: 'Sistem Administrasi Publik',
    description: 'Sistem informasi pengelolaan surat masuk dan keluar berbasis web untuk mempercepat pelayanan administrasi di tingkat kelurahan Kota Semarang. Memiliki fitur pencarian arsip instan, penomoran otomatis, dan pelacakan disposisi surat.',
    imageUrl: '/src/assets/images/project_archiving_1783642814857.jpg',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Database PostgreSQL', 'System Analysis'],
    demoUrl: '#',
    githubUrl: 'https://github.com/aprilianakp/arsip-surat-kelurahan'
  }
];
