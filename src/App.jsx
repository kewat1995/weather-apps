import { useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import WeatherApps from "./components/WeatherApps";

function App() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherdata] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d171332226c7d76da39d7c2882f233b&units=metric`
      );

      const data = await response.json();
      console.log(data);
      setWeatherdata(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeatherData("indore");
  }, []);

  const handelSearch = () => {
    fetchWeatherData(search);
    setWeatherdata("");
  };
  console.log(weatherData);
  return (
    <div className="container">
      <div className="card">
      <h1>Weather Apps</h1>
      <SearchInput
        handelSearch={handelSearch}
        setSearch={setSearch}
        search={search}
      />
      {loading ? (
        <h3>please wait !! data is load</h3>
      ) : (
        <WeatherApps item={weatherData} />
      )}
        </div>
    </div>
  );
}

export default App;
