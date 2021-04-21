import React from 'react';
import Chart from './Chart';
import './display_charts.css';

const DisplayCharts = (props) => {

    const { darkMode, timeline } = props;

    const recovered = timeline.map(el => el['Recovered']['New']);
    const deaths = timeline.map(el => el['Deaths']['New']);
    const infected = timeline.map(el => el['Confirmed']['New']);

    const data = [];

    let infectedNum = 0,
        recoveredNum = 0,
        deathsNum = 0;

    for (let i = 0; i < timeline.length; i++) {

        infectedNum += infected[i];
        recoveredNum += recovered[i];
        deathsNum += deaths[i];

        let obj = {
            'Día': `Día ${i}`,
            'Infectados': infectedNum,
            'Recuperados': recoveredNum,
            'Muertes': deathsNum
        };
        
        data.push(obj);
    }

    return (
        <section 
            className="container display-charts"
            style={darkMode ? {color: 'hsl(165, 100%, 97%)', backgroundColor: 'black', transition: 'all .5s'} : {}}>
            <Chart 
                data={data}
                colors={['#4f98ca', "#50d890", '#DA3E52']}
                height='100%'
                dataKey={['Día', 'Infectados', 'Recuperados', 'Muertes']}
                title='Mapa lineal de infectados, recuperados y muertos'
                filteredDataKey={['Infectados', 'Recuperados', 'Muertes']}/>
        </section>
    )
};

export default DisplayCharts;