import React, { Component } from 'react';
import '../css/ResetButton.css';
export default class ResetButton extends Component {
    render() {
        return (
            <button className="reset-btn" onClick={this.props.reset}>Reset</button>
        )
    }
}