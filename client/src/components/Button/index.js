import React, { Children } from 'react';
import PropsTypes from 'prop-types';
import Wrapper from './Wrapper';

const Button = (props) => {
    let button = (
        <button onClick={props.handleRoute}>
          {Children.toArray(props.children)}
        </button>
     );

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

