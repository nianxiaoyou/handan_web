import { GithubOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React from 'react';

/**
 * 全局浮动按钮组件
 * 包含：GitHub、帮助文档、返回顶部
 */
const GlobalFloatButtons: React.FC = () => {
  return (
    <FloatButton.Group shape="circle" style={{ right: 24, bottom: 24 }}>
      {/* GitHub 按钮 */}
      <FloatButton
        icon={<GithubOutlined />}
        tooltip="GitHub 项目"
        onClick={() => window.open('https://github.com/zven21/handan', '_blank')}
      />

      {/* 帮助文档按钮 */}
      <FloatButton
        icon={<QuestionCircleOutlined />}
        tooltip="帮助文档"
        onClick={() => window.open('https://github.com/zven21/handan/blob/master/README.md', '_blank')}
      />

      {/* 返回顶部按钮 */}
      <FloatButton.BackTop tooltip="返回顶部" visibilityHeight={300} />
    </FloatButton.Group>
  );
};

export default GlobalFloatButtons;
