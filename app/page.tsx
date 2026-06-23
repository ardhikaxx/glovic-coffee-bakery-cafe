'use client';

import { GLOVIC_INFO } from '@/lib/constants/glovic';
import Image from 'next/image';
import OpenBadge from '@/components/ui/OpenBadge';
import { MapPin, Phone, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LinkTreePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
        className="w-full max-w-md z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Profile Section */}
        <motion.div variants={itemVariants} className="w-32 h-32 relative rounded-full border-4 border-wine-400 shadow-[0_0_30px_rgba(196,89,107,0.3)] mb-6 overflow-hidden bg-wine-900">
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

        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-10">
          <OpenBadge />
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-4">
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
