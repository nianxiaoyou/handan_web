import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import Loading from '@/components/shared/loading';

const Providers = dynamic(() => import('@/components/common/providers'), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </Suspense>
  );
};

export default App;
