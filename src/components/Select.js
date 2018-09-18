import React from 'react';
import '../styles/index.css';

const Select = (props) => {
  const opciones = props.options.map((cityOption) =>
  <option key= {cityOption} value = {cityOption} label = {cityOption} >{cityOption}</option>
  );

  return (
    <nav className="nav-wrapper center-align">
      <form onSubmit= {props.loadWeatherFromApi}>
        <label htmlFor={props.name}> {props.title} </label>
        <select className="skin-border"
        value = {props.value}
        name = {props.name}
        onChange = {props.handleChange} >
          <option value="" disabled> {props.placeholder}</option>
          {opciones}
        </select>
        <button className="btn-large waves-effect waves-light" type="submit">mira el clima <i className="material-icons left">cloud</i>

  </button>
      </form>
    </nav>
  )
};
export default Select;