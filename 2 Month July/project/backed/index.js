require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectMongoDb = require("./config/db");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const postRoute = require("./routes/post.routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log("Loaded JWT_SECRET:", process.env.JWT_SECRET);

connectMongoDb();

const PORT = 9090;

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
