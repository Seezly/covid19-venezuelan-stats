import React, { useState, useEffect } from 'react';
import DisplayStats from './components/DisplayStats';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from "./components/Loader";

const App = () => {

    const [stats, setStats] = useState();
    const [timeline, setTimeline] = useState();
    const [loader, setLoader] = useState(true);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('Dark Mode') === 'Yes' ? true : false);
    
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

    const handleChange = (e) => {
        if (e.target.checked === true) {
            localStorage.setItem('Dark Mode', 'Yes');
            console.log('si')
        } else {
            localStorage.setItem('Dark Mode', 'No');
            console.log('no')
        }

        if (localStorage.getItem('Dark Mode') === 'Yes') {
            setDarkMode(true);
            console.log('negro')
        } else {
            setDarkMode(false);
            console.log('blanco')
        }
    };

    return (
        <>
            {
                loader ?
                <Loader 
                    darkMode={darkMode}/>
                :
                <>
                    <Header 
                        handleChange={handleChange}
                        darkMode={darkMode}/>
                    <DisplayStats
                        stats={stats}
                        timeline={timeline}
                        darkMode={darkMode}/>
                    <Footer 
                        darkMode={darkMode}/>
                </>
            }
        </>
    )
};

export default App;