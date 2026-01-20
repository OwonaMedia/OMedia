import { useTranslation } from '../../TranslationContext';

export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t('dash.projects')}</h2>
      <p className="text-gray-500">{t('dashboard.projects.desc') || 'Hier sehen Sie Ihre Projekte.'}</p>
    </div>
  );
}
