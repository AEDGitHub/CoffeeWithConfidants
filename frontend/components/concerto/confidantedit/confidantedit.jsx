import React from "react"
import { areConfabsLoaded } from "../../../reducers/selectors"

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
    }

    componentDidMount() {
        this.props.loadConurbations()
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.confidant &&
            prevProps.confidant !== this.props.confidant
        ) {
            this.updateConfidantDataInState(this.props.confidant)
        }
    }

    updateConfidantDataInState(confidant) {
        // this.setState({
        //     username: confidant.username,
        //     email: confidant.email,
        //     locationId: confidant.location_id,
        // })
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

    determineAccountDeleteSection(confidantId) {
        return confidantId === 1 ? (
            <></>
        ) : (
            this.accountDeleteSection(confidantId)
        )
    }

    render() {
        const ccId = this.props.ccId
        const accountDeleteSection = this.determineAccountDeleteSection(ccId)

        return (
            <>
                <div className="confidantedit">
                    <div className="confidantedit-container">
                        <div className="container-greeting-column">
                            <div className="greeting-column-heading">
                                Welcome back, staticName!
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
                                                staticUsername
                                            </div>
                                        </div>
                                        <div className="subsection-field-area">
                                            <div className="field-title">
                                                EMAIL
                                            </div>
                                            <div className="form-field">
                                                staticEmail
                                            </div>
                                        </div>
                                        <div className="subsection-field-area">
                                            <div className="field-title">
                                                CONURBATION
                                            </div>
                                            <div className="form-dropdown">
                                                <select>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </select>
                                            </div>
                                        </div>
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
