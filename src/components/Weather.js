import React from 'react'

function Weather(props) {
  return (
    <div className='weatherList'>
                {props.city && <h1>City: <span>{props.city}</span></h1>}
                <hr />
                {props.country && <h2>Country: <span>{props.country}</span></h2>}
                {props.temp && <h4>Temp: <span>{props.temp}</span></h4>}
                {props.humidity && <h4>Humidity: <span>{props.humidity}</span></h4>}
                {props.description && <h4>Description: <span>{props.description}</span></h4>}
                {props.error && <h4>{props.error}</h4>}
    </div>
  )
}

export default Weather