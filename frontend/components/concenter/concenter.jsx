import React from "react"
import { Link } from "react-router-dom"
import NavLinks from "./navlinks/navlinks_container"

function Concenter() {
	return (
		<header>
			<div className="header-container">
				<Link className="link-logo" to="/">
					Coffee With Confidants
				</Link>
				<NavLinks />
			</div>
		</header>
	)
}

export default Concenter
