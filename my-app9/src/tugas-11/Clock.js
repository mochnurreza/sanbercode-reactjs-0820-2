import React, {Component} from 'react';

class Clock extends Component {
    state = {}
    render(){
        return(
            <div className ="App">
                <h1 style={{textAlign: "center"}}>Current time:
                {this.props.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default Clock;