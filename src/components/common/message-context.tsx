import { createContext, useContext } from 'react';
import { message } from 'antd';

const MessageContext = createContext<{
  messageApi: ReturnType<typeof message.useMessage>[0] | null;
  contextHolder: ReturnType<typeof message.useMessage>[1] | null;
}>({
  messageApi: null,
  contextHolder: null,
});

export const MessageProvider = ({ children }: any) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <MessageContext.Provider value={{ messageApi, contextHolder }}>
      {children}
      {contextHolder}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context.messageApi) {
    throw new Error('useMessageContext must be used within a MessageProvider');
  }
  return context;
};
