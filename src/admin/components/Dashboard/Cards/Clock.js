// import React, { useState, useEffect } from "react";

import React, { Component } from "react";
import CardsParent from "./CardsParent";

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  currentTime() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <p id="time">{this.state.time.toLocaleTimeString()}</p>
      </>
    );
    
  }
}

export default Clock;

// export default function Clock() {
//   const [date, setDate] = useState(new Date());
//   let interval;
//   useEffect(() => {
//     interval = setInterval(() => {
//       tick();
//     }, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const tick = () => {
//     setDate(new Date());
//   };

//   const format = val => {
//     if (val < 10) {
//       val = "0" + val;
//     }
//     return val;
//   };
//   return (
//     <div className="date">
//       <p>{`${date.getHours()} : ${format(date.getMinutes())} :
//       ${format(date.getSeconds())}`}</p>
//     </div>
//   );
// }
