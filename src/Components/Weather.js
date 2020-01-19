import React from "react";

const Weather = props => {
  return (
    <div>
      {props.country && <p>Country : {props.country}</p>}
      {props.city && <p>City : {props.city}</p>}
      {props.tempreature && <p>Tempreature : {props.tempreature}</p>}
      {props.humidity && <p>Humidity : {props.humidity}</p>}
      {props.description && <p>Description : {props.description}</p>}
      {props.error && <p>Erorr : {props.error}</p>}
    </div>
  );
};

export default Weather;
