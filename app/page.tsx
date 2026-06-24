'use client';

import { useState } from 'react';
import { GLOVIC_INFO } from '@/lib/constants/glovic';
import Image from 'next/image';
import OpenBadge from '@/components/ui/OpenBadge';
import { MapPin, Phone, Coffee, Share2, ClipboardList } from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function LinkTreePage() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationData, setReservationData] = useState({ name: '', date: '', time: '', pax: '2' });
  const handleLogoClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#A83044', '#C9A84C', '#FFFDF9']
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: 'GloVic — Coffee · Bakery · Cafe',
      text: 'Tempat nongkrong favorit di Jember! Cek lokasi dan kontak GloVic di sini:',
      url: 'https://glovic-cafe.vercel.app',
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert('Tautan disalin ke papan klip! Silakan bagikan ke teman Anda.');
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo GloVic, saya ingin melakukan reservasi meja:%0A%0ANama: ${reservationData.name}%0ATanggal: ${reservationData.date}%0AJam: ${reservationData.time}%0AJumlah Orang: ${reservationData.pax} Pax%0A%0AMohon konfirmasinya. Terima kasih!`;
    window.open(`https://wa.me/628113558693?text=${text}`, '_blank');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 300, damping: 24 } 
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wine-950 via-wine-900 to-wine-950 flex flex-col items-center py-16 px-4 font-jakarta text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-wine-500 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-wine-600 blur-[100px]"></div>
      </div>

      <motion.div 
        className="w-full max-w-md z-10 flex flex-col items-center relative"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Share Button */}
        <motion.button
          variants={itemVariants}
          onClick={handleShare}
          className="absolute top-0 right-2 sm:right-0 p-3 bg-wine-900/60 backdrop-blur-md rounded-full border border-wine-700/50 hover:bg-wine-800 transition-colors z-20 text-wine-300 hover:text-white shadow-[0_0_15px_rgba(0,0,0,0.2)]"
          aria-label="Bagikan Profil"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Bagikan ke teman"
        >
          <Share2 className="w-5 h-5" />
        </motion.button>

        {/* Profile Section */}
        <motion.div 
          variants={itemVariants} 
          className="w-32 h-32 relative rounded-full border-4 border-wine-400 shadow-[0_0_30px_rgba(196,89,107,0.3)] mb-6 overflow-hidden bg-wine-900 cursor-pointer"
          onClick={handleLogoClick}
          whileTap={{ scale: 0.9 }}
          title="Klik untuk kejutan!"
        >
          <Image
            src="/logo.webp"
            alt="GloVic Logo"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="font-playfair text-4xl font-bold tracking-wider mb-2 text-center text-white">
          {GLOVIC_INFO.name}
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-wine-300 tracking-[0.2em] uppercase text-sm font-semibold mb-6 text-center">
          {GLOVIC_INFO.tagline}
        </motion.p>

        {/* Status & Trust Badge */}
        <motion.div variants={itemVariants} className="mb-10 flex flex-col items-center space-y-4">
          <OpenBadge />
          
          <div className="flex flex-col items-center bg-wine-900/40 border border-wine-800/60 px-5 py-3 rounded-2xl backdrop-blur-sm shadow-inner cursor-pointer hover:bg-wine-800/60 transition-colors" title="Lihat Ulasan di Google Maps">
            <div className="flex space-x-1 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold-400 fill-gold-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} stroke="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-jakarta text-wine-300 font-medium tracking-wide text-center">
              <span className="font-bold text-white">4.8/5</span> dari Ratusan Ulasan Google
            </span>
          </div>
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-4">
          {/* Reservasi Button */}
          <motion.div variants={itemVariants} className="w-full">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsReservationOpen(!isReservationOpen)}
              className="w-full flex items-center p-4 bg-gold-600/90 hover:bg-gold-500 rounded-2xl transition-colors border border-gold-500 shadow-lg shadow-gold-900/50 group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4 flex-1 text-left">
                <h2 className="font-bold text-lg text-white">Reservasi Tempat</h2>
                <p className="text-sm text-gold-100 font-medium tracking-wide">Pesan meja tanpa antre</p>
              </div>
            </motion.button>

            <AnimatePresence>
              {isReservationOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <form onSubmit={handleReservationSubmit} className="bg-wine-900/80 p-5 rounded-2xl border border-wine-700 shadow-inner flex flex-col space-y-3">
                    <input required type="text" placeholder="Nama Lengkap" className="w-full p-3 rounded-xl bg-wine-950/50 border border-wine-700 text-white placeholder-wine-400 focus:outline-none focus:border-gold-500" value={reservationData.name} onChange={(e) => setReservationData({...reservationData, name: e.target.value})} />
                    <div className="flex space-x-3">
                      <input required type="date" className="w-1/2 p-3 rounded-xl bg-wine-950/50 border border-wine-700 text-white placeholder-wine-400 focus:outline-none focus:border-gold-500 [color-scheme:dark]" value={reservationData.date} onChange={(e) => setReservationData({...reservationData, date: e.target.value})} />
                      <input required type="time" className="w-1/2 p-3 rounded-xl bg-wine-950/50 border border-wine-700 text-white placeholder-wine-400 focus:outline-none focus:border-gold-500 [color-scheme:dark]" value={reservationData.time} onChange={(e) => setReservationData({...reservationData, time: e.target.value})} />
                    </div>
                    <input required type="number" min="1" placeholder="Jumlah Orang (Pax)" className="w-full p-3 rounded-xl bg-wine-950/50 border border-wine-700 text-white placeholder-wine-400 focus:outline-none focus:border-gold-500" value={reservationData.pax} onChange={(e) => setReservationData({...reservationData, pax: e.target.value})} />
                    <button type="submit" className="w-full mt-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors shadow-lg">Kirim via WhatsApp</button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={GLOVIC_INFO.contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-green-600/90 hover:bg-green-500 rounded-2xl transition-colors border border-green-500 shadow-lg shadow-green-900/50 group"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4 flex-1">
              <h2 className="font-bold text-lg">Pesan via WhatsApp</h2>
              <p className="text-sm text-green-100 font-mono">0811-3558693</p>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={GLOVIC_INFO.contact.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-wine-800/80 hover:bg-wine-700 rounded-2xl transition-colors border border-wine-600 shadow-lg group"
          >
            <div className="w-12 h-12 bg-wine-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-wine-500 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <h2 className="font-bold text-lg">Follow Instagram</h2>
              <p className="text-sm text-wine-200">@glovicbakery</p>
            </div>
          </motion.a>

          <motion.div variants={itemVariants} className="pt-6 pb-2 flex items-center justify-center">
            <div className="h-px bg-wine-800 flex-1"></div>
            <span className="px-4 text-wine-400 font-playfair italic text-lg">Lokasi Kami</span>
            <div className="h-px bg-wine-800 flex-1"></div>
          </motion.div>

          {GLOVIC_INFO.branches.map((branch) => (
            <motion.a
              key={branch.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={branch.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-wine-900/80 hover:bg-wine-800 rounded-2xl transition-colors border border-wine-700 shadow-lg group"
            >
              <div className="w-12 h-12 bg-wine-700 rounded-full flex items-center justify-center shrink-0 group-hover:bg-wine-600 transition-colors">
                <MapPin className="w-6 h-6 text-wine-100" />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="font-bold text-lg text-gold-400">{branch.name}</h2>
                <p className="text-xs text-wine-300 line-clamp-1 mt-0.5">{branch.address}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Peta Lokasi Langsung */}
        <motion.div variants={itemVariants} className="w-full mt-8 rounded-2xl overflow-hidden border-2 border-wine-800/60 shadow-lg shadow-black/20 bg-wine-900/50 p-1">
          <p className="text-center text-xs text-wine-300 mb-2 mt-1 font-medium tracking-widest uppercase">📍 Petunjuk Arah (Google Maps)</p>
          <div className="rounded-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15797.257679198088!2d113.7030466!3d-8.1710447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6943abd3adb07%3A0x35e4b99c811c9bcb!2sGloVic%20coffee%20-%20bakery%20-%20cafe!5e0!3m2!1sid!2sid!4v1782257649559!5m2!1sid!2sid" 
              width="100%" 
              height="200" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <Coffee className="w-6 h-6 text-wine-600 mx-auto mb-4" />
          <p className="text-wine-400 text-sm font-medium">
            Setiap Hari • 06.00 – 22.00 WIB
          </p>
          <p className="text-wine-600 text-xs mt-4">
            &copy; {new Date().getFullYear()} GloVic Jember
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
