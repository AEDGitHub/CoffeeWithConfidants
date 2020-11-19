import React from "react"
import { Link } from "react-router-dom"

const CoffeeScheduleEvent = ({
	avatarId,
	attendanceDisplay,
	ccId,
	confabButton,
	confabId,
	date,
	day,
	description,
	hostName,
	hostId,
	hours,
	seatsRemaining,
}) => {
	return (
		<>
			<Link to={`/coffee_times/${confabId}/`}>
				<div className="confab-card">
					<div className="card-top">
						<div className="avatar-container">
							<div className={`img-container-${avatarId}`}></div>
							<div className="name">{hostName}</div>
						</div>
						<div className="time-container">
							<div className="day">{day}</div>
							<div className="date">{date}</div>
							<div className="hours">{hours}</div>
						</div>
					</div>
					<div className="confab-description">{description}</div>
					<hr></hr>
					{attendanceDisplay(seatsRemaining)}
				</div>
			</Link>
			{hostId === ccId ? (
				<div className="no-squad-up-button"></div>
			) : (
				confabButton(confabId, ccId)
			)}
		</>
	)
}

export default CoffeeScheduleEvent
