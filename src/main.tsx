import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { theme } from './theme';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <div>ejjjj</div>
    </ThemeProvider>

    <div>hellowwww</div>
  </React.StrictMode>
);
