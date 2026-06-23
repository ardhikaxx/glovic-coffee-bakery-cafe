import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutSection() {
  return (
    <section id="tentang" className="py-24 bg-cream-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              title="Lebih dari Sekadar Kopi"
              subtitle="Tentang Kami"
              theme="light"
            />

            <div className="space-y-6 text-text-dark font-jakarta text-lg leading-relaxed mb-10">
              <p>
                Didirikan di Jember, GloVic hadir sebagai ruang untuk semua — mulai
                dari sarapan pagi dengan fresh bakery, sesi kerja siang hari dengan
                wifi kencang, hingga nongkrong sore dengan cappuccino favorit Anda.
              </p>
              <p>
                Kami percaya bahwa secangkir kopi terbaik adalah yang dinikmati
                dalam suasana yang hangat dan nyaman. Dengan dua lokasi strategis
                di Gatot Subroto dan Ahmad Yani, kami siap menyambut Anda setiap
                hari mulai pukul 6 pagi.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-wine-200">
              <div>
                <p className="font-playfair font-bold text-3xl text-wine-600 mb-1">
                  2
                </p>
                <p className="font-jakarta text-sm text-text-muted font-semibold">
                  Lokasi
                </p>
              </div>
              <div>
                <p className="font-playfair font-bold text-3xl text-wine-600 mb-1">
                  7
                </p>
                <p className="font-jakarta text-sm text-text-muted font-semibold">
                  Hari Buka
                </p>
              </div>
              <div>
                <p className="font-playfair font-bold text-3xl text-wine-600 mb-1">
                  16
                </p>
                <p className="font-jakarta text-sm text-text-muted font-semibold">
                  Jam Sehari
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-wine-800 shadow-2xl relative">
              <div className="absolute inset-0 flex items-center justify-center text-wine-600 font-playfair text-4xl opacity-50">
                GloVic
              </div>
              {/* Image will go here */}
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="font-playfair italic text-lg text-wine-900 leading-snug">
                "Tempat di mana setiap momen terasa spesial."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
