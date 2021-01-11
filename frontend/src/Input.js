import React, { Component } from 'react'

class Input extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        let newData = {};
        newData[this.props.name] = event.target.value;
        this.props.updateParent(newData);
    }

    render() {
        return (
            <div className="input-group">
                <input
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.handleChange}
                ></input>
            </div>
        );
    }
}

export default Input;