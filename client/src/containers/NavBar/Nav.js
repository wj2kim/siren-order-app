import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';

export function Nav() {
  return (
    <Wrapper>
      <Item
        href=""
        target="_blank"
        title="설명 준비 중"
        rel="noopener noreferrer"
      >
        <DocumentationIcon />
        Documentation
      </Item>
      <Item
        // href="https://github.com/wj2kim/siren-order-app"
        href=""
        target="_blank"
        title="소스 코드 준비 중"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        Github
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: #decba4;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
    color:#decba4;
  }
`;
