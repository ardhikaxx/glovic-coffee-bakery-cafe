// lib/utils/isOpen.ts
// Jam buka GloVic: Everyday 06:00 – 22:00 WIB (UTC+7)

export function isGlovicOpen(): boolean {
  const now = new Date();
  // Konversi ke WIB (UTC+7)
  const wibOffset = 7 * 60;
  const localOffset = now.getTimezoneOffset();
  const wibTime = new Date(now.getTime() + (wibOffset + localOffset) * 60000);

  const hours = wibTime.getHours();
  const minutes = wibTime.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  const openMinutes = 6 * 60;   // 06:00
  const closeMinutes = 22 * 60; // 22:00

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

export function getStatusLabel(): { open: boolean; label: string; sublabel: string } {
  const open = isGlovicOpen();
  return {
    open,
    label: open ? 'Sedang Buka' : 'Sedang Tutup',
    sublabel: open
      ? 'Tutup pukul 22.00 WIB'
      : 'Buka kembali pukul 06.00 WIB',
  };
}
