import React, { useState, useEffect } from 'react';
import DisplayStats from './components/DisplayStats';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <Header />
            <DisplayStats />
            <Footer />
        </>
    )
};

export default App;