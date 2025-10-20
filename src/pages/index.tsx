import { Button, Card, Space, Typography } from 'antd';
import { useRouter } from 'next/router';
import { GithubOutlined, RocketOutlined, ThunderboltOutlined, HeartOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center py-12">
          <Title level={1} className="text-5xl font-bold mb-4">
            Handan
          </Title>
          <Paragraph className="text-xl text-gray-600 mb-8">面向中小企业的开源 ERP (MES) 解决方案</Paragraph>
          <Space size="large">
            <Button type="primary" size="large" onClick={() => router.push('/login')} icon={<RocketOutlined />}>
              开始体验
            </Button>
            <Button
              size="large"
              icon={<GithubOutlined />}
              onClick={() => window.open('https://github.com/zven21/handan', '_blank')}
            >
              查看源码
            </Button>
          </Space>
        </div>

        {/* Project Introduction */}
        <Card className="mb-8 shadow-lg">
          <Space direction="vertical" size="large" className="w-full">
            <div>
              <Title level={3}>
                <ThunderboltOutlined className="mr-2" />
                项目简介
              </Title>
              <Paragraph className="text-base text-gray-700">
                Handan 是 <Text strong>Nianxiaoyou</Text>{' '}
                的开源版本，专为中小型制造企业打造的轻量级、易用的数字化管理系统。
              </Paragraph>
              <Paragraph className="text-base text-gray-700">
                我们深知中小企业在数字化转型中面临的挑战：市面上的 ERP
                系统要么功能过于复杂，学习成本高；要么价格昂贵，难以承受。 Handan 致力于提供一个
                <Text strong>简洁、实用、开源</Text>的解决方案，帮助企业以最低的成本实现业务流程的数字化管理。
              </Paragraph>
            </div>

            <div>
              <Title level={3}>
                <HeartOutlined className="mr-2" />
                持续更新
              </Title>
              <Paragraph className="text-base text-gray-700">
                作为开源项目，Handan 会持续更新迭代，不断完善功能，修复问题。 我们欢迎社区贡献，一起打造更好的开源 ERP
                系统。
              </Paragraph>
            </div>
          </Space>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="shadow hover:shadow-lg transition-shadow">
            <Title level={4}>📦 库存管理</Title>
            <Paragraph>实时库存追踪、出入库管理、库存记录查询</Paragraph>
          </Card>
          <Card className="shadow hover:shadow-lg transition-shadow">
            <Title level={4}>🛒 销售管理</Title>
            <Paragraph>销售订单、客户管理、销售统计分析</Paragraph>
          </Card>
          <Card className="shadow hover:shadow-lg transition-shadow">
            <Title level={4}>🏭 采购管理</Title>
            <Paragraph>采购订单、供应商管理、采购成本追踪</Paragraph>
          </Card>
          <Card className="shadow hover:shadow-lg transition-shadow">
            <Title level={4}>⚙️ 生产管理</Title>
            <Paragraph>生产工单、BOM 管理、生产任务调度</Paragraph>
          </Card>
          <Card className="shadow hover:shadow-lg transition-shadow">
            <Title level={4}>💰 财务管理</Title>
            <Paragraph>收付款记录、交易凭证、支付方式管理</Paragraph>
          </Card>
          <Card className="shadow hover:shadow-lg transition-shadow">
            <Title level={4}>🔧 产品管理</Title>
            <Paragraph>产品档案、计量单位、仓库配置</Paragraph>
          </Card>
        </div>

        {/* Tech Stack */}
        <Card className="shadow-lg">
          <Title level={3}>技术栈</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Title level={5}>后端技术</Title>
              <ul className="list-disc list-inside text-gray-700">
                <li>Elixir + Phoenix</li>
                <li>Commanded (CQRS)</li>
                <li>Absinthe (GraphQL)</li>
                <li>PostgreSQL + EventStore</li>
              </ul>
            </div>
            <div>
              <Title level={5}>前端技术</Title>
              <ul className="list-disc list-inside text-gray-700">
                <li>Next.js + React</li>
                <li>TypeScript</li>
                <li>Apollo Client (GraphQL)</li>
                <li>Ant Design</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center py-8 text-gray-600">
          <Paragraph>
            开源协议: MIT License |{' '}
            <a
              href="https://github.com/zven21/handan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
