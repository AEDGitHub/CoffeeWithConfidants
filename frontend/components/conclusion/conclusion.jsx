import React from "react"
import { Link } from "react-router-dom"

class Conclusion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // linkArray: [
            //     "About",
            //     "Coffee Times",
            //     "GitHub",
            //     "LinkedIn",
            //     "AngelList",
            //     "",
            //     "Acknowledgements",
            //     "Thank You",
            // ],
            content: "About",
        }
        this.determineContent = this.determineContent.bind(this)
        // this.footerLinks = this.footerLinks.bind(this);
        // this.update = this.update.bind(this);
    }

    componentDidUpdate() {
        // this.determineContent();
    }

    update(field) {
        // debugger
        return (e) =>
            this.setState({
                [field]: e.target.value,
            })
    }

    // footerLinks() {
    //     return this.state.linkArray.map((link, idx) => (
    //         <li key={idx}>{link}</li>
    //     ));
    // }

    determineContent() {
        // debugger
        let stateContent = this.state.content
        switch (stateContent) {
            case "About":
                return <div>This is the about stuff.</div>
            case "Acknowledgements":
                return <div>These are the acknowledgements.</div>
            default:
                return <div>SOMETHING'S GONE HORRIBLY WRONG</div>
        }
    }

    render() {
        // debugger

        const about = (
            <li>
                <a onClick={this.update("content")} value="About">
                    About
                </a>
            </li>
        )

        const coffee = (
            <li>
                <Link to="/coffee_times">Coffee Times</Link>
            </li>
        )

        const github = (
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/AEDGitHub"
                >
                    GitHub
                </a>
            </li>
        )

        const linkedin = (
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/eric-arndt-9850281a5/"
                >
                    LinkedIn
                </a>
            </li>
        )

        const angellist = (
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://angel.co/u/eric-daniel-arndt"
                >
                    AngelList
                </a>
            </li>
        )

        const acknowledge = (
            <li>
                <a onClick={this.update("content")} value="Acknowledgements">
                    Acknowledgements
                </a>
            </li>
        )

        const thanks = (
            <li>
                <a onClick={this.update("content")} value="Thank You">
                    Thank You
                </a>
            </li>
        )

        return (
            <>
                <footer>
                    <div className="footer-container">
                        <ul className="footer-links">
                            {about}
                            {coffee}
                            {github}
                            {linkedin}
                            {angellist}
                            <li></li>
                            {acknowledge}
                            {thanks}
                        </ul>
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
