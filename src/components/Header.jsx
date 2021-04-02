import React from 'react';
import Switch from './Switch';
import './header.css';

const Header = (props) => {

    const { darkMode, handleChange } = props;

    return (
        <header style={darkMode ? {color: 'hsl(165, 100%, 97%)', backgroundColor: '#0A090C', transition: 'all .5s'} : {}}>
            <Switch 
                onChange={handleChange}
                darkMode={darkMode}/>
            <h1>COVID-19 en Venezuela</h1>
        </header>
    )
};

export default Header;