const { hashedPassword } = require("../../services/bcrypt");

const createUser = async (req, res) => {
  // console.log("here");
  const { password, ...rest } = req.body;
  // console.log(body);

  req.body.password = await hashedPassword(password);

  console.log(req.body);
  return res.status(201).json({
    message: "successfully created user",
    data: { rest },
  });
};

module.exports = {
  createUser,
};
