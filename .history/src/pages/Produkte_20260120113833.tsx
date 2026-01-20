import { useTranslation } from '../TranslationContext';

export default function Produkte() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white py-16">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
          <h1 className="text-4xl font-light text-black mb-4">{t('products.title')}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('products.desc')}</p>
        </div>
        {/* TODO: Expertenwissen recherchieren und ausführliche Kacheltexte mit t('product.starter.text'), t('product.pro.text'), t('product.enterprise.text') einfügen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">{t('product.starter.title')}</h2>
            <div className="text-gray-400 mb-4">{t('product.starter.text')}</div>
          </div>
          {/* Pro Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">{t('product.pro.title')}</h2>
            <div className="text-gray-400 mb-4">{t('product.pro.text')}</div>
          </div>
          {/* Enterprise Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">{t('product.enterprise.title')}</h2>
            <div className="text-gray-400 mb-4">{t('product.enterprise.text')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
