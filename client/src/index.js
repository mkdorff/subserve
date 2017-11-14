import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      info: false,
      w: false,
      a: false,
      s: false,
      d: false,
      up: false,
      left: false,
      down: false,
      right: false
    }
  }
  
  render() {
    return (
      <div className="app-component">
        app component
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));