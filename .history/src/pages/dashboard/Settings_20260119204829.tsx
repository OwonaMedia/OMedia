import { useTranslation } from '../../TranslationContext';

export default function Settings() {
  const { t } = useTranslation();
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t('dash.settings')}</h2>
      <p className="text-gray-500">{t('dashboard.settings.desc') || 'Ihre Einstellungen und Profil.'}</p>
    </div>
  );
}
