const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  try {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return token;
  } catch (error) {
    console.log("Token generation error:", error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decode.id };
    next();
  } catch (error) {
    console.log("Token verification error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { generateToken, verifyToken };
