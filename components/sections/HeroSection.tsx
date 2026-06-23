import OpenBadge from '@/components/ui/OpenBadge';
import { GLOVIC_INFO } from '@/lib/constants/glovic';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-wine-950/20"
        style={{
          // We will use a placeholder or solid background if image is not ready yet
          // background: 'url(/images/hero/hero-bg.jpg) center/cover no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-wine-950/80 via-wine-900/60 to-wine-950/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
        {/* Eyebrow */}
        <p className="font-jakarta text-wine-300 tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-6">
          {GLOVIC_INFO.tagline}
        </p>

        {/* Headline */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="hidden md:block w-16 h-px bg-wine-600"></div>
          <h1 className="font-playfair font-black text-6xl md:text-7xl lg:text-8xl text-white tracking-[0.1em] drop-shadow-xl">
            {GLOVIC_INFO.name}
          </h1>
          <div className="hidden md:block w-16 h-px bg-wine-600"></div>
        </div>

        {/* Subheadline */}
        <p className="font-jakarta text-lg md:text-xl text-wine-100 max-w-2xl mb-12 drop-shadow-md">
          {GLOVIC_INFO.description}
        </p>

        {/* Status Badge */}
        <div className="mb-12">
          <OpenBadge />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={GLOVIC_INFO.contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-wine-600 hover:bg-wine-500 text-white px-8 py-4 rounded-xl font-jakarta font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-wine-900/50 flex items-center justify-center space-x-2"
          >
            <span>Hubungi Kami via WhatsApp</span>
          </a>
          <a
            href="#lokasi"
            className="w-full sm:w-auto bg-transparent border-2 border-wine-400 hover:bg-wine-800 text-white px-8 py-4 rounded-xl font-jakarta font-bold text-lg transition-all duration-300 flex items-center justify-center"
          >
            Lihat Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}
