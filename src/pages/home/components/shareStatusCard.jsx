import share from "../../../images/share_illustration.svg";

function ShareStatusCard() {
  return (
    <div className="share-card">
      <div className="container-lg w-screen flex justify-evenly">
      <img className="big-img w-96" src={share} alt="share"/>
        <div className="row py-5 flex justify-between w-1/2">
          <div className="flex flex-col">
            <div className="text-3xl font-bold text-teal-700">  
              Share Your Vaccination Status
            </div>
            <br />
            <div className="text-md">
              Be a Fighter! If you are fully or partially vaccinated, you can now share your vaccination status in your social circle. Let's encourage our friends and followers in joining India's battle against COVID-19.
            </div>
            <br />
            <a href="https://cdn-api.co-vin.in/api/v3/vaccination/status/knowYourStatus">
            <button className="rounded-full py-2 px-4 w-52 bg-teal-700 text-white">Share your Status</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareStatusCard;
