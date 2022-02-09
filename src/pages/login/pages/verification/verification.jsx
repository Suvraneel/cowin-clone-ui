import "./verification.css";
import React, { Component } from "react";

import heart from "../../../../images/login-screen.svg";
import axios from "axios";

class Verification extends Component {
  state = {
    isOTPSent: false,
    isOTPInvalid: false,
    inputField: "",
    mobile: "",
    code: 0,
  };

  requestOTP = () => {
    console.log("Ping");
    const options = {
      url: "https://cowin-api-suvraneel.herokuapp.com/user/generate",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        mobile: this.state.mobile,
      },
    };
    axios(options).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        var code = response.data.code;
        this.setState({ isOTPSent: true });
        alert("OTP: " + code);
      } else {
        alert("Error requesting OTP! " + response.status);
      }
    });
  };

  verifyOTP = () => {
    const options = {
      url: "https://cowin-api-suvraneel.herokuapp.com/user/validate",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        mobile: this.state.mobile,
        code: this.state.code,
      },
    };

    axios(options).then((response) => {
      if (response.status === 200) {
        var user = response.data;
        this.props.handleVerify(user);
      } else if (response.status === 205) {
        this.setState({ isOTPInvalid: true });
      } else {
        alert("Error verifying OTP! " + response.status);
      }
    });
  };

  handleMobileSubmit = () => {
    if (!this.state.isOTPSent) {
      this.state.mobile = this.state.inputField;
    }
    if (this.state.mobile.length < 10) {
      alert("Please enter a valid 10 digit mobile number");
    } else {
      this.setState({ inputField: "" });
      this.requestOTP();
    }
  };

  handleOTPSubmit = () => {
    this.state.code = parseInt(this.state.inputField);
    this.setState({ inputField: "" });
    if (this.state.code.length < 4) {
      this.setState({ isOTPInvalid: true });
    } else {
      this.verifyOTP();
    }
  };

  render() {
    const { isOTPSent } = this.state;
    return (
      <div className="form-wrapper">
        <div className="heart-wrapper relative top-5">
          <img className="heart-img w-20" src={heart} alt="heart" />
        </div>
        <div className="form-card">
        <br/>
        <div className="text-2xl font-bold text-blue-900">Register or Sign In for Vaccination</div>
        <div>
          <div>
            <p>An OTP {isOTPSent ? "has been" : "will be"} sent to your mobile number for verification</p>
          </div>
          <div>
            <input
              maxLength={isOTPSent ? "4" : "10"}
              style={{ borderColor: this.state.isOTPInvalid ? "red" : "#0d153f" }}
              className={isOTPSent ? "otp-input" : "mobile-input"}
              placeholder={isOTPSent ? "OTP" : "Enter your mobile number"}
              value={this.state.inputField}
              onChange={(e) => {
                this.setState({ inputField: e.target.value });
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (isOTPSent) {
                    this.handleOTPSubmit();
                  } else {
                    this.handleMobileSubmit();
                  }
                }
              }}
            />
          </div>
          <br />
          <div>
            <button onClick={this.handleMobileSubmit} className="b-btn">
              {isOTPSent ? "Resend OTP" : "Get OTP"}
            </button>
          </div>
          <br />
          <div>
            <p className="agree-text">
              By Sign In/Registration, I agree to the <a href="https://www.cowin.gov.in/terms-condition">Terms of service</a> and <a href="https://www.cowin.gov.in/privacy-policy">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Verification;
