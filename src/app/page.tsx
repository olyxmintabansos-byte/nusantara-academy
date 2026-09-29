'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Award, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Users, 
  Trophy, 
  Globe2, 
  Compass,
  Building2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SCHOOL_INFO, EVENTS, PPDB_TRACKS } from '@/lib/mockData';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section: Prestigious Editorial Banner */}
      <section className="relative bg-[#0a1128] text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500 overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>PENERIMAAN PESERTA DIDIK BARU (PPDB) TAHUN AJARAN 2026/2027</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Mendidik Pemimpin Masa Depan Berintegritas & Berwawasan Global.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              Memadukan ketajaman sains Kurikulum Merdeka, diplomasi International Baccalaureate, dan keluhuran budi pekerti Nusantara di kampus riset modern 14 hektar.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/ppdb/"
                className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide shadow-lg transition-all flex items-center gap-2"
              >
                <span>Daftar PPDB Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kampus/"
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm tracking-wide transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Tur Virtual Kampus</span>
              </Link>
            </div>
          </div>

          {/* Right Card: Akreditasi & Indikator Unggulan */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0f1b3d] border border-amber-500/30 space-y-5 shadow-2xl">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] text-amber-400 font-mono uppercase tracking-widest block">
                STATUS AKREDITASI NASIONAL
              </span>
              <h3 className="font-editorial text-2xl font-bold text-white mt-1">
                Akreditasi A (Unggul)
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M) dengan skor istimewa <strong className="text-amber-400">98.4 / 100</strong>.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Lulusan Diterima PTN Favorit (ITB, UI, UGM) & Top 100 Dunia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sekolah Resmi Penyelenggara IB Diploma Programme (IBDP)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Laboratorium Sains Berstandar Biosafety Level 2</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Rasio Pengajar Berkualifikasi S2/S3 Lebih dari 78%</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[11px] text-gray-400 font-mono">
              <span>LEMBAGA: DIKBUD & IB</span>
              <span className="text-amber-400 font-bold">NPSN: 20108924</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Statistics Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-white shadow-xl border border-gray-100 text-center">
          <div className="p-3 border-r border-gray-100 last:border-none">
            <span className="text-3xl sm:text-4xl font-black text-[#0a1128] font-editorial block">99.2%</span>
            <span className="text-xs text-gray-500 font-medium">Tembus PTN & Kampus Luar Negeri</span>
          </div>
          <div className="p-3 border-r border-gray-100 last:border-none">
            <span className="text-3xl sm:text-4xl font-black text-amber-600 font-editorial block">48+</span>
            <span className="text-xs text-gray-500 font-medium">Medali Olimpiade Sains Nasional/Dunia</span>
          </div>
          <div className="p-3 border-r border-gray-100 last:border-none">
            <span className="text-3xl sm:text-4xl font-black text-[#0a1128] font-editorial block">1 : 12</span>
            <span className="text-xs text-gray-500 font-medium">Rasio Dosen/Guru Terhadap Siswa</span>
          </div>
          <div className="p-3">
            <span className="text-3xl sm:text-4xl font-black text-amber-600 font-editorial block">100%</span>
            <span className="text-xs text-gray-500 font-medium">Fasilitas Kampus Ramah Lingkungan</span>
          </div>
        </div>
      </section>

      {/* 3. Sambutan Kepala Sekolah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-gray-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3">
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-amber-400 to-[#0a1128] p-1 shadow-md">
              <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold text-[#0a1128]">
                Dr. H. Raden Soedharmono, M.Ed.
              </h3>
              <p className="text-xs text-amber-600 font-medium">Kepala SMA Garuda Nusantara</p>
              <p className="text-[11px] text-gray-400 font-mono">Alumnus University of Melbourne</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs text-amber-600 font-bold tracking-wider uppercase">
              PESAN KEPALA SEKOLAH
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0a1128] leading-snug">
              "Pendidikan bukan sekadar memindahkan pengetahuan, melainkan menyalakan lentera karakter dan daya cipta."
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Di SMA Garuda Nusantara, kami meyakini bahwa setiap siswa dilahirkan dengan potensi genius yang otentik. Melalui integrasi kurikulum riset terapan, budaya kedisiplinan asrama berwawasan kebangsaan, dan jaringan kolaborasi global, kami memastikan putra-putri bangsa siap melangkah sebagai inovator dan cendekiawan bermartabat di panggung internasional.
            </p>
            <div className="pt-2">
              <Link href="/akademik/" className="text-sm font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1">
                <span>Pelajari Filosofi Akademik & Kurikulum Kami</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tiga Pilar Pendidikan Utama */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">
            KEUNGGULAN INSTITUSIONAL
          </span>
          <h2 className="font-editorial text-3xl font-bold text-[#0a1128]">
            Pilar Pembentukan Karakter & Prestasi
          </h2>
          <p className="text-sm text-gray-500">
            Fondasi komprehensif yang dirancang untuk membekali siswa dengan kompetensi abad ke-21.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4 hover:border-amber-400 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0a1128]">Riset & Kurikulum Merdeka Plus</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Siswa dilatih menyusun karya tulis ilmiah mandiri (KIR) dengan bimbingan akademisi universitas mitra dan akses laboratorium riset biosains terakreditasi.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4 hover:border-amber-400 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0a1128]">International Baccalaureate (IB)</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Opsi jalur dwibahasa (bilingual) dengan kualifikasi internasional yang mempermudah penerimaan langsung di universitas Ivy League, Russell Group, dan Go8 Australia.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4 hover:border-amber-400 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#0a1128]">Inkubasi Prestasi & Kepemimpinan</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Klub olimpiade terstruktur, Model United Nations (MUN), inkubator kewirausahaan sosial, serta pelatihan bela negara dan kepemimpinan asrama.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Agenda Akademik & Warta Sekolah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex justify-between items-end border-b border-gray-200 pb-4">
          <div>
            <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">
              AGENDA & KALENDER
            </span>
            <h2 className="font-editorial text-2xl font-bold text-[#0a1128]">
              Agenda Akademik Terkini
            </h2>
          </div>
          <Link href="/ppdb/" className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1">
            <span>Lihat Semua Kegiatan</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {EVENTS.map((ev) => (
            <div
              key={ev.id}
              className={`p-5 rounded-xl border transition-all ${
                ev.isImportant
                  ? 'bg-amber-50/60 border-amber-300 shadow-sm'
                  : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono mb-2">
                <span className="flex items-center gap-1 font-bold text-amber-700">
                  <Calendar className="w-3.5 h-3.5" />
                  {ev.date}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                  {ev.category}
                </span>
              </div>
              <h3 className="font-editorial text-base font-bold text-[#0a1128] line-clamp-2">
                {ev.title}
              </h3>
              <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                {ev.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
