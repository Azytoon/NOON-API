const Cart = require("../models/cart.model");

//CREATE
exports.createCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET USER CART
exports.getCart = async (req, res) => {
  try {
<<<<<<< HEAD
    const cart = await Cart.findOne({ userId: req.params.userId });
=======
    const cart = await Cart.findOne({ userId: req.params.id });
>>>>>>> c05e154471e75ef923c4ab8eb9745f8d6f632a70
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL USERS CARTS
exports.getAllUsersCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
};
