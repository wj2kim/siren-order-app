import React , { useState } from 'react'
import axios from 'axios';
import { authenticate, isAuth } from 'lib/auth';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const Login = ({history}) => {
    // const dispatch = useDispatch();
    console.log('isAuth', isAuth());

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        isLoading: false,
    });

    const { email, password, isLoading } = formData;

    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    }

    const directTo = response => {
        authenticate(response, () => {
            isAuth() && isAuth().role === 'admin'
              ? history.push('/admin')
              : history.push('/user');
        });
    }
    

    const handleSubmit = e => {
        e.preventDefault();

        if(email && password ) {
            setFormData({
                ...formData,
                isLoading: true
            });

            axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                email,
                password
            }).then(res => {
                authenticate( res, () => {
                    setFormData({
                        ...formData,
                        email: '',
                        password: '',
                        isLoading: false,
                    })
                    toast.success(`안녕하세요. ${res.data.user.name}님!`);
                    directTo(res);
                });
            }).catch(err => {
                setFormData({
                    ...formData,
                    isLoading: false,
                })
                console.log(err.response);
                toast.error(err.response.data.errors);
            });
         }else{
            toast.error('모든 항목을 작성해 주세요.');
         }
    };


    return (
        <div className="container">
            {isAuth() ? <Redirect to='/' /> : null }
            <h1>This is a Landing Page</h1>
            <form >
            <input type="email" placeholder= "email" value={email} onChange={ handleChange('email') }/>
            <input type="password" placeholder= "password" value={password} onChange={ handleChange('password')} />
            <button type='submit' onClick={handleSubmit}><span>Log In</span></button>
            </form>
        </div>
    )
}

export default Login

