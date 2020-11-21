import React from "react"
import { Link } from "react-router-dom"

const NavLinks = ({ currentConfidant, logout }) => {
	const generateLink = (
		linkClass,
		url,
		displayText,
		onClickFunction = null
	) => (
		<Link
			className={`link-${linkClass}`}
			to={url}
			onClick={onClickFunction}
		>
			{displayText}
		</Link>
	)

	const variableLinks = currentConfidant ? (
		<>
			{generateLink("normal", "/confidants/edit", "CONTROL")}
			{generateLink("normal", "/", "SIGN OUT", logout)}
		</>
	) : (
		<>
			{generateLink("normal", "/signin", "SIGN IN")}
			{generateLink("signup", "/signup", "SIGN UP")}
		</>
	)

	return (
		<nav>
			{generateLink("normal", "/coffee_times", "COFFEE TIMES")}
			{variableLinks}
		</nav>
	)
}

export default NavLinks
