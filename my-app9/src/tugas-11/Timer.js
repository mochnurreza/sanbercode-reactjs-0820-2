import React, { Component } from "react";


class Timer extends Component{
    constructor(props){
      super(props)
        this.state = {
          count: 1
        }
    }
    render() {
       const {count} = this.state
       return(
        <>
        <h1 style={{textAlign: "center"}}>
          Current : {count}
        </h1>
      </>
       )
   }
   componentDidMount(){
     const {startCount} = this.props
     this.setState({
       count:startCount
     })
    this.doIntervalChange()
   }
   doIntervalChange = () => {
      this.myInterval = setInterval(() => {
        this.setState(prevState => ({
        count: prevState.count - 1  
    }))
    }, 1000)
   }
   componentWillUnmount(){
     clearInterval(this.myInterval)
   }
   componentDidUpdate(){
     if (this.state.count === 0){
       this.componentWillUnmount()
     }
   }
}
  


export default Timer;