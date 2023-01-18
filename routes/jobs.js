const register = async (req, res) => {
  res.send("Register users");
};

const logIn = async (req, res) => {
  res.send("LogIn users");
};

module.exports = {
  register,
  logIn,
};
