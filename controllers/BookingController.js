const { booking, customer, room } = require("../models");

class BookingController {
  static async getBookings(req, res) {
    try {
      let resultBooking = await booking.findAll({
        include: [customer, room],
      });
      res.render("../views/booking/bookingPage.ejs", {
        bookings: resultBooking,
      });
      // res.json(resultBooking);
    } catch (err) {
      res.json(err);
    }
  }

  static async getDetailBooking(req, res) {
    try {
      const id = +req.params.bookingId;
      let resultBooking = await booking.findByPk(id, {
        order: [["id", "asc"]],
        include: [customer, room],
      });
      res.render("../views/booking/detailBookingPage.ejs", {
        booking: resultBooking,
      });
      // res.json(resultBooking);
    } catch (err) {
      res.json(err);
    }
  }

  static async addBooking(req, res) {
    try {
      const { roomId, customerId } = req.body;
      let resultBooking = await booking.create({
        roomId,
        customerId,
      });
      res.redirect("/bookings");
      // res.json(resultBooking);
    } catch (err) {
      res.json(err);
    }
  }

  static async addBookingPage(req, res) {
    try {
      let resultCustomer = await customer.findAll();
      let resultRoom = await room.findAll();
      res.render("../views/booking/addBookingPage.ejs", {
        customers: resultCustomer,
        rooms: resultRoom,
      });
    } catch (err) {
      res.json(err);
    }
  }

  static async deleteBooking(req, res) {
    try {
      const id = +req.params.bookingId;
      let resultBooking = await booking.destroy({ where: { id } });
      // let resultFruit = await fruit.destroy({ where: { brandId: id } });
      // res.redirect("/bookings");
      resultBooking === 1
        ? res.json({ message: `Booking with id ${id} deleted successfully!` })
        : res.json({ message: `Couldn't delete booking with id ${id}.` });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateBooking(req, res) {
    try {
      const id = +req.params.bookingId;
      const { roomId, customerId } = req.body;
      let resultBooking = await booking.update(
        { roomId, customerId },
        { where: { id } }
      );
      res.redirect("/bookings");
      // resultBooking[0] === 1
      //   ? res.json({ message: `Booking with id ${id} updated successfully!` })
      //   : res.json({ message: `Couldn't update booking with id ${id}.` });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateBookingPage(req, res) {
    const id = +req.params.bookingId;
    let resultBooking = await booking.findAll({
      where: { id },
    });
    let resultCustomer = await customer.findAll({ where: { id } });
    let resultRoom = await room.findAll({ where: { id } });
    res.render("../views/booking/updateBookingPage.ejs", {
      booking: resultBooking[0],
      customers: resultCustomer,
      rooms: resultRoom,
    });
    // res.render("../views/booking/updateBookingPage.ejs", {
    //   booking: resultBooking[0],
    // });
  }
}

module.exports = BookingController;
