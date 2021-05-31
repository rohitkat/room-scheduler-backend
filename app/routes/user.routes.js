const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.get("/api/rooms", controller.getAllRooms);
  app.put("/api/bookings/:bookingId", controller.updateBooking);
};
