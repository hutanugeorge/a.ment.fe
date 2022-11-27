import '@styles/index';

import LoginPage from '@pages/LoginPage';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
);
