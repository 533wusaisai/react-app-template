import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WraperRoutes from './router';
// import AuthRouter from './router/AuthRouter';
import '@/assets/styles/reset.less';

function App() {
  return (
    <BrowserRouter>
      <WraperRoutes />
    </BrowserRouter>
  );
}

export default App;
