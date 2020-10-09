import React from "react"
import { Link } from "react-router-dom"
import { convertDatetimeStringToObject } from "../../../../utils/modification_utils"

const CoffeeScheduleEvent = ({
    avatarId,
    attendanceDisplay,
    ccId,
    confabButton,
    confabId,
    description,
    hostName,
    seatsRemaining,
    day,
    date,
    hours,
    // startTime,
}) => {
    // const timeObject = convertDatetimeStringToObject(startTime)
    // const day = timeObject["day"].toUpperCase()
    // const date = timeObject["month"].toUpperCase() + " " + timeObject["dateNum"]

    // const hours =
    //     timeObject["hour"].toString() +
    //     " — " +
    //     (timeObject["hour"] + 2).toString() +
    //     "00"

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
            {confabButton(confabId, ccId)}
        </>
    )
}

export default CoffeeScheduleEvent
