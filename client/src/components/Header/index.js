import React from 'react';

// import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';
import { Logo } from './Logo';
import { Nav } from './Nav';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';
import { PageWrapper } from '../../components/PageWrapper';

export default function Header() {

  return (
    <Wrapper>
      <PageWrapper>
        <Logo />
        <Nav />
      </PageWrapper>
    </Wrapper>
  );
}
//   return (
//     <Container>
//       <Content>
//         <Link to="/">
//           <nav>
//             {/* <img src={logo} alt="Meetapp" /> */}
//             LOGO
//           </nav>
//         </Link>

//         <aside>
//           <Profile>
//             <div>
//               <strong>{name}</strong>
//               <Link to="/profile">프로필</Link>
//             </div>
//             <button type="submit" onClick={handleSignOut}>
//               Sair
//             </button>
//           </Profile>
//         </aside>
//       </Content>
//     </Container>
//   );
// }



const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  // background: transparent;
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
