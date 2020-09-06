import React from 'react'

const HeaderProfile = ({onLogout}) => {
    return (
        <div>
            <button onClick={onLogout}>
                <span>로그아웃</span>
            </button>
        </div>
    )
}

export default HeaderProfile;
