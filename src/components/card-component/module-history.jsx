import React from "react";
import VerticalLinearStepper from "../stepper";
import Speaker from "../../assets/images/speaker-side-view.png";

export default function ModuleHistory() {
  return (
    <div class="card side-cont module-history-card">
      <div className="row vector-logo-cover">
        <div className="vector-logo">
          <img
            src={Speaker}
            alt="vector-logo"
            style={{ marginTop: "7px", marginLeft: "7px" }}
          />
        </div>
        <div className="col division-div">Module History</div>
      </div>
      <div class="card-body" style={{ position: "relative" }}>
        <VerticalLinearStepper />{" "}
      </div>
    </div>
  );
}
