import React from 'react';
//import SingleCard from './SingleCard.js'
import '../styles/index.css';

const Board = (props) => {
  const isSearching = props.isSearching;



  //console.log('props', props.weather.icon)

 /* const imageIcons = props.weather.map(item => { return <img src={`http://openweathermap.org/img/w/${props.icon}.png`} />
  }); */

  return (
    <section className="row">
      <div className="col s12">
        <div>
          <section className="section center-align mainBoard">
          <div className="wrapper">
            <div className="col s12 m12 l3 card">
              <h2>{props.city}</h2><h2>{props.country}</h2>
            </div>

            <div className="col s12 m12 l3 card">

              <h2>{props.description}</h2>
            </div>
            <div className="col s12 m12 l3 card">
            <span className="celsius">&#8451;</span>
              <h1>
                {props.temperature}
              </h1>
              <p>Min:
              <span>{props.tmin}</span>
              </p>
              <p>Max:
              <span>{props.tmax}</span>
              </p>


            </div>
            <div className="col s12 m12 l3 card">
              <h2>Humedad</h2>
              <p>{props.humidity}</p>
            </div>
          </div>

          </section>
        </div>
      </div>
    </section>
  )
}








export default Board;