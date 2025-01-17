import React, { useState } from 'react';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { GithubFilled } from '@ant-design/icons';

// locale
import useAuthUserStore from '@/stores/persisted/useAuthUser';
import menuProps from './_menu';
import AvatarDropdown from './avatar-dropdown';

interface LayoutProps {
  children: ReactNode;
}

const GlobalLayout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [pathname, setPathname] = useState('/');

  const { currentUser, logout } = useAuthUserStore();

  return (
    <div
      id="layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={150}
        {...menuProps}
        title="Handan Web"
        token={{
          bgLayout: '#f7f8fa',
        }}
        location={{
          pathname: window?.location.pathname,
        }}
        avatarProps={{
          // src: currentUser?.avatar,
          title: currentUser?.email,
          render: (_, avatarChildren) => {
            return <AvatarDropdown signOut={logout}>{avatarChildren}</AvatarDropdown>;
          },
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          if (typeof window === 'undefined') return [];
          return [
            <GithubFilled key="GithubFilled" onClick={() => window.open('https://github.com/zven21/handan')} />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              // path name
              setPathname(item.path || '/');
              // router
              router.push(item.path || '/');
            }}
          >
            {dom}
          </div>
        )}
        layout="mix"
      >
        <PageContainer>{children}</PageContainer>
      </ProLayout>
    </div>
  );
};

export default GlobalLayout;
