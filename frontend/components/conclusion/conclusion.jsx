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
                        <p>
                            Coffee With Confidants is all about making our
                            reality less contrived. In the digital age, we're
                            more "connected" than we've ever been, but we're
                            also increasingly forced to hide behind masks of our
                            own construction by conspirators who would do
                            anything to keep us from exposing their crimes.
                        </p>
                        <br></br>
                        <p>
                            We're not doing anything new. We're providing a
                            means to confabulate with others in a way that
                            would've been unnecessary 20 years ago. So squad up,
                            make your plans, and let us start the game.{" "}
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
                            {/* {this.generateButton("Acknowledgements")}
                            {this.generateButton("Thank You")} */}
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
