import React from "react"
import { Link } from "react-router-dom"

const Splash = () => {
	const generateSplashRunnerItem = (headline, subtext) => (
		<div className="splash-runner-item">
			<div className="splash-runner-item-headline">{headline}</div>
			<div className="splash-runner-item-subtext">{subtext}</div>
		</div>
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
					{generateSplashRunnerItem(
						"Show up to a confab",
						"You and some allies-to-be squad up."
					)}
					{generateSplashRunnerItem(
						"Converse about anything",
						"Wax poetic for two hours."
					)}
					{generateSplashRunnerItem(
						"Observe the outcome",
						"All done. Wasn't that fun?"
					)}
				</div>
			</div>
		</div>
	)
}

export default Splash
