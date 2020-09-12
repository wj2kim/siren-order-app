import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'containers/NavBar';
// import { Masthead } from './Masthead';
// import { Features } from './Features';
import { PageWrapper } from 'components/PageWrapper';
import SignIn from 'containers/SignIn';
import ThemeSwitch from 'containers/ThemeSwitch';

const Main = (props) => {
  return (
    <>
      <Helmet>
        <title>Main Page</title>
        <meta
          name="description"
          content="Siren Order App Main Page"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <SignIn/>
        <ThemeSwitch />
        {/* <Masthead /> */}
        {/* <Features /> */}
      </PageWrapper>
    </>
  );
}

export default Main;
