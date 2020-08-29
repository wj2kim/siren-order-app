import React from 'react';
import LoginContainer from 'containers';



const Landing = (props) => {
    console.log(props);
    return (
        <div className="container">
            
            <h1>This is a Landing Page</h1>
            <input value= "email comes here" />
            <input value= "password comes here"/>
            <button>Enter</button>
        </div>
    )
}

export default Landing
