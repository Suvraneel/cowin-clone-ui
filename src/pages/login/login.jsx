import React, { Component } from "react";
import Verification from "./pages/verification/verification";
import Registration from "./pages/registration/registration";

class Login extends Component {
  render() {
    if (!this.props.user) {
      return <Verification handleVerify={this.props.handleLogIn} />;
    }

    if (!this.props.user.identityNo) {
      return <Registration mobile={this.props.user.mobile} handleRegister={this.props.handleLogIn} />;
    }
    return <div>Registration successful!</div>;
  }
}

export default Login;
