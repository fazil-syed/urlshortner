const express = require("express");
const router = express.Router();

const Url = require("../models/Url");

router.get("/", async (req, res) => {
  try {
    const urlCode = req.query.code;

    let url = await Url.findOne({ urlCode });
    res.json(url);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
});

module.exports = router;
