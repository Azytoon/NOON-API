const router = require("express").Router();
const cart = require("../controllers/cart.controller");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/Authorization");

//EndPoints
router.post("/", verifyToken, cart.createCart);
router.get("/", verifyTokenAndAdmin, cart.getAllUsersCarts);
<<<<<<< HEAD
router.get("/find/:userId", verifyTokenAndAuthorization, cart.getCart);
=======
router.get("/find/:id", verifyTokenAndAuthorization, cart.getCart);
>>>>>>> c05e154471e75ef923c4ab8eb9745f8d6f632a70
router.put("/edit/:id", verifyTokenAndAuthorization, cart.updateCart);
router.delete("/delete/:id", verifyTokenAndAuthorization, cart.deleteCart);

module.exports = router;
