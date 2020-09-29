/*
todo: build the thing 
todo: destructure props coming in 
*/

import React from "react"
import CoffeeScheduleEvent from "./coffee_schedule_event/coffeeschedule_event"
import {
    shorterConurbationName,
    filterConfabsByConfabLocationId,
    convertDatetimeStringToObject,
} from "../../../utils/modification_utils"

class CoffeeSchedule extends React.Component {
    constructor(props) {
        super(props)

        this.displaysAllConurbationCallouts = this.displaysAllConurbationCallouts.bind(
            this
        )
        this.displaysAllConfabsPerConurbation = this.displaysAllConfabsPerConurbation.bind(
            this
        )
        this.monthDisplay = this.monthDisplay.bind(this)
    }

    // lifecycle methods

    componentDidMount() {
        if (!this.props.confabsAreLoaded) {
            this.props.loadConfabs()
        }
    }

    componentWillUnmount() {
        if (this.props.confabsAreLoaded) {
            this.props.unloadConfabs()
        }
        if (this.props.conurbationsAreLoaded) {
            this.props.unloadConurbations()
        }
    }

    // interaction handlers

    // displays, fields, and buttons with variable logic

    monthDisplay() {
        const rightNow = new Date()
        const month = convertDatetimeStringToObject(rightNow.toString())
            ["fullMonth"].toString()
            .toUpperCase()

        return (
            <div className="month-toggle">
                <div className="month-msg">TEA TIMES IN {month}</div>
            </div>
        )
    }

    displaysAllConurbationCallouts() {
        return this.props.conurbations.map((conurbation) => (
            <div className="confab-grid-container" key={conurbation.id}>
                <div className="collection-of-confabs-from-a-conurbation">
                    <div className="conurbation-callout-container">
                        <div className="conurbation-callout">
                            {shorterConurbationName(conurbation.name)}
                        </div>
                    </div>
                    {this.displaysAllConfabsPerConurbation(conurbation.id)}
                </div>
            </div>
        ))
    }

    displaysAllConfabsPerConurbation(conurbationId) {
        const relevantConfabs = filterConfabsByConfabLocationId(
            this.props.confabs,
            conurbationId
        )
        return relevantConfabs.map((confab) => (
            <div className="confab-card-container" key={confab.id}>
                <CoffeeScheduleEvent
                    confabId={confab.id}
                    description={confab.description}
                    hostName={this.props.confidants[confab.host_id].username}
                    startTime={confab.start_time}
                    endTime={confab.end_time}
                    avatarId="3" //todo: this can be made dynamic later, like {this.props.confidants[confab.host_id].avatarId} once that's in place
                    joinConfab={this.props.joinConfab}
                    seatsRemaining={
                        confab.max_capacity - confab.attendee_ids.length
                    }
                />
            </div>
        ))
    }

    render() {
        //displays, fields, and buttons with constant logic

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
                    Ever find yourself asking why no one wants change? This is
                    the place to meet those who do. For two hours, squad up at a
                    cafe to conspire about finding and exposing the fakers.
                    <br></br>
                    <br></br>
                    If none of these times work for you, why not{" "}
                    {this.props.signUpLink} and host your own confab?
                </div>
            </div>
        )

        return (
            <>
                <div className="coffeeschedule">
                    {photoContainer}
                    <div className="coffeeschedule-content-container">
                        {messageContainer}
                        <div className="coffeeschedule-confabs-container">
                            {this.monthDisplay()}
                            {this.displaysAllConurbationCallouts()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CoffeeSchedule
