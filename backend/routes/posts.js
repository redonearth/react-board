const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");

router.post("/write", (req, res) => {
  const post = new Post(req.body);

  post.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    res.status(200).json({ success: true });
  });
});

router.get("/list", (req, res) => {
  Post.find()
    .populate("writer")
    .exec((err, posts) => {
      if (err) {
        return res.send(err);
      }
      res.status(200).json({ success: true, posts });
    });
});

router.post("/detail", (req, res) => {
  Post.findOne({ _id: req.body.postId })
    .populate("writer")
    .exec((err, post) => {
      if (err) {
        return res.send(err);
      }
      res.status(200).json({ success: true, post });
    });
});

module.exports = router;
