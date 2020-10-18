import React, { useState , useEffect} from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { signInRequest, clearAuthError } from 'store/modules/auth/actions';
import { LoadingIndicator } from 'components/LoadingIndicator/index';
import { signInErrorType } from 'store/modules/auth/types';
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined';
import BackgroundVideo from 'components/Background';
import './SignIn.scss';

const SignIn = () => {
    const [ formData, setFormData ] = useState({
        userEmail:'',
        password: '',
    })

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(clearAuthError());
    })

    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    }

    const onSubmitForm = e => {
        e.preventDefault();
        console.log("폼데이터",formData);
        const { userEmail : email, password } = formData;
        dispatch(signInRequest(email, password));
    }

    const error = useSelector(state => state.auth.error);
    const isLoading = useSelector(state => state.auth.loading);


    return (
        <div id="sign-in-page" style={{height:'100vh', width:'100%', overflow:"hidden", top:0, left:0, position:'absolute'}}>
            <BackgroundVideo />
            <Wrapper>
            <div className="login-wrapper">
                <div className="login">
                    <div className="login__check">
                        <div className="welcome-emoticon">
                            <LocalCafeOutlinedIcon className="login__icon name svg-icon" viewBox="0 3 22 20"/>
                        </div>
                    </div>
                    <div className="login__form">
                        <form onSubmit={onSubmitForm}>
                            <div className="login__row">
                            <svg className="login__icon name svg-icon" viewBox="0 0 20 20">
                                <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
                            </svg>
                                <input type="email" className="login__input name" placeholder="이메일 주소" maxLength="20" onChange={ handleChange('userEmail')}/>
                            </div>
                            <div className="login__row">
                                <svg className="login__icon pass svg-icon" viewBox="0 0 20 20">
                                    <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
                                </svg>
                                <input type="password" autoComplete="true" className="login__input pass" placeholder="비밀번호" maxLength="20" onChange={ handleChange('password')}/>
                            </div>
                            <button type="submit" className="login__submit" disabled={ isLoading }>{ isLoading? <LoadingIndicator small /> : '로그인' }</button>
                        </form>
                        <div className="message-area" style={{color:'#FFF'}}>
                            { error ? <ErrorText>{signInErrorText(error)}</ErrorText> : '오늘도 격하게 반갑습니다. 😄' }
                        </div>
                    </div>
                </div>          
            </div>
            </Wrapper>
        </div>
    )
}


export const signInErrorText = error => {
    switch (error) {
        case signInErrorType.NETWORK_ERROR: 
            return '서버와의 연결에 실패하였습니다. 😳'
        case signInErrorType.USER_NOT_FOUND:
            return '해당 유저가 존재하지 않습니다. 😞';
        case signInErrorType.VALIDATION_ERROR:
            return '모든 항목을 입력해 주세요. 🤔';
        default:
        return error;
    }
};


const Wrapper = styled.div`
height: 100%;
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