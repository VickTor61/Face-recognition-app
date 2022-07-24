import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageurl, boundary_box }) => {
  return (
    <div className="center ma">
      <div className="absolute">
         <img  id="imginput" src={imageurl} alt="imageurl" style={{ width: "30rem", height: "auto" }}/>
      <div className="boundary_box" style={{ top: boundary_box.top_row, right: boundary_box.right_col, bottom: boundary_box.bottom_row, left: boundary_box.left_col }}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
