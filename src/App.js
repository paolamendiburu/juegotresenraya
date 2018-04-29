import React, { Component } from 'react';
import './css/style.css';


import Message from './components/Message';
import ResetButton from './components/ResetButton';
import Square from './components/Square';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: 'player1',
      winner: null
    }
  }
  updateBoard(loc, player) {
    if (this.state.gameBoard[loc] === 'player1' || this.state.gameBoard[loc] === 'player2' || this.state.winner) {
      //invalid move
      return;
    }
    let currentGameBoard = this.state.gameBoard;
    currentGameBoard.splice(loc, 1, this.state.turn);
    this.setState({ gameBoard: currentGameBoard });

    let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
    if (topRow.match(/player1player1player1|player2player2player2/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
    if (middleRow.match(/player1player1player1|player2player2player2/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
    if (bottomRow.match(/player1player1player1|player2player2player2/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
    if (leftCol.match(/player1player1player1|player2player2player2/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
    if (middleCol.match(/player1player1player1|player2player2player2/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
    if (rightCol.match(/player1player1player1|player2player2player2/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
    if (leftDiag.match(/player1player1player1|player2player2player2/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
    if (rightDiag.match(/player1player1player1|player2player2player2/)) {
      this.setState({ winner: this.state.turn });
      return;
    }
    let moves = this.state.gameBoard.join('').replace(/ /g, '');
    console.log("moves is" + moves.length);
    //lo multiplicamos por 7 porque es el numero de caracteres de player1 o player2
    if (moves.length === 9 * 7) {
      this.setState({ winner: 'empate' });
    }
    this.setState({ turn: (this.state.turn === 'player1') ? 'player2' : 'player1' })



  }
  resetBoard() {
    this.setState({
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: 'player1',
      winner: null
    })
  }
  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Juego tres en raya</h1>
          <Message winner={this.state.winner} />
        </div>
        {this.state.gameBoard.map(function (value, i) {
          return (
            <Square
              key={i}
              loc={i}
              value={value}
              updateBoard={this.updateBoard.bind(this)}
              turn={this.state.turn} />
          )
        }.bind(this))}
        <div className="reset clear">
          <ResetButton reset={this.resetBoard.bind(this)} />
        </div>

      </div>

    );
  }
}

export default App;
