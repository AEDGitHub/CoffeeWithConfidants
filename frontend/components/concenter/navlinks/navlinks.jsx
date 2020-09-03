import React from "react"
import { Link } from "react-router-dom"

const NavLinks = ({ currentConfidant, logout }) => {
    const constantLinks = (
        <Link className="link-normal" to="/coffee_times">
            COFFEE TIMES
        </Link>
    )

    const variableLinks = currentConfidant ? (
        <>
            <a className="link-normal" onClick={logout}>
                SIGN OUT
            </a>
        </>
    ) : (
        <>
            <Link className="link-normal" to="/signin">
                SIGN IN
            </Link>
            <Link className="link-signup" to="/signup">
                SIGN UP
            </Link>
        </>
    )

    return (
        <nav>
            {constantLinks}
            {variableLinks}
        </nav>
    )
}

export default NavLinks
