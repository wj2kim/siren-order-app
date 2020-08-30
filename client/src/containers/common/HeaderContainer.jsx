import React from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import { signout, getCookie } from 'lib/auth';

const HeaderContainer = () => {
    const history = useHistory();

    const logoutHandler = () => {
        console.log('clicked')
        signout(() => {
            console.log('logout');
            toast.info('로그아웃 하셨습니다.');
            history.push('/');
        })
    };

    return (
        <div className="navigation">
            <div>
                <button onClick={logoutHandler}>
                    <span>로그아웃</span>
                </button>
            </div>
        </div>
    )
}

export default HeaderContainer




