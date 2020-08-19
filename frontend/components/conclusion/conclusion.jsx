import React from "react";
import Link from "react-router-dom";

class Conclusion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkArray: [
                "About",
                "Coffee Times",
                "GitHub",
                "LinkedIn",
                "AngelList",
                "",
                "Acknowledgements",
                "Thank You",
            ],
            currentContent: "About",
        };
        // this.selectedContent = this.selectedContent.bind(this);
        this.footerLinks = this.footerLinks.bind(this);
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.target.value,
            });
    }

    footerLinks() {
        return this.state.linkArray.map((link, idx) => (
            <li key={idx}>{link}</li>
        ));
    }

    // selectedContect() {}

    render() {
        return (
            <>
                <footer>
                    <div className="footer-container">
                        <ul className="footer-links">{this.footerLinks()}</ul>
                        <div className="footer-content">
                            {/* {this.selectedContent} */}
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Conclusion;
