import './App.css';
import React from 'react'
import data from './data'
import Quote from './Quote'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  render() {
    return(
      <div className="App">
        <h1>Quotable</h1>
        <Quote/>
      </div>
    )
  }
}

export default App;
