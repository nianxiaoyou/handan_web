import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

import theme from './theme';
import client from '@/gql/apollo';
import ErrorBoundary from './error-boundary';
import Layout from './layout';
import { MessageProvider } from './message-context';

const Providers = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const noAuthRoutes = ['/', '/login'];

  console.log('router.pathname', router.pathname);

  if (noAuthRoutes.includes(router.pathname)) {
    return (
      <ErrorBoundary>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <ConfigProvider theme={theme}>
        <ApolloProvider client={client}>
          <MessageProvider>
            <Layout>{children}</Layout>
          </MessageProvider>
        </ApolloProvider>
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export default Providers;
