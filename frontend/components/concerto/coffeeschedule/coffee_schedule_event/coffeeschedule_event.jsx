import React from "react"
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
    description,
    startTime,
    endTime,
    hostName,
    avatarId,
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
            <div className="confab-card">
                <div className="card-top">
                    <div className="avatar-container">
                        <div className={`img-container-${avatarId}`}>
                            {/* <div className="img"></div> */}
                        </div>
                        <div className="name">{hostName.toUpperCase()}</div>
                    </div>
                    <div className="time-container">
                        <div className="day">{day}</div>
                        <div className="date">{date}</div>
                        <div className="hours">{hours}</div>
                    </div>
                </div>
                <div className="confab-description">{description}</div>
                <hr></hr>
                <div className="attendance-status">
                    <div className="seats-left">3 SPOTS OPEN!</div>
                    {/* <div className="fancy-graphic">NOT YET</div> */}
                </div>
            </div>
            <div className="squad-up-button">
                <div className="visibility-shift">
                    <span>JOIN CONFAB</span>
                </div>
            </div>
        </>
    )
}

export default CoffeeScheduleEvent
