'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle2, 
  Compass, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { FACILITIES } from '@/lib/mockData';

export default function KampusFasilitasPage() {
  const [selectedFacilityId, setSelectedFacilityId] = useState<string>('F1');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredFacilities = FACILITIES.filter(
    (f) => activeCategory === 'ALL' || f.category === activeCategory
  );

  const activeFacility = FACILITIES.find((f) => f.id === selectedFacilityId) || FACILITIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header Banner */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0a1128] text-white border-l-4 border-amber-500 space-y-3">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
          INFRASTRUKTUR & LINGKUNGAN BELAJAR
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight">
          Kampus Hijau 14 Hektar & Fasilitas Riset Terpadu
        </h1>
        <p className="text-sm text-gray-300 max-w-3xl leading-relaxed font-light">
          Dirancang dengan arsitektur tropis modern hemat energi, mengintegrasikan laboratorium sains, perpustakaan digital 3 lantai, gelanggang olahraga olimpiade, dan asrama siswa yang asri.
        </p>
      </div>

      {/* Interactive Virtual Campus Map (SVG Blueprint) */}
      <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
          <div>
            <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">
              PETA INTERAKTIF KAWASAN KAMPUS
            </span>
            <h2 className="font-editorial text-xl font-bold text-[#0a1128]">
              Denah Zonasi Kampus Terpadu
            </h2>
          </div>
          <span className="text-xs text-gray-500 font-mono">KLIK ZONA UNTUK INSPEKSI FASILITAS</span>
        </div>

        {/* Master Plan SVG */}
        <div className="bg-[#0b1329] p-4 rounded-xl border border-gray-800 flex items-center justify-center min-h-[380px] overflow-hidden">
          <svg viewBox="0 0 800 420" className="w-full max-w-[760px] h-[360px] select-none">
            {/* Campus Boundary */}
            <rect x="20" y="20" width="760" height="380" rx="16" fill="#080e1e" stroke="#1e293b" strokeWidth="2" />

            {/* Tree Canopies & Green Zones */}
            <circle cx="100" cy="90" r="45" fill="#064e3b" opacity="0.4" />
            <circle cx="700" cy="330" r="55" fill="#064e3b" opacity="0.4" />
            <circle cx="400" cy="50" r="30" fill="#064e3b" opacity="0.4" />

            {/* Central Boulevard */}
            <path d="M 400 400 L 400 240 L 400 60" stroke="#334155" strokeWidth="12" strokeLinecap="round" />
            <line x1="160" y1="240" x2="640" y2="240" stroke="#334155" strokeWidth="10" strokeLinecap="round" />

            {/* Zone F1: Laboratorium Sains */}
            <g onClick={() => setSelectedFacilityId('F1')} className="cursor-pointer group">
              <rect x="80" y="140" width="160" height="80" rx="8" fill={selectedFacilityId === 'F1' ? '#c59b27' : '#1e293b'} stroke="#eab308" strokeWidth={selectedFacilityId === 'F1' ? '2.5' : '1'} className="transition-colors" />
              <text x="160" y="185" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="Georgia">LAB SAINS (F1)</text>
            </g>

            {/* Zone F2: Perpustakaan Graha Widya */}
            <g onClick={() => setSelectedFacilityId('F2')} className="cursor-pointer group">
              <rect x="320" y="140" width="160" height="80" rx="8" fill={selectedFacilityId === 'F2' ? '#c59b27' : '#1e293b'} stroke="#eab308" strokeWidth={selectedFacilityId === 'F2' ? '2.5' : '1'} className="transition-colors" />
              <text x="400" y="185" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="Georgia">PERPUSTAKAAN (F2)</text>
            </g>

            {/* Zone F3: Gelanggang Olahraga & Kolam */}
            <g onClick={() => setSelectedFacilityId('F3')} className="cursor-pointer group">
              <rect x="560" y="140" width="160" height="80" rx="8" fill={selectedFacilityId === 'F3' ? '#c59b27' : '#1e293b'} stroke="#eab308" strokeWidth={selectedFacilityId === 'F3' ? '2.5' : '1'} className="transition-colors" />
              <text x="640" y="185" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="Georgia">SPORT CENTER (F3)</text>
            </g>

            {/* Zone F4: Amphitheater */}
            <g onClick={() => setSelectedFacilityId('F4')} className="cursor-pointer group">
              <rect x="140" y="270" width="180" height="90" rx="8" fill={selectedFacilityId === 'F4' ? '#c59b27' : '#1e293b'} stroke="#eab308" strokeWidth={selectedFacilityId === 'F4' ? '2.5' : '1'} className="transition-colors" />
              <text x="230" y="320" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="Georgia">AMPHITHEATER (F4)</text>
            </g>

            {/* Zone F5: Asrama Siswa */}
            <g onClick={() => setSelectedFacilityId('F5')} className="cursor-pointer group">
              <rect x="480" y="270" width="180" height="90" rx="8" fill={selectedFacilityId === 'F5' ? '#c59b27' : '#1e293b'} stroke="#eab308" strokeWidth={selectedFacilityId === 'F5' ? '2.5' : '1'} className="transition-colors" />
              <text x="570" y="320" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="Georgia">ASRAMA PELAJAR (F5)</text>
            </g>
          </svg>
        </div>

        {/* Selected Zone Deep Dive Card */}
        <div className="p-6 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200 pb-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-700 uppercase">
                ZONA TERPILIH // KODE: {activeFacility.id}
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#0a1128]">
                {activeFacility.name}
              </h3>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-[#0a1128] text-white font-mono">
              Kapasitas: {activeFacility.capacity}
            </span>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            {activeFacility.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <span className="text-xs font-bold text-[#0a1128] uppercase block mb-1.5">
                Spesifikasi Fasilitas:
              </span>
              <ul className="space-y-1.5 text-xs text-gray-600">
                {activeFacility.specifications.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 text-xs text-gray-600">
              <div>
                <span className="font-bold text-[#0a1128] block uppercase">Jam Operasional:</span>
                <span>{activeFacility.operationalHours}</span>
              </div>
              <div>
                <span className="font-bold text-[#0a1128] block uppercase">Kategori Penggunaan:</span>
                <span>{activeFacility.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Catalog List */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">
            DAFTAR FASILITAS
          </span>
          <h2 className="font-editorial text-2xl font-bold text-[#0a1128]">
            Katalog Seluruh Sarana Pembelajaran
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              onClick={() => setSelectedFacilityId(fac.id)}
              className={`p-6 rounded-xl border cursor-pointer transition-all ${
                selectedFacilityId === fac.id
                  ? 'bg-amber-50/70 border-amber-500 shadow-md'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-600 block w-fit mb-2">
                {fac.category}
              </span>
              <h3 className="font-editorial text-lg font-bold text-[#0a1128]">
                {fac.name}
              </h3>
              <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                {fac.description}
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-[11px] text-gray-500">
                <span>{fac.capacity}</span>
                <span className="text-amber-700 font-bold">Pilih Zona →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
