import React, { useState } from "react";
import Weather from "./weather";
import "./weather.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  let API_KEY = "6c46eba296f5473f95d212753211806";
  let days = "10";
  const [isLoading, setIsLoading] = useState(true);
  const [forecast, setForecast] = useState([]);
  const [allData, setAllData] = useState([]);
  const [iteration, setIteration] = useState(0);
  const [isCleared, setIsCleared] = useState(false);
  const [zip, setZip] = useState("19006");

  let URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${zip}&days=${days}`;

  function zipChangeHandler(event) {
    setZip(event.target.value);
  }

  async function getData() {
    try {
      console.log("data Got2");
      const response = await fetch(URL);
      const data = await response.json();
      const forecastAPI = data.forecast.forecastday;
      if (iteration == 0) {
        setIteration(iteration + 1);
        setIsLoading(!isLoading);
      }
      setForecast(forecastAPI);
      setAllData(data);
      setIsCleared(false);

      console.log(forecastAPI[0]);
    } catch (e) {
      alert("enter in a valid zipcode or city");
    }
  }

  function clearData() {
    try {
      setForecast([]);
      setAllData([]);
      setIsCleared(true);
    } catch (e) {
      alert("Failed to clear");
    }
  }

  return (
    <div className="background">
      <div className="body">
        <br />
        <h1 class="center-text">Weather App</h1>
        <table className="center-table">
          <tr>
            <th>
              <input
                className="form-control"
                type="text"
                placeholder="Zipcode or City"
                onChange={zipChangeHandler}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    getData();
                  }
                }}
              ></input>
            </th>
            <th>
              <button className="btn btn-secondary" onClick={() => getData()}>
                Get weather
              </button>
            </th>
          </tr>
        </table>
        <br />
        <h3>{isLoading && <p>Enter in a zipcode</p>} </h3>
        <div>
          {!isLoading && !isCleared && (
            <div>
              <Weather items={forecast} entireObject={allData} />
              <button
                className="btn btn-danger"
                id="clear-button"
                onClick={() => clearData()}
              >
                Clear
              </button>
            </div>
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
