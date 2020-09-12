import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'store/modules/auth/actions';
// import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
// import { ReactComponent as GithubIcon } from './assets/github-icon.svg';

export function Nav() {

    const dispatch = useDispatch();
    const name = useSelector(state => state.user.profile.name);
  
    const handleSignOut = () => dispatch(signOut());

    return (
        <Wrapper>
            <Item>
                <strong>{name}</strong>
                {/* <Link to="/profile">프로필</Link> */}
            </Item>
            <Item type="submit" onClick={handleSignOut}>
                로그아웃
            </Item>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
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
  }
`;
