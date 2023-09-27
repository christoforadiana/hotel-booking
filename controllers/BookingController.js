const { booking } = require("../models");

class BookingController {
  static async getBookings(req, res) {
    try {
      let bookings = await booking.findAll();
      res.json(bookings);
    } catch (err) {
      res.json(err);
    }
  }

  static async addBooking(req, res) {
    try {
      const { name, image, price, roomId, customerId } = req.body;
      let resultBooking = await booking.create({
        name,
        image,
        price,
        roomId,
        customerId
      });
      res.json(resultBooking);
      // res.redirect("/bookings");
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
      const { name, image, price, roomId, customerId } = req.body;
      let resultBooking = await booking.update(
        { name, image, price, roomId, customerId },
        { where: { id } }
      );
      // res.redirect("/bookings");
      resultBooking[0] === 1
        ? res.json({ message: `Booking with id ${id} updated successfully!` })
        : res.json({ message: `Couldn't update booking with id ${id}.` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = BookingController;
