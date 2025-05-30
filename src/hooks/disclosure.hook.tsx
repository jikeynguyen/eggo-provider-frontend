import { useState } from 'react';

export interface IDisclosureControls<T = any> {
  isOpen: boolean;
  open: (data?: T) => void;
  close: () => void;
  data: T | null | undefined;
}

export function useDisclosure<T = any>(): IDisclosureControls<T> {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null | undefined>(undefined);

  const open = (data?: T) => {
    setIsOpen(true);
    if (data) {
      setData(data);
    }
  };
  const close = () => {
    setIsOpen(false);
    setData(undefined);
  };

  return {
    isOpen,
    open,
    close,
    data,
  };
}
