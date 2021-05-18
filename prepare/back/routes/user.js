const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

router.post('/duplicate', async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        nickname: req.body.nickname,
      },
    });
    if (exUser) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  // POST /user
  try {
    const exUser = await User.findOne({
      where: {
        nickname: req.body.nickname,
      },
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send('welcome!');
  } catch (err) {
    console.error(err);
    next(err); // status 500
  }
});

module.exports = router;
