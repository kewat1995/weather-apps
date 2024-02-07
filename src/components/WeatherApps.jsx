/* eslint-disable react/prop-types */


const WeatherApps = ({ item }) => {
  const getcurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      week: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  
  return (
    <div className="weather-apps">
      <div className="date">{getcurrentDate()}</div>
      <div className="img">
        <img src="/clear.png" alt="" />
      </div>
      <div className="city-name">
        <p>
          {" "}
          {item && item.weather && item.weather[0]
            ? item.weather[0].description
            : ""}
        </p>
        <h1>{item?.main?.temp}°C</h1>
        <h2>{item?.name}</h2>
      </div>

      <div className="details">
        <div className="row">
          <img src="/humidity.png" />
          <div className="weather-details">
            <p>{item?.main?.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="row">
          <img src="/wind.png" />
          <div className="weather-details">
            <p>{item?.wind?.speed}km/h</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApps;
