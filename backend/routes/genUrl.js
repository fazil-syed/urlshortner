const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const config = require("config");
const shortid = require("shortid");

const Url = require("../models/Url");

router.post("/", async (request, response) => {
  const { longUrl } = request.body;
  const baseUrl = config.get("baseURI");

  if (!validUrl.isUri(baseUrl)) {
    response.status(401).json("Invalid Base URL");
  }
  const urlCode = shortid.generate();
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        response.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;
        url = new Url({
          urlCode,
          longUrl,
          shortUrl,
          date: new Date(),
        });

        await url.save();
        console.log(url);
        response.json(url);
      }
    } catch (error) {
      console.log(error.message);
      response.status(500).json("Server Error");
    }
  } else {
    response.status(401).json("Invalid Long URL");
  }
});

module.exports = router;
