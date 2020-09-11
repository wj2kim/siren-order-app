import React from 'react'




const SignIn = () => {
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="이메일" onChange={handleChange("email")} />
                    <input type="password" name="email" placeholder= "비밀번호" onChange={handleChange("password")}/>
                    <button type="submit">{loading ? '로딩중...' : '로그인'}</button>
            </form>
        </Wrapper>
    )
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
