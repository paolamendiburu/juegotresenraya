import React, { Component } from 'react';
import '../css/Message.css';

export default class Anouncement extends Component {
    render() {

        return (

            <div className={this.props.winner ? 'visible' : 'hidden'}>
                <h2>Game over - {this.props.winner} </h2>

            </div>
        )
    }
}