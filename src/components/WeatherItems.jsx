import React from "react";

const WeatherItems = () => {
  return (
    <div className="weather-apps">
      <div className="img">
        <img src="/clear.png" alt="" />
      </div>
      <div>
        <h1>35°C</h1>
        <h2>indore</h2>
      </div>

      <div className="details">
        <div className="row">
          <img src="/humidity.png" />
          <div>
            <p>30%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="row">
          <img src="/wind.png" />
          <div>
            <p>15km/h</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherItems;
