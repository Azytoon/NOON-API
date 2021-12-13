// const router = require("express").Router();
// const express = require('express');
const router = require("express").Router();
// const router = express.Router();
const category = require("../controllers/category.controller");
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("../middlewares/Authorization");

//EndPoints
// router.post("/", verifyTokenAndAdmin, product.createProduct);
router.get("/", category.getAllCategory);
<<<<<<< HEAD
=======
router.get("/subCat", category.getSubCategory);
>>>>>>> c05e154471e75ef923c4ab8eb9745f8d6f632a70
router.get("/find/:id", category.getCategory);
// router.put("/edit/:id", verifyTokenAndAdmin, product.updateProduct);
// router.delete("/delete/:id", verifyTokenAndAdmin, product.deleteProduct);

module.exports = router;
