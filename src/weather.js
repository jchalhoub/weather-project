import React, { Component } from "react";
import "./weather.css";

const weather = ({ items, entireObject }) => {
  console.log("entire object");
  console.log(entireObject);
  return (
    <div>
      <div className="center-text" id="location">
        Location: {entireObject.length != 0 && entireObject.location.name}
      </div>
      <div className="flex-container">
        {items &&
          items.map((daily) => {
            const { date, day } = daily;
            let shortDate = date.substring(5, date.length);
            const { maxtemp_f, mintemp_f, uv, condition } = day;
            return (
              //   <section className="weatherTile">
              <div className="flex-child">
                <div className="center-text" id="date">
                  {shortDate}
                </div>
                <img className="center" src={condition.icon} alt="nothing" />
                <div className="temp center">
                  <div className="high">H: {maxtemp_f} </div>
                  <div className="slash"> / </div>
                  <div className="low">L: {mintemp_f}</div>
                </div>
                <div className="center-text">{condition.text}</div>
                <br />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default weather;
