import { useTranslation } from 'react-i18next';
export const useTooltipTranslation = () => {
  const { t } = useTranslation('Tooltip');
  return t;
};
