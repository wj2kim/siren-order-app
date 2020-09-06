import React from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import { signout, getCookie } from 'lib/auth';
import  Header from 'components/common/Header';

const HeaderContainer = () => {
    const history = useHistory();

    const handleLogout = () => {
        console.log('clicked')
        signout(() => {
            console.log('logout');
            toast.info('로그아웃 하셨습니다.');
            history.push('/');
        })
    };

    return (
        <div className="navigation">
           <Header onLogout={ handleLogout } />
        </div>
    )
}

export default HeaderContainer




