import React from "react";
import "../css/banner_style.css";
import sliderImg from "../img/sliderImg.jpg";
function BannerScreen() {
  return (
    <div
      class="main_slider"
      style={{
        backgroundImage: `url(${sliderImg})`,
      }}
    >
      <div class="container fill_height">
        <div class="row align-items-center fill_height">
          <div class="col">
            <div class="main_slider_content">
              <h6>Spring / Summer Collection 2017</h6>
              <h1>Get up to 30% Off New Arrivals</h1>
              <div class="red_button shop_now_button">
                <a href="#">shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerScreen;
