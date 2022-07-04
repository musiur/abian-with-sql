const DB = require("../database");

exports.users = (req, res) => {
  DB.query(
    "select * from users",
    async (err, result) => {
      if (!err) {
        if (result.length) {
          return res.status(200).send({
            message: "Users fetched Successfully!",
            result,
          });
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
};
