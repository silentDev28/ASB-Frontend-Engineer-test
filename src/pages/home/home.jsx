import React from "react";
import SimpleCard from "../../components/card-component/card-component";
import SideComponent from "../../components/side-content/side-component";
import CurrentNav from "./current-nav";

export default function Home() {
  return (
    <div className="home-cover">
      <CurrentNav />
      <SimpleCard />
      <SideComponent />
    </div>
  );
}
