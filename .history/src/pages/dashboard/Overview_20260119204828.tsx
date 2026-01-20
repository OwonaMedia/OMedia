import { useTranslation } from '../../TranslationContext';

export default function Overview() {
  const { t } = useTranslation();
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t('dash.welcome')}</h2>
      <p className="text-gray-500">{t('dashboard.overview.desc') || 'Dashboard Übersicht.'}</p>
    </div>
  );
}
