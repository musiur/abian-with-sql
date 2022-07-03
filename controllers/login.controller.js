const DB = require("../database");
const bcrypt = require("bcryptjs");

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    DB.query(
      "select * from users where email = ?",
      [email],
      async (err, result) => {
        if (!err) {
          if (result.length) {
            const verified = bcrypt.compareSync(password, result[0].password);
            if (verified) {
              return res.status(200).send({
                message: "Login Successfully!",
                result,
              });
            } else {
              return res.status(401).send({
                message: "User and password not matched!",
              });
            }
          } else {
            return res.status(404).send({
              message: "No user found!",
            });
          }
        } else {
          return res.status(500).send({
            message: "Something went wrong!",
          });
        }
      }
    );
  } else {
    return res.status(400).send({
      message: "Bad request!",
    });
  }
};
