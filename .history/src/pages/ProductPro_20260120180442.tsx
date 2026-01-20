
import { useTranslation } from '../TranslationContext';

export default function ProductPro() {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 bg-white rounded-3xl shadow-xl border border-[#D4AF37]/20">
      <h1 className="text-5xl font-light mb-4 text-[#D4AF37] text-center tracking-tight drop-shadow-lg">{t('product.pro.detail.title')}</h1>
      <div className="flex justify-center mb-8">
        <div className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
      </div>
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFF8E1] border-l-4 border-[#D4AF37] p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2">Zielgruppe</h2>
            <p className="text-gray-900 text-base">{t('product.pro.detail.target')}</p>
          </div>
          <div className="bg-[#F5F5F5] border-l-4 border-[#D4AF37] p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2">Features</h2>
            <p className="text-gray-900 text-base">{t('product.pro.detail.features')}</p>
          </div>
          <div className="bg-[#F5F5F5] border-l-4 border-[#D4AF37] p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2">Vorteile</h2>
            <p className="text-gray-900 text-base">{t('product.pro.detail.benefits')}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-[#F5F5F5] border-l-4 border-[#D4AF37] p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2">Technik</h2>
            <p className="text-gray-900 text-base">{t('product.pro.detail.tech')}</p>
          </div>
          <div className="bg-[#F5F5F5] border-l-4 border-[#D4AF37] p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2">Service</h2>
            <p className="text-gray-900 text-base">{t('product.pro.detail.service')}</p>
          </div>
          <div className="bg-[#F5F5F5] border-l-4 border-[#D4AF37] p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2">Add-ons</h2>
            <p className="text-gray-900 text-base">{t('product.pro.detail.addons')}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 mt-8">
        <a href="/kontakt" className="px-8 py-3 rounded-full bg-[#D4AF37] text-white font-semibold uppercase tracking-widest text-lg shadow-lg hover:bg-black hover:text-[#D4AF37] border border-[#D4AF37] transition">Jetzt beraten lassen</a>
        <div className="flex gap-4 mt-2">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center border-2 border-[#D4AF37]">
            <svg width="24" height="24" fill="none" stroke="#D4AF37" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center border-2 border-[#D4AF37]">
            <svg width="24" height="24" fill="none" stroke="#D4AF37" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center border-2 border-[#D4AF37]">
            <svg width="24" height="24" fill="none" stroke="#D4AF37" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <div className="h-1 w-48 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
}
