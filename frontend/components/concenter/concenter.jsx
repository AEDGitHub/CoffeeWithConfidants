import React from "react";
import NavLinksContainer from "./navlinks/navlinks_container";

class Concenter extends React.Component {
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <>
                <header>
                    <div className="header-inner">
                        <nav className="nav-left">Coffee With Confidants Logo</nav>
                        <NavLinksContainer />
                    </div>
                </header>
            </>
        )
    }
}

export default Concenter;