import React from 'react';
import { Outlet } from 'react-router-dom';
const Home = () => {
  console.log(import.meta.env);

  return (
    <>
      Home
      <progress value='22' max='100'></progress>
      <Outlet />
    </>
  );
};

export default Home;
