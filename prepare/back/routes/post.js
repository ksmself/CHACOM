const express = require('express');
const pinyin = require('prettify-pinyin');

const router = express.Router();

router.post('/convert/pinyin', async (req, res, next) => {
  try {
    const word = req.body.content;
    const convertedPinyin = await pinyin.prettify(word);
    res.status(201).json(convertedPinyin);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
