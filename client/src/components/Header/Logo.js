import React from 'react';
import styled from 'styled-components';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';


export function Logo() {
  return (
    <Wrapper>
       <PhoneIphoneTwoToneIcon fontSize="large" style={{ marginRight: '10px', color:'#d77158'}}/>
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
  color: #232526;
  font-weight: 800;
  margin-right: 1rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: #232526;
  font-weight: normal;
`;
