// const { Router } = require("express");
const router = require("express").Router();
const {
  // createBusiness,
  // getBuisness,
  // updateBuisness,
  // deleteBusiness,
  // getBuisnessByCategory,
  // getBuisnessByText,
  getBuisness,
  updateBuisness,
  deleteBusiness,
  searchBuisnessByParentCategory,
  getBuisnessByCategory,
  getBuisnessByText,
  getAllBusinessPerUser,
  createBusinessPerUser,
  deleteBussinesByUser,
  updateBussinesByUser,
  getBuisnessById,
} = require("../controllers/business");
const {
  createCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const {
  createBusinessAddress,
  readaAdress,
  deleteAdress,
  updateAdress,
} = require("../controllers/businessAddress");
const {
  createMainCategory,
  getMainCategory,
} = require("../controllers/mainCategory");

// router.get("/", ()=>{
//     console.log("hello get")
// });
// router.route("/remove").delete(function(req, res) {});
// router.get("/searchBuisnessByParentCategory/:name",searchBuisnessByParentCategory);

//mainCategory
router.post("/createMainCategory", createMainCategory);
router.get("/getMainCategory/:id", getMainCategory);

// buisness
// router.post("/createBusiness", createBusiness);
router.get("/getBuisnessById/:id", getBuisness);
router.post("/updateBuisness/:name", updateBuisness);
router.post("/deleteBusiness/:id", deleteBusiness);
router.get("/getBuisnessByCategory/:idCategory", getBuisnessByCategory);
router.post("/getBuisnessByText", getBuisnessByText);
router.post("/createBusinessPerUser", createBusinessPerUser);
router.get("/getAllBusinessPerUser/:id", getAllBusinessPerUser);
// router.post("/updateBussinesByUser/:id", createBusinessPerUser);

//user
router.post("/createUser", createUser);
router.get("/getUser/:id", getUser);
router.post("/updateUser/:id", updateUser);
router.post("/deleteUser/:id", deleteUser);
//businessAddress
router.post("/createAddress", createBusinessAddress);
router.get("/readAddress/:id", readaAdress);
router.post("/updateAdress/:id", updateAdress);
router.post("/deleteAdress/:id", deleteAdress);
//category
router.get("/getCategoryById/:id", getCategoryById);
router.get("/getAllCategories", getAllCategories);
router.post("/createCategory", createCategory);
router.post("/updateCategory/:id", updateCategory);
router.post("/deleteCategory/:id", deleteCategory);

module.exports = router;
