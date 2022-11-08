import React from 'react'

function Form(props) {
  return (
       <div>
        <form onSubmit={props.getWeather} >
            <input name='city' placeholder='Please enter your city...' className='wInput' />
            <br></br><br></br>
            <button className='wButton'>Search</button>
        </form>
      </div>
  )
}

export default Form