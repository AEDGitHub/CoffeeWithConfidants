import React from "react";
import { Link } from "react-router-dom";
import NavLinksContainer from "./navlinks/navlinks_container";

class Concenter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <>
                <header>
                    <div className="header-inner">
                        <Link className="link-logo" to="/">
                            Coffee With Confidants
                        </Link>
                        <NavLinksContainer />
                    </div>
                </header>
            </>
        );
    }
}

export default Concenter;
