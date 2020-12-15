const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  mainCategories: [
    { type: mongoose.Schema.Types.ObjectId, ref: "MainCategory" },
  ],
  business: [{ type: mongoose.Schema.Types.ObjectId, ref: "Business" }],
});

module.exports = mongoose.model("Categories", categoriesSchema);
