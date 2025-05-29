import { Drawer, Modal } from 'antd';
import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

export interface ICustomDrawerProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  footer?: ReactNode;
  desktopBreakpoint?: number;
  open?: boolean;
  onClose?: () => void;
}
export default function CustomDrawer(props: ICustomDrawerProps) {
  const {
    children,
    title,
    footer,
    desktopBreakpoint = 768,
    open,
    onClose,
  } = props;
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${desktopBreakpoint}px)`,
  });

  if (isDesktopOrLaptop) {
    return (
      <Modal
        centered
        className="sm:max-w-[425px]"
        title={<Title title={title} />}
        open={open}
        onCancel={onClose}
        footer={footer}
        animation={false}
      >
        {children}
      </Modal>
    );
  }

  return (
    <>
      <Drawer
        placement="bottom"
        styles={{
          wrapper: {
            height: '100%',
          },
        }}
        title={<Title title={title} />}
        open={open}
        onClose={onClose}
        footer={footer}
      >
        {children}
      </Drawer>
    </>
  );
}

const Title = ({ title }: { title?: string }) => (
  <span className="text-primary">{title}</span>
);
