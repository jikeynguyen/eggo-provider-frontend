import { useDisclosure } from '@/hooks';
import { ReactNode } from 'react';
import CustomDrawer, { ICustomDrawerProps } from './custom-drawer';

interface ITriggerDrawerProps extends ICustomDrawerProps {
  trigger?: ReactNode;
}
export default function TriggerDrawer(props: ITriggerDrawerProps) {
  const { trigger, children, ...rest } = props;

  const disclosure = useDisclosure();

  return (
    <>
      <div onClick={disclosure.open}>{trigger}</div>
      <CustomDrawer
        {...rest}
        open={disclosure.isOpen}
        onClose={disclosure.close}
      >
        {children}
      </CustomDrawer>
    </>
  );
}
