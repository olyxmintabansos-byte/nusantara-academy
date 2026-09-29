'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  GraduationCap, 
  Menu, 
  X, 
  Award,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { SCHOOL_INFO } from '@/lib/mockData';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/akademik/', label: 'Akademik & Guru' },
    { href: '/kampus/', label: 'Fasilitas & Kampus' },
    { href: '/ppdb/', label: 'PPDB Online 2026/2027', badge: 'DAFTAR' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a1128] text-white shadow-md border-b border-[#1e293b]">
      {/* Top Heritage Accent Bar */}
      <div className="bg-[#060b1a] border-b border-[#162035] text-[11px] py-1.5 px-4 sm:px-8 flex justify-between items-center text-gray-300">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            {SCHOOL_INFO.accreditation}
          </span>
          <span className="hidden md:inline text-gray-500">•</span>
          <span className="hidden md:inline text-gray-400">NPSN: {SCHOOL_INFO.npsn}</span>
        </div>
        <div className="flex items-center gap-4 text-gray-300">
          <span className="hidden sm:inline">Telp: {SCHOOL_INFO.phone}</span>
          <Link href="/ppdb/" className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1">
            <span>Portal Siswa</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & School Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center p-0.5 shadow-lg">
              <div className="w-full h-full rounded-full bg-[#0a1128] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-white block">
                {SCHOOL_INFO.name}
              </span>
              <span className="text-[10px] text-amber-400/90 font-mono tracking-widest uppercase block -mt-0.5">
                {SCHOOL_INFO.englishName}
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    isActive
                      ? 'bg-white/10 text-amber-300 font-bold'
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500 text-black font-extrabold uppercase">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: PPDB Hotline */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/ppdb/"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
            >
              <UserCheck className="w-4 h-4 text-black" />
              <span>Daftar PPDB Online</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1128] border-t border-white/10 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-white/10"
            >
              <div className="flex justify-between items-center">
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500 text-black font-bold">
                    {link.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/ppdb/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-md bg-amber-500 text-black font-bold text-sm text-center block"
            >
              Daftar PPDB Online Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
