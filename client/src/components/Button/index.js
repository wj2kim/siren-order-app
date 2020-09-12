import React, { Children } from 'react';
import PropsTypes from 'prop-types';
import Wrapper from './Wrapper';

const Button = (props) => {
    let button = (
        <button onClick={props.handleRoute}>
          {Children.toArray(props.children)}
        </button>
     );

    // let button = (
    //     <A href={props.href} onClick={props.onClick}>
    //       {Children.toArray(props.children)}
    //     </A>
    // );

    // if (props.handleRoute) {
    //     button = (
    //       <StyledButton onClick={props.handleRoute}>
    //         {Children.toArray(props.children)}
    //       </StyledButton>
    //     );
    // }

    return <Wrapper>{ button }</Wrapper>
}

Button.PropsTypes = {
    onClick : PropsTypes.func,
    children : PropsTypes.node.isRequired
}

export default Button; 











// import styled from 'styled-components';

// export const Button= styled.button`
//   color: ${p => p.theme.primary};
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//     opacity: 0.8;
//     cursor:pointer;
//   }

//   &:active {
//     opacity: 0.4;
//   }
// `;

