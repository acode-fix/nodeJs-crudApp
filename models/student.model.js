const mongoose = require('mongoose');

var StudentScheme = new mongoose.Schema({
      fullname:{
          type:String,
          required:'fullname is required',
      },
       email:{
        type:String,
        required:'email is required',
    },

      phone:{
        type:Number,
        required:'phone is required',
    },
      city:{
        type:String,
        required:'city is required',
    },
})

mongoose.model("Student",StudentScheme);