const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: { 
      type: String,
      required: false,
     },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: {
      type: String ,
      required: true,
      minlength:4,
      maxlength:8
    },
    name:{
      type:String,
      required:false
    },
    googleId: { 
      type: String,
       required: false 
      },
      linkedin: { 
        type: String,
         required: false 
        },
    ID :{ 
      type: String ,
      required: false,
      unique:true,
      maxlength:9 
    },
    phone: {
      require:false,
        type: String,
        match: /\d{10}/
      },
      role:
      {
        type:Number,
        default:0
      },
      favorites:[{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Business" 
       }],
      business:
         [{ 
           type: mongoose.Schema.Types.ObjectId, 
           ref: "Business" 
          }]
});
  
module.exports = mongoose.model("User",userSchema);