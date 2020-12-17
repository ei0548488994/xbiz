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
///return the 3 Popular categories
const getPopularCategories = async (req, res) => {
  var categories = await MainCategory.find()
  var max = 0
  var popularCategories = []
  ////בהמשך שיהיה נתונים לשנות את זה ליותר גדול מ2
  try {
    while (popularCategories.length != 1) {
      categories.forEach((element) => {
        if (element.countBusiness > max) {
          popularCategories.push(element)
          if (categories.length) {
            max = 0
            categories = categories.filter(e => element)
          }
        }
      })
      popularCategories.forEach((element) => {
        console.log(element)
      })
      res.json(popularCategories);
    }
  } catch (error) {
     res.status(400).json({ message: err.message });
  }
}
// }‏
const getAllMainCategories = async (req, res) => {
  try {
    const categories = await MainCategory.find()
    return res.json(categories);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createMainCategory,
  getMainCategory,
  getAllMainCategories,
  getPopularCategories
};
