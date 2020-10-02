import React from "react"

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.confabDescription = this.confabDescription.bind(this)
    }

    // lifecycle methods

    componentDidMount() {
        // console.log(this.props.match.params.confabId)
        this.props.loadConfab(this.props.match.params.confabId)
    }

    // interaction handlers

    // displays, fields, and buttons with variable logic

    confabDescription(confabId) {
        // return this.props.confabs[confabId].description
    }

    render() {
        // displays, fields and buttons with constant logic

        // const description = confab.description
        const confabId = this.props.match.params.confabId
        const thisConfabDescription = this.props.confab
            ? this.props.confab.description
            : " "

        return (
            <>
                <div className="eventshow">
                    <div className="eventshow-main-container">
                        <div className="eventshow-confab-column">
                            <div className="eventshow-confab-info-container">
                                <div className="eventshow-confab-info">
                                    <div className="eventshow-confab-info-mainmsg"></div>
                                    <hr></hr>
                                    <div className="eventshow-confab-info-date"></div>
                                    <div className="eventshow-confab-info-time"></div>
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
                                {confabId}
                            </div>
                            <div className="eventshow-confidant-avatar-container"></div>
                            <div className="eventshow-confidant-about-container">
                                {thisConfabDescription}
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
