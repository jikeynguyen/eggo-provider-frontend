import { useTranslation } from 'react-i18next';
export const useErrorTranslation = () => {
  const { t } = useTranslation('Error');
  return t;
};
