import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import CoffeeScheduleEvent from "./coffee_schedule_event/coffeeschedule_event"
import { Link } from "react-router-dom"
import {
	getWeekdayStringFromDateObject,
	getMonthStringFromDateObject,
	getTruncatedMonthStringFromDateObject,
	getPrefixHoursStringFromDateObject,
	getFullHoursStringFromDateObject,
} from "../../../utils/time_utils"

function CoffeeSchedule({
	confidants,
	conurbations,
	confabs,
	ccId,
	loggedIn,
	signUpLink,
	shorterConurbationName,
	determineWhetherConfidantIsAttending,
	filterConfabsByConfabLocationId,
	convertDatetimeStringToObject,
	loadConfabs,
	unloadConfabs,
	joinConfab,
	leaveConfab,
	createConfab,
}) {
	const [modalOpen, setModalOpen] = useState(false)
	const [confabDescription, setConfabDescription] = useState("")
	const [confabMaxCapacity, setConfabMaxCapacity] = useState(3)
	const [confabStartDate, setConfabStartDate] = useState("")
	const [confabStartTime, setConfabStartTime] = useState("12:00")

	useEffect(() => {
		loadConfabs()
		return function cleanup() {
			unloadConfabs()
		}
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()

		const hostId = ccId
		const description = confabDescription
		const maxCapacity = confabMaxCapacity
		const dateString = confabStartDate + "T" + confabStartTime
		const startTimeInMilliseconds = new Date(dateString).getTime()
		const endTimeInMilliseconds = startTimeInMilliseconds + 7200000

		const conurbationId = confidants[hostId].location_id

		const confab = {
			host_id: hostId,
			description: description,
			max_capacity: maxCapacity,
			start_time_in_ms: startTimeInMilliseconds,
			end_time_in_ms: endTimeInMilliseconds,
		}

		createConfab(conurbationId, confab)
		setModalOpen(true)
	}

	const monthDisplay = () => {
		const rightNow = new Date()
		const currentMonth = getMonthStringFromDateObject(
			rightNow
		).toUpperCase()

		return (
			<div className="month-toggle">
				<div className="month-msg">TEA TIMES IN {currentMonth}</div>
				<div
					className="create-confab-container"
					onClick={() => setModalOpen(true)}
				>
					{loggedIn ? (
						<div className="create-confab-button">
							+ CREATE CONFAB
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		)
	}

	const displaysAllConurbationCallouts = () => {
		return conurbations.map((conurbation) => (
			<div className="confab-grid-container" key={conurbation.id}>
				<div className="collection-of-confabs-from-a-conurbation">
					<div className="conurbation-callout-container">
						<div className="conurbation-callout">
							{shorterConurbationName(conurbation.name)}
						</div>
					</div>
					{displaysAllConfabsPerConurbation(conurbation.id)}
				</div>
			</div>
		))
	}

	const amAttendingDisplay = () => {
		return (
			<div className="attendance-status-attending">
				<div className="seats-left">SEE YOU THERE!</div>
			</div>
		)
	}

	const notAttendingDisplay = (seatsRemaining) => {
		return (
			<div className="attendance-status-not-attending">
				<div className="seats-left">{seatsRemaining} SPOTS OPEN!</div>
			</div>
		)
	}

	const confabJoinButton = (confabId) => {
		return loggedIn ? (
			<div
				className="squad-up-button"
				onClick={() => joinConfab(confabId)}
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

	const confabLeaveButton = (confabId, confidantId) => {
		return (
			<div
				className="squad-up-button-joined"
				onClick={() => leaveConfab(confabId, confidantId)}
			>
				<div className="visibility-shift">
					<span>LEAVE CONFAB</span>
				</div>
			</div>
		)
	}

	const displaysAllConfabsPerConurbation = (conurbationId) => {
		const relevantConfabs = filterConfabsByConfabLocationId(
			confabs,
			conurbationId
		)
		return relevantConfabs.map((confab) => {
			const seatsRemaining =
				confab.max_capacity - confab.attendee_ids.length
			const hostId = confab.host_id
			const hostConfidant = confidants[hostId]
			const hostName = hostConfidant.username.toUpperCase()
			const hostAvatarId = hostConfidant.avatar_id
			const currentConfidantAttending = determineWhetherConfidantIsAttending(
				confab,
				ccId
			)
			const startTimeInMs = confab.start_time_in_ms
			const dateObj = new Date(confab.start_time_in_ms)
			const timeObj = convertDatetimeStringToObject(dateObj)
			// const day = timeObj["day"].toUpperCase()
			const dayStr = getWeekdayStringFromDateObject(dateObj)
			const day = dayStr.toUpperCase()
			const monthStr = getTruncatedMonthStringFromDateObject(dateObj)
			const month = monthStr.toUpperCase()
			// const truncatedMonthStr = monthStr.slice(0, 3)
			const date = month + " " + timeObj["dateNum"]

			const hours =
				timeObj["hour"].toString() +
				" — " +
				(timeObj["hour"] + 2).toString() +
				"00"

			const confabButton = currentConfidantAttending
				? confabLeaveButton
				: confabJoinButton
			const attendanceDisplay = currentConfidantAttending
				? amAttendingDisplay
				: notAttendingDisplay

			return (
				<div className="confab-card-container" key={confab.id}>
					<CoffeeScheduleEvent
						attendanceDisplay={attendanceDisplay}
						avatarId={hostAvatarId}
						hostId={hostId}
						ccId={ccId}
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

	const createConfabModal = () => {
		return (
			<div className="coffeeschedule-create-confab-modal-container">
				<Modal
					overlayClassName="create-confab-modal-overlay"
					className="create-confab-modal-content"
					isOpen={modalOpen}
					onRequestClose={() => setModalOpen(false)}
				>
					<div
						className="confab-modal-exit-button"
						onClick={() => setModalOpen(false)}
					>
						×
					</div>
					<div className="confab-modal-content-container">
						<div className="confab-modal-title">Create Confab</div>
						<div className="confab-modal-subhead">
							Fill in the details below and get ready to conspire!
						</div>
						<form
							className="confab-modal-form"
							onSubmit={handleSubmit}
						>
							<div className="form-input-areas-container">
								<div className="form-fields-container">
									<div className="form-field-title">
										DESCRIPTION
									</div>
									<input
										required
										type="text"
										className="form-field-input"
										onChange={(e) =>
											setConfabDescription(e.target.value)
										}
										placeholder="Write a description!"
										value={confabDescription}
									/>
								</div>
								<div className="form-fields-container">
									<div className="form-field-title">DATE</div>
									<input
										required
										type="date"
										className="form-field-input"
										onChange={(e) =>
											setConfabStartDate(e.target.value)
										}
										value={confabStartDate}
										placeholder={new Date().toString()}
									/>
								</div>
								<div className="form-fields-container">
									<div className="form-half-fields-container">
										<div className="half-field-area">
											<div className="half-field-area-title">
												TIME
											</div>
											<div className="half-field-area-input">
												<select
													required={true}
													onChange={(e) =>
														setConfabStartTime(
															e.target.value
														)
													}
												>
													<option
														disabled="disabled"
														value=""
													>
														Please select a time
													</option>
													{[
														"10:00",
														"11:00",
														"12:00",
														"13:00",
														"14:00",
														"15:00",
														"16:00",
														"17:00",
														"18:00",
														"19:00",
														"20:00",
														"21:00",
														"22:00",
													].map((time, idx) => (
														<option
															value={time}
															key={idx}
														>
															{time}
														</option>
													))}
												</select>
											</div>
										</div>
										<div className="half-field-area">
											<div className="half-field-area-title">
												MAXIMUM CAPACITY
											</div>
											<input
												required
												type="number"
												className="half-field-area-input"
												onChange={(e) =>
													setConfabMaxCapacity(
														e.target.value
													)
												}
												value={confabMaxCapacity}
												min={3}
												max={7}
											/>
										</div>
									</div>
								</div>
							</div>
							<input
								className="confab-modal-submit-button"
								type="submit"
								value="CREATE CONFAB"
							/>
						</form>
					</div>
				</Modal>
			</div>
		)
	}

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
				Ever find yourself asking why no one wants change? This is the
				place to meet those who do. For two hours, squad up at a cafe to
				conspire about finding and exposing the fakers.
				<br></br>
				<br></br>
				If none of these times work for you, why not {signUpLink} and
				host your own confab?
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
						{monthDisplay()}
						{displaysAllConurbationCallouts()}
					</div>
				</div>
				{createConfabModal()}
			</div>
		</>
	)
}

//class method, antiquated

// class CoffeeSchedule extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			modalOpen: false,
// 			confabDescription: "",
// 			confabMaxCapacity: 3,
// 			confabStartDate: "",
// 			confabStartTime: "12:00",
// 		}
// 		this.handleSubmit = this.handleSubmit.bind(this)
// 		this.displaysAllConurbationCallouts = this.displaysAllConurbationCallouts.bind(
// 			this
// 		)
// 		this.displaysAllConfabsPerConurbation = this.displaysAllConfabsPerConurbation.bind(
// 			this
// 		)
// 		this.monthDisplay = this.monthDisplay.bind(this)
// 		this.confabJoinButton = this.confabJoinButton.bind(this)
// 		this.confabLeaveButton = this.confabLeaveButton.bind(this)
// 		this.amAttendingDisplay = this.amAttendingDisplay.bind(this)
// 		this.notAttendingDisplay = this.notAttendingDisplay.bind(this)
// 		this.createConfabModal = this.createConfabModal.bind(this)
// 	}

// 	componentDidMount() {
// 		this.props.loadConfabs()
// 	}

// 	update(field) {
// 		return (e) => this.setState({ [field]: e.target.value })
// 	}

// 	handleSubmit(e) {
// 		e.preventDefault()

// 		const hostId = this.props.ccId
// 		const description = this.state.confabDescription
// 		const maxCapacity = this.state.confabMaxCapacity
// 		const dateString =
// 			this.state.confabStartDate + "T" + this.state.confabStartTime
// 		const startTimeInMilliseconds = new Date(dateString).getTime()
// 		const endTimeInMilliseconds = startTimeInMilliseconds + 7200000

// 		const conurbationId = this.props.confidants[hostId].location_id

// 		const confab = {
// 			host_id: hostId,
// 			description: description,
// 			max_capacity: maxCapacity,
// 			start_time_in_ms: startTimeInMilliseconds,
// 			end_time_in_ms: endTimeInMilliseconds,
// 		}

// 		this.props.createConfab(conurbationId, confab)
// 		this.setState({ modalOpen: false })
// 	}

// 	monthDisplay() {
// 		const rightNow = new Date()
// 		const month = this.props
// 			.convertDatetimeStringToObject(rightNow.toString())
// 			["fullMonth"].toString()
// 			.toUpperCase()
// 		const loggedIn = this.props.loggedIn

// 		return (
// 			<div className="month-toggle">
// 				<div className="month-msg">TEA TIMES IN {month}</div>
// 				<div
// 					className="create-confab-container"
// 					onClick={() => this.setState({ modalOpen: true })}
// 				>
// 					{loggedIn ? (
// 						<div className="create-confab-button">
// 							+ CREATE CONFAB
// 						</div>
// 					) : (
// 						<></>
// 					)}
// 				</div>
// 			</div>
// 		)
// 	}

// 	displaysAllConurbationCallouts() {
// 		return this.props.conurbations.map((conurbation) => (
// 			<div className="confab-grid-container" key={conurbation.id}>
// 				<div className="collection-of-confabs-from-a-conurbation">
// 					<div className="conurbation-callout-container">
// 						<div className="conurbation-callout">
// 							{this.props.shorterConurbationName(
// 								conurbation.name
// 							)}
// 						</div>
// 					</div>
// 					{this.displaysAllConfabsPerConurbation(conurbation.id)}
// 				</div>
// 			</div>
// 		))
// 	}

// 	amAttendingDisplay() {
// 		return (
// 			<div className="attendance-status-attending">
// 				<div className="seats-left">SEE YOU THERE!</div>
// 			</div>
// 		)
// 	}

// 	notAttendingDisplay(seatsRemaining) {
// 		return (
// 			<div className="attendance-status-not-attending">
// 				<div className="seats-left">{seatsRemaining} SPOTS OPEN!</div>
// 			</div>
// 		)
// 	}

// 	confabJoinButton(confabId) {
// 		return this.props.loggedIn ? (
// 			<div
// 				className="squad-up-button"
// 				onClick={() => this.props.joinConfab(confabId)}
// 			>
// 				<div className="visibility-shift">
// 					<span>JOIN CONFAB</span>
// 				</div>
// 			</div>
// 		) : (
// 			<Link to="/signin/#" className="squad-up-button">
// 				<div className="visibility-shift">
// 					<span>JOIN CONFAB</span>
// 				</div>
// 			</Link>
// 		)
// 	}

// 	confabLeaveButton(confabId, confidantId) {
// 		return (
// 			<div
// 				className="squad-up-button-joined"
// 				onClick={() => this.props.leaveConfab(confabId, confidantId)}
// 			>
// 				<div className="visibility-shift">
// 					<span>LEAVE CONFAB</span>
// 				</div>
// 			</div>
// 		)
// 	}

// 	displaysAllConfabsPerConurbation(conurbationId) {
// 		const relevantConfabs = this.props.filterConfabsByConfabLocationId(
// 			this.props.confabs,
// 			conurbationId
// 		)
// 		return relevantConfabs.map((confab) => {
// 			const seatsRemaining =
// 				confab.max_capacity - confab.attendee_ids.length
// 			const hostId = confab.host_id
// 			const hostConfidant = this.props.confidants[hostId]
// 			const hostName = hostConfidant.username.toUpperCase()
// 			const hostAvatarId = hostConfidant.avatar_id
// 			const currentConfidantAttending = this.props.determineWhetherConfidantIsAttending(
// 				confab,
// 				this.props.ccId
// 			)
// 			const dateObject = new Date(confab.start_time_in_ms)
// 			const timeObject = this.props.convertDatetimeStringToObject(
// 				dateObject
// 			)
// 			const day = timeObject["day"].toUpperCase()
// 			const date =
// 				timeObject["month"].toUpperCase() + " " + timeObject["dateNum"]

// 			const hours =
// 				timeObject["hour"].toString() +
// 				" — " +
// 				(timeObject["hour"] + 2).toString() +
// 				"00"

// 			const confabButton = currentConfidantAttending
// 				? this.confabLeaveButton
// 				: this.confabJoinButton
// 			const attendanceDisplay = currentConfidantAttending
// 				? this.amAttendingDisplay
// 				: this.notAttendingDisplay

// 			return (
// 				<div className="confab-card-container" key={confab.id}>
// 					<CoffeeScheduleEvent
// 						attendanceDisplay={attendanceDisplay}
// 						avatarId={hostAvatarId}
// 						hostId={hostId}
// 						ccId={this.props.ccId}
// 						confabButton={confabButton}
// 						confabId={confab.id}
// 						day={day}
// 						date={date}
// 						description={confab.description}
// 						hours={hours}
// 						hostName={hostName}
// 						seatsRemaining={seatsRemaining}
// 					/>
// 				</div>
// 			)
// 		})
// 	}

// 	createConfabModal() {
// 		const modalOpen = this.state.modalOpen
// 		return (
// 			<div className="coffeeschedule-create-confab-modal-container">
// 				<Modal
// 					overlayClassName="create-confab-modal-overlay"
// 					className="create-confab-modal-content"
// 					isOpen={modalOpen}
// 					onRequestClose={() => this.setState({ modalOpen: false })}
// 				>
// 					<div
// 						className="confab-modal-exit-button"
// 						onClick={() => this.setState({ modalOpen: false })}
// 					>
// 						×
// 					</div>
// 					<div className="confab-modal-content-container">
// 						<div className="confab-modal-title">Create Confab</div>
// 						<div className="confab-modal-subhead">
// 							Fill in the details below and get ready to conspire!
// 						</div>
// 						<form
// 							className="confab-modal-form"
// 							onSubmit={this.handleSubmit}
// 						>
// 							<div className="form-input-areas-container">
// 								<div className="form-fields-container">
// 									<div className="form-field-title">
// 										DESCRIPTION
// 									</div>
// 									<input
// 										required
// 										type="text"
// 										className="form-field-input"
// 										onChange={this.update(
// 											"confabDescription"
// 										)}
// 										placeholder="Write a description!"
// 										value={this.state.confabDescription}
// 									/>
// 								</div>
// 								<div className="form-fields-container">
// 									<div className="form-field-title">DATE</div>
// 									<input
// 										required
// 										type="date"
// 										className="form-field-input"
// 										onChange={this.update(
// 											"confabStartDate"
// 										)}
// 										value={this.state.confabStartDate}
// 										placeholder={new Date().toString()}
// 									/>
// 								</div>
// 								<div className="form-fields-container">
// 									<div className="form-half-fields-container">
// 										<div className="half-field-area">
// 											<div className="half-field-area-title">
// 												TIME
// 											</div>
// 											<div className="half-field-area-input">
// 												<select
// 													required={true}
// 													onChange={this.update(
// 														"confabStartTime"
// 													)}
// 												>
// 													<option
// 														disabled="disabled"
// 														value=""
// 													>
// 														Please select a time
// 													</option>
// 													{[
// 														"10:00",
// 														"11:00",
// 														"12:00",
// 														"13:00",
// 														"14:00",
// 														"15:00",
// 														"16:00",
// 														"17:00",
// 														"18:00",
// 														"19:00",
// 														"20:00",
// 														"21:00",
// 														"22:00",
// 													].map((time, idx) => (
// 														<option
// 															value={time}
// 															key={idx}
// 														>
// 															{time}
// 														</option>
// 													))}
// 												</select>
// 											</div>
// 										</div>
// 										<div className="half-field-area">
// 											<div className="half-field-area-title">
// 												MAXIMUM CAPACITY
// 											</div>
// 											<input
// 												required
// 												type="number"
// 												className="half-field-area-input"
// 												onChange={this.update(
// 													"confabMaxCapacity"
// 												)}
// 												value={
// 													this.state.confabMaxCapacity
// 												}
// 												min={3}
// 												max={7}
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<input
// 								className="confab-modal-submit-button"
// 								type="submit"
// 								value="CREATE CONFAB"
// 							/>
// 						</form>
// 					</div>
// 				</Modal>
// 			</div>
// 		)
// 	}

// 	render() {
// 		const photoContainer = (
// 			<div className="coffeeschedule-photo-container">
// 				<div className="coffeeschedule-msg-container">
// 					<div className="title-text">GOOD CONVERSATIONS</div>
// 					<div className="subtitle-text">THEY'RE HARD TO FIND.</div>
// 				</div>
// 			</div>
// 		)

// 		const messageContainer = (
// 			<div className="coffeeschedule-msg-container">
// 				<div className="title-text">
// 					Coffee With Confidants is coffee, with confidants.
// 				</div>
// 				<div className="msg-text">
// 					Ever find yourself asking why no one wants change? This is
// 					the place to meet those who do. For two hours, squad up at a
// 					cafe to conspire about finding and exposing the fakers.
// 					<br></br>
// 					<br></br>
// 					If none of these times work for you, why not{" "}
// 					{this.props.signUpLink} and host your own confab?
// 				</div>
// 			</div>
// 		)

// 		return (
// 			<>
// 				<div className="coffeeschedule" id="coffeeschedule">
// 					{photoContainer}
// 					<div className="coffeeschedule-content-container">
// 						{messageContainer}
// 						<div className="coffeeschedule-confabs-container">
// 							{this.monthDisplay()}
// 							{this.displaysAllConurbationCallouts()}
// 						</div>
// 					</div>
// 					{this.createConfabModal()}
// 				</div>
// 			</>
// 		)
// 	}
// }

export default CoffeeSchedule
