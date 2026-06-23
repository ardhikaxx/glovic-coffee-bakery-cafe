interface MenuCardProps {
  name: string;
  description: string;
  emoji: string;
}

export default function MenuCard({ name, description, emoji }: MenuCardProps) {
  return (
    <div className="group bg-wine-950/50 border border-wine-700 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-wine-400 hover:shadow-[0_0_30px_rgba(146,38,55,0.3)] hover:-translate-y-1 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <div className="text-6xl sm:text-5xl shrink-0 group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </div>
      <div>
        <h3 className="text-2xl font-playfair font-bold text-gold-400 mb-2">
          {name}
        </h3>
        <p className="text-wine-300 font-jakarta leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
