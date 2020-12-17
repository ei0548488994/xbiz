const mongoose = require("mongoose");

const mainCategorySchema = mongoose.Schema({
  mainCategoryName: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
  ],
  icons: {
    type: String,
  },
  countBusiness: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("MainCategory", mainCategorySchema);
