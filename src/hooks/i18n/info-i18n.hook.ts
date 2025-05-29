import { useTranslation } from 'react-i18next';
export const useInfoTranslation = () => {
  const { t } = useTranslation('Info');
  return t;
};
