import React from "react"

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.loadPageObject = this.loadConfabObject.bind(this)
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
        this.props.loadConfab(this.props.match.params.confabId)
    }

    // interaction handlers

    // displays, fields, and buttons with variable logic

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
                className="squad-up-button-joined"
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

    loadConfabObject() {
        const confabId = this.props.match.params.confabId
        const timeObject = this.props.confab
            ? this.props.convertDatetimeStringToObject(
                  this.props.confab.start_time
              )
            : null

        return this.props.confab
            ? {
                  host: this.props.confidants[this.props.confab.host_id]
                      .username,
                  day: timeObject["day"],
                  month: timeObject["month"],
                  date: timeObject["dateNum"],
                  hours:
                      timeObject["hour"].toString() +
                      "00 — " +
                      (timeObject["hour"] + 2).toString() +
                      "00",
                  location: this.props.shorterConurbationName(
                      this.props.conurbations[this.props.confab.location_id]
                          .name
                  ),
                  conurbation: this.props.restOfConurbationName(
                      this.props.conurbations[this.props.confab.location_id]
                          .name
                  ),
                  description: this.props.confab.description,
              }
            : {
                  host: "Loading Host",
                  day: "Loading Day",
                  month: "Loading Month",
                  date: "Loading Date",
                  hours: "Loading Hours",
                  location: "Loading Location Name",
                  conurbation: "Loading Conurbation",
                  description: "Loading Description",
              }
    }

    render() {
        // displays, fields and buttons with constant logic

        const confabObject = this.loadConfabObject()
        const host = confabObject.host
        const day = confabObject.day
        const month = confabObject.month
        const date = confabObject.date
        const hours = confabObject.hours
        const description = confabObject.description
        const location = confabObject.location
        const conurbation = confabObject.conurbation

        // if (this.props.confab) {
        //     const seatsRemaining =
        //         confab.max_capacity - confab.attendee_ids.length
        //     const relevantConflationArray = this.props.loggedIn
        //         ? this.generateRelevantConflationArray(
        //               this.props.conflations,
        //               confab.id,
        //               this.props.ccId
        //           )
        //         : null
        //     const conflationId =
        //         relevantConflationArray && relevantConflationArray.length > 0
        //             ? relevantConflationArray.pop().id
        //             : null
        //     const confabButton = conflationId
        //         ? this.confabLeaveButton
        //         : this.confabJoinButton
        //     let attendanceDisplay = conflationId
        //         ? this.amAttendingDisplay
        //         : this.notAttendingDisplay
        // } else {
        //     let seatsRemaining = 0
        //     let confabButton = (
        //         <div className="squad-up-button">
        //             <div className="visibility-shift">
        //                 <span>LOADING</span>
        //             </div>
        //         </div>
        //     )
        //     let attendanceDisplay = (
        //         <div className="attendance-status-attending">
        //             <div className="seats-left">LOADING</div>
        //             {/* <div className="fancy-graphic">LATER</div> */}
        //         </div>
        //     )
        // }

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
                                    {/* {attendanceDisplay(seatsRemaining)} */}
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
                            {/* {confabButton(confabId, conflationId)} */}

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
