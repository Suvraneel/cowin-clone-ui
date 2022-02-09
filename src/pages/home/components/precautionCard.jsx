import { Link } from "react-router-dom";
import precaution from "../../../images/Precaution_dose.svg";

function PrecautionCard() {
  return (
    <div className="precaution-card bg-teal-50">
      <div className="container-lg w-full flex justify-evenly">
        <div className="row py-5 flex justify-between w-1/2">
          <div className="flex flex-col">
            <div className="text-3xl font-bold text-teal-700">
              Precaution Dose and Children Vaccination
            </div>
            <br />
            <div className="text-md">
              Protect our Senior Citizens and Children. Precaution Dose is
              available for fully vaccinated HCW/FLW and Senior Citizens (60+
              yrs) after 39 weeks from the 2nd dose. Citizens aged 60 years or
              more and having co-morbidities, should take precaution dose, only
              after medical advice. Also, getting your Children(15-18 yrs)
              vaccinated is the best thing you can do to protect your child
              against COVID-19. Both online and walk-in are available.
            </div>
            <br />
            <Link to="appointmentDetails">
              <button className="rounded-full py-2 px-4 bg-teal-700 text-white w-52">Book Your Slot</button>
            </Link>
          </div>
        </div>
        <img className="big-img w-96" src={precaution} alt="precaution"/>
      </div>
    </div>
  );
}

export default PrecautionCard;
