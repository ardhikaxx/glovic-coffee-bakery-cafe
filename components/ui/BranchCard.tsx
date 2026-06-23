import { MapPin, Phone, Clock } from 'lucide-react';

interface BranchCardProps {
  id: string;
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  mapEmbed: string;
  mapLink: string;
  index: number;
}

export default function BranchCard({
  name,
  address,
  phone,
  phoneHref,
  mapEmbed,
  mapLink,
  index,
}: BranchCardProps) {
  return (
    <div className="bg-wine-900 rounded-2xl overflow-hidden border border-wine-800 shadow-xl flex flex-col h-full">
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-wine-600 flex items-center justify-center text-white font-playfair font-bold text-lg">
            {index + 1}
          </div>
          <h3 className="text-2xl font-playfair font-bold text-gold-400">
            {name}
          </h3>
        </div>

        <div className="space-y-4 mb-8 flex-1 text-wine-100 font-jakarta">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-wine-400 mt-1 flex-shrink-0" />
            <p className="leading-relaxed">{address}</p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-wine-400 flex-shrink-0" />
            <a
              href={phoneHref}
              className="font-mono text-lg hover:text-gold-400 transition-colors"
            >
              {phone}
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-wine-400 flex-shrink-0" />
            <p className="font-mono">Everyday 06.00–22.00 WIB</p>
          </div>
        </div>

        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 px-4 text-center rounded-xl bg-wine-800 hover:bg-wine-700 text-white font-semibold transition-colors border border-wine-700 mb-6"
        >
          Buka di Google Maps
        </a>
      </div>

      <div className="h-64 w-full bg-wine-950">
        <iframe
          src={mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'saturate(120%) hue-rotate(330deg)' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map to ${name}`}
        ></iframe>
      </div>
    </div>
  );
}
