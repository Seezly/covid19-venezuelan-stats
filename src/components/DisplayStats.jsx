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

    const confirmed = stats['Confirmed']['Count'].toLocaleString('de-DE');
    const recovered = stats['Recovered']['Count'].toLocaleString('de-DE');
    const deaths = stats['Deaths']['Count'].toLocaleString('de-DE');
    const populationPercentage = stats['Confirmed'].toLocaleString('de-DE');
    const infectedPerDayAverage = getAverage(timeline, "Confirmed", "New").toLocaleString('de-DE');
    const deathsPerDayAverage = getAverage(timeline, "Deaths", "New").toLocaleString('de-DE');

    return (
        <section
            className="container display">
            <Stats 
                class-name="container__display-stats"
                data={confirmed}
                title="Casos confirmados"/>
            <Stats 
                class-name="container__display-stats --box"
                data={deaths}
                title="Muertes"/>
            <Stats 
                class-name="container__display-stats --box"
                data={recovered}
                title="Recuperados"/>
            <Stats 
                class-name="container__display-stats --box"
                data={populationPercentage}
                title="% de la población afectada"/>
            <Stats 
                class-name="container__display-stats"
                data={infectedPerDayAverage}
                title="Promedio de infectados por día"/>
            <Stats 
                class-name="container__display-stats"
                data={deathsPerDayAverage}
                title="Promedio de muertes por día"/>
        </section>
    )
};

export default DisplayStats;