const mongoose = require("mongoose");

const businessAddressSchema = mongoose.Schema({
    cityName: { type: String },
    address: { type: String },
    zipCode :{ type: String },
    state: { type: String  },
    location:{
        lat:{type: String},
        lng:{type:String}
    } 
});
  
module.exports = mongoose.model("BusinessAddress",businessAddressSchema);