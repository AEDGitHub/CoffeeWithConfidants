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

	const constantLinks = generateLink(
		"normal",
		"/coffee_times",
		"COFFEE TIMES"
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
			{constantLinks}
			{variableLinks}
		</nav>
	)
}

export default NavLinks
