const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const { connect, disconnect, mongo } = require("mongoose");
const { connectDb } = require("./helpers/db");
const app = express();
const { host, port, db, apiUrl, authApiUrl } = require("./configuration");
const { response } = require("express");

const postSchema = new mongoose.Schema({
  name: String,
});
const Post = mongoose.model("Post", postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api service on port:${port}`);
    console.log(`On host:${host}`);
    console.log(`Our database:${db}`);

    // Post.find(function(err, posts){
    //     if (err) return console.log(err)
    //     console.log("posts", posts)
    // })

    const silence = new Post({ name: "Silence" });
    silence.save(function (err, savedSilence) {
      if (err) return console.log(err);
      console.log("saved with volume!!", savedSilence);
    });
  });
};

app.get("/test", (req, res) => {
  res.send("Our api server is working correctly");
});

app.get("/api/testapidata", (req, res) => {
  res.json({
    testwithapi: true,
  });
});

app.get("/testCU", (req, res) => {
  axios.get(authApiUrl + "/currentUser").then((response) => {
    res.json({
      testCU: true,
      currentUserFromAuth: response.data,
    });
  });
});

connectDb()
  .on("error", console.log)
  .on("disconnect", connectDb)
  .once("open", startServer);
