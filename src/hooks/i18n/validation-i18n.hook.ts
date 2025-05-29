import i18n from '@/i18n';
import { useTranslation } from 'react-i18next';

export const useValidationTranslation = () => {
  const { t } = useTranslation('Validation');
  return t;
};

export const i18nValidation = (value: string, options?: any): string =>
  i18n.t('Validation:' + value, options) as string;
