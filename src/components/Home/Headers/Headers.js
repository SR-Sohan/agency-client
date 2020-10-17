import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Headers = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Headers;