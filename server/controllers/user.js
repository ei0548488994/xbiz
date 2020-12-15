const mongoose = require("mongoose");
const User = require("../models/User");

//create
const createUser = async (req, res) => {
  const {
    userName,
    email,
    password,
    name,
    googleId,
    ID,
    phone,
    role,
  } = req.body;
  const newUser = new User({
    userName,
    email,
    password,
    name,
    googleId,
    ID,
    phone,
    role,
  });
  try {
    await newUser.save();
    res.status(200).json({ user: newUser });
    console.log(newUser);
  } catch (err) {
    console.log({ err });
    res.status(409).json((message = "can't save user"));
    // res.send({ massage: "cannot save admin", err: err });
  }
};
//read
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
   const user = await User.findById(id);
    if (user == null) {
      res.send("This user doesn't exist");
    } else {
      return res.json({ status: 200, user: user });
    }
  } catch (error) {
    res.status(400).json({ massage: error.maasage });
  }
};

//update
const updateUser = async (req, res) => {
  // var updateObject = req.body;
  const { id } = req.params;
  console.log(updateObject);
  try {
    const newAdmin = await Admin.findOneAndUpdate(
      { _id: id},
      updateObject
    );
    res.json({ newAdmin });
  } catch (error) {
    res.json({ error: error });
  }
};

//delete
const deleteUser = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "the user is deleted" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
