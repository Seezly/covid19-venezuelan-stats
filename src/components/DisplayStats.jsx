import React from 'react';
import Stats from './Stats';
import './display_stats.css';

const DisplayStats = (props) => {

    let { darkMode, stats, timeline } = props;

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
    const populationPercentage = (confirmed / 28435940) * 100;
    const infectedPerDayAverage = getAverage(timeline, "Confirmed", "New");
    const deathsPerDayAverage = getAverage(timeline, "Deaths", "New");

    return (
        <section
            className="container display-stats"
            style={darkMode ? {color: 'hsl(165, 100%, 97%)', backgroundColor: 'black', transition: 'all .5s'} : {}}>
            <Stats 
                class_name="container__display-stats"
                attr=""
                data={confirmed.toLocaleString('de-DE')}
                title="Casos confirmados"/>
            <Stats 
                class_name="container__display-stats --box"
                attr="red"
                data={deaths.toLocaleString('de-DE')}
                title="Muertes"
                styles={darkMode}/>
            <Stats 
                class_name="container__display-stats --box"
                attr="green"
                data={recovered.toLocaleString('de-DE')}
                title="Recuperados"
                styles={darkMode}/>
            <Stats 
                class_name="container__display-stats --box"
                attr="yellow"
                data={`${populationPercentage.toLocaleString('de-DE')}%`}
                title="Población afectada"
                styles={darkMode}/>
            <Stats 
                class_name="container__display-stats"
                attr="half"
                data={infectedPerDayAverage.toLocaleString('de-DE')}
                title="Promedio de infectados por día"/>
            <Stats 
                class_name="container__display-stats"
                attr="half"
                data={deathsPerDayAverage.toLocaleString('de-DE')}
                title="Promedio de muertes por día"/>
        </section>
    )
};

export default DisplayStats;