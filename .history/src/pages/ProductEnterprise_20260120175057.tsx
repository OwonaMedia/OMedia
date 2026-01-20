import { useTranslation } from '../TranslationContext';

export default function ProductEnterprise() {
  const { t } = useTranslation();
  return (
    <div className="max-w-3xl mx-auto py-24 px-6">
      <h1 className="text-5xl font-light mb-8 text-[#D4AF37]">{t('product.enterprise.detail.title')}</h1>
      <div className="text-white/80 text-lg leading-relaxed space-y-6">
        <p>{t('product.enterprise.detail.target')}</p>
        <p>{t('product.enterprise.detail.features')}</p>
        <p>{t('product.enterprise.detail.benefits')}</p>
        <p>{t('product.enterprise.detail.tech')}</p>
        <p>{t('product.enterprise.detail.service')}</p>
        <p>{t('product.enterprise.detail.addons')}</p>
      </div>
    </div>
  );
}
