import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <p>
        <input type="text" name="city" placeholder="city..."></input>
      </p>
      <p>
        <input type="text" name="country" placeholder="country..."></input>
      </p>
      <p>
        <button>Get Weather</button>
      </p>
    </form>
  );
};

export default Form;
