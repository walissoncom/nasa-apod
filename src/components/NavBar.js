import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link to="/" className="link"><ArrowBackIcon /></Link>
            </ul>
        </div>
    )
}

export default NavBar;