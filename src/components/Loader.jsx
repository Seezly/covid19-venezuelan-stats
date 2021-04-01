import React from 'react';
import SVG from './loader.svg';
import './loader.css';

const Loader = (props) => {
    return (
        <div 
            className="loader">
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