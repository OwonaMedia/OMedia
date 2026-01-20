import { useTranslation } from '../TranslationContext';
import { translations } from '../translations';

export default function Produkte() {
  const { t, lang } = useTranslation();
  const debug = true;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white py-16">
      {debug && (
        <div className="fixed top-4 right-4 bg-gray-100 border border-gray-300 rounded p-4 text-xs z-50 max-w-xs shadow-lg">
          <div className="font-bold mb-1">DEBUG</div>
          <div>Sprache: <b>{lang}</b></div>
          <div className="mt-2"><b>product.starter.text:</b><br/>{translations[lang]['product.starter.text']}</div>
          <div className="mt-2"><b>product.pro.text:</b><br/>{translations[lang]['product.pro.text']}</div>
          <div className="mt-2"><b>product.enterprise.text:</b><br/>{translations[lang]['product.enterprise.text']}</div>
        </div>
      )}
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-6">
          TEST: Diese Zeile ist ein statischer Test-Text direkt aus Produkte.tsx. Wenn du das siehst, funktioniert das React-Rendering!
        </div>
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
          <h1 className="text-4xl font-light text-black mb-4">{t('products.title')}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('products.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all group">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest mb-2">{t('product.starter.badge')}</span>
            <h2 className="text-2xl font-semibold mb-2 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('product.starter.title')}</h2>
            <div className="text-gray-500 mb-4 text-sm">{t('product.starter.text')}</div>
            <ul className="text-left text-xs text-gray-600 mb-6 space-y-1">
              <li>✓ {t('product.starter.feature1')}</li>
              <li>✓ {t('product.starter.feature2')}</li>
              <li>✓ {t('product.starter.feature3')}</li>
              <li>✓ {t('product.starter.feature4')}</li>
            </ul>
            <div className="mt-auto">
              <div className="price-tag mb-4 text-2xl font-light text-black">{t('product.starter.price')} <span className="text-xs opacity-40 ml-2">{t('price.fixed')}</span></div>
              <button className="px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold uppercase tracking-widest text-xs hover:bg-black hover:text-[#D4AF37] border border-[#D4AF37] transition">{t('cta.details')}</button>
            </div>
          </div>
          {/* Pro Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all group">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest mb-2">{t('product.pro.badge')}</span>
            <h2 className="text-2xl font-semibold mb-2 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('product.pro.title')}</h2>
            <div className="text-gray-500 mb-4 text-sm">{t('product.pro.text')}</div>
            <ul className="text-left text-xs text-gray-600 mb-6 space-y-1">
              <li>✓ {t('product.pro.feature1')}</li>
              <li>✓ {t('product.pro.feature2')}</li>
              <li>✓ {t('product.pro.feature3')}</li>
              <li>✓ {t('product.pro.feature4')}</li>
            </ul>
            <div className="mt-auto">
              <div className="price-tag mb-4 text-2xl font-light text-black">{t('product.pro.price')} <span className="text-xs opacity-40 ml-2">{t('price.fixed')}</span></div>
              <button className="px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold uppercase tracking-widest text-xs hover:bg-black hover:text-[#D4AF37] border border-[#D4AF37] transition">{t('cta.details')}</button>
            </div>
          </div>
          {/* Enterprise Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all group">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest mb-2">{t('product.enterprise.badge')}</span>
            <h2 className="text-2xl font-semibold mb-2 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('product.enterprise.title')}</h2>
            <div className="text-gray-500 mb-4 text-sm">{t('product.enterprise.text')}</div>
            <ul className="text-left text-xs text-gray-600 mb-6 space-y-1">
              <li>✓ {t('product.enterprise.feature1')}</li>
              <li>✓ {t('product.enterprise.feature2')}</li>
              <li>✓ {t('product.enterprise.feature3')}</li>
              <li>✓ {t('product.enterprise.feature4')}</li>
            </ul>
            <div className="mt-auto">
              <div className="price-tag mb-4 text-2xl font-light text-black">{t('product.enterprise.price')} <span className="text-xs opacity-40 ml-2">{t('price.fixed')}</span></div>
              <button className="px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold uppercase tracking-widest text-xs hover:bg-black hover:text-[#D4AF37] border border-[#D4AF37] transition">{t('cta.details')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
