import userModel from "../model/user-schema.js";

export const userSignup = async (req, res) => {
  try {
    const exist = await userModel.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({
        message: "user already exist",
      });
    }

    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.status(200).json({
      message: "user is created",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await userModel.findOne({
      username: username,
      password: password,
    });
    if (user) {
      return res.status(200).json({
        message: "user is login",
        data: user,
      });
    } else {
      return res.status(401).json({
        message: "Invalid Credential",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
