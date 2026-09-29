import React from 'react';
import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SCHOOL_INFO } from '@/lib/mockData';

export default function Footer() {
  return (
    <footer className="bg-[#070d1e] text-gray-300 border-t border-[#1e293b]">
      {/* Upper Footer: Heritage Summary & Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Institutional Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="font-editorial text-lg font-bold text-white block">
                  {SCHOOL_INFO.name}
                </span>
                <span className="text-[10px] text-amber-400 font-mono tracking-widest block">
                  EST. {SCHOOL_INFO.foundedYear}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Lembaga pendidikan menengah atas unggulan terakreditasi internasional yang memadukan keunggulan sains, integritas budi pekerti, dan kepemimpinan global.
            </p>
            <div className="p-3 rounded-lg bg-[#0e172e] border border-white/5 space-y-1 text-xs">
              <span className="text-amber-400 font-bold block">{SCHOOL_INFO.accreditation}</span>
              <span className="text-gray-400 block text-[11px]">NPSN: {SCHOOL_INFO.npsn}</span>
            </div>
          </div>

          {/* Col 2: Program Akademik */}
          <div className="space-y-3">
            <h3 className="font-editorial text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Program Akademik
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/akademik/" className="hover:text-amber-300 transition-colors">• Kurikulum Merdeka Terintegrasi</Link></li>
              <li><Link href="/akademik/" className="hover:text-amber-300 transition-colors">• International Baccalaureate (IB) DP</Link></li>
              <li><Link href="/akademik/" className="hover:text-amber-300 transition-colors">• Program Inkubasi Olimpiade Sains (OSN)</Link></li>
              <li><Link href="/akademik/" className="hover:text-amber-300 transition-colors">• Kelas Unggulan Riset & Robotika</Link></li>
              <li><Link href="/akademik/" className="hover:text-amber-300 transition-colors">• Program Bimbingan Tembus PTN & Luar Negeri</Link></li>
            </ul>
          </div>

          {/* Col 3: Layanan Kampus */}
          <div className="space-y-3">
            <h3 className="font-editorial text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Layanan Kampus
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/ppdb/" className="hover:text-amber-300 transition-colors">• Portal Pendaftaran Siswa (PPDB Online)</Link></li>
              <li><Link href="/kampus/" className="hover:text-amber-300 transition-colors">• Perpustakaan Digital Graha Widya</Link></li>
              <li><Link href="/kampus/" className="hover:text-amber-300 transition-colors">• Fasilitas Asrama Siswa Berwawasan Kebangsaan</Link></li>
              <li><Link href="/kampus/" className="hover:text-amber-300 transition-colors">• Tur Virtual 360° Kompleks Kampus</Link></li>
              <li><Link href="/ppdb/" className="hover:text-amber-300 transition-colors">• Pengajuan Beasiswa Afirmasi 100%</Link></li>
            </ul>
          </div>

          {/* Col 4: Kontak & Sekretariat */}
          <div className="space-y-3">
            <h3 className="font-editorial text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Sekretariat Sekolah
            </h3>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Senin - Jumat: 07.00 - 16.00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/5 bg-[#040813] py-4 text-[11px] text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {SCHOOL_INFO.name}. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Standar Kurikulum Merdeka Kemendikbudristek RI</span>
            <span>•</span>
            <span className="text-amber-400">IB World School No. 049821</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
