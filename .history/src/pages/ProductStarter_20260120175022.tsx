import { useTranslation } from '../TranslationContext';

export default function ProductStarter() {
  const { t } = useTranslation();
  return (
    <div className="max-w-3xl mx-auto py-24 px-6">
      <h1 className="text-5xl font-light mb-8 text-[#D4AF37]">{t('product.starter.detail.title')}</h1>
      <div className="text-white/80 text-lg leading-relaxed space-y-6">
        <p>{t('product.starter.detail.target')}</p>
        <p>{t('product.starter.detail.features')}</p>
        <p>{t('product.starter.detail.benefits')}</p>
        <p>{t('product.starter.detail.tech')}</p>
        <p>{t('product.starter.detail.service')}</p>
        <p>{t('product.starter.detail.addons')}</p>
      </div>
    </div>
  );
}
