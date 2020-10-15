import React from "react"

class ConfidantEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            newPassword: "",
            confirmPassword: "",
            locationId: null,
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.accountDeleteSection = this.accountDeleteSection.bind(this)
        this.determineAccountDeleteSection = this.determineAccountDeleteSection.bind(
            this
        )
        this.updateConfidantDataInState = this.updateConfidantDataInState.bind(
            this
        )
        this.conurbationDropdown = this.conurbationDropdown.bind(this)
        this.conurbationDropdownOptions = this.conurbationDropdownOptions.bind(
            this
        )
    }

    componentDidMount() {
        // console.log(`componentDidMount now firing!`)
        // console.log(`LS Username is ${this.state.username}`)
        // console.log(`LS Email is ${this.state.email}`)
        // console.log(`LS Location is ${this.state.locationId}`)
        this.props.loadConurbations()
        this.updateConfidantDataInState(this.props.confidant)
    }

    componentDidUpdate(prevProps) {}

    updateConfidantDataInState(confidant) {
        // console.log(`updateConfidantDataInState now firing!`)
        // console.log(Object.values(confidant))
        // console.log(`Props Username is ${confidant.username}`)
        // console.log(`Props Email is ${confidant.email}`)
        // console.log(`Props Location is ${confidant.location_id}`)
        this.setState({
            username: confidant.username,
            email: confidant.email,
            locationId: confidant.location_id,
        })
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.target.value,
            })
    }

    accountDeleteSection(confidantId) {
        return (
            <div className="form-column-cancel-account">
                <div className="cancel-account-heading">Cancel my account</div>
                <div className="cancel-account-message">
                    When you do this, we'll get rid of your information from our
                    database immediately.
                </div>
                <div
                    className="cancel-account-button"
                    onClick={() => {
                        this.props.deleteAccount(confidantId)
                    }}
                >
                    CANCEL MY ACCOUNT
                </div>
                <div className="cancel-account-final-message">
                    To review the personal information we have about you, scroll
                    up to your account details and take a gander. If you have
                    other questions, my contact information is in the footer.
                    ~_^
                </div>
            </div>
        )
    }

    conurbationDropdown() {
        return (
            <div className="subsection-field-area">
                <div className="field-title">CONURBATION</div>
                <div className="form-dropdown">
                    {this.props.demoConfidantLoggedIn ? (
                        <select defaultValue="Make an account to change conurbations!">
                            <option
                                disabled="disabled"
                                value="Make an account to change conurbations!"
                            >
                                Make an account to change conurbations!
                            </option>
                        </select>
                    ) : (
                        <select
                            defaultValue="Select a new conurbation (optional)"
                            onChange={this.update("locationId")}
                        >
                            <option
                                disabled="disabled"
                                value="Select a new conurbation (optional)"
                            >
                                Select a new conurbation {"("}optional{")"}
                            </option>
                            {this.conurbationDropdownOptions()}
                        </select>
                    )}
                </div>
            </div>
        )
    }

    conurbationDropdownOptions() {
        return this.props.conurbations.map((conurbation) => (
            <option value={conurbation.id} key={conurbation.id}>
                {conurbation.name}
            </option>
        ))
    }

    determineAccountDeleteSection(confidantId) {
        return this.props.demoConfidantLoggedIn ? (
            <></>
        ) : (
            this.accountDeleteSection(confidantId)
        )
    }

    render() {
        const ccId = this.props.ccId
        const username = this.state.username
        const email = this.state.email
        const accountDeleteSection = this.determineAccountDeleteSection(ccId)
        const conurbationDropdown = this.conurbationDropdown()

        return (
            <>
                <div className="confidantedit">
                    <div className="confidantedit-container">
                        <div className="container-greeting-column">
                            <div className="greeting-column-heading">
                                Welcome back, {username}!
                            </div>
                            <div className="greeting-column-subhead">
                                Stolen any hearts lately?
                            </div>
                        </div>
                        <div className="container-form-column">
                            <div className="form-column-heading">
                                Edit Your Account
                            </div>
                            <div className="form-column-section">
                                <div className="form-section">
                                    <div className="form-section-heading">
                                        Personal Information
                                    </div>
                                    <div className="form-subsection">
                                        <div className="subsection-field-area">
                                            <div className="field-title">
                                                USERNAME
                                            </div>
                                            <div className="form-field">
                                                {username}
                                            </div>
                                        </div>
                                        <div className="subsection-field-area">
                                            <div className="field-title">
                                                EMAIL
                                            </div>
                                            <div className="form-field">
                                                {email}
                                            </div>
                                        </div>
                                        {conurbationDropdown}
                                    </div>
                                </div>
                                <div className="form-section">
                                    <div className="form-section-heading">
                                        Change Your Password
                                    </div>
                                    <div className="form-subsection">
                                        <div className="subsection-field-area">
                                            <div className="field-title">
                                                CURRENT PASSWORD
                                            </div>
                                            <div className="form-field">
                                                staticPlaceholderCurrentPass
                                            </div>
                                        </div>
                                        <div className="subsection-field-area">
                                            <div className="field-title">
                                                NEW PASSWORD
                                            </div>
                                            <div className="form-field">
                                                staticPlaceholderNewPass
                                            </div>
                                        </div>
                                        <div className="subsection-field-area">
                                            <div className="field-title">
                                                CONFIRM NEW PASSWORD
                                            </div>
                                            <div className="form-field">
                                                Give us another one!
                                            </div>
                                        </div>
                                        <div className="form-submit-button">
                                            SAVE CHANGES
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {accountDeleteSection}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ConfidantEdit
