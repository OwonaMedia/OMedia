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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="text-xs font-bold tracking-widest text-[#D4AF37] mb-2">{t('product.starter.badge')}</div>
            <h2 className="text-2xl font-semibold mb-2">{t('product.starter.title')}</h2>
            <div className="text-gray-400 mb-4">{t('product.starter.subtitle')}</div>
            <div className="text-3xl font-bold text-black mb-2">{t('product.starter.price')}</div>
            <div className="text-xs text-gray-400 mb-4">{t('price.fixed')}</div>
            <ul className="text-left text-sm text-gray-600 mb-6 space-y-1">
              <li>✓ Responsive Website (bis 5 Seiten)</li>
              <li>✓ SEO-Basics & Datenschutz</li>
              <li>✓ Kontaktformular & Analytics</li>
              <li>✓ 1 Jahr Hosting inklusive</li>
            </ul>
            <button className="mt-auto px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold hover:bg-[#bfa13a] transition">{t('cta.details')}</button>
          </div>
          {/* Pro Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="text-xs font-bold tracking-widest text-[#D4AF37] mb-2">{t('product.pro.badge')}</div>
            <h2 className="text-2xl font-semibold mb-2">{t('product.pro.title')}</h2>
            <div className="text-gray-400 mb-4">{t('product.pro.subtitle')}</div>
            <div className="text-3xl font-bold text-black mb-2">{t('product.pro.price')}</div>
            <div className="text-xs text-gray-400 mb-4">{t('price.fixed')}</div>
            <ul className="text-left text-sm text-gray-600 mb-6 space-y-1">
              <li>✓ Individuelles Design & Animationen</li>
              <li>✓ Automatisierte Workflows</li>
              <li>✓ Blog, Portfolio, Mehrsprachigkeit</li>
              <li>✓ Performance-Optimierung</li>
            </ul>
            <button className="mt-auto px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold hover:bg-[#bfa13a] transition">{t('cta.details')}</button>
          </div>
          {/* Enterprise Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="text-xs font-bold tracking-widest text-[#D4AF37] mb-2">{t('product.enterprise.badge')}</div>
            <h2 className="text-2xl font-semibold mb-2">{t('product.enterprise.title')}</h2>
            <div className="text-gray-400 mb-4">{t('product.enterprise.subtitle')}</div>
            <div className="text-3xl font-bold text-black mb-2">{t('product.enterprise.price')}</div>
            <div className="text-xs text-gray-400 mb-4">{t('price.fixed')}</div>
            <ul className="text-left text-sm text-gray-600 mb-6 space-y-1">
              <li>✓ Individuelle Web-Apps & Schnittstellen</li>
              <li>✓ API-Integration & Automatisierung</li>
              <li>✓ Skalierbare Cloud-Infrastruktur</li>
              <li>✓ Persönlicher Projektmanager</li>
            </ul>
            <button className="mt-auto px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold hover:bg-[#bfa13a] transition">{t('cta.details')}</button>
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-12 max-w-2xl mx-auto">
          <b>Hinweis:</b> Alle Angebote sind rechtlich geprüft, DSGVO-konform und können individuell angepasst werden. Für ein persönliches Angebot kontaktieren Sie uns bitte direkt.
        </div>
      </div>
    </div>
  );
}
