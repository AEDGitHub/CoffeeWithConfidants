/*
Next steps: build the thing
destructure props coming in
*/

import React from "react"
import { Link } from "react-router-dom"

class CoffeeSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        // this.confabsListTest = this.confabsListTest.bind(this);
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
                                Ever found yourself asking "Why does nobody want
                                change?" This is the place to meet those who do.
                                For two hours, squad up at a cafe with a given
                                host to talk about finding and exposing the
                                fakers. If none of these times work for you, why
                                not{" "}
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
                            <div className="month-msg"></div>
                            <div className="confab-grid-container"></div>
                        </div>
                    </div>
                </div>
            </>
        )
        // return <ul>{this.confabsListTest()}</ul>
    }
}

export default CoffeeSchedule
