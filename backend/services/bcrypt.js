const bcrypt = require("bcryptjs");

const hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(9);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

module.exports = {
  hashedPassword,
  comparePassword,
};
