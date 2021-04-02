import React from 'react';
import SVG from './loader.svg';
import './loader.css';

const Loader = (props) => {

    const { darkMode } = props;

    return (
        <div 
            className="loader"
            style={darkMode ? {color: 'hsl(165, 100%, 97%)', backgroundColor: '#0A090C', transition: 'all .5s'} : {}}>
                <div 
                    className="loader__svg">
                    <img 
                        src={SVG} 
                        alt=""/>
                </div>
                <div 
                    className="loader__text">
                        <span 
                            className="loader__text__span">
                            ¡Estamos obteniendo datos!
                        </span>
                </div>
        </div>
    )
};

export default Loader;