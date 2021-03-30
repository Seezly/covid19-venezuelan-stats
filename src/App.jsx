import React, { useState, useEffect } from 'react';
import DisplayStats from './components/DisplayStats';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {

    const [stats, setStats] = useState();
    const [timeline, setTimeline] = useState();
    const [render, setRender] = useState(false);
    
    useEffect(() => {

        let stats, timeline;

        Promise.all([fetch('https://covid19.patria.org.ve/api/v1/summary'), fetch('https://covid19.patria.org.ve/api/v1/timeline')])
        .then(async responses => {
            stats = await responses[0].json();
            timeline = await responses[1].json();

            setStats(stats);
            setTimeline(timeline);
            setRender(true);
        });

    }, []);

    return (
        <>
            <Header />
            {
                render &&
                <DisplayStats
                stats={stats}
                timeline={timeline}/>
            }
            <Footer />
        </>
    )
};

export default App;