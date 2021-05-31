const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./app/config/config.js");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Room = db.rooms;
db.sequelize.sync({force: true}).then(() => {
  createRoomsAndBookins();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hi there, welcome to this api." });
});

// api routes
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const createRoomsAndBookins = () => {
  for (i = 101; i < 111; i++) {
    Room.create(
      {
        roomNumber: i,
        bookings: getDefaultBookins(),
      },
      {
        include: [
          {
            association: Room.bookings,
          },
        ],
      }
    );
  }
};

const getDefaultBookins = () => {
  var dayAfter30Days = new Date(new Date().setDate(new Date().getDate() + 60));
  var dayBefore25Days = new Date(new Date().setDate(new Date().getDate() - 30));
  let bookingArr = [];
  for (var d = dayBefore25Days; d <= dayAfter30Days; d.setDate(d.getDate() + 1)) {
    bookingArr.push({
      startDate: new Date(d),
      endDate: new Date(d),
      price: 100,
    });
  }
  return bookingArr
};
