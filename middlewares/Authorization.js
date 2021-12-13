const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    // const token = authHeader.split(" ")[1];
    const token = authHeader;
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authorized!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
<<<<<<< HEAD
    if (req.user.id === req.params.id || req.user.isAdmin) {
=======
    if (
      req.user.id === req.params.id ||
      req.user.isAdmin ||
      req.user.id === req.body.userId
    ) {
>>>>>>> c05e154471e75ef923c4ab8eb9745f8d6f632a70
      next();
    } else {
      res.status(403).json("You are not authorized to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authorized to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
