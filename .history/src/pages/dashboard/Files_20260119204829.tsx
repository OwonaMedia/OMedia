import { useTranslation } from '../../TranslationContext';

export default function Files() {
  const { t } = useTranslation();
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t('dash.files')}</h2>
      <p className="text-gray-500">{t('dashboard.files.desc') || 'Ihre Dateien und Uploads.'}</p>
    </div>
  );
}
