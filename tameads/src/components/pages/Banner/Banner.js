import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

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
          <div className="play-part">
          <div className="play-btn flex">
          </div>
          <Link className="play-link flex">Play Video</Link>
          </div>
        </div>

        <div className="dashboard"></div>
      </div>
    </div>
  );
};

export default Banner;
