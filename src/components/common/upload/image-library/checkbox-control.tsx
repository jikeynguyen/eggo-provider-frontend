import { useState } from 'react';

export interface ICheckboxControl {
  selectedValue: string;
  onChange: (value: string) => void;
}

export const useCheckboxControl = (): ICheckboxControl => {
  const [selectedValue, setSelectedValue] = useState('');

  const onChange = (value: string) => {
    if (selectedValue === value) {
      setSelectedValue('');
      return;
    }

    setSelectedValue(value);
  };
  return {
    selectedValue,
    onChange,
  };
};
