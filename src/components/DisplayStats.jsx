import React from 'react';
import Stats from './Stats';
import './display_stats.css';

const DisplayStats = (props) => {

    let { stats, timeline } = props;

    const getAverage = (data, subject, sub=false) => {
        if (sub) {
            const average = Math.floor(data.map(el => el[subject][sub]).reduce((a, b) => a + b, 0) / data.length);

            return average
        }

        const average = Math.floor(data.map(el => el[subject]).reduce((a, b) => a + b, 0) / data.length);

        return average
    };

    const confirmed = stats['Confirmed']['Count'];
    const recovered = stats['Recovered']['Count'];
    const deaths = stats['Deaths']['Count'];
    const populationPercentage = stats['Confirmed'];
    const infectedPerDayAverage = getAverage(timeline, "Confirmed", "New");
    const deathsPerDayAverage = getAverage(timeline, "Deaths", "New");

    return (
        <section
            className="container display">
            <Stats 
                class_name="container__display-stats"
                data={confirmed}
                title="Casos confirmados"/>
            <Stats 
                class_name="container__display-stats --box"
                data={deaths}
                title="Muertes"/>
            <Stats 
                class_name="container__display-stats --box"
                data={recovered}
                title="Recuperados"/>
            <Stats 
                class_name="container__display-stats --box"
                data={populationPercentage}
                title="% de la población afectada"/>
            <Stats 
                class_name="container__display-stats"
                data={infectedPerDayAverage}
                title="Promedio de infectados por día"/>
            <Stats 
                class_name="container__display-stats"
                data={deathsPerDayAverage}
                title="Promedio de muertes por día"/>
        </section>
    )
};

export default DisplayStats;