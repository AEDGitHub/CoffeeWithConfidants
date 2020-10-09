import React from "react"
import { Link } from "react-router-dom"

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: false,
            currentUserAttending: false,
            hostName: "",
            day: "",
            month: "",
            date: "",
            hours: "",
            location: "",
            conurbation: "",
            description: "",
            seatsRemaining: 0,
        }
        this.updateConfabDataInState = this.updateConfabDataInState.bind(this)
        // this.generateAttendanceDisplay = this.generateAttendanceDisplay.bind(
        //     this
        // )
        // this.generateConfabButton = this.generateConfabButton.bind(this)
    }

    // lifecycle methods

    componentDidMount() {
        this.props.loadConfab(this.props.match.params.confabId).then(() => {
            if (this.props.confab) {
                this.updateConfabDataInState(this.props.confab)
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.confab && prevProps.confab !== this.props.confab) {
            this.updateConfabDataInState(this.props.confab)
        }
    }

    componentWillUnmount() {}

    // interaction handlers

    // displays, fields, and buttons with variable logic

    updateConfabDataInState(confab) {
        const timeObject = this.props.convertDatetimeStringToObject(
            confab.start_time
        )
        this.setState({
            date: timeObject["dateNum"],
            day: timeObject["day"],
            description: confab.description,
            hostName: this.props.confidants[confab.host_id].username,
            hours:
                timeObject["hour"].toString() +
                "00 — " +
                (timeObject["hour"] + 2).toString() +
                "00",
            month: timeObject["month"],
            seatsRemaining: confab.max_capacity - confab.attendee_ids.length,
        })
    }

    // generateAttendanceDisplay(conflationId, seatsRemaining) {
    //     return conflationId ? (
    //         <div className="attendance-status-attending">
    //             <div className="seats-left">SEE YOU THERE!</div>
    //             {/* <div className="fancy-graphic">LATER</div> */}
    //         </div>
    //     ) : (
    //         <div className="attendance-status-not-attending">
    //             <div className="seats-left">{seatsRemaining} SPOTS OPEN!</div>
    //             {/* <div className="fancy-graphic">LATER</div> */}
    //         </div>
    //     )
    // }

    // generateConfabJoinButton(confabId) {
    //     return this.props.loggedIn ? (
    //         <div
    //             className="squad-up-button"
    //             onClick={() => this.props.joinConfab(confabId)}
    //         >
    //             <div className="visibility-shift">
    //                 <span>JOIN CONFAB</span>
    //             </div>
    //         </div>
    //     ) : (
    //         <Link to="/signin/#" className="squad-up-button">
    //             <div className="visibility-shift">
    //                 <span>JOIN CONFAB</span>
    //             </div>
    //         </Link>
    //     )
    // }

    // generateConfabLeaveButton(confabId, conflationId) {
    //     return (
    //         <div
    //             className="squad-up-button-joined"
    //             onClick={() => this.props.leaveConfab(confabId, conflationId)}
    //         >
    //             <div className="visibility-shift">
    //                 <span>LEAVE CONFAB</span>
    //             </div>
    //         </div>
    //     )
    // }

    // determineConfabButton(confabId, conflationId) {
    //     return this.props.loggedIn ? <div></div> : <div></div>
    // }

    // loadConfabIntoState() {
    //

    //     this.setState({
    //         data: true,
    //
    //         location: this.props.shorterConurbationName(
    //             this.props.conurbations[this.props.confab.location_id].name
    //         ),
    //         conurbation: this.props.restOfConurbationName(
    //             this.props.conurbations[this.props.confab.location_id].name
    //         ),

    //

    //     })
    // }

    render() {
        // displays, fields and buttons with constant logic

        const confabId = this.props.match.params.confabId
        const hostName = this.state.hostName
        const day = this.state.day
        const month = this.state.month
        const date = this.state.date
        const hours = this.state.hours
        const description = this.state.description
        const location = this.state.location
        const conurbation = this.state.conurbation

        // const confabButtonObject = this.loadConfabButtonObject(conflationId)
        // const seatsRemaining = this.state.seatsRemaining
        // let attendanceDisplay = this.generateAttendanceDisplay(
        //     conflationId,
        //     seatsRemaining
        // )
        // let confabButton = this.generateConfabButton(confabId, conflationId)

        return (
            <>
                <div className="eventshow">
                    <div className="eventshow-main-container">
                        <div className="eventshow-confab-column">
                            <div className="eventshow-confab-info-container">
                                <div className="eventshow-confab-info">
                                    <div className="eventshow-confab-info-mainmsg">
                                        JOIN {hostName.toUpperCase()} FOR COFFEE
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
                                        STATIC SEATS LEFT!
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
                                Meet your Host, {hostName}.
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
