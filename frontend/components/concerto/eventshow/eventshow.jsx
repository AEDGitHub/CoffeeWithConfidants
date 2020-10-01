import React from "react"

class EventShow extends React.Component {
    constructor(props) {
        super(props)
    }

    // lifecycle methods

    componentDidMount() {
        if (!this.props.confabsAreLoaded) {
            this.props.loadConfabs()
        }
    }

    // interaction handlers

    // displays, fields, and buttons with variable logic

    render() {
        // displays, fields and buttons with constant logic
        const confabId = this.props.match.params.confabId

        return (
            <>
                <div className="eventshow">
                    <div className="eventshow-main-container">
                        <div className="eventshow-confab-column">
                            <div className="eventshow-confab-info-container">
                                <div className="eventshow-confab-info">
                                    <div className="eventshow-confab-info-mainmsg"></div>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="eventshow-confab-rant"></div>
                        </div>
                        <div className="eventshow-confidant-column">
                            <div className="eventshow-confidant-greeting-container">
                                Meet your host, Ryuji!
                            </div>
                            <div className="eventshow-confidant-avatar-container"></div>
                            <div className="eventshow-confidant-about-container">
                                Hey, I'm Ryuji
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

export default EventShow
