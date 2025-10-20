import { PageContainer, ProLayout } from '@ant-design/pro-components';
import type { MenuDataItem } from '@ant-design/pro-components';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useState } from 'react';
import type { FC, ReactNode } from 'react';

import useAuthUserStore from '@/stores/persisted/useAuthUser';

import menuProps from './_menu';
import AvatarDropdown from './avatar-dropdown';
import GlobalFloatButtons from './global-float-buttons';
import HeaderActions from './header-actions';

interface LayoutProps {
  children: ReactNode;
}

interface LayoutConfig {
  extra?: ReactNode;
  title?: ReactNode;
}

interface LayoutContextValue {
  layoutConfig: LayoutConfig;
  setLayoutConfig: (config: LayoutConfig) => void;
}

const LayoutContext = createContext<LayoutContextValue>({
  layoutConfig: {},
  setLayoutConfig: () => {},
});

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({});

  return <LayoutContext.Provider value={{ layoutConfig, setLayoutConfig }}>{children}</LayoutContext.Provider>;
};

export const useLayout = () => useContext(LayoutContext);

const GlobalLayout: FC<LayoutProps> = ({ children }) => {
  const { layoutConfig } = useLayout();
  const router = useRouter();
  const { currentUser, logout } = useAuthUserStore();

  const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
    const menuListTemp = menuList
      .map((item: MenuDataItem) => {
        const localItem = {
          ...item,
          children: item.children ? menuDataRender(item.children) : [],
        };
        return localItem;
      })
      .filter((item) => Object.keys(item).length > 0);

    return menuListTemp;
  };

  const renderTitle = () => {
    if (!layoutConfig.title) return false;
    return layoutConfig.title;
  };

  const handleLogoClick = () => {
    router.push('/dashboard');
  };

  return (
    <div
      id="layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...({
          siderWidth: 180,
          ...menuProps,
          logo: '/logo.png',
          title: 'Handan',
          layout: 'mix',
          onMenuHeaderClick: handleLogoClick,
          token: {
            colorTextMenuTitle: '#6b5b4d',
            colorTextMenu: '#7a6e62',
            colorTextMenuSelected: '#8a7c6f',
            colorTextMenuActive: '#8a7c6f',
            colorBgMenuItemSelected: 'rgba(230, 225, 215, 0.5)',
            colorBgMenuItemHover: 'rgba(240, 238, 233, 0.4)',
            colorBgCollapsedButton: 'rgba(255, 255, 255, 0.8)',
            colorTextCollapsedButtonHover: '#8a7c6f',
            colorTextCollapsedButton: '#b3a99e',
            sider: {
              colorMenuBackground: 'rgba(255, 255, 255, 0.6)',
              colorBgMenuItemCollapsedElevated: 'rgba(255, 255, 255, 0.7)',
            },
            header: {
              colorBgHeader: 'rgba(255, 255, 255, 0.85)',
            },
            pageContainer: {
              paddingBlockPageContainerContent: 0,
              paddingInlinePageContainerContent: 0,
            },
          },
          header: {
            style: {
              boxShadow: '0 2px 10px rgba(140, 130, 115, 0.08)',
              backdropFilter: 'blur(8px)',
              borderRadius: '0 0 16px 16px',
              borderBottom: '1px solid rgba(220, 215, 205, 0.3)',
            },
          },
          siderMenuProps: {
            style: {
              borderRight: '1px solid rgba(220, 215, 205, 0.3)',
              backdropFilter: 'blur(6px)',
              borderRadius: '0 16px 16px 0',
            },
          },
          location: {
            pathname: window?.location.pathname,
          },
          menuDataRender: menuDataRender,
          avatarProps: {
            title: currentUser?.email,
            size: 'small',
            style: { backgroundColor: '#1890ff' },
            children: currentUser?.email?.charAt(0)?.toUpperCase(),
            render: (_: any, avatarChildren: any) => {
              return <AvatarDropdown signOut={logout}>{avatarChildren}</AvatarDropdown>;
            },
          },
          actionsRender: (props: any) => {
            return [<HeaderActions key="header-actions" isMobile={props.isMobile} />];
          },
          menuItemRender: (item: any, dom: any) => (
            <div
              onClick={() => {
                router.push(item.path || '/');
              }}
            >
              {dom}
            </div>
          ),
        } as any)}
      >
        <PageContainer
          title={renderTitle()}
          extra={layoutConfig.extra}
          header={{
            style: {
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              padding: '16px 24px',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(140, 130, 115, 0.05)',
              border: '1px solid rgba(220, 215, 205, 0.3)',
              backdropFilter: 'blur(4px)',
            },
          }}
        >
          <div
            style={{
              margin: '8px 4px',
            }}
          >
            {children}
          </div>
        </PageContainer>
      </ProLayout>

      {/* 全局浮动按钮 */}
      <GlobalFloatButtons />
    </div>
  );
};

const GlobalLayoutWrapper: FC<LayoutProps> = (props) => (
  <LayoutProvider>
    <GlobalLayout {...props} />
  </LayoutProvider>
);

export default GlobalLayoutWrapper;
