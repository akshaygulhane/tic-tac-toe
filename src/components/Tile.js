import React, { Component } from 'react';
import './../App.css';

class Tile extends Component {
    render() {
        return (
            <button className="tile" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export default Tile;