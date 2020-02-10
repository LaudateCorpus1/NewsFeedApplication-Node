const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
      name: {
          type : String,
          reruired : true
      },
      lastName:{
          type : String
      },
      mobileNumber: {
          type : String
      },
      email: {
          type : String
      },
      password: {
          type : String
      }
});
const Person = module.exports = mongoose.model('person', personSchema);