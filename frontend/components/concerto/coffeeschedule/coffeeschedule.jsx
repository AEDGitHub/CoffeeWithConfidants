/*
todo: build the thing 
todo: destructure props coming in 
*/

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
        this.generateRelevantConflationArray = this.generateRelevantConflationArray.bind(
            this
        )
        this.amAttendingDisplay = this.amAttendingDisplay.bind(this)
        this.notAttendingDisplay = this.notAttendingDisplay.bind(this)
    }

    // lifecycle methods

    componentDidMount() {
        if (!this.props.confabsAreLoaded) {
            this.props.loadConfabs()
        }
    }

    componentWillUnmount() {
        if (this.props.confabsAreLoaded) {
            this.props.unloadConfabs()
        }
        if (this.props.conurbationsAreLoaded) {
            this.props.unloadConurbations()
        }
    }

    // interaction handlers

    // displays, fields, and buttons with variable logic

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
                {/* <div className="fancy-graphic">LATER</div> */}
            </div>
        )
    }

    notAttendingDisplay(seatsRemaining) {
        return (
            <div className="attendance-status-not-attending">
                <div className="seats-left">{seatsRemaining} SPOTS OPEN!</div>
                {/* <div className="fancy-graphic">LATER</div> */}
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

    confabLeaveButton(confabId, conflationId) {
        return (
            <div
                className="squad-up-button"
                onClick={() => this.props.leaveConfab(confabId, conflationId)}
            >
                <div className="visibility-shift">
                    <span>LEAVE CONFAB</span>
                </div>
            </div>
        )
    }

    generateRelevantConflationArray(conflations, confabId, ccId) {
        return this.props.filterConflationsByConfabIdAndAttendeeId(
            conflations,
            confabId,
            ccId
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
            const hostName = this.props.confidants[confab.host_id].username
            const relevantConflationArray = this.props.loggedIn
                ? this.generateRelevantConflationArray(
                      this.props.conflations,
                      confab.id,
                      this.props.ccId
                  )
                : null
            const conflationId =
                relevantConflationArray && relevantConflationArray.length > 0
                    ? relevantConflationArray.pop().id
                    : null
            const confabButton = conflationId
                ? this.confabLeaveButton
                : this.confabJoinButton
            let attendanceDisplay = conflationId
                ? this.amAttendingDisplay
                : this.notAttendingDisplay

            return (
                <div className="confab-card-container" key={confab.id}>
                    <CoffeeScheduleEvent
                        confabId={confab.id}
                        description={confab.description}
                        hostName={hostName}
                        startTime={confab.start_time}
                        // endTime={confab.end_time}
                        avatarId="3" //todo: this can be made dynamic later, like {this.props.confidants[confab.host_id].avatarId} once that's in place
                        conflationId={conflationId}
                        confabButton={confabButton}
                        attendanceDisplay={attendanceDisplay}
                        seatsRemaining={seatsRemaining}
                    />
                </div>
            )
        })
    }

    render() {
        //displays, fields, and buttons with constant logic

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
