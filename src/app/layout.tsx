import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SMA Garuda Nusantara | Sekolah Unggulan Nasional & IB World School',
  description: 'Portal resmi SMA Garuda Nusantara - Lembaga pendidikan menengah atas prestisius terakreditasi A Unggul dengan Kurikulum Merdeka dan International Baccalaureate.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#1e293b] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
