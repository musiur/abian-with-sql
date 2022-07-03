require("dotenv").config();

const express = require("express");
const register = require("./routes/register.route");
const login = require("./routes/login.route");
const test = require("./routes/test.route");
const app = express();
const DB = require("./database");
const PORT = process.env.PORT;
const cors = require("cors");
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST", "PUT"],

  allowedHeaders: ["Content-Type"],
};

// connecting database
DB.connect((err) => {
  if (!err) {
    console.log("MySQL Connected...");
  } else {
    console.log(err);
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOpts));
//routes
app.use(register);
app.use(login);
app.use(test);

app.get(test);

app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
