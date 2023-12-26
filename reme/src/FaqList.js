import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SouthIcon from "@mui/icons-material/South";

const FAQList = () => {
  const faqs = [
    "What are the payment options available?",
    "Do we serve all over India?",
    "What are the walk-in options available?",
    "Are online consultations available?",
    "How long will my appointment take?",
    "Is any referral required for appointments?",
    "How can I book an appointment?",
  ];

  const answers = [
    "You can pay using a variety of methods such as Internet Banking, Debit/Credit card, Wallet, UPI, and so on.",
    "We are currently based in Bhiwandi, however, we offer services nationwide via online consultations.",
    "We offer services at our clinics located at Bhiwandi.",
    "Yes, we offer teleconsultation and online services. Book an appointment at the link provided.",
    "The length of your appointment is determined by the condition or injuries being treated, as well as whether or not x-rays or an MRI are required. Please allow at least one hour for doctors to provide personalized attention and high-quality care.",
    "No, we do not require a referral for the appointments.",
    "You can click on the book appointment link.",
  ];

  const [showDetails, setShowDetails] = useState(null);

  const handleItemClick = (index) => {
    setShowDetails((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box sx={{ marginTop: "2rem" }}>
      {faqs.map((faq, index) => (
        <div key={index}>
          <Typography
            key={index}
            component="div"
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              marginBottom: "0.5rem",
            }}
            onClick={() => handleItemClick(index)}
            style={{
              border: "1px solid lightGray",
              backgroundColor: "white",
              width: "40rem",
              height: "3rem",
              marginLeft: "10rem",
              borderRadius: "0.5rem",
              textAlign: "left",
              color: "Gray",
              paddingLeft: "14px",
              paddingTop: "10px",
              position: "relative",
            }}
          >
            {faq}

            <SouthIcon
              sx={{
                position: "absolute",
                right: "0.5rem",  // Adjust this value as needed
                color: "white",
                background: "#22cb72",
                width: "0.8rem",
                height: "0.8rem",
                padding: "5px",
                borderRadius: "50%",
              }}
            />
          </Typography>
          {showDetails === index && (
            <Box
              sx={{
                border: "1px solid lightGray",
                backgroundColor: "white",
                width: "40rem",
                height: "fit-content",
                marginLeft: "10rem",
                borderRadius: "0.5rem",
                textAlign: "left",
                color: "Gray",
                paddingLeft: "14px",
                paddingTop: "10px",
                marginTop:"-10px",
                marginBottom:"1rem",
                fontSize: "14px",
                color:"black",
                paddingBottom:"13px"
              }}
            >
             {answers[index]}
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
};

export default FAQList;
