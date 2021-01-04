import React from "react"
import { Link } from "react-router-dom"

function NavLinks({ currentConfidant, logout }) {
	return (
		<nav>
			{generateLink("normal", "/coffee_times", "COFFEE TIMES")}
			{variableLinks()}
		</nav>
	)

	function generateLink(linkClass, url, displayText, onClickFunction = null) {
		return (
			<Link
				className={`link-${linkClass}`}
				to={url}
				onClick={onClickFunction}
			>
				{displayText}
			</Link>
		)
	}

	function variableLinks() {
		return currentConfidant ? (
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
	}
}

export default NavLinks
