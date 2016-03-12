var mongoose = require('mongoose');

var statustypes = ["Active","Inactive"];

var staffSchema = new mongoose.Schema({
  name      : {type: String, required: true},
  staffId   : {type: Number, required: true,unique: true},
  email     : {type: String, required: true,unique: true},
  password  : {type: String, required: true,unique: true},
  phone     : {type: Number, required: true,unique: true},
  address   :
  {
    doorNo : {type: String},
    street : {type: String},
    city   : {type: String},
    state  : {type: String},
    pincode : {type: String}
  },

  dob       : {type: Date},
  status    : {type:String,enum:statustypes},
  deptId    : {type: mongoose.Schema.Types.ObjectId, ref:'dept'},
  createdAt : {type: Date},
  updatedAt : {type: Date},
  voicetype : {type: String},
  voice     : {type: String},
}, {collection: 'staff'});

var Staff = mongoose.model('staff' , staffSchema);
module.exports = Staff;
