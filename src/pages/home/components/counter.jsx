import React, { Component } from "react";
import "./styles/counter.css";

class Counter extends React.Component {
  componentDidMount() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var seconds = 0;
    var totalDoses = 1518498562;
    var todayDoses = 2507890;
    var totalElt = document.getElementById("total-doses");
    var todayElt = document.getElementById("today-doses");

    function incrementNumber() {
      if (seconds % 2 === 0) {
        totalDoses += 1;
        todayDoses += 1;
        totalElt.innerText = numberWithCommas(totalDoses);
        todayElt.innerText = numberWithCommas(todayDoses);
      }
    }

    function incrementSeconds() {
      seconds += 1;
    }

    var tik = setInterval(incrementNumber, 10);
    var tok = setInterval(incrementSeconds, 1000);
  }

  render() {
    return (
      <div className="counter w-screen bg-teal-300 flex justify-center">
        <div className="container counter w-full flex justify-center">
          <div
            className="row flex justify-between counter justify-center w-5/6"
            style={{ paddingTop: "15px" }}
          >
            <div className="col-md counter-col">
              <div className="row">
                <div className="col">
                  <div className="row title">Total Vaccination Doses</div>
                  <div id="total-doses" className="row number">
                    1,518,498,562
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 vl rotate-12 mx-28"/>
            <div className="col-md counter-col">
              <div className="row">
                <div className="col">
                  <div className="row title">Total Vaccination Doses</div>
                  <div id="today-doses" className="row number">
                    2,507,890
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
