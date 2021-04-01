import React, { useState, useEffect } from 'react';
import DisplayStats from './components/DisplayStats';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from "./components/Loader";

const App = () => {

    const [stats, setStats] = useState();
    const [timeline, setTimeline] = useState();
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {

        let stats, timeline;

        Promise.all([fetch('https://covid19.patria.org.ve/api/v1/summary'), fetch('https://covid19.patria.org.ve/api/v1/timeline')])
        .then(async responses => {
            stats = await responses[0].json();
            timeline = await responses[1].json();

            setStats(stats);
            setTimeline(timeline);
            setLoader(false);
        });

    }, []);

    return (
        <>
            {
                loader ?
                <Loader />
                :
                <>
                    <Header />
                    <DisplayStats
                        stats={stats}
                        timeline={timeline}/>
                    <Footer />
                </>
            }
        </>
    )
};

export default App;