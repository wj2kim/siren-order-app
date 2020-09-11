import React , { useState, memo } from 'react'
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { changeEmail } from './actions';
import { makeSelectEmail } from './selectors';


import { authenticate, isAuth } from 'utils/auth';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import { loadUserData } from 'app/actions';

/*   */

// import { connect } from 'react-redux';
import { loginRequest } from './actions';


// import { useDispatch } from 'react-redux';

const key = 'LoginForm';

console.log('이건', makeSelectEmail);

export const LoginForm = ({email, password, onSubmitForm, onChangeEmail, loading, error, userData }) => {

    useInjectReducer({ key, reducer});
    useInjectSaga({key, saga});

    console.log("userInfo는?", userData);

        
    return(
        <>
             <form>
                 <input type="email" placeholder= "email" value={email} onChange={ onChangeEmail }/>
                 <input type="password" placeholder= "password" value={password}  />
                 <button type='submit' onClick={onSubmitForm}><span>로그인</span></button>
            </form>
        </>
    )
}

LoginForm.propTypes = {
    // loading: PropTypes.bool,
    // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    onSubmitForm: PropTypes.func,
    email: PropTypes.string,
    onChangeEmail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    email: makeSelectEmail(),
});

export const mapDispatchToProps = (dispatch) => {
    return {
        onChangeEmail: e => dispatch(changeEmail(e.target.value)),
        onSubmitForm: e => {
            if( e !== undefined && e.preventDeafult) e.preventDeafult();
            dispatch(loadUserData());
        }
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(LoginForm)











    // const dispatch = useDispatch();
//     console.log('history', history);

//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         isLoading: false,
//     });

//     const { email, password, isLoading } = formData;

//     const handleChange = text => e => {
//         setFormData({ ...formData, [text]: e.target.value });
//     }

//     const directTo = response => {
//         authenticate(response, () => {
//             isAuth() && isAuth().role === 'admin'
//               ? history.push('/admin')
//               : history.push('/user');
//         });
//     }
    

//     const handleSubmit = e => {
//         e.preventDefault();

//         if(email && password ) {
//             setFormData({
//                 ...formData,
//                 isLoading: true
//             });

//             axios.post(`${process.env.REACT_APP_API_URL}/login`, {
//                 email,
//                 password
//             }).then(res => {
//                 authenticate( res, () => {
//                     setFormData({
//                         ...formData,
//                         email: '',
//                         password: '',
//                         isLoading: false,
//                     })
//                     toast.success(`안녕하세요. ${res.data.user.name}님!`);
//                     directTo(res);
//                 });
//             }).catch(err => {
//                 setFormData({
//                     ...formData,
//                     isLoading: false,
//                 })
//                 console.log(err.response);
//                 toast.error(err.response.data.errors);
//             });
//          }else{
//             toast.error('모든 항목을 작성해 주세요.');
//          }
//     };

//     return (
//         <>
//             <form >
//                 <input type="email" placeholder= "email" value={email} onChange={ handleChange('email') }/>
//                 <input type="password" placeholder= "password" value={password} onChange={ handleChange('password')} />
//                 <button type='submit' onClick={handleSubmit}><span>로그인</span></button>
//             </form>
//         </>
//     )
// }


//     return (
//         <div className="container">
//             {isAuth() ? <Redirect to='/' /> : null }
//             <h1>This is a Landing Page</h1>
//             <form >
//             <input type="email" placeholder= "email" value={email} onChange={ handleChange('email') }/>
//             <input type="password" placeholder= "password" value={password} onChange={ handleChange('password')} />
//             <button type='submit' onClick={handleSubmit}><span>로그인</span></button>
//             </form>
//         </div>
//     )
// }

// export default LoginForm;

