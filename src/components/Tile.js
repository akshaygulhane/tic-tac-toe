import React, { Component } from 'react';
import './../App.css';

class Tile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <button className="tile" onClick={() => this.setState({value: "X"})}>
                {this.state.value}
            </button>
        )
    }
}


export default Tile;