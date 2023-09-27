const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "Hotel Booking",
  });
//   res.render("index.ejs");
});

const bookingRoutes = require("./booking");
const customerRoutes = require("./customer");
const roomRoutes = require("./room");

route.use("/bookings", bookingRoutes);
route.use("/customers", customerRoutes);
route.use("/rooms", roomRoutes);

module.exports = route;
