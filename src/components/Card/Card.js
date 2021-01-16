import React from "react";
import "./Card.css";
import food from "../../assets/food.jpg"; // Tell webpack this JS file uses this image
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">K</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">Title</h5>
          <div className="card-date">Date</div>
        </div>
      </div>
      <img className="card-image" src={food} alt="Logo" />
      <div className="card-text">Description</div>
      <div className="card-like-bar">
        {props.liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>7</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}