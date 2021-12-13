const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
<<<<<<< HEAD
    imageSrc: { type: String },
=======
    imageSrc: { type: String, default: "defaultprofile.png" },
>>>>>>> c05e154471e75ef923c4ab8eb9745f8d6f632a70
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
