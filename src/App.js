import './App.css';
import React from 'react'
import data from './data'
import Quote from './Quote'

function App() {
  const allQuotes = data.map(item => <Quote key={item.id} quote={item.quote} author={item.author}/>)

  return(
    <div className="App">
      {allQuotes}
    </div>
  )
}

export default App;
