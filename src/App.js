import logo from './logo.svg';
import './App.css';
import React from 'react'

function OnClick(bodyVar) {
  return (
    console.log(bodyVar)
  )
}
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return(
      <div className="App">
        <h1>Quotable</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.value}</p>
      </div>
    )
  }
}

export default App;
