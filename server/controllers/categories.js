const mongoose = require("mongoose");
const Category = require("../models/Categories");
const MainCategory = require("../models/MainCategory");

//create
const createCategory = async (req, res) => {
  const maincategory = await MainCategory.findOne({
    mainCategoryName: "חנויות",
  });
  var newCategory = new Category({
    categoryName: "נעליים",
    mainCategories: maincategory._id,
  });

  try {
    await newCategory.save();
    await maincategory.categories.push(newCategory);
    maincategory.save();
    res.status(200).json({ category: newCategory });
  } catch (error) {
    console.log(error);
    res.status(400).json({ ssmassage: "not create", error: error });
  }
};

//read by main category
const getCategoryById = async (req, res) => {
  let readCategory;
  try {
    readCategory = await MainCategory.findById(req.params.id);
    console.log(readCategory);
    if (readCategory == null) {
      res.send("coudnt have a category");
    } else {
      return res.json({ status: 200, myCategory: readCategory });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: " error.maasage", error: error });
  }
};

//readAllCategories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    console.log(categories);
    return res.send(categories);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

//update
const updateCategory = async (req, res) => {
  var updateCtegory = req.body;
  console.log(updateCtegory);
  try {
    const newCategory = await Category.findByIdAndUpdate(
      { _id: req.params.id },
      updateCtegory
    );
    res.json({ newCategory });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};
//delete
const deleteCategory = async (req, res) => {
  try {
    await Category.findOneAndDelete(req.params.id);
    res.status(200).json({ "message:": "the category is deleted!" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createCategory,
  getCategoryById,
  updateCategory,
  getAllCategories,
  deleteCategory,
};
