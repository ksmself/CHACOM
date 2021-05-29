const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post, Comment } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [
          {
            model: Post,
            attributes: ['id', 'title', 'createdAt'],
          },
          {
            model: Post,
            as: 'Liked',
          },
        ],
        order: [[Post, 'createdAt', 'DESC']],
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/duplicate', isNotLoggedIn, async (req, res, next) => {
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

router.post('/', isNotLoggedIn, async (req, res, next) => {
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

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (passportErr) => {
      if (passportErr) {
        console.error(passportErr);
        return next(passportErr);
      }
      try {
        const fullUserWithoutPassword = await User.findOne({
          where: { id: user.id },
          attributes: {
            exclude: ['password'],
          },
          include: [
            {
              model: Post,
              attributes: ['id', 'title', 'createdAt'],
            },
            {
              model: Post,
              as: 'Liked',
            },
          ],
          order: [[Post, 'createdAt', 'DESC']],
        });
        return res.status(200).json(fullUserWithoutPassword);
      } catch (err) {
        console.error(err);
      }
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('logout success!');
});

module.exports = router;
