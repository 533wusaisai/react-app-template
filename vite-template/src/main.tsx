import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.querySelector('#app')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
