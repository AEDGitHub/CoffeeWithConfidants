/* //todo: Fill in filler text. I'd actually like to use a container here to 
map in the social media info and the placeholder text for about, thanks and
acknowledgements sections
*/

import React from "react"
import { Link } from "react-router-dom"

class Conclusion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "About",
        }
        this.generateButton = this.generateButton.bind(this)
        this.generateOffsiteLink = this.generateOffsiteLink.bind(this)
        this.determineContent = this.determineContent.bind(this)
        this.updateContent = this.updateContent.bind(this)
    }

    generateButton(buttonName) {
        return (
            <div>
                <button onClick={this.updateContent} value={buttonName}>
                    {buttonName}
                </button>
            </div>
        )
    }

    generateOffsiteLink(linkName, linkUrl) {
        return (
            <div>
                <a target="_blank" rel="noopener noreferrer" href={linkUrl}>
                    {linkName}
                </a>
            </div>
        )
    }

    updateContent(e) {
        e.preventDefault()
        this.setState({ content: e.target.value })
    }

    determineContent() {
        switch (this.state.content) {
            case "About":
                return (
                    <div>
                        <p>PLACEHOLDER ABOUT TEXT</p>
                    </div>
                )
            case "Acknowledgements":
                return <div>HERE ARE SOME ACKNOWLEDGEMENTS</div>
            case "Thank You":
                return <div>THANKS FAM</div>
            default:
                return <div>SOMETHING'S GONE HORRIBLY WRONG</div>
        }
    }

    render() {
        const coffeeTimes = (
            <div>
                <Link to="/coffee_times">Coffee Times</Link>
            </div>
        )

        const github = this.generateOffsiteLink(
            "GitHub",
            "https://github.com/AEDGitHub"
        )

        const linkedin = this.generateOffsiteLink(
            "LinkedIn",
            "https://www.linkedin.com/in/eric-arndt-9850281a5/"
        )

        const angellist = this.generateOffsiteLink(
            "AngelList",
            "https://angel.co/u/eric-daniel-arndt"
        )

        return (
            <>
                <footer>
                    <div className="footer-container">
                        <div className="footer-links">
                            {this.generateButton("About")}
                            {coffeeTimes}
                            {github}
                            {linkedin}
                            {angellist}
                            <br></br>
                            {this.generateButton("Acknowledgements")}
                            {this.generateButton("Thank You")}
                        </div>
                        <div className="footer-content">
                            {this.determineContent()}
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Conclusion
