import './App.css';
import React from 'react'
import data from './data'
import Quote from './Quote'

function App() {
  const allQuotes = data.map(quote => {
    <Quote quote={data.quote} author={data.author}/>
  })
  return(
    <div className="App">
      <h1>Quotable</h1>
    </div>
  )
}

export default App;
