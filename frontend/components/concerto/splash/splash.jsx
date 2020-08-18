import React from "react";
import { Link } from "react-router-dom";

const Splash = () => (
    <>
        <div className="splash-container">
            <div className="splash-msg">
                <div className="title-text">Life will change</div>
                <div className="subtitle-text">
                    If you wake up, get up, and get out there.
                </div>
                <div className="main-index-button">
                    <Link to="/coffee_times" className="splash-index-button">
                        FIND A CONFAB
                    </Link>
                </div>
            </div>
        </div>
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
                    Wax poetic for two hours, no dedicated topics.
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
    </>
);

export default Splash;
