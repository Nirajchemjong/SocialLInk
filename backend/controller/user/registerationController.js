const User = require("../../model/userModel");
const { hashedPassword } = require("../../services/bcrypt");
const { sendAccontActivationEmail } = require("../../services/nodemailer");
const { v4: uuidv4 } = require("uuid");
const {
  message: { SUCCESS, ERROR },
  message,
  FE_URL,
} = require("../../utils/const");

const createUser = async (req, res) => {
  // console.log("here");
  const { password, email, fName } = req.body;
  // console.log(body);

  req.body.password = await hashedPassword(password);
  const verificationCode = uuidv4();
  console.log("code", verificationCode);
  const user = await User.create(req.body);
  const link = `${FE_URL}/admin-verification?c=${verificationCode}&e=${encodeURIComponent(
    email
  )}`;
  await sendAccontActivationEmail({ link, email, fName });
  return res.status(201).json({
    message: "successfully created user",
    // data: { rest },
  });
};

module.exports = {
  createUser,
};
