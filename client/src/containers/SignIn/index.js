import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from 'store/modules/auth/actions';
import { LoadingIndicator } from 'components/LoadingIndicator/index';
import { signInErrorType } from 'store/modules/auth/types';

const SignIn = () => {
    const [ formData, setFormData ] = useState({
        userEmail:'',
        password: '',
    })

    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    }

    const onSubmitForm = e => {
        if(e !== undefined && e.preventDefault ) {
            e.preventDefault();
        }
        const { userEmail : email, password } = formData;
        dispatch(signInRequest(email, password));
    }

    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);
    const isLoading = useSelector(state => state.auth.loading);



    return (
    <Wrapper>
        <form onSubmit={onSubmitForm}>
                <input type="email" name="userEmail" placeholder="이메일" onChange={ handleChange('userEmail')} />
                <input type="password" name="password" placeholder= "비밀번호" onChange={ handleChange('password')} />
                <button type="submit">로그인</button>
        </form>
        <div>
            { isLoading && <LoadingIndicator small />}
            { error ? <ErrorText>{signInErrorText(error)}</ErrorText> : null }
        </div>
    </Wrapper>
    )
}


export const signInErrorText = error => {
    console.log("에러", error)
    switch (error) {
        case signInErrorType.NETWORK_ERROR: 
            return '서버와의 연결에 실패하였습니다.'
        case signInErrorType.USER_NOT_FOUND:
            return 'There is no such user 😞';
        case signInErrorType.VALIDATION_ERROR:
            return '모든 항목을 입력해 주세요.';
        case signInErrorType.USER_HAS_NO_REPO:
            return 'User has no repository 🥺';
        case signInErrorType.GITHUB_RATE_LIMIT:
            return 'Looks like github api`s rate limit(60 request/h) has exceeded 🤔';
            default:
            return error;
    }
};


const Wrapper = styled.div`
height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 320px;
`;

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;

export default SignIn;