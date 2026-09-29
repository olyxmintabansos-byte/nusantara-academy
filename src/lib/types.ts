export interface Teacher {
  id: string;
  name: string;
  title: string;
  subject: string;
  department: 'MIPA' | 'Bahasa' | 'Humaniora' | 'Seni & Olahraga';
  education: string;
  bio: string;
  achievements: string[];
}

export interface Facility {
  id: string;
  name: string;
  category: 'Akademik' | 'Laboratorium' | 'Olahraga' | 'Seni & Budaya' | 'Asrama';
  capacity: string;
  description: string;
  specifications: string[];
  operationalHours: string;
}

export interface AcademicEvent {
  id: string;
  title: string;
  date: string;
  category: 'Ujian' | 'Prestasi' | 'PPDB' | 'Seni & Budaya' | 'Libur';
  description: string;
  isImportant?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  readTime: string;
}

export interface PPDBTrack {
  id: string;
  name: string;
  quotaPercent: number;
  quotaSeats: number;
  registeredCount: number;
  description: string;
  requirements: string[];
}
