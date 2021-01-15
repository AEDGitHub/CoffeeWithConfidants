import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Conclusion() {
	const [content, setContent] = useState('About')

	const generateButton = (buttonName) => {
		return (
			<div>
				<button
					onClick={(e) => setContent(e.target.value)}
					value={buttonName}
				>
					{buttonName}
				</button>
			</div>
		)
	}

	const generateOffsiteLink = (linkName, linkUrl) => {
		return (
			<div>
				<a target="_blank" rel="noopener noreferrer" href={linkUrl}>
					{linkName}
				</a>
			</div>
		)
	}

	const determineContent = () => {
		switch (content) {
			case 'About':
				return (
					<div>
						<p>
							Coffee With Confidants is all about making our reality less
							contrived. In the digital age, we're more "connected" than
							we've ever been, but we're also increasingly forced to hide
							behind masks of our own construction by conspirators who
							would do anything to keep us from exposing their crimes.
						</p>
						<br />
						<p>
							We're not doing anything new. We're providing a means to
							confabulate with others in a way that would've been
							unnecessary 20 years ago. So squad up, make your plans, and
							let us start the game.{' '}
							<a
								href="https://youtu.be/5FG85wVSV3o"
								className="last-surprise"
								target="_blank"
								rel="noopener noreferrer"
							>
								♫ They'll never see it coming... ♫
							</a>
						</p>
					</div>
				)
			case 'Acknowledgements':
				return (
					<div>
						<p>
							Persona 5 and all related intellectual property belongs
							solely to Atlus.
						</p>
						<br />
						<p>
							More people helped me with this project than I have room to
							acknowledge here, but I'd be remiss to not directly mention
							my project advisor Lina, my circle leader Joe, and my
							career coach Sami.
						</p>
						<br />
						<p>
							Where I shone, it was due to their insights and to those of
							the amazing people I find myself fortunate enough to be
							surrounded by; where I faltered, it was due to my own thick
							skull.
						</p>
					</div>
				)
			// case 'Thank You':
			// 	return <div>THANKS FAM</div>
			default:
				return <div>SOMETHING'S GONE HORRIBLY WRONG</div>
		}
	}

	const coffeeTimes = (
		<div>
			<Link to="/coffee_times">Coffee Times</Link>
		</div>
	)

	const github = generateOffsiteLink('GitHub', 'https://github.com/AEDGitHub')

	const linkedin = generateOffsiteLink(
		'LinkedIn',
		'https://www.linkedin.com/in/arndtericdaniel/'
	)

	const angellist = generateOffsiteLink(
		'AngelList',
		'https://angel.co/u/eric-daniel-arndt'
	)

	return (
		<footer id="conclusion">
			<div className="footer-container">
				<div className="footer-links">
					{generateButton('About')}
					{coffeeTimes}
					{github}
					{linkedin}
					{angellist}
					<br></br>
					{generateButton('Acknowledgements')}
					{/* {generateButton('Thank You')} */}
				</div>
				<div className="footer-content">{determineContent()}</div>
			</div>
		</footer>
	)
}

export default Conclusion
