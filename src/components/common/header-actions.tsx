import {
  BellOutlined,
  ThunderboltOutlined,
  GithubOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
  AppstoreAddOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import { Badge, Popover, List } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const GITHUB_URL = 'https://github.com/zven21/handan';
const HELP_URL = 'https://github.com/zven21/handan/blob/master/README.md';

// 通知数据（功能开发中）
const mockNotifications: any[] = [];

// 快捷操作菜单（简化版）
const quickActions = [
  {
    key: 'sales-order',
    label: '销售订单',
    icon: <ShoppingCartOutlined />,
    color: '#1890ff',
    path: '/selling/sales-orders',
  },
  {
    key: 'purchase-order',
    label: '采购订单',
    icon: <ShopOutlined />,
    color: '#52c41a',
    path: '/purchasing/purchase-orders',
  },
  {
    key: 'item',
    label: '产品管理',
    icon: <AppstoreAddOutlined />,
    color: '#722ed1',
    path: '/setup/items',
  },
];

interface HeaderActionsProps {
  isMobile?: boolean;
}

/**
 * 头部操作按钮组件
 * 包含：通知、快捷操作、GitHub、帮助文档
 */
const HeaderActions: React.FC<HeaderActionsProps> = ({ isMobile = false }) => {
  const router = useRouter();
  const [popoverVisible, setPopoverVisible] = useState(false);

  // 移动端或服务端渲染时不显示
  if (isMobile) return null;
  if (typeof window === 'undefined') return null;

  // 处理快捷操作点击
  const handleQuickAction = (path: string) => {
    setPopoverVisible(false);
    router.push(path);
  };

  // 通知内容
  const notificationContent = (
    <div style={{ width: 320 }}>
      {mockNotifications.length > 0 ? (
        <List
          size="small"
          dataSource={mockNotifications}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.title} description={item.content} />
            </List.Item>
          )}
        />
      ) : (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: '#999' }}>
          <BellOutlined style={{ fontSize: 48, marginBottom: 16, color: '#d9d9d9' }} />
          <div style={{ fontSize: 14 }}>暂无通知</div>
        </div>
      )}
    </div>
  );

  // 快捷操作内容
  const quickActionsContent = (
    <div style={{ width: 220 }}>
      <List
        size="small"
        dataSource={quickActions}
        renderItem={(item) => (
          <List.Item
            style={{
              cursor: 'pointer',
              padding: '10px 12px',
              transition: 'background 0.2s',
            }}
            onClick={() => handleQuickAction(item.path)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f5f5f5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  fontSize: 18,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          </List.Item>
        )}
      />
    </div>
  );

  return (
    <>
      <Popover
        key="notification"
        content={notificationContent}
        title="系统通知"
        trigger="click"
        placement="bottomRight"
      >
        <Badge count={mockNotifications.length} size="small" dot={false}>
          <BellOutlined style={{ fontSize: 16, cursor: 'pointer' }} />
        </Badge>
      </Popover>

      <Popover
        key="quick-actions"
        content={quickActionsContent}
        title="快捷操作"
        trigger="click"
        placement="bottomRight"
        open={popoverVisible}
        onOpenChange={setPopoverVisible}
      >
        <ThunderboltOutlined style={{ fontSize: 16, cursor: 'pointer' }} />
      </Popover>

      <a
        key="github"
        href={GITHUB_URL}
        className="text-sm"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: 4 }}
      >
        <GithubOutlined />
        GitHub
      </a>

      <a
        key="help"
        href={HELP_URL}
        className="text-sm"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: 4 }}
      >
        <QuestionCircleOutlined />
        帮助文档
      </a>
    </>
  );
};

export default HeaderActions;
