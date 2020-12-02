import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

EventShow = ({
	ccId,
	confab,
	confidants,
	conurbations,
	loggedIn,
	convertDatetimeStringToObject,
	determineWhetherConfidantIsAttending,
	restOfConurbationName,
	shorterConurbationName,
}) => {
	const [conurbation, setConurbation] = useState("")
	const [currentUserAttending, setCurrentUserAttending] = useState(false)
	const [date, setDate] = useState("")
	const [day, setDay] = useState("")
	const [description, setDescription] = useState("")
	const [hostName, setHostName] = useState("")
	const [hours, setHours] = useState("")
	const [location, setLocation] = useState("")
	const [month, setMonth] = useState("")
	const [seatsRemaining, setSeatsRemaining] = useState(0)

	// componentDidMount() {
	// 	this.props.loadConfab(this.props.match.params.confabId).then(() => {
	// 		if (this.props.confab) {
	// 			this.updateConfabDataInState(this.props.confab)
	// 		}
	// 	})
	// }

	// componentDidUpdate(prevProps) {
	// 	if (this.props.confab && prevProps.confab !== this.props.confab) {
	// 		this.updateConfabDataInState(this.props.confab)
	// 	}
	// }

	const updateConfabDataInState = (confab) => {
		const dateObject = new Date(confab.start_time_in_ms)
		const timeObject = props.convertDatetimeStringToObject(dateObject)
		const currentUserAttending = props.determineWhetherConfidantIsAttending(
			confab,
			props.ccId
		)

		setState({
			currentUserAttending: currentUserAttending,
			date: timeObject["dateNum"],
			day: timeObject["day"],
			description: confab.description,
			hostName: props.confidants[confab.host_id].username,
			hours:
				timeObject["hour"].toString() +
				"00 — " +
				(timeObject["hour"] + 2).toString() +
				"00",
			month: timeObject["month"],
			seatsRemaining: confab.max_capacity - confab.attendee_ids.length,
		})
	}

	const attendanceDisplay = (seatsRemaining) => {
		return state.currentUserAttending ? (
			<div className="attendance-status-attending">
				<div className="seats-left">SEE YOU THERE!</div>
			</div>
		) : (
			<div className="attendance-status-not-attending">
				<div className="seats-left">{seatsRemaining} SPOTS OPEN!</div>
			</div>
		)
	}

	const confabJoinButton = (confabId) => {
		return (
			<div
				className="squad-up-button"
				onClick={() => {
					props.joinConfab(confabId),
						setState({ currentUserAttending: true })
				}}
			>
				<div className="visibility-shift">
					<span>JOIN CONFAB</span>
				</div>
			</div>
		)
	}

	const confabLeaveButton = (confabId, confidantId) => {
		return (
			<div
				className="squad-up-button-joined"
				onClick={() => {
					props.leaveConfab(confabId, confidantId),
						setState({ currentUserAttending: false })
				}}
			>
				<div className="visibility-shift">
					<span>LEAVE CONFAB</span>
				</div>
			</div>
		)
	}

	const determineConfabButton = (confabId) => {
		return props.loggedIn ? (
			state.currentUserAttending ? (
				confabLeaveButton(confabId, props.ccId)
			) : (
				confabJoinButton(confabId)
			)
		) : (
			<Link to="/signin/#" className="squad-up-button">
				<div className="visibility-shift">
					<span>JOIN CONFAB</span>
				</div>
			</Link>
		)
	}

	const confabId = props.match.params.confabId
	const hostName = state.hostName
	const day = state.day
	const month = state.month
	const date = state.date
	const hours = state.hours
	const description = state.description
	const location = state.location
	const conurbation = state.conurbation
	const url = `herokuapp.coffeewithconfidants.com/#${props.match.url}`
	const confabButton = determineConfabButton(confabId)
	const attendanceDisplay = attendanceDisplay(state.seatsRemaining)

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
									{url}
								</div>
								<div className="eventshow-confab-info-referral">
									Can't make it?
									<br></br>
									Know someone who can?
									<br></br>
									Send them the link!
								</div>
								<hr></hr>
								{attendanceDisplay}
							</div>
						</div>
						<div className="eventshow-confab-button-container">
							{confabButton}
						</div>

						<div className="eventshow-confab-rant">
							<div className="eventshow-confab-rant-mainmsg">
								WHAT EVEN IS COFFEE?
							</div>
							<br></br>
							<div className="eventshow-confab-rant-submsg">
								Coffee is a delightful substance that's going to
								go extinct because human beings continue to
								mercilessly proliferate and are thereby
								destroying the environment in which coffee
								grows!
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
					</div>
				</div>
			</div>
		</>
	)
}

// class EventShow extends React.Component {
//    constructor(props) {
//       super(props)
//       this.state = {
//          conurbation: "",
//          currentUserAttending: false,
//          date: "",
//          day: "",
//          description: "",
//          hostName: "",
//          hours: "",
//          location: "",
//          month: "",
//          seatsRemaining: 0,
//       }
//       this.attendanceDisplay = this.attendanceDisplay.bind(this)
//       this.confabJoinButton = this.confabJoinButton.bind(this)
//       this.confabLeaveButton = this.confabLeaveButton.bind(this)
//       this.determineConfabButton = this.determineConfabButton.bind(this)
//       this.updateConfabDataInState = this.updateConfabDataInState.bind(this)
//    }

