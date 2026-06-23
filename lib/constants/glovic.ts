// lib/constants/glovic.ts

export const GLOVIC_INFO = {
  name: 'GloVic',
  tagline: 'coffee · bakery · cafe',
  description:
    'Tempat nongkrong favorit di Jember. Nikmati kopi spesial, bakery segar, dan kudapan lezat dalam suasana yang cozy dan instagramable.',

  contact: {
    whatsapp: {
      number: '0811-3558693',
      href: 'https://wa.me/628113558693',
      label: 'Chat WhatsApp (message only)',
    },
    instagram: {
      username: '@glovicbakery',
      href: 'https://www.instagram.com/glovicbakery',
    },
  },

  hours: {
    label: 'Everyday',
    open: '06:00',
    close: '22:00',
    display: 'Setiap Hari 06.00 – 22.00 WIB',
  },

  branches: [
    {
      id: 'gatsu',
      name: 'GloVic Gatsu',
      address: 'Jl. Gatot Subroto No. 33B, Kepatihan, Kaliwates, Jember 68131',
      phone: '0331-5105555',
      phoneHref: 'tel:+623315105555',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15797.257679198088!2d113.7030466!3d-8.1710447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6943abd3adb07%3A0x35e4b99c811c9bcb!2sGloVic%20coffee%20-%20bakery%20-%20cafe!5e0!3m2!1sid!2sid!4v1782257649559!5m2!1sid!2sid',
      mapLink: 'https://maps.google.com/?q=Glovic+Bakery+Gatot+Subroto+Jember',
    },
    {
      id: 'ayani',
      name: 'GloVic A. Yani',
      address: 'Jl. A. Yani Kav. 6–8, Kepatihan, Kaliwates, Jember 68137',
      phone: '0331-411445',
      phoneHref: 'tel:+62331411445',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15797.257679198088!2d113.7030466!3d-8.1710447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6943abd3adb07%3A0x35e4b99c811c9bcb!2sGloVic%20coffee%20-%20bakery%20-%20cafe!5e0!3m2!1sid!2sid!4v1782257649559!5m2!1sid!2sid',
      mapLink: 'https://maps.google.com/?q=GloVic+A+Yani+Jember',
    },
  ],

  menuHighlights: [
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      description: 'Espresso dengan busa susu lembut, kaya rasa dan aroma.',
      emoji: '☕',
    },
    {
      id: 'red-velvet',
      name: 'Red Velvet Crumble',
      description: 'Kue lembut dengan lapisan cream cheese yang creamy.',
      emoji: '🍰',
    },
    {
      id: 'croquette',
      name: 'Kroket',
      description: 'Gorengan renyah dengan isian gurih — menu signature favorit.',
      emoji: '🥐',
    },
    {
      id: 'waffle',
      name: 'Cappuccino & Waffle',
      description: 'Kombinasi sempurna untuk sarapan atau sore hari.',
      emoji: '🧇',
    },
  ],
} as const;
