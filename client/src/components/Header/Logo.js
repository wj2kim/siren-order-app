import React from 'react';
import styled from 'styled-components';

export function Logo() {
  return (
    <Wrapper>
      <Title>사이렌 오더</Title>
      <Description>알서포트 라운지 카페</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.35rem;
  color: #3c3b3f;
  font-weight: 800;
  margin-right: 1rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: #4b493e;
  font-weight: normal;
`;
