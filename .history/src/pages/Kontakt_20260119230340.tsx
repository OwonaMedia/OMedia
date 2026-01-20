import { useTranslation } from '../TranslationContext';

export default function Kontakt() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white py-16">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
          <h1 className="text-4xl font-light text-black mb-4">{t('contact.label')}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('contact.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Kontaktformular Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow col-span-2">
            <h2 className="text-xl font-semibold mb-4">{t('contact.label')}</h2>
            <form className="space-y-4 w-full max-w-sm mx-auto">
              <input type="text" required placeholder={t('contact.form.name')} className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg" />
              <input type="email" required placeholder={t('contact.form.email') || 'Email'} className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg" />
              <textarea rows={4} required placeholder={t('contact.form.details')} className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg resize-none"></textarea>
              <button type="submit" className="w-full bg-black text-white py-4 rounded-lg uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-white transition-all">{t('contact.send')}</button>
            </form>
          </div>
          {/* Kontaktinfos Kachel */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Info</h2>
            <div className="text-gray-400 mb-2">{t('contact.address')}</div>
            <div className="text-gray-400 mb-2">E-Mail: <a href="mailto:salomon@owona.de" className="text-[#D4AF37] hover:underline">salomon@owona.de</a></div>
            <div className="text-gray-400 mb-2">Telefon: <a href="tel:+4917680808080" className="text-[#D4AF37] hover:underline">+49 176 80808080</a></div>
            <div className="text-gray-400 mt-4 text-xs">Mo-Fr 9-18 Uhr</div>
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-8 max-w-2xl mx-auto">
          <b>Hinweis:</b> Ihre Daten werden vertraulich behandelt und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Es gelten unsere Datenschutzbestimmungen.
        </div>
      </div>
    </div>
  );
}
