const { room } = require("../models");

class RoomController {
  static async getRooms(req, res) {
    try {
      let resultRoom = await room.findAll();
      res.render("../views/room/roomPage.ejs", { rooms: resultRoom });
      // res.json(resultRoom);
    } catch (err) {
      res.json(err);
    }
  }

  static async addRoom(req, res) {
    try {
      const { name, image, price } = req.body;
      let resultRoom = await room.create({
        name,
        image,
        price,
      });
      res.json(resultRoom);
      // res.redirect("/rooms");
    } catch (err) {
      res.json(err);
    }
  }

  static async deleteRoom(req, res) {
    try {
      const id = +req.params.roomId;
      let resultRoom = await room.destroy({ where: { id } });
      // let resultFruit = await fruit.destroy({ where: { brandId: id } });
      // res.redirect("/rooms");
      resultRoom === 1
        ? res.json({ message: `Room with id ${id} deleted successfully!` })
        : res.json({ message: `Couldn't delete room with id ${id}.` });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateRoom(req, res) {
    try {
      const id = +req.params.roomId;
      const { name, image, price } = req.body;
      let resultBrand = await room.update(
        { name, image, price },
        { where: { id } }
      );
      // res.redirect("/rooms");
      resultBrand[0] === 1
        ? res.json({ message: `Room with id ${id} updated successfully!` })
        : res.json({ message: `Couldn't update room with id ${id}.` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = RoomController;
