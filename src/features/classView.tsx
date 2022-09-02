import React from 'react'   
import "./App.scss";  

export const classView = ({results}) => { 

  return (
    <div>  
      <div className='student-info'>
        <div className='border'>
          <h4>{results.Name}</h4>
          <p>{results.class} likes</p>
        </div> 
      </div>
    </div>
  )
} 