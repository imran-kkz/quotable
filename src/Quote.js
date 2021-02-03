import React from 'react'

function Quote(props) {
  return (
    <div>
      <h3>{props.data.quote}</h3>
      <p>{props.data.author}</p>
    </div>
  )
}

export default Quote