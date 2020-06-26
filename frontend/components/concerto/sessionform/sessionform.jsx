import React from "react";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'Joker',
            email: 'hunter12',
            password: 'breakintobreakout@fakemail.com',
            location_id: 3,
        }
        this.handleSubmit.bind(this);
        this.mainMsgDisplay.bind(this);
        this.subMsgDisplay.bind(this);
        this.nameField.bind(this);
        this.emailField.bind(this);
        this.passwordField.bind(this);
        this.homeCityField.bind(this);
        this.submitFormButton.bind(this);
        this.demoUserButton.bind(this);
        this.navLinkDisplay.bind(this);
    }

    update(field){(
        e => this.setState({
            [field]: e.currentTarget.value
        })
    )}

    handleSubmit(e) {
        e.preventDefault();
        const confidant = Object.assign({}, this.state);
        this.props.processForm(confidant);
    }


// Displays, Fields, and Buttons

    mainMsgDisplay(){
        if (this.state.formType === 'signin') {

        } else {

        }
    }

    subMsgDisplay() {
        if (this.state.formType === 'signin') {

        } else {

        }
    }

    nameField() {
        if (this.state.formType === 'signin') {

        } else {

        }
    }

    emailField() {
        
    }

    passwordField() {
        if (this.state.formType === 'signin') {

        } else {

        }
    }

    homeCityField() {
        if (this.state.formType === 'signin') {
            { return(<></>); }
        } else {
            { return (<></>); } //future home of select conurbation function!
        }
    }
    
    submitFormButton() {
        if (this.state.formType === 'signin') {

        } else {

        }
    }

    demoUserButton() {
        return(
            <button ></button>
       )
    }
    
    navLinkDisplay() {
        if (this.state.formType === 'signin') {
            
        } else {

        }
    }



    render() {
        
        return (
            <div className='sessionform form-container'>
                {this.mainMsgDisplay()}
                {this.subMsgDisplay()}
                    <form onSubmit={this.handleSubmit}>
                        {this.nameField()}
                        {this.emailField()}
                        {this.passwordField()}
                        {this.submitFormButton()}
                    </form>
                    <form onSubmit={this.handleSubmit}>
                        {this.demoUserButton()}
                    </form>
                {this.navLinkDisplay()}
            </div>
        );
    }

}

export default SessionForm;