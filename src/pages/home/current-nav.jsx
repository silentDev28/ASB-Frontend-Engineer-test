import React from "react";
import PathLeft from "../../assets/images/Path-left.png";
export default function CurrentNav() {
  return (
    <div className="nav-route">
      Divisions
      <span className="left-cover">
        {" "}
        <img src={PathLeft} alt="left-path" />
      </span>
      Module
    </div>
  );
}
