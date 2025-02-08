// pawsnap\src\pages\Home.jsx
import React from 'react';
import AnimalSelector from "../components/AnimalSelector"

function Home() {
    return (
        <>
        <div className="home-page"></div>
            <h1>Pawsnap</h1>
            <h2>The Random Animal Image Generator</h2>
            <p>✨ Recharge your dopamine with cute animal pictures!</p>
            <AnimalSelector />
        </>
    )
}

export default Home;
