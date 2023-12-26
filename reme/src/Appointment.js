import React, { useEffect, useState } from "react";
import { Avatar, Button, Toolbar, Typography, AppBar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import "./App.css";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddHomeIcon from "@mui/icons-material/AddHome";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import ScrollableTabsButtonAuto from "./Tabs";
import FAQList from "./FaqList";
import "./index.css";

export function Appointment() {
  const [inClinic, setInClinic] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [fee, setFee] = useState({});
  const [clinic, setClinic] = useState({});
  const handleInClinic = () => {
    setInClinic(true);
  };
  const handleAudio = () => {
    setInClinic(false);
  };

  useEffect(() => {
    (async () => {
      let res = await fetch("http://localhost:9000/doctors", {
        method: "GET",
      });
      res = await res.json();
      setDoctor(res);

      let fee = await fetch("http://localhost:9000/doctors/fees?id=123", {
        method: "GET",
      });
      fee = await fee.json();
      setFee(fee);

      let clinic = await fetch("http://localhost:9000/doctors/clinic?id=123", {
        method: "GET",
      });
      clinic = await clinic.json();
      setClinic(clinic);
    })();
  }, []);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ height: "4rem", backgroundColor: "white" }}
        >
          <Avatar
            style={{ marginLeft: "8rem", width: "3rem", height: "3rem" }}
            sx={{ bgcolor: deepOrange[500] }}
          >
            MD
          </Avatar>
        </Toolbar>
      </AppBar>
      <div style={{ backgroundColor: "lightgray", height: "100rem" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "60rem",
            marginLeft: "13rem",
            height: "88rem",
          }}
        >
          <div style={{ top: "7rem", position: "absolute" }}>
            <div style={{ display: "flex", top: "3rem" }}>
              <Avatar
                style={{
                  height: "5rem",
                  width: "5rem",
                  marginRight: "1rem",
                  marginLeft: "2rem",
                }}
                alt="Remy Sharp"
                src="https://img.freepik.com/premium-vector/avatar-female-doctor-with-black-hair-doctor-with-stethoscope-vector-illustrationxa_276184-33.jpg?w=2000"
              />
              <div>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "1.5rem",
                  }}
                >
                  {doctor && doctor[0]?.name}
                </Typography>
                <Typography style={{ textAlign: "left", marginLeft: "1.5rem" }}>
                  {" "}
                  {doctor && doctor[0]?.field}
                </Typography>
                <Button
                  variant="outlined"
                  style={{ marginTop: "0.5rem", marginLeft: "-17px" }}
                >
                  View Profile
                </Button>
              </div>
            </div>
            <hr
              style={{ color: "lightgray", width: "60rem", marginTop: "50px" }}
            />
            <div
              style={{
                display: "flex",
                margin: "1rem",
                marginTop: "-10px",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <br></br>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", textAlign: "left" }}
                >
                  Book Appointment
                </Typography>
                <Typography variant="subtitle1" style={{ textAlign: "left" }}>
                  Select Your Consultation Type
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                    textAlign: "left",
                    color: "#22cb72",
                    fontWeight: "bold",
                  }}
                >
                  Fees approx {fee && fee?.fees}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ textAlign: "left", color: "#a151d1" }}
                >
                  (pay at clinic)
                </Typography>
              </div>
              <div style={{ marginRight: "10px" }}>
                <Button
                  style={{
                    height: "5rem",
                    width: "5rem",
                    border: "1px solid lightgray",
                    marginTop: "1rem",
                    margin: "1rem",
                  }}
                  onClick={() => handleInClinic()}
                  className="btn"
                >
                  <div>
                    <AddHomeIcon
                      style={{
                        color: "black",
                        paddingTop: "1rem",
                        width: "2rem",
                        height: "2rem",
                        marginBottom: "-1rem",
                      }}
                    />
                    <br></br>
                    <p style={{ fontSize: "12px", color: "black" }}>
                      In-Clinic
                    </p>
                  </div>
                </Button>
                <Button
                  style={{
                    height: "5rem",
                    width: "5rem",
                    border: "1px solid lightgray",
                    marginTop: "1rem",
                    margin: "1rem",
                  }}
                  onClick={() => handleAudio()}
                  className="btn"
                >
                  <div>
                    <CallIcon
                      style={{
                        color: "black",
                        paddingTop: "1rem",
                        width: "2rem",
                        height: "2rem",
                        marginBottom: "-1rem",
                      }}
                    />
                    <br></br>
                    <p style={{ fontSize: "12px", color: "black" }}>Audio</p>
                  </div>
                </Button>
                <Button
                  style={{
                    height: "5rem",
                    width: "5rem",
                    border: "1px solid lightgray",
                    marginTop: "1rem",
                    margin: "1rem",
                  }}
                  onClick={() => handleAudio()}
                  className="btn"
                >
                  <div>
                    <VideocamIcon
                      style={{
                        color: "black",
                        paddingTop: "1rem",
                        width: "2rem",
                        height: "2rem",
                        marginBottom: "-1rem",
                      }}
                    />
                    <br></br>
                    <p style={{ fontSize: "12px", color: "black" }}>Video</p>
                  </div>
                </Button>
              </div>
            </div>

            {inClinic && (
              <div style={{ textAlign: "left" }}>
                <Typography
                  variant="body1"
                  style={{
                    marginLeft: "2rem",
                    marginTop: "3rem",
                    fontWeight: "bold",
                  }}
                >
                  Clinic Name
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "3.5rem" }}
                >
                  <div style={{ display: "flex", marginTop: "1rem" }}>
                    <TripOriginIcon style={{ color: "green" }} />
                    {clinic && clinic.address}
                  </div>
                </Typography>
              </div>
            )}

            <div>
              <ScrollableTabsButtonAuto />
            </div>
            <div>
              <Button
                style={{
                  height: "2rem",
                  width: "8rem",
                  border: "1px solid lightgray",
                  marginTop: "1rem",
                  margin: "1rem",
                  background: "lightgray",
                  float: "right",
                }}
                onClick={() => handleAudio()}
              >
                <div>
                  <p style={{ fontSize: "12px", color: "white" }}>Continue</p>
                </div>
              </Button>
            </div>

            <div
              style={{
                backgroundColor: "#d2ff96",
                marginTop: "8rem",
                height: "50rem",
              }}
            >
              <h4 style={{ padding: "5rem", fontSize: "2rem" }}>
                Frequently asked questions
              </h4>
              <FAQList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
