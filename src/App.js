import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Home from "./pages/home/home";

function App() {
  const [users, setusers] = useState({
    users: [
      {
        name: "Courtney Henry",
        location: "775 Rolling Green Rd.",
      },
      {
        name: "Darrell Steward",
        location: "7529 E. Pecan St.",
      },
      {
        name: "Cody Fisher",
        location: "3605 Parker Rd.",
      },
      {
        name: "Bessie Cooper",
        location: "775 Rolling Green Rd.",
      },
      {
        name: "Annette Black",
        location: "8080 Railroad St.",
      },
      {
        name: "Jenny Wilson",
        location: "8080 Railroad St.",
      },
      {
        name: "Darlene Robertson",
        location: "3890 Poplar Dr.",
      },
      {
        name: "Ralph Edwards",
        location: "8558 Green Rd.",
      },
    ],
  });
  const [others, setothers] = useState({
    otherStatus: [
      {
        status: "No Issues",
        entriesNo: "19 Unique Entries",
        entryType: "Homogenous",
        riskProfile: "Low Risk",
        state: "Lagos state",
      },
      {
        status: "2 Issues found",
        entriesNo: "10 Unique Entries",
        entryType: "Heterogenous",
        riskProfile: "Mid Risk",
        state: "Lagos state",
      },
      {
        status: "No Issues",
        entriesNo: "8 Unique Entries",
        entryType: "Homogenous",
        riskProfile: "Mid Risk",
        state: "Lagos state",
      },
      {
        status: "1 Issue found",
        entriesNo: "12 Unique Entries",
        entryType: "Heterogenous",
        riskProfile: "High Risk",
        state: "Lagos state",
      },
      {
        status: "No Issues",
        entriesNo: "13 Unique Entries",
        entryType: "Heterogenous",
        riskProfile: "Low Risk",
        state: "Lagos state",
      },
      {
        status: "5 Issues found",
        entriesNo: "18 Unique Entries",
        entryType: "Homogenous",
        riskProfile: "High Risk",
        state: "Lagos state",
      },
      {
        status: "2 Issues found",
        entriesNo: "6 Unique Entries",
        entryType: "Homogenous",
        riskProfile: "Mid Risk",
        state: "Lagos state",
      },
      {
        status: "No Issues",
        entriesNo: "14 Unique Entries",
        entryType: "Homogenous",
        riskProfile: "Low Risk",
        state: "Lagos state",
      },
    ],
  });
  const [newData, setnewData] = useState({
    newFormat: [],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/").then((response) =>
      response.json().then((res) => {
        dispatch({ type: "user_data", data: res.slice(0, 8) });
      })
    );
  });
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
