const Product = require("../models/product.model");

//CREATE
exports.createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET PRODUCT
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.categories;
  const qSubCat = req.query.subCat;
  const qBrand = req.query.brand;
  try {
    let products;
    let query = {
      $and: [],
    };

    // if (qNew) {
    // category = await categories.find().sort({ createdAt: -1 }).limit(5);
    // }
    // else
    if (qCategory) {
      query.$and.push({
        categories: {
          $in: [qCategory],
        },
      });

      if (qSubCat) {
        query.$and.push({
          subCat: { $in: [qSubCat] },
        });
      }
      if (qBrand) {
        query.$and.push({
          brand: { $in: [qBrand] },
        });
      }




    }
    // db.example.find( {
    //   $and: [
    //   { x: { $ne: 0 } },
    //   { $expr: { $eq: [ { $divide: [ 1, "$x" ] }, 3 ] } }
    //   ]
    //   } )
    products = await Product.find(query);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
