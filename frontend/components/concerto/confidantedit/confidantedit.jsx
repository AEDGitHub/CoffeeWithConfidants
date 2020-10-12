import React from "react"

class ConfidantEdit extends React.Component {
    constructor(props) {
        super(props)
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
                                <div className="section-information">
                                    <div className="information-heading">
                                        Personal Information
                                    </div>
                                    <div className="information-subsection">
                                        <div className="subsection-username">
                                            staticUsername
                                        </div>
                                        <div className="subsection-email">
                                            staticEmail
                                        </div>
                                        <div className="subsection-conurbation">
                                            staticConurbation
                                        </div>
                                    </div>
                                </div>
                                <div className="section-password">
                                    <div className="password-heading">
                                        Change Your Password
                                    </div>
                                    <div className="password-subsection">
                                        <div className="subsection-current-password">
                                            staticPlaceholderCurrentPass
                                        </div>
                                        <div className="subsection-new-password">
                                            staticPlaceholderNewPass
                                        </div>
                                        <div className="subsection-confirm">
                                            staticPlaceholder Give us another
                                            one!
                                        </div>
                                        <div className="subsection-submit-button">
                                            Save Changes
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-column-cancel-account">
                                <div className="cancel-account-heading">
                                    Cancel my account
                                </div>
                                <div className="cancel-account-message"></div>
                                <div className="cancel-account-button"></div>
                                <div className="cancel-account-final-message"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ConfidantEdit
