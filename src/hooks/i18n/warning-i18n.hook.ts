import { useTranslation } from 'react-i18next';
export const useWarningTranslation = () => {
  const { t } = useTranslation('Warning');
  return t;
};
