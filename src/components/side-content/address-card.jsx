import React, { useState } from "react";
import Vector from "../../assets/images/Vector.png";
import location from "../../assets/images/location.png";
import tel from "../../assets/images/tel.png";
import journalEntry from "../../assets/images/journal-entry.png";
import fingerprint from "../../assets/images/fingerprint.png";
import envelope from "../../assets/images/envelope.png";
export default function AddressCard() {
  const [addressDetails, setaddressDetails] = useState({
    details: [
      { id: 1, name: "0812345678", icon: tel },
      { id: 2, name: "asbfefr@gmail.com", icon: envelope },
      { id: 3, name: "mojidi,Lagos", icon: location },
      {
        id: 4,
        name: "2 Journal entries",
        icon: journalEntry,
        color: "#5771EE",
        decoration: "underline",
      },
      { id: 5, name: "24 fingerprints enrolled", icon: fingerprint },
    ],
  });
  const listAddress = addressDetails.details.map((address) => (
    <ul key={address.id} className="ul-address">
      <li>
        <span className="list-icon-span">
          <img
            src={address.icon}
            alt="icon"
            style={{ width: "10px", height: "15px" }}
          />
        </span>
        <a
          style={{
            color: address.color ? address.color : "#0F1A4F",
            fontSize: "14px",
            fontWeight: "400",
            textDecoration: address.decoration ? address.decoration : "",
          }}
        >
          {" "}
          {address.name}
        </a>
      </li>
    </ul>
  ));
  return (
    <div className="card side-cont">
      <div className="row vector-logo-cover">
        <div className="vector-logo">
          <img
            src={Vector}
            alt="vector-logo"
            style={{ marginTop: "7px", marginLeft: "7px" }}
          />
        </div>
        <div className="col division-div">Division Summary</div>
      </div>
      <div className="address-cover">{listAddress}</div>
    </div>
  );
}
