import { useTranslation } from '../TranslationContext';

export default function Abo() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white py-16">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
          <h1 className="text-4xl font-light text-black mb-4">{t('subs.title')}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('subs.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Abo Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="text-xs font-bold tracking-widest text-[#D4AF37] mb-2">BASIC</div>
            <h2 className="text-2xl font-semibold mb-2">{t('subs.basic.title')}</h2>
            <div className="text-gray-400 mb-4">{t('subs.basic.desc')}</div>
            <div className="text-3xl font-bold text-black mb-2">{t('subs.basic.price')}</div>
            <div className="text-xs text-gray-400 mb-4">{t('price.fixed')}</div>
            <ul className="text-left text-sm text-gray-600 mb-6 space-y-1">
              <li>✓ Updates & Backups</li>
              <li>✓ Security Monitoring</li>
              <li>✓ SSL & Datenschutz</li>
              <li>✓ Support per E-Mail</li>
            </ul>
            <button className="mt-auto px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold hover:bg-[#bfa13a] transition">{t('cta.details')}</button>
          </div>
          {/* Pro Abo Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="text-xs font-bold tracking-widest text-[#D4AF37] mb-2">PRO</div>
            <h2 className="text-2xl font-semibold mb-2">{t('subs.pro.title')}</h2>
            <div className="text-gray-400 mb-4">{t('subs.pro.desc')}</div>
            <div className="text-3xl font-bold text-black mb-2">{t('subs.pro.price')}</div>
            <div className="text-xs text-gray-400 mb-4">{t('price.fixed')}</div>
            <ul className="text-left text-sm text-gray-600 mb-6 space-y-1">
              <li>✓ Alles aus BASIC</li>
              <li>✓ Performance-Optimierung</li>
              <li>✓ Content-Updates (1x/Monat)</li>
              <li>✓ Telefonischer Support</li>
            </ul>
            <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded mb-2">{t('most.popular')}</div>
            <button className="mt-auto px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold hover:bg-[#bfa13a] transition">{t('cta.details')}</button>
          </div>
          {/* Full Abo Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="text-xs font-bold tracking-widest text-[#D4AF37] mb-2">FULL</div>
            <h2 className="text-2xl font-semibold mb-2">{t('subs.full.title')}</h2>
            <div className="text-gray-400 mb-4">{t('subs.full.desc')}</div>
            <div className="text-3xl font-bold text-black mb-2">{t('subs.full.price')}</div>
            <div className="text-xs text-gray-400 mb-4">{t('price.fixed')}</div>
            <ul className="text-left text-sm text-gray-600 mb-6 space-y-1">
              <li>✓ Alles aus PRO</li>
              <li>✓ Persönlicher Ansprechpartner</li>
              <li>✓ Monatliche Beratung</li>
              <li>✓ Notfall-Support 24/7</li>
            </ul>
            <button className="mt-auto px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold hover:bg-[#bfa13a] transition">{t('cta.details')}</button>
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-12 max-w-2xl mx-auto">
          <b>Hinweis:</b> Alle Abos sind monatlich kündbar, rechtlich geprüft und DSGVO-konform. Für individuelle Anforderungen kontaktieren Sie uns bitte direkt.
        </div>
      </div>
    </div>
  );
}
