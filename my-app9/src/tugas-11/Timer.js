import React, { Component } from "react";


class Timer extends Component{
    constructor(props){
      super(props)
        this.state = {
          date: new Date(),
      timer: props.start
    };
  }

  componentDidMount() {
    this.setTimer = setInterval(() => this.updateTimer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.setTimer);
  }

  updateTimer() {
    this.setState({
      date: new Date(),
      timer: this.state.timer - 1
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.timer >= 0 &&
          <div className="timer-wrapper">
            <h2 className="timer">Sekarang Jam : {this.state.date.toLocaleTimeString()}</h2>
            <h2 className="timer">Hitung Mundur : {this.state.timer}</h2>
          </div>
        }
      </React.Fragment>
    )
  }

}
  


export default Timer;