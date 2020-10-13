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
            demoUserCityId: null,
        }

        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.loadConurbations()
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.target.value,
            })
    }

    render() {
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
                            <div className="form-column-cancel-account">
                                <div className="cancel-account-heading">
                                    Cancel my account
                                </div>
                                <div className="cancel-account-message">
                                    When you do this, we'll get rid of your
                                    information from our database immediately.
                                </div>
                                <div className="cancel-account-button">
                                    CANCEL MY ACCOUNT
                                </div>
                                <div className="cancel-account-final-message">
                                    To review the personal information we have
                                    about you, scroll up to your account details
                                    and take a gander. If you have other
                                    questions, my contact information is in the
                                    footer. ~_^
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ConfidantEdit
