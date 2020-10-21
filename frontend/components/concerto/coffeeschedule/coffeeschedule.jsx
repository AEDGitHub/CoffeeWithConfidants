import React from "react"
import Modal from "react-modal"
import CoffeeScheduleEvent from "./coffee_schedule_event/coffeeschedule_event"

import { Link } from "react-router-dom"

class CoffeeSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            // confabDescription: "",
            // confabMaxCapacity: null,
            // confabStartTime: null,
            // confabEndTime: null,
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
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
        this.createConfabModal = this.createConfabModal.bind(this)
    }

    componentDidMount() {
        this.props.loadConfabs()
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     const hostId = this.props.ccId
    //     const description = this.state.confabDescription
    //     const maxCapacity = this.state.confabMaxCapacity
    //     const startTimeUTCSecondsSinceUnixEpoch = null
    //     const endTimeUTCSecondsSinceUnixEpoch = null

    //     const confab = {
    //         host_id: hostId,
    //         description: description,
    //         max_capacity: maxCapacity,
    //     }
    //     this.props.processConfabForm(confab)
    //     this.setState({ modalOpen: false })
    // }

    monthDisplay() {
        const rightNow = new Date()
        const month = this.props
            .convertDatetimeStringToObject(rightNow.toString())
            ["fullMonth"].toString()
            .toUpperCase()

        return (
            <div className="month-toggle">
                <div className="month-msg">TEA TIMES IN {month}</div>
                <div
                    className="create-confab-container"
                    onClick={() => this.setState({ modalOpen: true })}
                >
                    <div className="create-confab-button">+ CREATE CONFAB</div>
                </div>
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

    createConfabModal() {
        const modalOpen = this.state.modalOpen
        return (
            <div className="coffeeschedule-create-confab-modal-container">
                <Modal
                    overlayClassName="create-confab-modal-overlay"
                    className="create-confab-modal-content"
                    isOpen={modalOpen}
                    onRequestClose={() => this.setState({ modalOpen: false })}
                >
                    <div
                        className="confab-modal-exit-button"
                        onClick={() => this.setState({ modalOpen: false })}
                    >
                        ×
                    </div>
                    <div className="confab-modal-content-container">
                        <div className="confab-modal-title">Create Confab</div>
                        <div className="confab-modal-subhead">
                            Fill in the details below and get ready to conspire!
                        </div>
                        <form>TBD</form>
                    </div>
                </Modal>
            </div>
        )
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
                <div className="coffeeschedule" id="coffeeschedule">
                    {photoContainer}
                    <div className="coffeeschedule-content-container">
                        {messageContainer}
                        <div className="coffeeschedule-confabs-container">
                            {this.monthDisplay()}
                            {this.displaysAllConurbationCallouts()}
                        </div>
                    </div>
                    {this.createConfabModal()}
                </div>
            </>
        )
    }
}

export default CoffeeSchedule
