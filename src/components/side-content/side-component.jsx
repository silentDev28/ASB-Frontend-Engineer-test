import React from "react";
import ModuleHistory from "../card-component/module-history";

import AddressCard from "./address-card";
import DataTables from "./table";

export default function SideComponent() {
  return (
    <div className=" address-and-table-card">
      <div className="row m-0">
        <div className="address-card">
          <AddressCard />

          <ModuleHistory />
        </div>

        <div className="side-cont table-cont col">
          <DataTables />
        </div>
      </div>
    </div>
  );
}
