import React from "react"

class CoffeeSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const testMsg = <p>{this.props.testMsg}</p>

        return <>testMsg</>
    }
}

export default CoffeeSchedule
