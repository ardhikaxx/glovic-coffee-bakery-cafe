'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-wine-900/95 backdrop-blur-sm shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a
            href="#"
            className={`font-playfair font-bold text-3xl tracking-wide transition-colors ${
              isScrolled ? 'text-gold-400' : 'text-white'
            }`}
          >
            GloVic
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-jakarta hover:text-gold-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontak"
              className="bg-wine-600 hover:bg-wine-500 text-white px-6 py-2 rounded-full font-jakarta font-semibold transition-colors"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-wine-950/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 bottom-0 w-64 bg-wine-900 shadow-2xl p-6 transition-transform duration-300 transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-wine-300"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl text-white font-playfair hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-wine-800">
              <a
                href="#kontak"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block w-full text-center bg-wine-600 hover:bg-wine-500 text-white px-6 py-3 rounded-xl font-jakarta font-semibold transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
