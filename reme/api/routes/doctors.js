var express = require("express");
var router = express.Router();

const doctors = [
  { id: "123", name: "Dr. Manik Dalvi", field: "Obstetrics & Gynecology" },
];
const slots = [
  { id: "123", date: "25/12/2023", slots: "8" },
  { id: "123", date: "26/12/2023", slots: "9" },
  { id: "123", date: "27/12/2023", slots: "0" },
  { id: "123", date: "28/12/2023", slots: "6" },
  { id: "123", date: "29/12/2023", slots: "7" },
  { id: "123", date: "30/12/2023", slots: "8" },
  { id: "123", date: "31/12/2023", slots: "2" },
  { id: "123", date: "01/01/2024", slots: "8" },
  { id: "123", date: "02/01/2024", slots: "3" },
  { id: "123", date: "03/01/2024", slots: "1" },
  { id: "123", date: "04/01/2024", slots: "5" },
  { id: "123", date: "05/01/2024", slots: "8" },
  { id: "123", date: "06/01/2024", slots: "8" },
  { id: "123", date: "07/01/2024", slots: "8" },
  { id: "123", date: "08/01/2024", slots: "8" },
  { id: "123", date: "09/01/2024", slots: "0" },
  { id: "123", date: "10/01/2024", slots: "1" },
  { id: "123", date: "11/01/2024", slots: "7" },
  { id: "123", date: "12/01/2024", slots: "2" },
  { id: "123", date: "13/01/2024", slots: "4" },
  { id: "123", date: "14/01/2024", slots: "8" },
  { id: "123", date: "15/01/2024", slots: "6" },
  { id: "123", date: "16/01/2024", slots: "8" },
  { id: "123", date: "17/01/2024", slots: "8" },
  { id: "123", date: "18/01/2024", slots: "8" },
  { id: "123", date: "19/01/2024", slots: "0" },
  { id: "123", date: "20/01/2024", slots: "8" },
  { id: "123", date: "21/01/2024", slots: "8" },
  { id: "123", date: "22/01/2024", slots: "4" },
  { id: "123", date: "23/01/2024", slots: "8" },
  { id: "123", date: "24/01/2024", slots: "8" },
  { id: "123", date: "25/01/2024", slots: "8" },
];
const clinic = [{id:"123",address:"Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302"}]
const fees = [{"id":"123",fees:"Rs 500"}];

router.get("/", function (req, res, next) {
  res.json(doctors);
});

const findSlot = (id) => {
  return slots.filter((slot) => slot.id === id);
};

const findClinic = (id) => {
  return clinic.find((clinic) => clinic.id === id);
};
const findfees = (id) => {
  return fees.find((slot) => slot.id === id);
};

router.get("/slots", function (req, res, next) {
  const { id } = req.query;
  const result = findSlot(id);
  res.json(result);
});

router.get("/clinic", function (req, res, next) {
  const { id } = req.query;
  const result = findClinic(id);
  res.json(result);
});

router.get("/fees", function (req, res, next) {
  const { id } = req.query;
  const result = findfees(id);
  res.json(result);
});

module.exports = router;
