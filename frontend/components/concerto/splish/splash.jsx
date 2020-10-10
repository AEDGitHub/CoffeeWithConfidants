import React from "react"
import { Link } from "react-router-dom"

const Splash = () => (
    <>
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
                    <div className="splash-runner-item">
                        <div className="splash-runner-item-headline">
                            Show up to a confab
                        </div>
                        <div className="splash-runner-item-subtext">
                            You and some allies-to-be squad up.
                        </div>
                    </div>
                    <div className="splash-runner-item">
                        <div className="splash-runner-item-headline">
                            Converse about anything
                        </div>
                        <div className="splash-runner-item-subtext">
                            Wax poetic for two hours.
                        </div>
                    </div>
                    <div className="splash-runner-item">
                        <div className="splash-runner-item-headline">
                            Observe the outcome
                        </div>
                        <div className="splash-runner-item-subtext">
                            All done. Wasn't that fun?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Splash
