import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './app.css'

import KeyboardSet from './components/KeyboardSet'
import wasdInfo from './assets/images/wasd-info.png'
import arrowsInfo from './assets/images/arrows-info.png'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      info: false,
      KeyW: false,
      KeyA: false,
      KeyS: false,
      KeyD: false,
      ArrowUp: false,
      ArrowLeft: false,
      ArrowDown: false,
      ArrowRight: false
    }
  }

  _handleInfoClick = () => { this.setState({info: true}); }

  _handleKeyDown = ({code}) => {
    if (!this.state.hasOwnProperty(code)) return;
    this.setState({[code]: true});
  }

  _handleKeyUp = ({code}) => {
    if (!this.state.hasOwnProperty(code)) return;
    this.setState({[code]: false});
  }

  componentWillMount() {
    document.addEventListener('keydown', this._handleKeyDown, false);
    document.addEventListener('keyup', this._handleKeyUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._handleKeyDown, false);
    document.removeEventListener('keyup', this._handleKeyUp, false);
  }
  
  render() {
    const { KeyW, KeyA, KeyS, KeyD } = this.state;
    const { ArrowUp, ArrowLeft, ArrowDown, ArrowRight } = this.state;
    return (
      <div className="app-component">
        <canvas className="video-canvas"></canvas>
        <div className="info-button" onClick={this._handleInfoClick}>info</div>
        <KeyboardSet arrows={false} className="wasd" states={{KeyW, KeyA, KeyS, KeyD}}/>
        <KeyboardSet arrows={true} className="arrows" states={{ArrowUp, ArrowLeft, ArrowDown, ArrowRight}}/>
        
        {/* I will have to deal with this later */}
        <div className={`info-overlay `}>
          <img src={wasdInfo} alt="" className="wasd-info"/>
          <img src={arrowsInfo} alt="" className="arrows-info"/>
        </div>
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));