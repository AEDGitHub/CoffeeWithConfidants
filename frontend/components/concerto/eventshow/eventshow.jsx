import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
	getWeekdayStringFromDateObject,
	getMonthStringFromDateObject,
	getFullHoursStringFromDateObject,
	getFutureDateObjectSomeNumberOfHoursAwayFromCurrentDateObject,
} from '../../../utils/time_utils'

function EventShow({
	ccId,
	confab,
	confidants,
	conurbations,
	loggedIn,
	match,
	determineWhetherConfidantIsAttending,
	restOfConurbationName,
	shorterConurbationName,
	joinConfab,
	leaveConfab,
	loadConfab,
	unloadConfabs,
}) {
	const [conurbation, setConurbation] = useState('')
	const [currentUserAttending, setCurrentUserAttending] = useState(false)
	const [date, setDate] = useState('')
	const [day, setDay] = useState('')
	const [description, setDescription] = useState('')
	const [hostName, setHostName] = useState('')
	const [hours, setHours] = useState('')
	const [location, setLocation] = useState('')
	const [month, setMonth] = useState('')
	const [seatsRemaining, setSeatsRemaining] = useState(0)

	useEffect(() => {
		loadConfab(match.params.confabId).then(() => {
			if (confab) {
				updateConfabDataInState(confab)
			}
		})
		return function cleanup() {
			unloadConfabs()
		}
	}, [])

	useEffect(() => {
		if (confab) {
			updateConfabDataInState(confab)
		}
	}, [confab])

	const updateConfabDataInState = (confab) => {
		const isCurrentUserAttending = determineWhetherConfidantIsAttending(
			confab,
			ccId
		)
		const startDateObj = new Date(confab.start_time_in_ms)
		const date = startDateObj.getDate()
		const day = getWeekdayStringFromDateObject(startDateObj)

		const endDateObj = getFutureDateObjectSomeNumberOfHoursAwayFromCurrentDateObject(
			startDateObj,
			2
		)
		const startHrsStr = getFullHoursStringFromDateObject(startDateObj)
		const endHrsStr = getFullHoursStringFromDateObject(endDateObj)
		const hours = startHrsStr + ' — ' + endHrsStr

		const fullConurbationName = conurbations[confab.location_id].name
		const conurbation = restOfConurbationName(fullConurbationName)
		const location = shorterConurbationName(fullConurbationName)

		setConurbation(conurbation)
		setCurrentUserAttending(isCurrentUserAttending)
		setDate(date)
		setDay(day)
		setDescription(confab.description)
		setHostName(confidants[confab.host_id].username)
		setHours(hours)
		setLocation(location)
		setMonth(getMonthStringFromDateObject(startDateObj))
		setSeatsRemaining(confab.max_capacity - confab.attendee_ids.length)
	}

	const attendanceDisplay = (seatsRemaining) => {
		return currentUserAttending ? (
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
					joinConfab(confabId), setCurrentUserAttending(true)
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
					leaveConfab(confabId, confidantId),
						setCurrentUserAttending(false)
				}}
			>
				<div className="visibility-shift">
					<span>LEAVE CONFAB</span>
				</div>
			</div>
		)
	}

	const determineConfabButton = (confabId) => {
		return loggedIn ? (
			currentUserAttending ? (
				confabLeaveButton(confabId, ccId)
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

	const confabId = match.params.confabId
	const url = `herokuapp.coffeewithconfidants.com/#${match.url}`
	const confabButton = determineConfabButton(confabId)

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
								<div className="eventshow-confab-info-url">{url}</div>
								<div className="eventshow-confab-info-referral">
									Can't make it?
									<br></br>
									Know someone who can?
									<br></br>
									Send them the link!
								</div>
								<hr></hr>
								{attendanceDisplay(seatsRemaining)}
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
								Coffee is a delightful substance that's going to go
								extinct because human beings continue to mercilessly
								proliferate and are thereby destroying the environment
								in which coffee grows!
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

export default EventShow
