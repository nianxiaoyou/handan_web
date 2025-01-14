import { useRouter } from 'next/router';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';

// locale
import { sleep } from '@/utils';
import useAuthUserStore from '@/stores/persisted/useAuthUser';

const Login = () => {
  const router = useRouter();
  const [messageAPI, contextHolder] = message.useMessage();
  const { login, isLogin } = useAuthUserStore();

  const onFinish = async (values: any) => {
    await login(values);
  };

  if (isLogin) {
    messageAPI.success('login success');

    sleep(1000).then(() => {
      router.push('/dashboard');
    });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {contextHolder}
      <LoginForm title="handan web" onFinish={onFinish}>
        <ProFormText
          name="email"
          fieldProps={{
            size: 'large',
          }}
          placeholder={'pls input your email'}
          rules={[
            {
              required: true,
              message: 'pls input your email',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
          }}
          placeholder={'pls input your password'}
          rules={[
            {
              required: true,
              message: 'pls input your password',
            },
          ]}
        />
      </LoginForm>
    </div>
  );
};

export default Login;
