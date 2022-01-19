import React from "react";
import "../Components/slider.css";
import AliceCarousel, { Classnames } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../Components/assets/w1.png";
import image2 from "../Components/assets/w2.png";
import image3 from "../Components/assets/w3.png";
import image4 from "../Components/assets/w4.png";
import image5 from "../Components/assets/w5.png";

function App() {
  return (
    <>
      <div class="row">
        <div class="column">
          <div className="App">
            <AliceCarousel autoPlay autoPlayInterval="3000">
              <img src={image1} className="sliderimg" />
              <img src={image2} className="sliderimg" />
              <img src={image3} className="sliderimg" />
              <img src={image4} className="sliderimg" />
              <img src={image5} className="sliderimg" />
            </AliceCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
