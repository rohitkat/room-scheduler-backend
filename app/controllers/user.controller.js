const db = require("../models");
const Room = db.rooms;
const Booking = db.bookings;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.updateBooking = async (req, res) => {
  const { bookingId } = req.params;
  const { price, available } = req.body;
  console.log(bookingId, price, available);
  const existingBooking = await Booking.findByPk(bookingId);
  if (existingBooking) {
    existingBooking.price = price;
    existingBooking.available = available;
    const saveBooking = await existingBooking.save();
    console.log('\n saveBooking', saveBooking)
    if (saveBooking) res.json({ message: "success", data: saveBooking });
    else res.json({ message: "something went wrong" });
  } else res.json({ message: "something went wrong" });
};

exports.getAllRooms = async (req, res) => {
  const allRooms = await Room.findAll({ include: Booking });
  res.json({ data: allRooms });
};

exports.getRoomBookins = (req, res) => {};
