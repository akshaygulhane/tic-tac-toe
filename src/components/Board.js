import React, { Component } from 'react';
import Tile from './Tile';
import './../App.css';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tiles: Array(9).fill(null),
            xIsNext: true
        };
        this.resetGame = this.resetGame.bind(this);
    }

    handleClick(i) {
        const tiles = this.state.tiles.slice();
        tiles[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState(
            {
                tiles: tiles,
                xIsNext: !this.state.xIsNext
            }
        );
    }

    renderTile(i) {
        return (
            <Tile
                value={this.state.tiles[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    resetGame() {
        this.setState({
            tiles: Array(9).fill(null),
            xIsNext: true
        });
    }

    render() {
        const winner = this.calculateWinner(this.state.tiles);
        let status;
        let label = "Reset";
        let btnClass = "btn btn-outline-danger btn-block";

        if (winner) {
            status = 'Winner: ' + winner;
            label = "Start Again!";
            btnClass = "btn btn-outline-success btn-block";

        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="">
                <div className="col-md-6 col-sm-12 offset-md-5">
                    <div className="text-success text-center row">
                        <h4>{status}</h4>
                    </div>
                    <div className="row">
                        {this.renderTile(0)}
                        {this.renderTile(1)}
                        {this.renderTile(2)}
                    </div>
                    <div className="row">
                        {this.renderTile(3)}
                        {this.renderTile(4)}
                        {this.renderTile(5)}
                    </div>
                    <div className="row">
                        {this.renderTile(6)}
                        {this.renderTile(7)}
                        {this.renderTile(8)}
                    </div>
                </div>
                <br />
                <div className="offset-md-4 col-md-4 row">
                    <button className={btnClass} onClick={this.resetGame}>{label}</button>
                </div>
            </div>
        );
    }
}

export default Board;