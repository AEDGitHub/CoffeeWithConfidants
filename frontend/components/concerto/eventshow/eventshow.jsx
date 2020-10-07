import React from "react"
import { Link } from "react-router-dom"

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUserAttending: false,
            host: "",
            day: "",
            month: "",
            date: "",
            hours: "",
            location: "",
            conurbation: "",
            description: "",
            seatsRemaining: 0,
            conflationId: null,
        }
        this.loadConfabIntoState = this.loadConfabIntoState.bind(this)
        // this.loadConfabButtonObject = this.loadConfabButtonObject.bind(this)
        // this.confabJoinButton = this.confabJoinButton.bind(this)
        // this.confabLeaveButton = this.confabLeaveButton.bind(this)
        this.generateRelevantConflationArray = this.generateRelevantConflationArray.bind(
            this
        )

        this.props.loadConfab(this.props.match.params.confabId)
        // this.amAttendingDisplay = this.amAttendingDisplay.bind(this)
        // this.notAttendingDisplay = this.notAttendingDisplay.bind(this)
    }

    // lifecycle methods

    componentDidMount() {
        console.log("Component Did Mount")
        this.props.loadConfab(this.props.match.params.confabId).then(() => {
            if (this.props.confab) {
                this.loadConfabIntoState()
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.confab && this.props.confab) {
            this.loadConfabIntoState()
            console.log("Component Did Update")
        }
    }

    componentWillUnmount() {}

    // interaction handlers

    // displays, fields, and buttons with variable logic

    generateAttendanceDisplay(conflationId, seatsRemaining) {
        return conflationId ? (
            <div className="attendance-status-attending">
                <div className="seats-left">SEE YOU THERE!</div>
                {/* <div className="fancy-graphic">LATER</div> */}
            </div>
        ) : (
            <div className="attendance-status-not-attending">
                <div className="seats-left">{seatsRemaining} SPOTS OPEN!</div>
                {/* <div className="fancy-graphic">LATER</div> */}
            </div>
        )
    }

    generateConfabButton(confabId, conflationId) {
        return conflationId ? (
            <div
                className="squad-up-button-joined"
                onClick={() => this.props.leaveConfab(confabId, conflationId)}
            >
                <div className="visibility-shift">
                    <span>LEAVE CONFAB</span>
                </div>
            </div>
        ) : this.props.loggedIn ? (
            <div
                className="squad-up-button"
                onClick={() => {
                    this.props.joinConfab(confabId)
                    // changeBoolean()
                }}
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

    generateRelevantConflationArray(conflations, confabId, ccId) {
        return this.props.filterConflationsByConfabIdAndAttendeeId(
            conflations,
            confabId,
            ccId
        )
    }

    loadConfabIntoState() {
        const timeObject = this.props.convertDatetimeStringToObject(
            this.props.confab.start_time
        )
        const relevantConflationArray = this.props.loggedIn
            ? this.generateRelevantConflationArray(
                  this.props.conflations,
                  this.props.match.params.confabId,
                  this.props.ccId
              )
            : null
        const conflationId =
            relevantConflationArray && relevantConflationArray.length > 0
                ? relevantConflationArray.pop().id
                : null

        this.setState({
            host: this.props.confidants[this.props.confab.host_id].username,
            day: timeObject["day"],
            month: timeObject["month"],
            date: timeObject["dateNum"],
            hours:
                timeObject["hour"].toString() +
                "00 — " +
                (timeObject["hour"] + 2).toString() +
                "00",
            location: this.props.shorterConurbationName(
                this.props.conurbations[this.props.confab.location_id].name
            ),
            conurbation: this.props.restOfConurbationName(
                this.props.conurbations[this.props.confab.location_id].name
            ),
            description: this.props.confab.description,
            conflationId: conflationId,
            seatsRemaining:
                this.props.confab.max_capacity -
                this.props.confab.attendee_ids.length,
        })
    }

    render() {
        console.log("Render")
        // displays, fields and buttons with constant logic

        const confabId = this.props.match.params.confabId
        const host = this.state.host
        const day = this.state.day
        const month = this.state.month
        const date = this.state.date
        const hours = this.state.hours
        const description = this.state.description
        const location = this.state.location
        const conurbation = this.state.conurbation
        const conflationId = this.state.conflationId

        // const confabButtonObject = this.loadConfabButtonObject(conflationId)
        const seatsRemaining = this.state.seatsRemaining
        // let confabButton = confabButtonObject.confabButton ? (
        //     confabButtonObject.confabButton(confabId, conflationId)
        // ) : (
        //     <div className="squad-up-button-joined">
        //         <div className="visibility-shift">
        //             <span>LOADING</span>
        //         </div>
        //     </div>
        // )
        // const attendanceDisplay = confabButtonObject.attendanceDisplay ? (
        //     confabButtonObject.attendanceDisplay(seatsRemaining)
        // ) : (
        //     <div className="attendance-status-attending">
        //         <div className="seats-left">LOADING</div>
        //         {/* <div className="fancy-graphic">LATER</div> */}
        //     </div>
        // )

        return (
            <>
                <div className="eventshow">
                    <div className="eventshow-main-container">
                        <div className="eventshow-confab-column">
                            <div className="eventshow-confab-info-container">
                                <div className="eventshow-confab-info">
                                    <div className="eventshow-confab-info-mainmsg">
                                        JOIN {host.toUpperCase()} FOR COFFEE
                                    </div>
                                    <hr></hr>
                                    <div className="eventshow-confab-info-date">
                                        {day}, {month} {date}
                                    </div>
                                    <div className="eventshow-confab-info-time">
                                        {hours}
                                    </div>
                                    <div className="eventshow-confab-info-location">
                                        {location}
                                    </div>
                                    <div className="eventshow-confab-info-conurbation">
                                        {conurbation}
                                    </div>
                                    <div className="eventshow-confab-info-url">
                                        http://herokuapp.coffeewithconfidants.com
                                    </div>
                                    <div className="eventshow-confab-info-referral">
                                        Can't make it? Know someone who can?
                                        Send them the link!
                                    </div>
                                    <hr></hr>
                                    {/* {attendanceDisplay} */}
                                    <div className="eventshow-confab-info-seats-left">
                                        5 SEATS LEFT!
                                    </div>
                                </div>
                            </div>
                            <div className="eventshow-confab-button-container">
                                {/* {confabButton} */}
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
                                    thereby destroying the environment in which
                                    coffee grows!
                                </div>
                            </div>
                        </div>
                        <div className="eventshow-confidant-column">
                            <div className="eventshow-confidant-greeting-container">
                                Meet your Host, {host}.
                            </div>
                            <div className="eventshow-confidant-avatar-container"></div>
                            <div className="eventshow-confidant-about-container">
                                {description}
                            </div>
                            {/* <div className="eventshow-confidant-outro-container">
                                Under Construction
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EventShow
