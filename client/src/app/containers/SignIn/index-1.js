import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import styled from 'styled-components';
import { signInRequest } from 'store/modules/auth/actions';


// const schema = Yup.object().shape({
//     email: Yup.string()
//       .email('이메일')
//       .required('필수'),
//     password: Yup.string().required('필수값 입니다.'),
//   });


const SignIn = () => {
    // const dispatch = useDispatch();
    // // const loading = useSelector(state => state.auth.loading);

    // const onSubmitForm = ({ email, password }) => {
    //       console.log(email, password);
    //     // dispatch(signInRequest(email, password));
    // }

    // ---- test
    const [formData, setFormData] = useState({
      email:'',
      password: '',
    })

    const handleChange = text => e => {
      setFormData({ ...formData, [text]: e.target.value });
    }

    // const handleSubmit = e => {
    //   e.preventDefault();

    //   if(email && passwrd)
    // }

    // ----


    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);
  
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(signInRequest(formData));
    }


    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                 <input type="email" name="email" placeholder="이메일" onChange={handleChange("email")} />
                 <input type="password" name="email" placeholder= "비밀번호" onChange={handleChange("password")}/>
                 <button type="submit">{loading ? '로딩중...' : '로그인'}</button>
            </form>
        </Wrapper>
    )
};

SignIn.propTypes= {
    // formState: PropTypes.object,
    // history: PropTypes.object,
    // handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    email: PropTypes.string,
    password: PropTypes.string,
}

const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;

export default SignIn;








