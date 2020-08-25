import React from "react"

class CoffeeSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        // this.confabsListTest = this.confabsListTest.bind(this);
    }

    componentDidMount() {
        if (!this.props.confabsAreLoaded) {
            this.props.loadConfabs()
        }
    }

    componentWillUnmount() {
        this.props.unloadConfabs()
    }

    confabsListTest() {
        return this.props.confabs.map((confab, idx) => (
            <li key={confab.id}>{confab.description}</li>
        ))
    }

    render() {
        return <ul>{this.confabsListTest()}</ul>
    }
}

export default CoffeeSchedule
