import './App.css';
import React, { Component } from 'react'
import data from './data'
import Quote from './Quote'

class App extends Component {
  constructor() {
    super()
    this.apiCall = this.apiCall.bind(this);
    this.state = {
      quotes: data,
      title: ""
    }
  }

  apiCall() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      this.setState({title:json.title})
    })
  }
  componentDidMount() {
    this.apiCall()
  }

  render(){
    return(
      <div className="App">
        {this.state.quotes.map(item => <Quote quote={item.quote} author={item.author} key={item.id} />
        )}
        <p>{this.state.title}</p>
      </div>
    )
  }
}

export default App;
