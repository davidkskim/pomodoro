import React, { Component } from "react";

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bodyPlacementOptions: ["hand", "foot"],
            colorOptions: ["red", "purple"],
            currentPosition: ""
        }
    }

    handleChange = () => {
        let { bodyPlacementOptions, colorOptions } = this.state
        let bodyPosition = bodyPlacementOptions[Math.floor(Math.random() * 2)]
        let colorPosition = colorOptions[Math.floor(Math.random() * 2)]
        let newPosition = `${bodyPosition}${colorPosition}`
        this.setState({ currentPosition: newPosition })
    }

    render() {
        return (
            <>
                <h1>Twister</h1>
                <button onClick={this.handleChange}>
                    Click me
                </button>
                <div>
                    {this.state.currentPosition}
                </div>
            </>
        )
    }
}