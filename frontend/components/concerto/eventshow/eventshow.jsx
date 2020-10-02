import React from "react"

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.loadPageObject = this.loadPageObject.bind(this)
    }

    // lifecycle methods

    componentDidMount() {
        this.props.loadConfab(this.props.match.params.confabId)
    }

    // interaction handlers

    // displays, fields, and buttons with variable logic

    loadPageObject() {
        const timeObject = this.props.confab
            ? this.props.convertDatetimeStringToObject(
                  this.props.confab.start_time
              )
            : null

        return this.props.confab
            ? {
                  day: timeObject["day"],
                  date: timeObject["month"],
                  description: this.props.confab.description,
              }
            : {
                  day: "Loading Day",
                  date: "Loading Date",
                  description: "Loading Description",
              }
    }

    render() {
        // displays, fields and buttons with constant logic

        const pageObject = this.loadPageObject()

        return (
            <>
                <div className="eventshow">
                    <div className="eventshow-main-container">
                        <div className="eventshow-confab-column">
                            <div className="eventshow-confab-info-container">
                                <div className="eventshow-confab-info">
                                    <div className="eventshow-confab-info-mainmsg">
                                        JOIN hostname FOR COFFEE
                                    </div>
                                    <hr></hr>
                                    <div className="eventshow-confab-info-date">
                                        Saturday, Oct 10
                                    </div>
                                    <div className="eventshow-confab-info-time">
                                        2000 — 2200
                                    </div>
                                    <div className="eventshow-confab-info-location">
                                        Something something hellscape
                                    </div>
                                    <div className="eventshow-confab-info-url">
                                        http://herokuapp.coffeewithconfidants.com
                                    </div>
                                    <div className="eventshow-confab-info-referral">
                                        Can't make it? Know someone who can?
                                        Send them the link!
                                    </div>
                                    <hr></hr>
                                    <div className="eventshow-confab-info-seats-left">
                                        5 SEATS LEFT!
                                    </div>
                                </div>
                            </div>
                            <div className="eventshow-confab-button-container">
                                <div className="squad-up-button">
                                    <div className="visibility-shift">
                                        <span>JOIN CONFAB</span>
                                    </div>
                                </div>
                            </div>

                            <div className="eventshow-confab-rant">
                                <div className="eventshow-confab-rant-mainmsg">
                                    WHAT EVEN IS COFFEE?
                                </div>
                                <br></br>
                                <div className="eventshow-confab-rant-submsg">
                                    Coffee is a delightful substance that's
                                    going to go extinct because human beings
                                    continue to mercilessly proliferate and are
                                    destroying the environment in which coffee
                                    grows!
                                </div>
                            </div>
                        </div>
                        <div className="eventshow-confidant-column">
                            <div className="eventshow-confidant-greeting-container">
                                {/* {confabId} */}Meet your Host, hostName.
                            </div>
                            <div className="eventshow-confidant-avatar-container"></div>
                            <div className="eventshow-confidant-about-container">
                                {pageObject["description"]}
                            </div>
                            <div className="eventshow-confidant-outro-container">
                                No Mo Rules
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// EventShow.defaultProps = {
//     confabDescription: "Something",
// }

export default EventShow
