import React from 'react'

function Quote(props) {
  return (
    <div>
      <h3>{props.quote}</h3>
      <p>{props.author}</p>
      <hr></hr>
    </div>
  )
}

export default Quote