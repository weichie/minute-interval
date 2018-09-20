import React, { Component } from 'react';
import './App.css';

import Bar from './components/Bar/Bar';
import Timer from './components/Timer/Timer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 60,
      current: 0,
      seconds: '00',
      minutes: '01',
      barClass: 'loading-bar'
    }
    this.updateCurrent = this.updateCurrent.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.secondsRemaining; 
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    this.secondsRemaining = this.state.minutes * 60;
    this.setState({barClass: 'loading-bar going'});
    this.tick();

    setInterval(() => {this.updateCurrent()}, 60000);
    let tickInterval = setInterval(() => {this.tick()}, 1000);
  }

  resetCounter(){
    if(this.state.current < this.state.total){
      this.setState({
        seconds: '00',
        minutes: '01',
      });
    }
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
    if(this.state.total <= this.state.current){
      clearInterval(this.tickInterval);
    }

    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      minutes: min,
      seconds: sec
    });

    if(min === 0 & sec === 0){
      this.resetCounter();      
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
