import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@smcore/corex-design/react';
import '@smcore/corex-design/css/themes';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
