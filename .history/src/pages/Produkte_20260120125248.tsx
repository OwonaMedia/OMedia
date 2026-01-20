import { useTranslation } from '../TranslationContext';
import { translations } from '../translations';

  const { t, lang } = useTranslation();
  // Debug-Panel: zeigt aktuelle Sprache und Rohtexte
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
