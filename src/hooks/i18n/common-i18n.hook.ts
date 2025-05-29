import i18n from '@/i18n';
import { useTranslation } from 'react-i18next';
export const useCommonTranslation = () => {
  const { t } = useTranslation('Common');
  return t;
};

export const i18nCommon = (value: string) => i18n.t('Common:' + value);
