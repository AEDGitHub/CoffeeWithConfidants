import React from "react"
// import { convertDatetimeToDay } from "../../../../utils/modification_utils"

const CoffeeScheduleEvent = ({ description, startTime, endTime, hostName }) => {
    return (
        <>
            <div className="confab-card">
                <div className="card-top">
                    <div className="avatar-container">
                        <div className="img-container-1">
                            {/* <div className="img"></div> */}
                        </div>
                        <div className="name">{hostName.toUpperCase()}</div>
                    </div>
                    <div className="time-container">
                        <div className="day">
                            {convertDatetimeToDay(startTime)}
                        </div>
                        <div className="date">SEP 19</div>
                        <div className="time">14 — 1600</div>
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
