import React, { Component } from "react";
import "./styles/counter.css";
import JSSoup from 'jssoup';
import CountUp from 'react-countup';
class Counter extends React.Component {
  componentDidMount() {
    var seconds = 0, totalDoses = 0, todayDoses = 0;
    var totalElem = document.getElementById("total-doses");
    var todayElem = document.getElementById("today-doses");
    var soup;
    // JSSoup is a library that parses HTML and CSS (similar to BeautifulSoup)
    fetch('https://www.mohfw.gov.in/')
    .then(data => data.text())
    .then(data => {
      // console.log(data);
      soup = new JSSoup(data);
      // console.log(soup.prettify());
      var elements = soup.findAll('span', 'coviddata')
      console.log(elements);
      var total = elements[0].text.trim();
      var today = elements[0].nextSibling.text.trim();
      // console.log(total, today, today.substring(1, today.length - 1));
      totalDoses = parseInt(total.replace(/,/g, ''));
      todayDoses = parseInt(today.substring(1, today.length - 1).replace(/,/g, ''));
      console.log(totalDoses, todayDoses);
    });
    
    setInterval(()=>{
      if (seconds % 3 === 0) {
        totalDoses += 1;
        todayDoses += 1;
        totalElem.innerText = totalDoses.toLocaleString('en-IN');
        todayElem.innerText = todayDoses.toLocaleString('en-IN');
    }}, Math.random() * 50 + 100);
    setInterval(()=>{seconds += 1}, Math.random() * 100 + 500);
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
                    <CountUp
                    end={1700000000}
                    duration="10"
                  />
                  </div>
                  {/* <CountUp
                    start={100000}
                    end={123457}
                    duration="10000"
                  /> */}
                </div>
              </div>
            </div>
            <div className="col-1 vl rotate-12 mx-28"/>
            <div className="col-md counter-col">
              <div className="row">
                <div className="col">
                  <div className="row title">Vaccinations Done Today</div>
                  <div id="today-doses" className="row number">
                  <CountUp
                    end={5000000}
                    duration="10"
                  />
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
