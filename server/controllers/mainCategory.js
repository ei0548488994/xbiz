const mongoose = require("mongoose");
const MainCategory = require("../models/MainCategory");

//createMainCategory
const createMainCategory = async (req, res) => {
  const { mainCategoryName } = req.body;
  const newMainCategory = new MainCategory({
    mainCategoryName,
  });
  try {
    await newMainCategory.save();
    res.status(200).json(newMainCategory);
  } catch (error) {
    res
      .status(400)
      .json({ error: "cannot save main category", massage: error.maasage });
  }
  const getMain = await MainCategory.findById(
    "5fbba4cb8102fc20b0b632d6"
  ).populate("mainCategory");
};

//read
//קוד נכון מבחינת מעטפת
const getMainCategory = async (req, res) => {
  let readMain;
  try {
    readMain = await MainCategory.findById(req.params.id);
    console.log(readMain);
    if (readMain == null) {
      res.send("coudnt have a buisness");
    } else {
      return res.json({ status: 200, myBuisness: readMain });
    }
  } catch (error) {
    res.status(400).json({ massage: error.maasage });
  }
};

module.exports = {
  createMainCategory,
  getMainCategory,
};
