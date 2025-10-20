import { Dropdown, message } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

interface AvatarDropdownProps {
  children?: React.ReactNode;
  signOut?: () => void;
}

const AvatarDropdown: React.FC<AvatarDropdownProps> = (props) => {
  const { children, signOut } = props;
  const router = useRouter();

  const loginOut = async () => {
    message.success('退出成功');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
    }
    if (signOut) {
      signOut();
    }
    router.push('/');
  };

  const onMenuClick = (event: any) => {
    const { key } = event;

    if (key === 'logout') {
      loginOut();
    }

    if (key === 'settings') {
      router.push('/system/users');
    }
  };

  const menuItems = [
    {
      key: 'settings',
      label: '系统设置',
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      label: '退出登录',
      danger: true,
    },
  ];

  return (
    <Dropdown
      menu={{
        selectedKeys: [],
        onClick: onMenuClick,
        items: menuItems,
      }}
    >
      {children}
    </Dropdown>
  );
};

export default AvatarDropdown;
