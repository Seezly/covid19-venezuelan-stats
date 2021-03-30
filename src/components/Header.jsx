import React from 'react';
import Switch from './Switch';
import 'header.css';

const Header = (props) => {
    return (
        <header>
            <Switch />
            <h1>COVID-19 en Venezuela</h1>
        </header>
    )
};

export default Header;