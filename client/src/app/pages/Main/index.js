import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/containers/NavBar';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';
import SignIn from 'app/containers/SignIn';

export function MainPage(props) {
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
        {/* <Masthead /> */}
        {/* <Features /> */}
      </PageWrapper>
    </>
  );
}
