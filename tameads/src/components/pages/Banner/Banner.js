import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import play from "../../../assets/banner/Icon ionic-ios-play.svg"

const Banner = () => {
  return (
    <div className="banner">
      <div className="bn-info">
        <h1>
          Better Ads For <span>Better Results.</span>
        </h1>
        <p>
          Drive marketing results faster with TameAds global advertising
          platform for media, buyers, affiliates ad networks, and publishers.
        </p>

        <div className="banner-btn">
          <Link className="btn-start flex">Get Started</Link>
          <Link className="play-link flex">
            <div className="play-btn flex"> <img src={play} alt="play"/></div>
            Play Video</Link>
        </div>
      </div>

      <div className="img-banner">
        <div className="rocket-right"></div>
        <div className="rocket-left"></div>
      </div>
      <div className="dashboard"></div>
    </div>
  );
};

export default Banner;
