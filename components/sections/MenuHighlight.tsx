import SectionTitle from '@/components/ui/SectionTitle';
import MenuCard from '@/components/ui/MenuCard';
import { GLOVIC_INFO } from '@/lib/constants/glovic';

export default function MenuHighlight() {
  return (
    <section id="menu" className="py-24 bg-wine-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle
          title="Menu Andalan"
          subtitle="Pilihan yang paling sering dipesan pelanggan setia GloVic"
          theme="dark"
          centered
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {GLOVIC_INFO.menuHighlights.map((menu) => (
            <MenuCard
              key={menu.id}
              name={menu.name}
              description={menu.description}
              emoji={menu.emoji}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
