import React from "react"
import { Link } from "react-router-dom"
import { convertDatetimeStringToObject } from "../../../../utils/modification_utils"
/*
    timeObject has following keys and format:
    {
        day: string //"Sunday"
        month: string //"Sep", "Oct" &c
        dateNum: string //("1":"31")
        hour: int // (0:23)
    }
    */

const CoffeeScheduleEvent = ({
    confabId,
    description,
    startTime,
    endTime,
    hostName,
    loggedIn,
    confabJoinButton,
    avatarId,
    seatsRemaining,
}) => {
    const timeObject = convertDatetimeStringToObject(startTime)
    const day = timeObject["day"].toUpperCase()
    const date = timeObject["month"].toUpperCase() + " " + timeObject["dateNum"]

    const hours =
        timeObject["hour"].toString() +
        " — " +
        (timeObject["hour"] + 2).toString() +
        "00"

    return (
        <>
            <Link to={`/coffee_times/${confabId}/`}>
                <div className="confab-card">
                    <div className="card-top">
                        {/* <Link to={`/confidants/${hostId}/`}> */}
                        <div className="avatar-container">
                            <div className={`img-container-${avatarId}`}>
                                {/* <div className="img"></div> */}
                            </div>
                            <div className="name">{hostName.toUpperCase()}</div>
                        </div>
                        {/* <Link /> */}
                        <div className="time-container">
                            <div className="day">{day}</div>
                            <div className="date">{date}</div>
                            <div className="hours">{hours}</div>
                        </div>
                    </div>
                    <div className="confab-description">{description}</div>
                    <hr></hr>
                    <div className="attendance-status">
                        <div className="seats-left">
                            {seatsRemaining} SPOTS OPEN!
                        </div>
                        {/* <div className="fancy-graphic">LATER</div> */}
                    </div>
                </div>
            </Link>
            {confabJoinButton(confabId)}
            {/* <div
                className="squad-up-button"
                onClick={() => joinConfab(confabId)}
            >
                <div className="visibility-shift">
                    <span>JOIN CONFAB</span>
                </div>
            </div> */}
        </>
    )
}

export default CoffeeScheduleEvent
