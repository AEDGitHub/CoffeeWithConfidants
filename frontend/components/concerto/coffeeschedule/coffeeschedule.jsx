import React from "react"

class CoffeeSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        if (!this.props.confabsAreLoaded) {
            this.props.loadConfabs()
        }
    }

    render() {
        const testMsg = <p>{this.props.testState}</p>

        return <>{testMsg}</>
    }
}

export default CoffeeSchedule
