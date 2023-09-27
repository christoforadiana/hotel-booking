const { Router } = require("express");
const bookingRoute = Router();
const { BookingController } = require("../controllers");

bookingRoute.get("/", BookingController.getBookings);
bookingRoute.post("/add", BookingController.addBooking);
// bookingRoute.get("/add", BookingController.addBrandPage);
bookingRoute.get("/delete/:bookingId", BookingController.deleteBooking);
bookingRoute.post("/update/:bookingId", BookingController.updateBooking);
// bookingRoute.get("/update/:bookingId", BookingController.updateBrandPage);

module.exports = bookingRoute;
