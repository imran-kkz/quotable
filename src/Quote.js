import React from 'react'

function Quote(props) {
  return (
    <div>
      <h3>{props.quote}</h3>
      <h3>{props.author}</h3>
    </div>
  )
}

export default Quote