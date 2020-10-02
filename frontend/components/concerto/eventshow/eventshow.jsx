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
                                    <div className="eventshow-confab-info-mainmsg"></div>
                                    <hr></hr>
                                    <div className="eventshow-confab-info-date">
                                        {pageObject["date"]}
                                    </div>
                                    <div className="eventshow-confab-info-time">
                                        {pageObject["day"]}
                                    </div>
                                    <div className="eventshow-confab-info-location"></div>
                                    <div className="eventshow-confab-info-url"></div>
                                    <div className="eventshow-confab-info-referral"></div>
                                    <hr></hr>
                                    <div className="eventshow-confab-info-seats-left"></div>
                                </div>
                            </div>
                            <div className="eventshow-confab-rant"></div>
                        </div>
                        <div className="eventshow-confidant-column">
                            <div className="eventshow-confidant-greeting-container">
                                {/* {confabId} */}
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
