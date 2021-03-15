import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <h1>See into the stars!</h1>
            <Link to="/nasaphoto" className="home-link">Get on board!</Link>
        </div>
    )
}

export default Home;