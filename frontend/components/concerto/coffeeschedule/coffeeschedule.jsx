import React from "react"
import CoffeeScheduleEvent from "./coffee_schedule_event/coffeeschedule_event"

import { Link } from "react-router-dom"

class CoffeeSchedule extends React.Component {
    constructor(props) {
        super(props)

        this.displaysAllConurbationCallouts = this.displaysAllConurbationCallouts.bind(
            this
        )
        this.displaysAllConfabsPerConurbation = this.displaysAllConfabsPerConurbation.bind(
            this
        )
        this.monthDisplay = this.monthDisplay.bind(this)
        this.confabJoinButton = this.confabJoinButton.bind(this)
        this.confabLeaveButton = this.confabLeaveButton.bind(this)
        this.amAttendingDisplay = this.amAttendingDisplay.bind(this)
        this.notAttendingDisplay = this.notAttendingDisplay.bind(this)
    }

    componentDidMount() {
        this.props.loadConfabs()
    }

    monthDisplay() {
        const rightNow = new Date()
        const month = this.props
            .convertDatetimeStringToObject(rightNow.toString())
            ["fullMonth"].toString()
            .toUpperCase()

        return (
            <div className="month-toggle">
                <div className="month-msg">TEA TIMES IN {month}</div>
            </div>
        )
    }

    displaysAllConurbationCallouts() {
        return this.props.conurbations.map((conurbation) => (
            <div className="confab-grid-container" key={conurbation.id}>
                <div className="collection-of-confabs-from-a-conurbation">
                    <div className="conurbation-callout-container">
                        <div className="conurbation-callout">
                            {this.props.shorterConurbationName(
                                conurbation.name
                            )}
                        </div>
                    </div>
                    {this.displaysAllConfabsPerConurbation(conurbation.id)}
                </div>
            </div>
        ))
    }

    amAttendingDisplay() {
        return (
            <div className="attendance-status-attending">
                <div className="seats-left">SEE YOU THERE!</div>
            </div>
        )
    }

    notAttendingDisplay(seatsRemaining) {
        return (
            <div className="attendance-status-not-attending">
                <div className="seats-left">{seatsRemaining} SPOTS OPEN!</div>
            </div>
        )
    }

    confabJoinButton(confabId) {
        return this.props.loggedIn ? (
            <div
                className="squad-up-button"
                onClick={() => this.props.joinConfab(confabId)}
            >
                <div className="visibility-shift">
                    <span>JOIN CONFAB</span>
                </div>
            </div>
        ) : (
            <Link to="/signin/#" className="squad-up-button">
                <div className="visibility-shift">
                    <span>JOIN CONFAB</span>
                </div>
            </Link>
        )
    }

    confabLeaveButton(confabId, confidantId) {
        return (
            <div
                className="squad-up-button-joined"
                onClick={() => this.props.leaveConfab(confabId, confidantId)}
            >
                <div className="visibility-shift">
                    <span>LEAVE CONFAB</span>
                </div>
            </div>
        )
    }

    displaysAllConfabsPerConurbation(conurbationId) {
        const relevantConfabs = this.props.filterConfabsByConfabLocationId(
            this.props.confabs,
            conurbationId
        )
        return relevantConfabs.map((confab) => {
            const seatsRemaining =
                confab.max_capacity - confab.attendee_ids.length
            const hostName = this.props.confidants[
                confab.host_id
            ].username.toUpperCase()
            const currentConfidantAttending = this.props.determineWhetherConfidantIsAttending(
                confab,
                this.props.ccId
            )
            const timeObject = this.props.convertDatetimeStringToObject(
                confab.start_time
            )
            const day = timeObject["day"].toUpperCase()
            const date =
                timeObject["month"].toUpperCase() + " " + timeObject["dateNum"]

            const hours =
                timeObject["hour"].toString() +
                " — " +
                (timeObject["hour"] + 2).toString() +
                "00"

            const confabButton = currentConfidantAttending
                ? this.confabLeaveButton
                : this.confabJoinButton
            const attendanceDisplay = currentConfidantAttending
                ? this.amAttendingDisplay
                : this.notAttendingDisplay

            return (
                <div className="confab-card-container" key={confab.id}>
                    <CoffeeScheduleEvent
                        attendanceDisplay={attendanceDisplay}
                        avatarId="3"
                        ccId={this.props.ccId}
                        confabButton={confabButton}
                        confabId={confab.id}
                        day={day}
                        date={date}
                        description={confab.description}
                        hours={hours}
                        hostName={hostName}
                        seatsRemaining={seatsRemaining}
                    />
                </div>
            )
        })
    }

    render() {
        const photoContainer = (
            <div className="coffeeschedule-photo-container">
                <div className="coffeeschedule-msg-container">
                    <div className="title-text">GOOD CONVERSATIONS</div>
                    <div className="subtitle-text">THEY'RE HARD TO FIND.</div>
                </div>
            </div>
        )

        const messageContainer = (
            <div className="coffeeschedule-msg-container">
                <div className="title-text">
                    Coffee With Confidants is coffee, with confidants.
                </div>
                <div className="msg-text">
                    Ever find yourself asking why no one wants change? This is
                    the place to meet those who do. For two hours, squad up at a
                    cafe to conspire about finding and exposing the fakers.
                    <br></br>
                    <br></br>
                    If none of these times work for you, why not{" "}
                    {this.props.signUpLink} and host your own confab?
                </div>
            </div>
        )

        return (
            <>
                <div className="coffeeschedule">
                    {photoContainer}
                    <div className="coffeeschedule-content-container">
                        {messageContainer}
                        <div className="coffeeschedule-confabs-container">
                            {this.monthDisplay()}
                            {this.displaysAllConurbationCallouts()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CoffeeSchedule
