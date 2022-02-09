import "./styles/carousel.css";
import carousel1 from "../../../images/carousel1.jpg";
import carousel2 from "../../../images/carousel2.jpg";

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="20000">
          <img
            src={carousel1}
            className="d-block w-100"
            alt="Modiji wall"
          />
        </div>
        <div className="carousel-item" data-bs-interval="20000">
          <img
            src={carousel2}
            className="d-block w-100"
            alt="PPC"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
