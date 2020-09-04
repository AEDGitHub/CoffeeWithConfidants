/*
Next steps: build the thing
destructure props coming in
*/

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
        if (this.props.confabsAreLoaded) {
            this.props.unloadConfabs()
        }
    }

    // confabsListTest() {
    //     return this.props.confabs.map((confab, idx) => (
    //         <li key={confab.id}>{confab.description}</li>
    //     ))
    // }

    render() {
        return (
            <>
                <div className="coffeeschedule-photo-container">
                    <div className="coffeeschedule-msg-container">
                        <div className="title-text"></div>
                        <div className="subtitle-text"></div>
                    </div>
                </div>
            </>
        )
        // return <ul>{this.confabsListTest()}</ul>
    }
}

export default CoffeeSchedule
