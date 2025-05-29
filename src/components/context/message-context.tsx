import { useCommonTranslation } from '@/hooks';
import { message } from 'antd';
import { createContext } from 'react';

interface IFormMessageContext {
  success: (content?: string) => void;
  error: (content?: string) => void;
  warning: (content?: string) => void;
  info: (content?: string) => void;
  loading: (content?: string) => void;
}

export const FormMessageContext = createContext<IFormMessageContext>({
  success: () => {},
  error: () => {},
  warning: () => {},
  info: () => {},
  loading: () => {},
});

export const FormMessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const commonTrans = useCommonTranslation();
  const success = (content?: string) => {
    messageApi?.success(content || commonTrans('Success'));
  };

  const error = (content?: string) => {
    messageApi?.error(content || commonTrans('Error'));
  };

  const warning = (content?: string) => {
    messageApi?.warning(content || commonTrans('Warning'));
  };

  const info = (content?: string) => {
    messageApi?.info(content || commonTrans('Info'));
  };

  const loading = (content?: string) => {
    messageApi?.loading(content || commonTrans('Loading'));
  };

  return (
    <FormMessageContext.Provider
      value={{
        success,
        error,
        warning,
        info,
        loading,
      }}
    >
      {contextHolder}
      {children}
    </FormMessageContext.Provider>
  );
};
