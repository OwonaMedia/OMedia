import { useTranslation } from '../TranslationContext';

export default function Ueber() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white py-16">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
          <h1 className="text-4xl font-light text-black mb-4">{t('about.title')}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('about.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gründer Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
              <span className="text-4xl">👨🏾‍💻</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{t('about.title')}</h2>
            <div className="text-gray-400 mb-4">Digital Architect & Founder</div>
            <ul className="text-left text-sm text-gray-600 mb-6 space-y-1">
              <li>✓ {t('about.years')} 5+</li>
              <li>✓ {t('about.projects')} 50+</li>
              <li>✓ Automatisierung & Performance</li>
              <li>✓ Exklusives Design</li>
            </ul>
          </div>
          {/* Mission Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
              <span className="text-4xl">🚀</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Mission</h2>
            <div className="text-gray-400 mb-4">{t('about.more')}</div>
            <ul className="text-left text-sm text-gray-600 mb-6 space-y-1">
              <li>✓ Individuelle Lösungen</li>
              <li>✓ Fokus auf Wachstum</li>
              <li>✓ Digitale Exzellenz</li>
              <li>✓ Persönliche Beratung</li>
            </ul>
          </div>
          {/* Werte Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
              <span className="text-4xl">🌱</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Werte</h2>
            <div className="text-gray-400 mb-4">Transparenz, Innovation, Nachhaltigkeit</div>
            <ul className="text-left text-sm text-gray-600 mb-6 space-y-1">
              <li>✓ DSGVO-konform & rechtssicher</li>
              <li>✓ Nachhaltige Entwicklung</li>
              <li>✓ Partnerschaft auf Augenhöhe</li>
              <li>✓ Verantwortung & Ethik</li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-12 max-w-2xl mx-auto">
          <b>Hinweis:</b> Owona Media steht für Qualität, Innovation und persönliche Betreuung. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
        </div>
      </div>
    </div>
  );
}
