import React, { Component } from 'react';
import './App.css';

import Bar from './components/Bar/Bar';
import Timer from './components/Timer/Timer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 5,
      current: 0,
      seconds: '00',
      minutes: '01',
      barClass: 'loading-bar'
    }
    this.setStates = this.setStates.bind(this);
    this.updateCurrent = this.updateCurrent.bind(this);
    this.secondsRemaining; 
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    this.setStates();
  }

  setStates(){
    setInterval(() => {this.updateCurrent()}, 60000);
    setInterval(() => {this.tick()}, 1000);

    this.secondsRemaining = this.state.minutes * 60;
    this.setState({barClass: 'loading-bar going'});
  }

  updateCurrent(){
    let current = this.state.current;
    if(current < this.state.total){
      this.setState(prevState => {
        return {current: prevState.current + 1}
      });
    }
  }

  tick(){
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    if(sec < 10){
      this.setState({seconds: "0" + this.state.seconds,});
    }
    if(min < 10){
      this.setState({minutes: "0" + min,});
    }
    if(min <= 0){
      this.setState({minutes: "00"});
    }

    this.setState({
      minutes: min,
      seconds: sec
    });

    if(min === 0 & sec === 0){
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  render() {
    return (
      <div className="App">
        <Bar total={this.state.total} barClass={this.state.barClass} />
        <Timer total={this.state.total} minutes={this.state.minutes} seconds={this.state.seconds} current={this.state.current} />
      </div>
    );
  }
}

export default App;
