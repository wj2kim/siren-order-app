/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator/index.js';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = lazyLoad(
  () => import('./index'),
  module => module.MainPage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);
