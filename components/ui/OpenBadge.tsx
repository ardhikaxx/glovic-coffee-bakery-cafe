'use client';

import { useEffect, useState } from 'react';
import { getStatusLabel } from '@/lib/utils/isOpen';

export default function OpenBadge() {
  const [status, setStatus] = useState({ open: true, label: 'Memuat...', sublabel: '' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setStatus(getStatusLabel());
    setMounted(true);

    const interval = setInterval(() => {
      setStatus(getStatusLabel());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex flex-col items-center justify-center opacity-0">
        <div className="flex items-center space-x-2 px-4 py-2 rounded-full border border-transparent">
          <span className="text-sm font-jakarta font-semibold">Memuat...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col items-center justify-center">
      <div
        className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${
          status.open
            ? 'bg-green-900/30 border-green-500'
            : 'bg-wine-900/50 border-wine-400'
        }`}
      >
        <span className="relative flex h-3 w-3">
          {status.open && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          )}
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${
              status.open ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></span>
        </span>
        <span className="text-sm md:text-base font-jakarta font-semibold text-white">
          {status.label}
          <span className="mx-2 text-wine-300/50">•</span>
          <span className="font-mono text-wine-100 font-normal">{status.sublabel}</span>
        </span>
      </div>
    </div>
  );
}
