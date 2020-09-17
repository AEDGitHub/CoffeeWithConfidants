/*
Next steps: build the thing
destructure props coming in
abstract away the coffee_event_detail 
*/

import React from "react"
import { Link } from "react-router-dom"

class CoffeeSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        // this.confabsListTest = this.confabsListTest.bind(this);
        this.placeHolderCardsTest = this.placeHolderCardsTest.bind(this)
    }

    componentDidMount() {
        if (!this.props.confabsAreLoaded) {
            this.props.loadConfabs()
        }
    }

    componentWillUnmount() {
        if (this.props.confabsAreLoaded) {
            this.props.unloadConfabs()
        }
    }

    // confabsListTest() {
    //     return this.props.confabs.map((confab, idx) => (
    //         <li key={confab.id}>{confab.description}</li>
    //     ))
    // }

    placeHolderCardsTest() {
        return [0, 1, 2, 3].map(() => (
            <div className="confab-card-container">
                <div className="confab-card">
                    <div className="card-top">
                        <div className="avatar-container">
                            <div className="img-container">
                                <div className="img"></div>
                            </div>
                            <div className="name">RYUJI</div>
                        </div>
                        <div className="time-container">
                            <div className="day">Sunday</div>
                            <div className="date">SEP 19</div>
                            <div className="time">14-1600</div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="attendance-status">
                        <div className="seats-left">3 SPOTS OPEN</div>
                        <div className="fancy-graphic"></div>
                    </div>
                    <div className="squad-up-button"></div>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <>
                <div className="coffeeschedule">
                    <div className="coffeeschedule-photo-container">
                        <div className="coffeeschedule-msg-container">
                            <div className="title-text">GOOD CONVERSATIONS</div>
                            <div className="subtitle-text">
                                THEY'RE HARD TO FIND.
                            </div>
                        </div>
                    </div>
                    <div className="coffeeschedule-content-container">
                        <div className="coffeeschedule-msg-container">
                            <div className="title-text">
                                Coffee With Confidants is coffee, with
                                confidants.
                            </div>
                            <div className="msg-text">
                                Ever find yourself asking why no one wants
                                change? This is the place to meet those who do.
                                For two hours, squad up at a cafe to conspire
                                about finding and exposing the fakers.
                                <br></br>
                                <br></br>
                                If none of these times work for you, why not{" "}
                                <Link
                                    to="/signup"
                                    className="coffeeschedule-signup-link"
                                >
                                    sign up
                                </Link>{" "}
                                and host your own confab?
                            </div>
                        </div>

                        <div className="coffeeschedule-confabs-container">
                            <div className="month-toggle">
                                <div className="month-msg">
                                    TEA TIMES IN FAKE MONTH (PH)
                                </div>
                            </div>
                            <div className="confab-grid-container">
                                <div className="collection-of-confabs-from-a-conurbation">
                                    <div className="conurbation-callout">
                                        Everdark Frozen Hellscape, Great Falls,
                                        Montana (PH)
                                    </div>
                                    {this.placeHolderCardsTest()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
        // return <ul>{this.confabsListTest()}</ul>
    }
}

export default CoffeeSchedule
