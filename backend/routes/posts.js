const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");

router.post("/write", (req, res) => {
  const post = new Post(req.body);

  post.save((err) => {
    if (err) {
      console.error(err);
      res.json({ success: false });
      return;
    }
    res.status(200).json({ success: true });
  });
});

router.get("/list", (req, res) => {
  Post.find()
    .populate("writer")
    .exec((err, posts) => {
      if (err) return res.status(500).json({ error: err });
      if (!posts) return res.status(404).json({ error: "Posts Not Found" });
      res.status(200).json({ success: true, posts });
    });
});

router.get("/detail", (req, res) => {
  Post.findOne({ _id: req.query.postId })
    .populate("writer")
    .exec((err, post) => {
      if (err) return res.status(500).json({ error: err });
      if (!post) return res.status(404).json({ error: "Post Not Found" });
      res.status(200).json({ success: true, post });
    });
});

module.exports = router;
