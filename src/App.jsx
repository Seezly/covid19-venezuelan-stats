import React, { useState, useEffect } from 'react';
import DisplayStats from './components/DisplayStats';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {

    const [data, setData] = useState(null);
    
    useEffect(() => {

        const fetchData = async () => {
            const fetch = await fetch('');
            const data = await fetch.json();

            return data
        };

        setData(fetchData());
    }, []);

    return (
        <>
            <Header />
            <DisplayStats stats={data}/>
            <Footer />
        </>
    )
};

export default App;