import {
  DashboardOutlined,
  BookOutlined,
  ShoppingCartOutlined,
  ProfileOutlined,
  PayCircleOutlined,
  DatabaseOutlined,
  RocketOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const menuProps = {
  route: {
    path: '/',
    routes: [
      {
        path: '/dashboard',
        name: '首页',
        icon: <DashboardOutlined />,
      },
      {
        path: '/selling',
        name: '销售管理',
        icon: <ProfileOutlined />,
        routes: [
          {
            path: '/selling/sales-orders',
            name: '销售订单',
          },
          {
            path: '/selling/customers',
            name: '客户管理',
          },
          {
            path: '/selling/stats',
            name: '销售统计',
          },
        ],
      },
      {
        path: '/purchasing',
        name: '采购管理',
        icon: <ShoppingCartOutlined />,
        routes: [
          {
            path: '/purchasing/purchase-orders',
            name: '采购订单',
          },
          {
            path: '/purchasing/suppliers',
            name: '供应商管理',
          },
          {
            path: '/purchasing/stats',
            name: '采购统计',
          },
        ],
      },
      {
        path: '/production',
        name: '生产管理',
        icon: <RocketOutlined />,
        routes: [
          {
            path: '/production/work-orders',
            name: '生产工单',
          },
          {
            path: '/production/work-order-items',
            name: '生产任务',
          },
          {
            path: '/production/boms',
            name: 'BOM 管理',
          },
          {
            path: '/production/processes',
            name: '生产工序',
          },
          {
            name: '生产班组',
            path: '/production/workstations',
          },
        ],
      },
      {
        path: '/stock',
        name: '库存管理',
        icon: <BookOutlined />,
        routes: [
          {
            name: '出库记录',
            path: '/stock/delivery-notes',
          },
          {
            name: '入库记录',
            path: '/stock/receipt-notes',
          },
          {
            name: '库存记录',
            path: '/stock/inventory-entries',
          },
        ],
      },
      {
        path: '/finance',
        name: '财务管理',
        icon: <PayCircleOutlined />,
        routes: [
          {
            name: '销售收款凭证',
            path: '/finance/sales-invoices',
          },
          {
            name: '采购付款凭证',
            path: '/finance/purchase-invoices',
          },
          {
            name: '交易记录',
            path: '/finance/payment-entries',
          },
          {
            name: '支付方式',
            path: '/finance/payment-methods',
          },
        ],
      },
      {
        path: '/setup',
        name: '产品管理',
        icon: <DatabaseOutlined />,
        routes: [
          {
            path: '/setup/items',
            name: '产品档案',
          },
          {
            path: '/setup/uoms',
            name: '计量单位',
          },
          {
            path: '/setup/warehouses',
            name: '仓库管理',
          },
        ],
      },
      {
        path: '/system',
        name: '系统设置',
        icon: <SettingOutlined />,
        routes: [
          {
            name: '成员管理',
            path: '/system/users',
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
};

export default menuProps;
