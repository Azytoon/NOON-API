const router = require("express").Router();
const user = require("../controllers/user.controller");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/Authorization");

//EndPoints
router.get("/", verifyTokenAndAdmin, user.getAllUsers);
router.get("/stats", verifyTokenAndAdmin, user.getUserStats);
<<<<<<< HEAD
router.get("/find/:id", verifyTokenAndAdmin, user.getUser);
=======
router.get("/find/:id", verifyTokenAndAuthorization, user.getUser);
>>>>>>> c05e154471e75ef923c4ab8eb9745f8d6f632a70
router.put("/edit/:id", verifyTokenAndAuthorization, user.updateUser);
router.delete("/delete/:id", verifyTokenAndAuthorization, user.deleteUser);

module.exports = router;