//    componentDidMount() {
//       this.props.loadConfab(this.props.match.params.confabId).then(() => {
//          if (this.props.confab) {
//             this.updateConfabDataInState(this.props.confab)
//          }
//       })
//    }

//    componentDidUpdate(prevProps) {
//       if (this.props.confab && prevProps.confab !== this.props.confab) {
//          this.updateConfabDataInState(this.props.confab)
//       }
//    }

//    updateConfabDataInState(confab) {
//       const dateObject = new Date(confab.start_time_in_ms)
//       const timeObject = this.props.convertDatetimeStringToObject(dateObject)
//       const currentUserAttending = this.props.determineWhetherConfidantIsAttending(
//          confab,
//          this.props.ccId
//       )

//       this.setState({
//          currentUserAttending: currentUserAttending,
//          date: timeObject["dateNum"],
//          day: timeObject["day"],
//          description: confab.description,
//          hostName: this.props.confidants[confab.host_id].username,
//          hours:
//             timeObject["hour"].toString() +
//             "00 — " +
//             (timeObject["hour"] + 2).toString() +
//             "00",
//          month: timeObject["month"],
//          seatsRemaining: confab.max_capacity - confab.attendee_ids.length,
//       })
//    }

//    attendanceDisplay(seatsRemaining) {
//       return this.state.currentUserAttending ? (
//          <div className="attendance-status-attending">
//             <div className="seats-left">SEE YOU THERE!</div>
//          </div>
//       ) : (
//             <div className="attendance-status-not-attending">
//                <div className="seats-left">{seatsRemaining} SPOTS OPEN!</div>
//             </div>
//          )
//    }

//    confabJoinButton(confabId) {
//       return (
//          <div
//             className="squad-up-button"
//             onClick={() => {
//                this.props.joinConfab(confabId),
//                   this.setState({ currentUserAttending: true })
//             }}
//          >
//             <div className="visibility-shift">
//                <span>JOIN CONFAB</span>
//             </div>
//          </div>
//       )
//    }

//    confabLeaveButton(confabId, confidantId) {
//       return (
//          <div
//             className="squad-up-button-joined"
//             onClick={() => {
//                this.props.leaveConfab(confabId, confidantId),
//                   this.setState({ currentUserAttending: false })
//             }}
//          >
//             <div className="visibility-shift">
//                <span>LEAVE CONFAB</span>
//             </div>
//          </div>
//       )
//    }

//    determineConfabButton(confabId) {
//       return this.props.loggedIn ? (
//          this.state.currentUserAttending ? (
//             this.confabLeaveButton(confabId, this.props.ccId)
//          ) : (
//                this.confabJoinButton(confabId)
//             )
//       ) : (
//             <Link to="/signin/#" className="squad-up-button">
//                <div className="visibility-shift">
//                   <span>JOIN CONFAB</span>
//                </div>
//             </Link>
//          )
//    }

//    render() {
//       const confabId = this.props.match.params.confabId
//       const hostName = this.state.hostName
//       const day = this.state.day
//       const month = this.state.month
//       const date = this.state.date
//       const hours = this.state.hours
//       const description = this.state.description
//       const location = this.state.location
//       const conurbation = this.state.conurbation
//       const url = `herokuapp.coffeewithconfidants.com/#${this.props.match.url}`
//       const confabButton = this.determineConfabButton(confabId)
//       const attendanceDisplay = this.attendanceDisplay(
//          this.state.seatsRemaining
//       )

//       return (
//          <>
//             <div className="eventshow">
//                <div className="eventshow-main-container">
//                   <div className="eventshow-confab-column">
//                      <div className="eventshow-confab-info-container">
//                         <div className="eventshow-confab-info">
//                            <div className="eventshow-confab-info-mainmsg">
//                               JOIN {hostName.toUpperCase()} FOR COFFEE
// 									</div>
//                            <hr></hr>
//                            <div className="eventshow-confab-info-date">
//                               {day}, {month} {date}
//                            </div>
//                            <div className="eventshow-confab-info-time">
//                               {hours}
//                            </div>
//                            <div className="eventshow-confab-info-location">
//                               {location}
//                            </div>
//                            <div className="eventshow-confab-info-conurbation">
//                               {conurbation}
//                            </div>
//                            <div className="eventshow-confab-info-url">
//                               {url}
//                            </div>
//                            <div className="eventshow-confab-info-referral">
//                               Can't make it?
// 										<br></br>
// 										Know someone who can?
// 										<br></br>
// 										Send them the link!
// 									</div>
//                            <hr></hr>
//                            {attendanceDisplay}
//                         </div>
//                      </div>
//                      <div className="eventshow-confab-button-container">
//                         {confabButton}
//                      </div>

//                      <div className="eventshow-confab-rant">
//                         <div className="eventshow-confab-rant-mainmsg">
//                            WHAT EVEN IS COFFEE?
// 								</div>
//                         <br></br>
//                         <div className="eventshow-confab-rant-submsg">
//                            Coffee is a delightful substance that's
//                            going to go extinct because human beings
//                            continue to mercilessly proliferate and are
//                            thereby destroying the environment in which
//                            coffee grows!
// 								</div>
//                      </div>
//                   </div>
//                   <div className="eventshow-confidant-column">
//                      <div className="eventshow-confidant-greeting-container">
//                         Meet your Host, {hostName}.
// 							</div>
//                      <div className="eventshow-confidant-avatar-container"></div>
//                      <div className="eventshow-confidant-about-container">
//                         {description}
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </>
//       )
//    }
// }

export default EventShow
