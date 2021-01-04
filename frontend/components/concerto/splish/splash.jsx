import React from "react"
import { Link } from "react-router-dom"

function Splash() {
	const firstSplashRunnerItem = generateSplashRunnerItem(
		"Show up to a confab",
		"You and some allies-to-be squad up."
	)

	const secondSplashRunnerItem = generateSplashRunnerItem(
		"Converse about anything",
		"Wax poetic for two hours."
	)

	const thirdSplashRunnerItem = generateSplashRunnerItem(
		"Observe the outcome",
		"All done. Wasn't that fun?"
	)

	return (
		<div className="splash">
			<div className="splash-photo-container">
				<div className="splash-msg-container">
					<div className="title-text">Life will change</div>
					<div className="subtitle-text">
						If you wake up, get up, and get out there.
					</div>
					<Link to="/coffee_times">
						<div className="main-index-button">FIND A CONFAB</div>
					</Link>
				</div>
			</div>
			<div className="splash-runner-container">
				<div className="splash-runner">
					{firstSplashRunnerItem}
					{secondSplashRunnerItem}
					{thirdSplashRunnerItem}
				</div>
			</div>
		</div>
	)

	function generateSplashRunnerItem(headline, subtext) {
		return (
			<div className="splash-runner-item">
				<div className="splash-runner-item-headline">{headline}</div>
				<div className="splash-runner-item-subtext">{subtext}</div>
			</div>
		)
	}
}

export default Splash
