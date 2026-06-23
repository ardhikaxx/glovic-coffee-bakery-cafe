import SectionTitle from '@/components/ui/SectionTitle';
import BranchCard from '@/components/ui/BranchCard';
import { GLOVIC_INFO } from '@/lib/constants/glovic';

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-24 bg-wine-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle
          title="Temukan Kami"
          subtitle="Kunjungi cabang terdekat dari lokasi Anda"
          theme="dark"
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-16">
          {GLOVIC_INFO.branches.map((branch, index) => (
            <BranchCard
              key={branch.id}
              id={branch.id}
              index={index}
              name={branch.name}
              address={branch.address}
              phone={branch.phone}
              phoneHref={branch.phoneHref}
              mapEmbed={branch.mapEmbed}
              mapLink={branch.mapLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
