import React from "react";
import { useSelector } from "react-redux";
import Ellipse from "../../assets/images/Ellipse.png";
export default function CardComponent() {
  const matricReducer = useSelector((state) => state.matricReducer);
  const getMetrics = matricReducer.matrics;
  console.log(getMetrics);
  const metricsCardTemplate = getMetrics
    ? getMetrics.map((metric) => (
        <div class="card col-md col-12 card-div">
          <div className="card-content-cover">
            {metric.total}
            <span className="card-icon">
              <img
                src={Ellipse}
                alt="icon"
                style={{ width: "22.89px", height: "22.89px" }}
              />
            </span>
            <p className="card-p">{metric.name}</p>
          </div>
        </div>
      ))
    : "";
  return <div class="row m-0 card-cover">{metricsCardTemplate}</div>;
}
