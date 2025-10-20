# Handan Web

> Open Source ERP (MES) Frontend Solution for SMEs - Open Source Version of Nianxiaoyou

English | [简体中文](./README.md)

<div align="center">
	<img src="./docs/live-demo.jpg"/>
</div>

<div align="center">
	<a href="https://handan-web.vercel.app">Live Demo</a>
</div>

## 📖 Overview

Handan Web is the open-source version of [Nianxiaoyou](https://www.nianxiaoyou.com), a lightweight and user-friendly digital management frontend system designed specifically for small and medium-sized manufacturing enterprises.

We understand the challenges SMEs face in digital transformation: ERP systems on the market are either overly complex with high learning curves, or prohibitively expensive. Handan is committed to providing a **simple, practical, and open-source** solution to help businesses achieve digital management of their business processes at the lowest cost.

### Core Features

- ✅ **Lightweight Architecture**: Based on Next.js + GraphQL, fast response, easy to deploy
- ✅ **Modern UI**: Using Ant Design design system for excellent user experience
- ✅ **Modular Design**: Independent business modules, easy to extend and maintain
- ✅ **Open Source & Free**: MIT license, completely open source, continuously updated
- ✅ **GraphQL API**: Efficient data querying, reducing network requests
- ✅ **TypeScript**: Type-safe, improving development efficiency and code quality

## 🚀 Feature Modules

### Implemented Features

#### 1. Sales Management
- ✅ Sales Order Management (create, view, edit)
- ✅ Customer Management (customer profiles, contact information)
- ✅ Sales Statistics (basic statistical reports)

#### 2. Procurement Management
- ✅ Purchase Order Management (create, view, edit)
- ✅ Supplier Management (supplier profiles, contact information)
- ✅ Procurement Statistics (basic statistical reports)

#### 3. Production Management (MES)
- ✅ Work Order Management (work order creation, scheduling)
- ✅ Production Task Management (task assignment, progress tracking)
- ✅ BOM Management (Bill of Materials)
- ✅ Production Process Management (process definition)
- ✅ Production Team Management (team configuration)

#### 4. Inventory Management
- ✅ Outbound Records (outbound order viewing)
- ✅ Inbound Records (inbound order viewing)
- ✅ Inventory Records (inventory transaction queries)

#### 5. Financial Management
- ✅ Sales Receipt Vouchers
- ✅ Purchase Payment Vouchers
- ✅ Transaction Record Queries
- ✅ Payment Method Management

#### 6. Product Management
- ✅ Product Profiles (CRUD operations)
- ✅ Unit of Measurement Management
- ✅ Warehouse Management (warehouse configuration)

#### 7. System Settings
- ✅ Member Management (user permissions)

### Planned Features (Already Available in Nianxiaoyou)

The following features are already implemented in Nianxiaoyou but not yet completed in Handan Web:

#### Enhanced Sales Management
- [ ] Sales Dashboard (sales performance, customer status visualization)
- [ ] Quotation Management
- [ ] Sales Product Records (product dimension analysis)
- [ ] Sales Outbound Management (linked with inventory)
- [ ] Accounts Receivable Management (payment records, reconciliation)

#### Enhanced Procurement Management
- [ ] Procurement Dashboard (procurement costs, supplier status visualization)
- [ ] Procurement Product Records (product dimension analysis)
- [ ] Procurement Inbound Management (linked with inventory)
- [ ] Accounts Payable Management (payment records, reconciliation)

#### Enhanced Production Management
- [ ] Simple Work Orders (lightweight production management)
- [ ] Production Reporting (production progress recording)
- [ ] Finished Goods Receipt (production completion warehousing)
- [ ] Reporting Records (historical reporting queries)

#### Outsourcing Management (New Module)
- [ ] Outsourcing Order Management
- [ ] Outsourcing Supplier Management
- [ ] Outsourcing Material Management

#### Enhanced Inventory Management
- [ ] Inventory Information (real-time inventory queries)
- [ ] Inventory Transfer (inter-warehouse transfers)
- [ ] Inventory Counting (counting process)

#### Enhanced Financial Management
- [ ] Accounts Receivable Management (independent module)
- [ ] Accounts Payable Management (independent module)
- [ ] Outsourcing Payment Management
- [ ] Other Receipts and Payments (advance receipts and payments, etc.)

#### Enhanced Product Management
- [ ] Batch Price Adjustment (price adjustment orders)
- [ ] Product Grouping (category management)
- [ ] Brand Management

#### Enhanced System Settings
- [ ] Team Information (enterprise configuration, print templates)

## 🛠 Tech Stack

### Frontend Framework
- **Next.js** - React server-side rendering framework
- **React 18** - User interface library
- **TypeScript** - Type-safe JavaScript superset

### UI Component Library
- **Ant Design** - Enterprise-level UI design language and React component library
- **Ant Design Pro Components** - Advanced business component library
- **Tailwind CSS** - Utility-first CSS framework

### Data Management
- **Apollo Client** - GraphQL client for data fetching and state management
- **Zustand** - Lightweight React state management library
- **GraphQL** - Efficient API query language

## 🚀 Quick Start

### Requirements

- Node.js >= 16.x
- pnpm >= 8.x

### Install Dependencies

```bash
pnpm install
```

### Configure Backend Service

Configure the GraphQL API address in `src/gql/apollo/index.ts`:

```typescript
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/api', // Backend GraphQL address
});
```

### Development Mode

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build for Production

```bash
pnpm run build
```

### Start Production Server

```bash
pnpm run start
```

## 📁 Project Structure

```
handan_web/
├── src/
│   ├── components/            # React components
│   │   ├── common/           # Common components (layout, menu, etc.)
│   │   ├── sales-order/      # Sales order components
│   │   ├── purchase-order/   # Purchase order components
│   │   ├── work-order/       # Work order components
│   │   ├── customer/         # Customer management components
│   │   ├── supplier/         # Supplier management components
│   │   ├── item/             # Product management components
│   │   └── ...               # Other business components
│   ├── pages/                # Next.js page routing
│   ├── gql/                  # GraphQL related
│   │   ├── apollo/           # Apollo Client configuration
│   │   └── documents/        # GraphQL queries and mutations
│   ├── stores/               # Zustand state management
│   ├── utils/                # Utility functions
│   └── styles/               # Global styles
├── public/                   # Static assets
└── ...                       # Configuration files
```

## 🔗 Related Projects

- **Backend Project**: [Handan](https://github.com/zven21/handan) - Elixir + Phoenix + GraphQL + CQRS/ES
- **Enterprise Edition**: [Nianxiaoyou](https://www.nianxiaoyou.com) - More complete enterprise version

## 🤝 Contributing

Contributions are welcome! We look forward to your participation in building a better open-source ERP system together.

### Contribution Process

1. Fork this repository
2. Create a feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a Pull Request

### Development Guidelines

- Follow TypeScript type constraints
- Maintain consistent code style
- Add appropriate comments for new features
- Ensure the code builds successfully

## 📄 License

Handan Web is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## 📞 Contact

- GitHub Issues: [Submit Issue](https://github.com/zven21/handan_web/issues)
- Project Homepage: [GitHub](https://github.com/zven21/handan)

---

**Note**: As an open-source project, Handan will be continuously updated and improved, with ongoing feature enhancements and bug fixes. We welcome community contributions to build a better open-source ERP system together.

