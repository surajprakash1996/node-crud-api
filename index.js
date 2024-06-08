const express = require("express");
const app = express();
const PORT = 3000;

const connectDB = require("./connection");
const { logReqRes } = require("./middlewares/");

const userRoute = require("./routes/user");

/** Establish DB Connection */

connectDB();

/** Middlewares */

app.use(express.urlencoded({extended: false}));
app.use(logReqRes("logs.txt"));


/** Define routes */

app.use(userRoute);

/** Server runs  */

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))