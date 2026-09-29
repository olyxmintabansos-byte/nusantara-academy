'use client';

import React, { useState } from 'react';
import { 
  UserCheck, 
  Calculator, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Send, 
  Download,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { PPDB_TRACKS, SCHOOL_INFO } from '@/lib/mockData';

export default function PPDBOnlinePage() {
  // Simulator State
  const [distanceKm, setDistanceKm] = useState<number>(2.4);
  const [raporScores, setRaporScores] = useState({
    mtk: 92,
    ipa: 90,
    ips: 88,
    indo: 94,
    inggris: 95,
  });

  // Modal Form Application State
  const [selectedTrack, setSelectedTrack] = useState<string>('TR1');
  const [applicantName, setApplicantName] = useState<string>('');
  const [applicantNisn, setApplicantNisn] = useState<string>('');
  const [applicantSchool, setApplicantSchool] = useState<string>('');
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Score Calculation
  const avgRapor = (
    (raporScores.mtk + raporScores.ipa + raporScores.ips + raporScores.indo + raporScores.inggris) / 5
  ).toFixed(1);

  // Zonasi Score Formula: Max 100 - (distance * 8)
  const zonasiScore = Math.max(0, Math.min(100, 100 - distanceKm * 8.5)).toFixed(1);

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantNisn) return;
    setSubmitSuccess(true);
    setTimeout(() => {
      // Keep state visible
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header Banner */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0a1128] text-white border-l-4 border-amber-500 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
            PORTAL RESMI PPDB ONLINE TA 2026/2027
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">
            SISTEM AKTIF
          </span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight">
          Penerimaan Peserta Didik Baru (PPDB) Nusantara
        </h1>
        <p className="text-sm text-gray-300 max-w-3xl leading-relaxed font-light">
          Proses seleksi transparan, meritokratis, dan berintegritas. Tersedia 4 jalur masuk resmi dengan kuota total 360 kursi peserta didik baru.
        </p>
      </div>

      {/* 4 Jalur Masuk Grid */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">
            ALUR & KUOTA SELEKSI
          </span>
          <h2 className="font-editorial text-2xl font-bold text-[#0a1128]">
            4 Jalur Pendaftaran Resmi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PPDB_TRACKS.map((track) => (
            <div key={track.id} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-amber-700">{track.quotaPercent}% KUOTA</span>
                  <span className="font-mono text-gray-500">{track.quotaSeats} Kursi</span>
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#0a1128] leading-snug">
                  {track.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 space-y-2">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Persyaratan Kunci:</span>
                <ul className="space-y-1 text-[11px] text-gray-700">
                  {track.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Simulator: Zonasi & Rapor Scoring Calculator */}
      <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-6">
        <div className="border-b border-gray-100 pb-3">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">
            SIMULASI & PREDIKSI KELULUSAN
          </span>
          <h2 className="font-editorial text-2xl font-bold text-[#0a1128]">
            Kalkulator Skor Seleksi Mandiri
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Uji kelayakan skor zonasi domisili dan nilai rata-rata rapor calon siswa secara instan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Kalkulator Zonasi */}
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
            <h3 className="font-editorial text-base font-bold text-[#0a1128] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Simulasi Jarak Zonasi (Domisili)</span>
            </h3>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-600">Jarak Tempat Tinggal ke Kampus:</span>
                <span className="text-amber-700 font-bold">{distanceKm.toFixed(1)} km</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="12.0"
                step="0.1"
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>0.2 km (Sangat Dekat)</span>
                <span>6.0 km</span>
                <span>12.0 km (Luar Radius)</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-200 flex justify-between items-center text-xs">
              <span className="text-gray-600">Indeks Skor Zonasi:</span>
              <span className="text-xl font-bold text-[#0a1128] font-editorial">{zonasiScore} / 100</span>
            </div>
          </div>

          {/* Kalkulator Rapor */}
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
            <h3 className="font-editorial text-base font-bold text-[#0a1128] flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-600" />
              <span>Simulasi Nilai Rapor SMP (Semester 1 - 5)</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="text-gray-500 text-[10px] block mb-1">Matematika:</label>
                <input
                  type="number"
                  min="60"
                  max="100"
                  value={raporScores.mtk}
                  onChange={(e) => setRaporScores({ ...raporScores, mtk: Number(e.target.value) })}
                  className="w-full p-2 bg-white border border-gray-200 rounded font-bold"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[10px] block mb-1">IPA Terpadu:</label>
                <input
                  type="number"
                  min="60"
                  max="100"
                  value={raporScores.ipa}
                  onChange={(e) => setRaporScores({ ...raporScores, ipa: Number(e.target.value) })}
                  className="w-full p-2 bg-white border border-gray-200 rounded font-bold"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[10px] block mb-1">Bahasa Inggris:</label>
                <input
                  type="number"
                  min="60"
                  max="100"
                  value={raporScores.inggris}
                  onChange={(e) => setRaporScores({ ...raporScores, inggris: Number(e.target.value) })}
                  className="w-full p-2 bg-white border border-gray-200 rounded font-bold"
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-200 flex justify-between items-center text-xs">
              <span className="text-gray-600">Rata-Rata Gabungan 5 Mapel:</span>
              <span className="text-xl font-bold text-amber-700 font-editorial">{avgRapor} / 100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Formulir Registrasi Online Simulasi */}
      <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-6">
        <div className="border-b border-gray-100 pb-3">
          <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">
            FORMULIR PRA-PENDAFTARAN
          </span>
          <h2 className="font-editorial text-2xl font-bold text-[#0a1128]">
            Registrasi Akun Calon Peserta Didik Baru
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Isi data identitas dasar untuk memperoleh Nomor Pendaftaran Sementara dan jadwal verifikasi berkas.
          </p>
        </div>

        {submitSuccess ? (
          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 space-y-2 text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="font-editorial text-xl font-bold">Pendaftaran Berhasil Dikirim!</h3>
            <p className="text-xs text-emerald-800">
              Nomor Registrasi: <strong className="font-mono">GN-2026-{Math.floor(100000 + Math.random() * 900000)}</strong>
            </p>
            <p className="text-xs text-emerald-700 max-w-md mx-auto">
              Silakan unduh Bukti Pendaftaran dan hadir pada sesi tes diagnostik sesuai jadwal yang dikirim ke email calon siswa.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="mt-3 px-4 py-2 rounded bg-emerald-700 text-white text-xs font-bold"
            >
              Daftar Formulir Lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitApplication} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700 font-semibold block mb-1">Pilih Jalur Masuk:</label>
                <select
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                >
                  {PPDB_TRACKS.map((t) => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-gray-700 font-semibold block mb-1">Nama Lengkap Siswa:</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Bintang Pratama"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="text-gray-700 font-semibold block mb-1">Nomor Induk Siswa Nasional (NISN):</label>
                <input
                  type="text"
                  required
                  placeholder="10 digit nomor NISN resmi Kemdikbud"
                  value={applicantNisn}
                  onChange={(e) => setApplicantNisn(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="text-gray-700 font-semibold block mb-1">SMP / MTs Asal:</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: SMP Negeri 1 Jakarta"
                  value={applicantSchool}
                  onChange={(e) => setApplicantSchool(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0a1128] hover:bg-[#121c3d] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Kirim Berkas Pra-Pendaftaran</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
