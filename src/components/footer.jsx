import "./styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer bg-teal-700">
      <div className="container">
        <div className="row list-title" style={{ textAlign: "left", paddingTop: "15px"}}>
          <div className="col-md-2 col-6 text-teal-100 text-lg font-bold">
            Vaccination Services
            <br />
            <Link to="appointmentDetails">
            <a href="">Register Members</a>
            </Link>
            <br />
            <Link to="appointmentDetails">
            <a href="">Search Vaccination Centers</a>
            </Link>
            <br />
            <Link to="appointmentDetails">
            <a href="">Book Vaccination Slots</a>
            </Link>
            <br />
            <Link to="appointmentDetails">
            <a href="">Manage Appointment</a>
            </Link>
            <br />
            <Link to="appointmentDetails">
            <a href="">Download Certificate</a>
            </Link>
          </div>
          <div className="col-md-2 col-6 text-teal-100 text-lg font-bold">
            Platforms
            <br />
            <a href="">Co-WIN International</a>
            <br />
            <a href="">Vaccinator</a>
            <br />
            <a href="">Department Login</a>
            <br />
            <a href="">Verify Certificates</a>
            <br />
            <a href="">Vaccination Statistics</a>
          </div>
          <div className="col-md-2 col-6 text-teal-100 text-lg font-bold">
            Resources
            <br />
            <a href="">How To Get Vaccinated</a>
            <br />
            <a href="">Dos and Don'ts</a>
            <br />
            <a href="">Overview</a>
            <br />
            <a href="">API Guidelines</a>
            <br />
            <a href="">Open API's</a>
            <br />
            <a href="">Grievance Guidelines</a>
          </div>
          <div className="col-md-2 col-6 text-teal-100 text-lg font-bold">
            Support
            <br />
            <a href="">Frequently Asked Questions</a>
            <br />
            <a href="">Certificate Corrections</a>
            <hr className="bg-white" />
            <div className="flex justify-between">
              <div className="">
                Child
                <br />
                <a href="">1098</a>
              </div>
              <div className="">
                Mental Health
                <br />
                <a href="">08046110007</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 text-teal-100 text-lg font-bold">
            Contact Us
            <br />
            <a href="">Helpline: +91-11-23978046 (Toll Free - 1075 )</a>
            <br />
            <a href="">Technical Helpline: 0120 4473222</a>
            <hr className="bg-white" />
            <div className="flex justify-evenly">
              <div className="">
                Senior Citizens
                <br />
                <a href="">14567</a>
              </div>
              <div className="">
                NCW
                <br />
                <a href="">7827170170</a>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
        <div className="row w-screen bg-teal-900 text-sm flex items-center h-10">
          <div className="col-md-8 order-3 order-md-1 px-5">
            Copyright © 2021 Co-WIN. All Rights Reserved
          </div>
          <div className="col-md-2 order-1 order-md-2">
            <a style={{ fontWeight: 300 }} href="">
              Terms of Service &nbsp;&nbsp;|
            </a>
  
            <a style={{ fontWeight: 300 }} href="">
              &nbsp;&nbsp; Privacy Policy
            </a>
          </div>
        </div>
    </div>
  );
}

export default Footer;
