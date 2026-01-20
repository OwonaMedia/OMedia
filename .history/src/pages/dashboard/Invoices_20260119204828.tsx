import { useTranslation } from '../../TranslationContext';

export default function Invoices() {
  const { t } = useTranslation();
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t('dash.invoices')}</h2>
      <p className="text-gray-500">{t('dashboard.invoices.desc') || 'Ihre Rechnungen und Zahlungen.'}</p>
    </div>
  );
}
