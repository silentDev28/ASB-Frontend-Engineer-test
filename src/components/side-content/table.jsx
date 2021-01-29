import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import DropDown from "../../assets/images/chevron.png";
import { useSelector } from "react-redux";
import blackDot from "../../assets/images/black_dot.png";
import LowRiskArrow from "../../assets/images/diagonal-arrow1.png";
import MidRiskArrow from "../../assets/images/right.png";
import HighRiskArrow from "../../assets/images/up-arrow.png";
import ListMenu from "../../assets/images/list-menu.png";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const userRecord = useSelector((state) => state.userRecord);
  const UsersData = userRecord.users;
  const [checkState, setcheckState] = useState({ status: false, id: "" });
  const handleCheck = (status, id) => {
    setcheckState({ status, id });
  };

  const TableTemplate = UsersData
    ? UsersData.map((user) => (
        <TableRow key={user.id}>
          <TableCell align="left">
            <Checkbox checked={checkState.status} />
          </TableCell>
          <TableCell align="left">
            <img
              src={DropDown}
              alt="drop"
              style={{ width: "15px", height: "15px" }}
            />
          </TableCell>
          <TableCell align="left"> {user.name}</TableCell>
          <TableCell align="left">
            <span
              style={{
                marginBottom: "10px",
                color: "#25213B",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              Lagos
            </span>
            <br></br>
            <span
              style={{
                fontWeight: "400px",
                fontSize: "12px",
                color: "#878592",
              }}
            >
              {user.address.street}
            </span>
          </TableCell>
          <TableCell align="left">
            {user.address.geo.lng >= 62.5342 &&
            user.address.geo.lng <= 71.7478 ? (
              <span className="issues">No Issues</span>
            ) : (
              <span className="no-issues">
                {user.address.geo.lng.toString()[1]} issues found
              </span>
            )}
          </TableCell>
          <TableCell
            align="left"
            style={{ fontWeight: "700", fontSize: "12px", color: "#25213B" }}
          >
            {user.address.geo.lng >= 62.5342 &&
            user.address.geo.lng <= 71.7478 ? (
              <span>
                <span style={{ marginRight: "5px" }}>
                  <img src={blackDot} alt="dot"></img>
                </span>
                {user.address.geo.lng.toString()[1] - 1} Unique Entries
                <br></br>
                <snap
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#878592",
                  }}
                >
                  Heterogenous
                </snap>
              </span>
            ) : (
              <span>
                <span style={{ marginRight: "5px" }}>
                  <img src={blackDot} alt="dot"></img>
                </span>
                {user.address.geo.lng.toString()[1] - 1} Unique Entries
                <br></br>
                <snap
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#878592",
                  }}
                >
                  Homogenous
                </snap>
              </span>
            )}
          </TableCell>
          <TableCell
            align="left"
            style={{ fontWeight: "500", fontSize: "14px" }}
          >
            {user.address.geo.lng >= 62.5342 &&
            user.address.geo.lng <= 71.7478 ? (
              <span style={{ color: "#3C3AB6" }}>
                {" "}
                <span style={{ marginRight: "13.83px" }}>
                  <img
                    src={MidRiskArrow}
                    alt="low-logo"
                    style={{ width: "8.33px", height: "8.33px" }}
                  />
                </span>
                Mid Risk
              </span>
            ) : user.address.geo.lng < 62.5342 ? (
              <span style={{ color: "#3AB65C" }}>
                <span style={{ marginRight: "13.83px" }}>
                  <img
                    src={LowRiskArrow}
                    alt="low-logo"
                    style={{ width: "8.33px", height: "8.33px" }}
                  />
                </span>
                Low Risk
              </span>
            ) : (
              <span style={{ color: "#B63A3A" }}>
                {" "}
                <span style={{ marginRight: "13.83px" }}>
                  <img
                    src={HighRiskArrow}
                    alt="low-logo"
                    style={{ width: "8.33px", height: "8.33px" }}
                  />
                </span>
                High Risk
              </span>
            )}
          </TableCell>
          <TableCell align="left">
            <img src={ListMenu} alt="menu-list" />
          </TableCell>
        </TableRow>
      ))
    : "";
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="table-header">
          <TableRow>
            <TableCell align="left">
              <Checkbox onChange={(evt) => handleCheck(evt.target.checked)} />
            </TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Entries</TableCell>
            <TableCell align="left">Risk Profile</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{TableTemplate}</TableBody>
      </Table>
    </TableContainer>
  );
}
