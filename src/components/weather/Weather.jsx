import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2c6e3560652bd27b5da6345ba04360d6`;

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getCity = async (e) => {
    e.preventDefault();
    let res = await axios.get(url);
    setData(res.data);
  };

  return (
    <div className="w">
      {/* <div className="bg"><img className="bgimg" src="https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg" alt="" /></div> */}
      <div className="w-details">
        <div className="l">
        <span className="avg-temp">
              {Object.keys(data).length === 0
                ? "0°C"
                : data?.main?.temp + "°C"}
            </span>{" "} <br />
          {/* if data is empty it means we have no data, using Object.keys method to check if empty and if empty passing some info */}
          <span className="l-name">
            {Object.keys(data).length === 0 ? "" : data?.name}
          </span>
        </div>
        <div className="temp">
          <div className="temp-info">
            <i class="high fa-solid fa-temperature-arrow-up"></i>
            <span className="t max-temp">
              {Object.keys(data).length === 0
                ? "0°C"
                : data?.main?.temp_max + "°C"}
            </span>{" "}
            <br />
          </div>
          <div className="temp-info">
            <i class="low fa-solid fa-temperature-arrow-down"></i>
            <span className="t min-temp">
              {Object.keys(data).length === 0
                ? "0°C"
                : data?.main?.temp_min + "°C"}
            </span>
          </div>
        </div>
        <div className="con">
          <div className="con-info">
            {" "}
            <i class="wind fa-solid fa-wind"></i>
            <span className="t">{Object.keys(data).length === 0? "0m/s": data?.wind?.speed + "m/s"}</span> <br />
          </div>
          <div className="con-info">
            <i class="humid fa-solid fa-droplet"></i>
            <span className="t">{Object.keys(data).length === 0? "0%":data?.main?.humidity + "%"}</span>
          </div>
        </div>

        <div className="search-con">
          <form action="">
            <input
              value={city}
              onChange={handleChange}
              type="text"
              placeholder="Search.."
              className="search"
            />
            <button className="searchbtn" onClick={getCity} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
