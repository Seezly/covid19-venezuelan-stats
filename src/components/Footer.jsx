import React from 'react';
import './footer.css';

const Footer = (props) => {

    const { darkMode } = props;

    return (
        <footer style={darkMode ? {color: 'hsl(165, 100%, 97%)', backgroundColor: '#0A090C', transition: 'all .5s',} : {}}>
            <div
                className="copyright">
                <small
                    className="copyright__data">
                    Toda la información acerca del SARS-CoV-2 (COVID-19) mostrada en esta página web es 
                    proveída directamente desde la <a href="https://covid19.patria.org.ve/" target="_blank" rel="noopener noreferrer">
                        API
                    </a> pública de las estadísticas oficiales del COVID-19 en Venezuela.
                </small>
                <small
                    className="copyright__author">
                    Diseñado y desarrollado con <span className="heart">♥</span> por <a href="https://www.sergiogutierrez.ml" target="_blank" rel="noopener noreferrer">Seezly</a>.
                </small>
            </div>
        </footer>
    )
};

export default Footer;