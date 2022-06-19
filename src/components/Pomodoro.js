import React, { Component } from "react";

export default class Pomodoro extends Component {
    render() {
        return (
            <>
                <div className="pomodoro">
                    <div className="message">
                        <div>Break time! New session starts in:</div>
                    </div>
                    <div className="timer">25:00</div>
                </div>
            </>
        )
    }
}