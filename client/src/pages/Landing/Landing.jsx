import React from 'react';
import { LoginContainer } from 'containers';


const Landing = (props) => {
    console.log('props', props);

    return (
        <div className="container">
            뒷배경은 동영상으로 대체
            <LoginContainer {...props} />
        </div>
    )
}

export default Landing;


// const Landing = ({history}) => {
//     console.log({history});

//     const handleSubmit = e => {
//         console.log('e', e);
//         e.preventDefault();
//         const email = document.querySelector('#email').value;
//         const password = document.querySelector('#password').value;
    
//         console.log('email', email);
//         console.log('password', password);
    
//         axios.post(`${process.env.REACT_APP_API_URL}/login`, {
//             email,
//             password
//         }).then(res => 
//             authenticate(res, () => isAuth() && isAuth().role === 'admin' ?
//             history.push('/admin') : history.push('/user'))   
//         )
//     }
//     return (
//         <div className="container">
//             <h1>This is a Landing Page</h1>
//             <input id="email" placeholder= "email comes here" />
//             <input id="password" placeholder= "password comes here"/>
//             <button onClick={handleSubmit}>Enter</button>
//         </div>
//     )
// }

// export default Landing
