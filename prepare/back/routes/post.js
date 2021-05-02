const express = require('express');
// const convert = require('pinyin-convert');
var pinyin = require('prettify-pinyin');

const router = express.Router();

router.post('/convert/pinyin', async (req, res, next) => {
  try {
    const word = req.body.content;
    const converted = await pinyin.prettify(word);
    res.status(201).json(converted);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
