'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Search, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  Filter
} from 'lucide-react';
import { TEACHERS } from '@/lib/mockData';
import { Teacher } from '@/lib/types';

export default function AkademikPage() {
  const [selectedDept, setSelectedDept] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTeachers = TEACHERS.filter((t) => {
    const matchesDept = selectedDept === 'ALL' || t.department === selectedDept;
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header Banner */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0a1128] text-white border-l-4 border-amber-500 space-y-3">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
          STANDAR PEMBELAJARAN TINGGI
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight">
          Struktur Kurikulum & Direktori Tenaga Pengajar
        </h1>
        <p className="text-sm text-gray-300 max-w-3xl leading-relaxed font-light">
          Didukung oleh dewan pengajar berkualifikasi magister dan doktor lulusan perguruan tinggi terkemuka dalam dan luar negeri, kami menyelenggarakan pendidikan analitik yang mendalam.
        </p>
      </div>

      {/* Kurikulum Comparison Section */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">
            KOMPARASI PROGRAM
          </span>
          <h2 className="font-editorial text-2xl font-bold text-[#0a1128]">
            Dua Jalur Pembelajaran Unggulan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4">
            <span className="text-xs px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-bold uppercase font-mono">
              JALUR REGULER UNGGUL
            </span>
            <h3 className="font-editorial text-2xl font-bold text-[#0a1128]">
              Kurikulum Merdeka Riset Terapan
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Dirancang untuk memaksimalkan capaian SNBP/SNBT perguruan tinggi negeri terbaik (ITB, UI, UGM) melalui pembobotan mata pelajaran peminatan sains analitik dan humaniora terpadu.
            </p>
            <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Wajib Karya Ilmiah Remaja (KIR) di Kelas XI</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Modul Persiapan UTBK Terintegrasi sejak Semester 3</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Praktikum Laboratorium Sains Mandiri 6 Jam/Minggu</li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4">
            <span className="text-xs px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-bold uppercase font-mono">
              JALUR INTERNASIONAL
            </span>
            <h3 className="font-editorial text-2xl font-bold text-[#0a1128]">
              International Baccalaureate (IB) Diploma
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Program pra-universitas 2 tahun berbahasa pengantar Inggris penuh dengan penilaian eksternal langsung dari Jenewa, Swiss untuk masuk kampus bergengsi dunia.
            </p>
            <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Theory of Knowledge (TOK) & Critical Essay</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Extended Essay (EE) 4.000 Kata Riset Independen</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Program Pengabdian CAS (Creativity, Activity, Service)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Direktori Tenaga Pengajar */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
          <div>
            <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">
              DEWAN PENGAJAR
            </span>
            <h2 className="font-editorial text-2xl font-bold text-[#0a1128]">
              Direktori Guru & Pakar Pendidikan
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Cari nama guru / mapel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex flex-wrap gap-2 text-xs">
          {['ALL', 'MIPA', 'Bahasa', 'Humaniora', 'Seni & Olahraga'].map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                selectedDept === dept
                  ? 'bg-[#0a1128] text-white border-[#0a1128]'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {dept === 'ALL' ? 'Semua Departemen' : dept}
            </button>
          ))}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((t) => (
            <div key={t.id} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between border-b border-gray-100 pb-3">
                <div>
                  <h3 className="font-editorial text-base font-bold text-[#0a1128]">
                    {t.name}
                  </h3>
                  <p className="text-xs text-amber-600 font-medium">{t.title}</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                  {t.department}
                </span>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold block uppercase">Mata Pelajaran:</span>
                  <span className="text-gray-900 font-medium">{t.subject}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold block uppercase">Pendidikan:</span>
                  <span className="text-gray-700">{t.education}</span>
                </div>
                <p className="text-xs text-gray-500 italic pt-1">
                  "{t.bio}"
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <span className="text-[10px] text-gray-400 font-semibold block uppercase mb-1">Pencapaian:</span>
                <ul className="space-y-1 text-[11px] text-gray-700">
                  {t.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
