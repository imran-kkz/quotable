import './App.css';
import React from 'react'
import data from './data'
import Quote from './Quote'

function App() {
  const allQuotes = data.forEach(quote => {
    <Quote key={data.id} quote={data.quote} author={data.author}/>
  })
  return(
    <div className="App">
      <h1>Quotable</h1>
      {allQuotes}
    </div>
  )
}

export default App;
