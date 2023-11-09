import React from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
const Home = () => {
  console.log(import.meta.env);
  const handleOnclick = () => {
    axios.get('http://127.0.0.1:3000/info').then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      Home
      <Button onClick={handleOnclick}>测试后台</Button>
      <progress value='22' max='100'></progress>
      <Outlet />
    </>
  );
};

export default Home;
