import React from 'react'

const Results = ({results}) => {
  return (
    <div>
      {results?.map((ele,i)=>(
        <div>
        <h1>{ele.original_title}</h1></div>
      ))}
    </div>
  )
}

export default Results
