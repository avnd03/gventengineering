import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/siteData';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 animate-[pulse-glow_2s_ease-in-out_infinite]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
