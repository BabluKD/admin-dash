const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // age: {
  //   type: Number,
  //   required: true,
  // },
  role: {
    type: String,
    enum: ["user", "admin", "super-admin"],
    default: "user",
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
  hash_password: {
    type: String,
    required: true,
  },
});

/**
 * Validates unique email
 */

// userSchema.path("email").validate(async (email) => {
//   const emailCount = await mongoose.models.customer.countDocuments({
//     email,
//   });
//   return !emailCount;
// }, "#!Email already exists");

// userSchema.virtual("password").set(function (password) {
//   this.hash_password = bcrypt.hashSync(password, 10);
// });

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};

module.exports = mongoose.model("User", userSchema);
