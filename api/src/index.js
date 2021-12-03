// const express = require("express");
// const mongoose = require("mongoose");
// const axios = require("axios");
// const { connect, disconnect, mongo } = require("mongoose");
// const { connectDb } = require("./helpers/db");
// const app = express();
// const { host, port, db, authApiUrl } = require("./configuration");
// const { response } = require("express");

// const postSchema = new mongoose.Schema({
//   name: String,
// });
// const Post = mongoose.model("Post", postSchema);

// const startServer = () => {
//   app.listen(port, () => {
//     console.log(`Started api service on port:${port}`);
//     console.log(`On host:${host}`);
//     console.log(`Our database:${db}`);

//     // Post.find(function(err, posts){
//     //     if (err) return console.log(err)
//     //     console.log("posts", posts)
//     // })

//     const silence = new Post({ name: "Silence" });
//     silence.save(function (err, savedSilence) {
//       if (err) return console.log(err);
//       console.log("savedSilence with volume!!", savedSilence);
//     });
//   });
// };

// app.get("/test", (req, res) => {
//   res.send("Our api server is working correctly");
// });

// app.get("/api/testapidata", (req, res) => {
//   res.json({
//     testwithapi: true,
//   });
// });

// app.get("/testCU", (req, res) => {
//   axios.get(authApiUrl + "/currentUser").then((response) => {
//     res.json({
//       testCU: true,
//       currentUserFromAuth: response.data,
//     });
//   });
// });

// connectDb()
//   .on("error", console.log)
//   .on("disconnect", connectDb)
//   .once("open", startServer);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const router = express.Router();
const path = require("path");
const { host, port, db, authApiUrl } = require("./configuration");
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.listen(port, () => {
  console.log("Backend server is running!");
});
