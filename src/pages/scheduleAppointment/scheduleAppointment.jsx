import React, { Component } from "react";
import axios from "axios";

import "./scheduleAppointment.css";
import Toast from "../../components/toast";

class ScheduleAppointment extends Component {
  state = {
    stateList: [],
    cityList: [],
    centerList: [],
    dateList: [],
    selectedState: "",
    selectedCity: "",
    selectedCenterId: "",
    selectedDateISOString: "",
    serverMessage: false,
    msg: "",
  };

  showMessage = (msg) => {
    this.setState({
      serverMessage: true,
      msg: msg,
    });
  };

  generateDates = () => {
    var today = new Date();
    var dateList = [];

    for (let i = 1; i <= 14; i++) {
      var date = new Date(today);
      date.setDate(today.getDate() + i);
      dateList.push(date);
    }

    this.setState({ dateList: dateList, selectedDateISOString: dateList[0].toISOString() });
  };

  getStates = () => {
    const options = {
      url: "https://cowin-api-suvraneel.herokuapp.com/states",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(options).then((response) => {
      if (response.status === 200) {
        const { states } = response.data;
        this.setState({ stateList: states, selectedState: states[0] });
      } else {
        alert("Error getting states " + response.status);
      }
    });
  };

  getCities = (state) => {
    const options = {
      url: "https://cowin-api-suvraneel.herokuapp.com/states/" + state.replace(/ /g, "+"),
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(options).then((response) => {
      if (response.status === 200) {
        const { cities } = response.data;
        this.setState({ selectedState: state, cityList: cities, selectedCity: cities[0] });
      } else {
        alert("Error getting cities " + response.status);
      }
    });
  };

  getCenters = (city) => {
    const options = {
      url: "https://cowin-api-suvraneel.herokuapp.com/center?city=" + city.replace(/ /g, "+"),
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(options).then((response) => {
      if (response.status === 200) {
        const { results } = response.data;
        if (results.length !== 0) {
          this.setState({ selectedCity: city, centerList: results, selectedCenterId: results[0]._id });
        } else {
          this.showMessage("No Centers available in " + city);
          this.setState({ selectedCity: city, centerList: [], selectedCenterId: "" });
        }
      } else {
        alert("Error getting centers " + response.status);
      }
    });
  };

  componentDidMount() {
    this.generateDates();
    this.getStates();
  }

  handleDiscard = () => {
    this.setState({
      msg: "",
      serverMessage: false,
    });
  };

  requestAppointment = () => {
    var bookDate = new Date(this.state.selectedDateISOString);
    var dateRequestString = bookDate.getMonth() + 1 + "/" + bookDate.getDate() + "/" + bookDate.getFullYear();

    const options = {
      url: "https://cowin-api-suvraneel.herokuapp.com/appointment",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        mobile: this.props.user.mobile,
        centerId: this.state.selectedCenterId,
        date: dateRequestString,
      },
    };

    axios(options).then((response) => {
      if (response.status === 200) {
        var user = this.props.user;
        user.appointmentId = response.data._id;
        this.props.handleLogIn(user);
      } else if (response.status === 205) {
        this.showMessage("No slots available on the give date");
      } else {
        alert("Error booking Appointment! " + response.status);
      }
    });
  };

  handleSubmit = () => {
    if (!this.state.selectedState) {
      this.showMessage("Please select a state");
    } else if (!this.state.selectedCity) {
      this.showMessage("Please select a city");
    } else if (!this.state.selectedCenterId) {
      this.showMessage("Please select a center");
    } else if (!this.state.selectedDateISOString) {
      this.showMessage("Please select an appointment date");
    } else {
      this.requestAppointment();
    }
  };

  render() {
    const { selectedDateISOString } = this.state;

    return (
      <div className="flex-1  sc-wrap">
      <div className="form-wrapper h-screen box-content">
        <div className="form-card-big">
          <br/>
        <h1 className="register-title my-3">Schedule an Appointment</h1>
        <Toast msg={this.state.msg} visible={this.state.serverMessage} handleDiscard={this.handleDiscard} />
        <form onSubmit={this.handleSubmit}>
          <div style={{ textAlign: "left" }}>
            <br />
            <label>
              <p>Select your State</p>
            </label>
            <select
              value={this.state.selectedState}
              style={{ width: "100%" }}
              class="form-select"
              id="inputGroupSelect01"
              onChange={(e) => {
                this.getCities(e.target.value);
              }}
            >
              {this.state.stateList.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <label>
              <p>Select your Town/Village/City</p>
            </label>
            <select
              value={this.state.selectedCity}
              style={{ width: "100%" }}
              class="form-select"
              id="inputGroupSelect02"
              onChange={(e) => {
                this.getCenters(e.target.value);
              }}
            >
              {this.state.cityList.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <label>
              <p>Select a Center</p>
            </label>
            <select
              value={this.state.selectedCenterId}
              style={{ width: "100%" }}
              class="form-select"
              id="inputGroupSelect03"
              onChange={(e) => {
                this.setState({ selectedCenterId: e.target.value });
              }}
            >
              {this.state.centerList.map((center) => (
                <option value={center._id}>{center.centerName}</option>
              ))}
            </select>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>
            <label>
              <p>Choose appointment Date</p>
            </label>
            <select
              value={selectedDateISOString}
              style={{ width: "100%" }}
              class="form-select"
              id="inputGroupSelect04"
              onChange={(e) => {
                this.setState({ selectedDateISOString: e.target.value });
              }}
            >
              {this.state.dateList.map((date) => (
                <option value={date.toISOString()}>{date.toDateString()}</option>
              ))}
            </select>
          </div>
          <br />
          <br />
          <div>
            <button type="submit" className="b-btn">
              Book Appointment
            </button>
          </div>
          <br/>
          <div>
            <p className="agree-text">
              By Sign In/Registration, I agree to the <a href="https://www.cowin.gov.in/terms-condition">Terms of service</a> and <a href="https://www.cowin.gov.in/privacy-policy">Privacy Policy</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
    );
  }
}

export default ScheduleAppointment;
