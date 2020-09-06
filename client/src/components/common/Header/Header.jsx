import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HeaderProfile from './HeaderProfile';
import './Header.scss';

const Header = ({ onLogout }) => {
    return (
        <header className="header"> 
            <section id="header-left">
                <div className="header-nav header-left-wrapper">
                    <div>
                        LOGO 
                    </div>
                    <div>
                        <strong>
                            <Link to="/admin/dashboard">DASHBOARD</Link>
                        </strong>
                    </div>
                    <ul className="">
                        <li>
                            <NavLink to="/admin/dashboard" data-name="ORDER-LIST" activeClassName="on">
                                주문목록
                            </NavLink>
                        </li>
                        <li>    
                            <NavLink to="/admin/dialog-settings/" data-name="DIALOG-SETTINGS" activeClassName="on">
                                대화설정
                            </NavLink></li>
                        {/* <li></li> */}
                    </ul>
                </div>
            </section>
            <section id="header-right">
                <div className="header-nav header-right-wrapper">
                    <HeaderProfile onLogout = { onLogout }/>
                </div>
            </section>
        </header>
    )
}

export default Header
