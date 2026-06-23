import SectionTitle from '@/components/ui/SectionTitle';

export default function GallerySection() {
  // Placeholder array since we don't have real images yet
  const galleryItems = [
    { id: 1, span: 'md:col-span-2 md:row-span-2', aspect: 'aspect-square md:aspect-auto' },
    { id: 2, span: 'md:col-span-1 md:row-span-1', aspect: 'aspect-square' },
    { id: 3, span: 'md:col-span-1 md:row-span-1', aspect: 'aspect-square' },
    { id: 4, span: 'md:col-span-1 md:row-span-2', aspect: 'aspect-[3/4] md:aspect-auto' },
    { id: 5, span: 'md:col-span-2 md:row-span-1', aspect: 'aspect-video md:aspect-auto' },
  ];

  return (
    <section id="galeri" className="py-24 bg-cream-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle
          title="Suasana GloVic"
          subtitle="Mengabadikan momen terbaik di setiap sudut"
          theme="light"
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px] mt-16">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden bg-wine-800 flex items-center justify-center ${item.span}`}
            >
              <div className="text-wine-600 font-playfair text-2xl md:text-3xl opacity-50 z-10 transition-transform duration-500 group-hover:scale-110">
                GloVic
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-wine-900/0 group-hover:bg-wine-900/40 transition-colors duration-300 z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
