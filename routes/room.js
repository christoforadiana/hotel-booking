const { Router } = require("express");
const roomRoute = Router();
const { RoomController } = require("../controllers");

roomRoute.get("/", RoomController.getRooms);
roomRoute.post("/add", RoomController.addRoom);
// roomRoute.get("/add", RoomController.addBrandPage);
roomRoute.get("/delete/:roomId", RoomController.deleteRoom);
roomRoute.post("/update/:roomId", RoomController.updateRoom);
// roomRoute.get("/update/:brandId", RoomController.updateBrandPage);

module.exports = roomRoute;
