const { Router } = require("express");
const bookingRoute = Router();
const { BookingController } = require("../controllers");

bookingRoute.get("/", BookingController.getBookings);
bookingRoute.get("/detail/:bookingId", BookingController.getDetailBooking);
bookingRoute.post("/add", BookingController.addBooking);
bookingRoute.get("/add", BookingController.addBookingPage);
bookingRoute.get("/delete/:bookingId", BookingController.deleteBooking);
bookingRoute.post("/update/:bookingId", BookingController.updateBooking);
bookingRoute.get("/update/:bookingId", BookingController.updateBookingPage);

module.exports = bookingRoute;
