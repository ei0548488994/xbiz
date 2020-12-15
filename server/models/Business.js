const mongoose = require("mongoose");

const businessSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  businessName: {
    type: String,
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    // required: true,
  }],
  description: {
    type: String,
    minlength: 4,
    maxlength: 1000,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
    match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  phone: {
    type: String,
    //  required: true,
    match: /\d{10}/,
    // unique: true,
  },
  // openingHours: {
  //   mon: { open: 570, close: 1080 },
  //   tue: { open: 570, close: 1050 },
  // }
  adress:{
    state: { type: String },
    city: { type: String },
    street: { type: String },
    zipCode: { type: String }

  },
  location: {
    lat: { type: String },
    lng: { type: String },
  },
  elevator: { type: Boolean },
  FriendlyWorkspace: { type: Boolean },
  InstantBook: { type: Boolean },
  WirelessInternet: { type: Boolean },
  freeParkingOnPremises: { type: Boolean },
  freeParkingOnStreet: { type: Boolean },
  smokingAllowed: { type: Boolean },
  events: { type: Boolean },
  website: { type: String, maxlength: 35 },
  facebook: { type: String, maxlength: 35 },
  twitter: { type: String, maxlength: 35 },
  googleplus: { type: String, maxlength: 35 },
});

module.exports = mongoose.model("Business", businessSchema);
