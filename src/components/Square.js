import React, { Component } from 'react';
import '../css/Square.css';

export default class Square extends Component {
    squareClick(props) {
        props.updateBoard(props.loc, props.turn);
    }
    render() {
        return (
            <div className={"square " + this.props.loc + " " + this.props.value} onClick={() => this.squareClick(this.props)}>

            </div >
        )
    }
}