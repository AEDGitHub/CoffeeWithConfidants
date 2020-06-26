import React from "react";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleSubmit.bind(this);
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

    render() {
        return (
          <>

          </>
        );
    }

}

export default SessionForm;