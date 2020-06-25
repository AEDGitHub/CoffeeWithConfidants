import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({currentConfidant, logout}) => {

    const navLinksDisplay = currentConfidant ? (
        <>
            <a className="link-normal" onClick={logout}>SIGN OUT</a>
        </>
    ) : (
        <>
            <Link className="link-normal" to="/signin">SIGN IN</Link>
            <Link className="link-signup" to="/signup">SIGN UP</Link>
        </>
    );

    return(
        <nav>
            {navLinksDisplay}
        </nav>
    )
}

export default NavLinks;