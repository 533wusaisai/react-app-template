import React from 'react';
import { Card, Button } from 'antd';
import { login } from '../../server/api/user';

const Login = () => {
  const requestClick = async () => {
    const data = await login({ name: 'login name' });
    console.log(data);
  };
  return (
    <div>
      <div>
        <Button onClick={requestClick}>测试点击</Button>
      </div>
      <div></div>
      <div>
        <Card title=''></Card>
      </div>
    </div>
  );
};

export default Login;
