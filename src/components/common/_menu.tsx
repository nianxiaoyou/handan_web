const menuProps = {
  route: {
    path: '/',
    routes: [
      {
        path: '/dashboard',
        name: '首页',
      },
      {
        path: '/setup',
        name: '基础信息',
        routes: [
          {
            path: '/setup/items',
            name: '商品管理',
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
        path: '/selling',
        name: '销售管理',
        routes: [
          {
            path: '/selling/sales-orders',
            name: '销售订单',
          },
          // {
          //   path: '/sales-order/returns',
          //   name: '销售退货',
          // },
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
        routes: [
          {
            path: '/purchasing/purchase-orders',
            name: '采购订单',
          },
          // {
          //   path: '/purchase-order/returns',
          //   name: '采购退货',
          // },
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
        routes: [
          {
            path: '/production/boms',
            name: 'BOM管理',
          },
          {
            path: '/production/processes',
            name: '工序管理',
          },
          {
            path: '/production/work-orders',
            name: '生产工单',
          },
          {
            path: '/production/work-order-items',
            name: '生产任务',
          },
          {
            name: '工位管理',
            path: '/production/workstations',
          },
        ],
      },
      {
        path: '/stock',
        name: '库存管理',
        routes: [
          {
            name: '出库凭证',
            path: '/stock/delivery-notes',
          },
          {
            name: '入库凭证',
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
        path: '/system',
        name: '系统管理',
        routes: [
          {
            name: '用户管理',
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
