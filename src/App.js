import './App.css';
import React from 'react'
import data from './data'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      quote: data.harrypotter 
    }
  }

  render() {
    return(
      <div className="App">
        <h1>Quotable</h1>
        <p>{this.state.quote}</p>
      </div>
    )
  }
}

export default App;
