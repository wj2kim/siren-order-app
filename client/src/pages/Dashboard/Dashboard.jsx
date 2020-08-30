import React from 'react'
// import OrderList from './OrderList';
// import DialogueSetting from './DialogueSetting';
// import Schedule from './Schedule';

const Dashboard = (props) => {

    const scrollOnTop = () => {
        if(document.documentElement.scrollTop > 0) {
            document.documentElement.scrollTop = 0;
        }
    }

    return (
        <>
            <div>
                This is Dashboard
            </div>
        </>
    )
}

export default Dashboard;