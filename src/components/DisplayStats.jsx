import React from 'react';
import Stats from './Stats';
import './display_stats.css';

const DisplayStats = (props) => {

    let { stats, timeline } = props;

    return (
        <section
            className="container display">
            <Stats 
                class-name="container__display-stats"
                data={}
                title="Casos confirmados"/>
            <Stats 
                class-name="container__display-stats --box"
                data={}
                title="Muertes"/>
            <Stats 
                class-name="container__display-stats --box"
                data={}
                title="Recuperados"/>
            <Stats 
                class-name="container__display-stats --box"
                data={}
                title="% de la población afectada"/>
            <Stats 
                class-name="container__display-stats"
                data={}
                title="Promedio de infectados por día"/>
            <Stats 
                class-name="container__display-stats"
                data={}
                title="Promedio de muertes por día"/>
        </section>
    )
};

export default DisplayStats;