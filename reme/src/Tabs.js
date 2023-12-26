import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AvailableSlotsBoxes from "./Slots";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [selectedTabInfo, setSelectedTabInfo] = useState({
    label: "Today",
    availableSlots: 8,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const { label } =
      tabs[newValue].props.label.props.children[0].props.children;

    console.log("🚀 ~ file: Tabs.js:21 ~ handleChange ~ label:", label);
    const availableSlots = parseInt(
      tabs[newValue].props.label.props.children[2].props.children[0]
    );
    setSelectedTabInfo({ label, availableSlots });
  };

  const handleNextSlide = () => {
    setValue((prevValue) => (prevValue + 1) % tabs.length);
  };

  const [slots,setSlots] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await fetch(
        `http://localhost:9000/doctors/slots?id=123`,
        {
          method: "GET",
        }
      );
      res = await res.json();
      setSlots(res);
    })();
  }, []);

  useEffect(() => {
    const generateTabs = () => {
      const tabsArray = [];
      const startDate = new Date(); // Current date

      for (let i = 0; i < 30; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        // Format the tab label
        let tabLabel = "";
        if (i === 0) {
          tabLabel = "Today";
        } else if (i === 1) {
          tabLabel = "Tomorrow";
        } else {
          const options = { weekday: "short", month: "short", day: "numeric" };
          tabLabel = currentDate.toLocaleDateString("en-US", options);
        }

        // Simulate available slots count (default to 8)
        const availableSlots = i === 0 ? 8 : Math.floor(Math.random() * 10);

        // Add available slots information to the tab label
        const tabContent = (
          <div style={{ paddingLeft: "70px", paddingRight: "70px" }}>
            <span style={{ color: "black" }}>{tabLabel}</span>
            <br />
            <span style={{ fontSize: "10px", color: "green" }}>
              {slots[i]?.slots} slots available
            </span>
          </div>
        );

        tabsArray.push(<Tab key={i} label={tabContent} />);

        // Break the loop if we reach the same day of the next month
        if (
          currentDate.getDate() === startDate.getDate() &&
          currentDate.getMonth() !== startDate.getMonth()
        ) {
          break;
        }
      }

      setTabs(tabsArray);
    };

    generateTabs();
  }, [slots]); // Run only once on component mount

  return (
    <Box
      sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}
      style={{ marginTop: "4rem" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        style={{ width: "60rem" }}
      >
        {tabs}
        <IconButton onClick={handleNextSlide} aria-label="next slide">
          <ChevronRightIcon />
        </IconButton>
      </Tabs>

      {/* Display available slots boxes beneath the selected tab */}
      <AvailableSlotsBoxes availableSlots={selectedTabInfo.availableSlots} />
    </Box>
  );
}
