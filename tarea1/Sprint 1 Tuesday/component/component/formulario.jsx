import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
    }
    handleChange(e) {
        this.setState({ message: e.target.value });
    }
    render() {
        return (
            <div>
                <legend>Type something here</legend>
                <input
                    onChange={this.handleChange.bind(this)}
                    value={this.state.message}
                    autoFocus />
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}
export default Form;