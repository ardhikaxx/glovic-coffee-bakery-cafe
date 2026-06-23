interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: 'light' | 'dark';
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  theme = 'light',
}: SectionTitleProps) {
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : ''}`}>
      <h2
        className={`text-4xl md:text-5xl font-playfair font-bold mb-4 ${
          isDark ? 'text-cream-50' : 'text-wine-950'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg font-jakarta ${
            isDark ? 'text-wine-300' : 'text-text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-24 mt-6 rounded-full ${centered ? 'mx-auto' : ''} ${
          isDark ? 'bg-wine-600' : 'bg-wine-600'
        }`}
      />
    </div>
  );
}
