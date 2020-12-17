const mongoose = require("mongoose");
const Business = require("../models/Business");
const Categories = require("../models/Categories");
const User = require("../models/User");
const MainCategory = require("../models/MainCategory");
// crate
const createBusiness = async (req, res) => {
  const {
    user,
    businessName,
    category,
    description,
    adress,
    location,
    email,
    phone,
  } = req.body;

  const myCategory = await Categories.findOne({
    categoryName: category,
  });
  console.log(myCategory);

  const myUser = await User.findOne({
    name: user,
  });
  console.log(myUser);

  var newBusiness = new Business({
    user: myUser._id,
    businessName,
    category,
    description,
    adress,
    location,
    email,
    phone,
  });

  try {
    // newBusiness.category=myCategory._id;
    await newBusiness.category.push(myCategory._id);
    await newBusiness.save();
    console.log(newBusiness);
    await myCategory.business.push(newBusiness);
    await myCategory.save();
    res.status(200).json(newBuisness);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ maasage: "cannot save buisness", error: error.message });
  }
};

//read(can delete)
const getBuisness = async (req, res) => {
  console.log(req.params.id);
  let readBuisness;
  try {
    readBuisness = await Business.findById(req.params.id);
    if (readBuisness == null) {
      res.send("coudnt have a buisness");
    }
    return res.json({ status: 200, myBuisness: readBuisness });
  } catch (error) {
    res.status(400).json({ massage: error.maasage });
  }
  return res.json({ myBuisness: readBuisness });
};
//update
const updateBuisness = async (req, res) => {
  try {
    const {
      user,
      businessName,
      category,
      description,
      adress,
      location,
      email,
      phone,
    } = req.body;
    business = await Business.findOneAndUpdate(
      { _id: req.params.id },
      {
        user,
        businessName,
        category,
        description,
        adress,
        location,
        email,
        phone,
      }
    );
    await buisnes.save();
    res.send("the business is update");
  } catch (error) {
    res.status(500).json({ maasage: error.maasage });
  }
};
//searchBuisnessByParentCategory
const searchBuisnessByParentCategory = async (req, res) => {
  console.log(req.params.id);
  try {
    const getMainCategories = await MainCategory.findById(req.params.id);
    if (getMainCategories == null) {
      res.send("can't find what you look for");
    } else {
      console.log(getMainCategories);
      const getALL = await MainCategory.findById(req.params.id).populate({
        path: "categories",
        populate: {
          path: "business",
        },
      });
      return res.json({ MainCategories: getALL });
    }
  } catch (error) {
    res.status(500).json({ massage: error.maasage });
  }
};
//delete
const deleteBusiness = async (req, res) => {
  try {
    await Buisness.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "the Buisness is deleted" });
  } catch (error) {
    res.status(400).json({ error });
  }
};
//getBuisnessByCategory
const getBuisnessByCategory = async (req, res) => {
  var getCategory = req.params.idCategory;
  console.log(getCategory);
  try {
    var getBuisnesses = await Business.find({ category: getCategory });
    res.status(200).json(getBuisnesses);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
//getBuisnessByText(work)
const getBuisnessByText = async (req, res) => {
  var text = req.body.text;
  console.log(text);
  try {
    //בדיקה אם המשתמש הכניס טקסט
    if (text != null) {
      //בדיקה אם טקסט קיים בקטגוריות
      var getCategoryName = await Categories.find({ categoryName: text });
      if (getCategoryName.length > 0) {
        var getCategoryName = await Categories.find({
          categoryName: text,
        }).populate({ path: "business" });
        res.json({ categories: getCategoryName });
      } else {
        var getAllBuisness = await Business.find({
          businessName: text,
        }).populate({
          path: "category",
          populate: {
            path: "mainCategories",
          },
        });
        console.log(getAllBuisness);
        res.status(200).json({ business: getAllBuisness });
      }
    } else {
      res.json("enter your text");
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
//getAllBusinessPerUser (work)
const getAllBusinessPerUser = async (req, res) => {
  try {
    const bussinesByUser = await Business.find({ user: req.params.id });
    res.json(bussinesByUser);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
const createBusinessPerUser = async (req, res) => {
  try {
    const {
      user,
      businessName,
      categoryList,
      description,
      adress,
      location,
      email,
      phone,
    } = req.body;
    console.log(categoryList, "!!!!!!!!");

    // const myCategory = await Categories.find({
    //   categoryName: category,
    // });
    // console.log(myCategory);
    const newBuisness = new Business({
      user,
      businessName,
      description,
      adress,
      location,
      email,
      phone,
    });

    await newBuisness.save();
    category.forEach(async (element) => {
      await Categories.findByIdAndUpdate(element, {
        $push: { business: newBusiness._id },
      });
    });
    console.log(newBuisness);

    const findCategory = await Categories.findOne({
      categoryName: category,
    });
    await findCategory.business.push(newBuisness);
    await findCategory.save();
    res.json({ msg: "Created a bussines" });
  } catch (err) {
    return res.status(500).json(err);
  }
};
const deleteBussinesByUser = async (req, res) => {
  try {
    await Notes.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted a Note" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
// const updateBussinesByUser = async (req, res) => {
//   try {
//     const { user,businessName,category,description,adress,location,email,phone} = req.body;
//     await Business.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         user,businessName,category,description,adress,location,email,phone
//       }
//     );
//     res.json({ msg: "Updated a Bussines" });
//   } catch (err) {
//     return res.status(500).json({ msg: err.message });
//   }
// };

//getBuisnessById(work)
const getBuisnessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    console.log(business)
    if (business == null) {
      res.send("This business does'nt exist");
    }
    else {
      res.json(business);
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  // createBusiness,
  getBuisness,
  updateBuisness,
  deleteBusiness,
  getBuisnessById,
  searchBuisnessByParentCategory,
  getBuisnessByCategory,
  getBuisnessByText,
  getAllBusinessPerUser,
  createBusinessPerUser,
  deleteBussinesByUser
};
