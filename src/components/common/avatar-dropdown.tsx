import { useRouter } from 'next/router';
import { Dropdown, Spin, message } from 'antd';

const AvatarDropdown = (props: any) => {
  const { children, signOut } = props;

  const router = useRouter();

  const loginOut = async () => {
    message.success('退出成功');
    localStorage.removeItem('accessToken');
    signOut();
    router.push('/');
  };

  const onMenuClick = (event: any) => {
    const { key } = event;

    if (key == 'logout') {
      loginOut();
    }
  };

  // const { styles } = useStyles();

  // const { initialState, setInitialState } = useModel('@@initialState');
  const loading = (
    <span>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  // if (!initialState) {
  //   return loading;
  // }

  // const { currentUser } = initialState;

  // if (!currentUser || !currentUser.name) {
  //   return loading;
  // }

  const menuItems = [
    // ...(menu
    //   ? [
    //       {
    //         key: 'center',
    //         icon: <UserOutlined />,
    //         label: '个人中心',
    //       },
    //       {
    //         key: 'settings',
    //         icon: <SettingOutlined />,
    //         label: '个人设置',
    //       },
    //       {
    //         type: 'divider' as const,
    //       },
    //     ]
    //   : []),
    {
      key: 'logout',
      label: 'logout',
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
