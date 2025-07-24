const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectMongoDb = require("./config/db");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const postRoute = require("./routes/post.routes");

const app = express()
app.use(cors())
app.use(bodyParser.json());

connectMongoDb()

const PORT = 9090


app.use("/api/auth" , authRoute)
app.use('/api/user' , userRoute)
app.use('/api/post' , postRoute)

app.listen(PORT , () => {
    console.log(`Server is runing on http://localhost:${PORT}`)
})