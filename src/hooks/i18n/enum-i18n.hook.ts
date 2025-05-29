import i18n from '@/i18n';
import { useTranslation } from 'react-i18next';

export const useEnumTranslation = () => {
  const { t } = useTranslation('Enum');
  return t;
};

export const i18nEnum = (value: string, options?: any): string =>
  i18n.t('Enum:' + value, options) as string;
