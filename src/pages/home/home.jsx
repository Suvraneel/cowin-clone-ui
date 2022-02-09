import Carousel from "./components/carousel";
import Counter from "./components/counter";
import PrecautionCard from "./components/precautionCard";
import ShareStatusCard from "./components/shareStatusCard";
import WhatsNew from "./components/whatsNew";
import partners from "../../images/partners.png";
import "./home.css";

function Home() {
  return (
    <div>
      <div>
        <Carousel />
        <Counter />
        <PrecautionCard />
        <ShareStatusCard />
        <WhatsNew />
        <img
          src={partners}
          alt="Our Partners: Digilocker, Umang, Arogya Setu"
          style={{ width: "100vw", height: "50vh", objectFit: "cover" }}
        />
      </div>
      <div className="fixed-bottom d-md-none">
      </div>
    </div>
  );
}

export default Home;
