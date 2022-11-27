import LoginPageMobile from '@pages/../components/Login/LoginPageMobile';
import React from 'react';
import LoginPageDesktop from '@components/Login/LoginPageDesktop';

export default (): JSX.Element => (
  <>
    <LoginPageMobile />
    <LoginPageDesktop />
  </>
);
