const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post, Comment, Hashtag } = require('../models');
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
            include: [
              {
                model: Hashtag,
              },
              {
                model: User,
                attributes: {
                  exclude: ['password'],
                },
              },
              {
                model: User,
                as: 'Likers', // 좋아요 누른 사람
                attributes: ['id'],
              },
              {
                model: Comment,
                include: [
                  {
                    model: User,
                    attributes: ['id', 'nickname'],
                  },
                ],
              },
            ],
          },
        ],
        order: [
          [Post, 'createdAt', 'DESC'],
          ['Liked', 'createdAt', 'DESC'],
        ],
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

router.get('/:userId', async (req, res, next) => {
  try {
    const post = await User.findOne({
      where: { id: req.params.userId },
      attributes: ['id', 'nickname'],
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'createdAt'],
          include: [
            {
              model: Hashtag,
            },
            {
              model: User,
              attributes: {
                exclude: ['password'],
              },
            },
            {
              model: User,
              as: 'Likers',
              attributes: ['id'],
            },
            {
              model: Comment,
              include: [
                {
                  model: User,
                  attributes: ['id'],
                },
              ],
            },
          ],
        },
      ],
      order: [[Post, 'createdAt', 'DESC']],
    });
    res.status(200).json(post);
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
              include: [
                {
                  model: Hashtag,
                },
                {
                  model: User,
                  attributes: {
                    exclude: ['password'],
                  },
                },
                {
                  model: User,
                  as: 'Likers', // 좋아요 누른 사람
                  attributes: ['id'],
                },
                {
                  model: Comment,
                  attributes: ['id'],
                },
              ],
            },
          ],
          order: [
            [Post, 'createdAt', 'DESC'],
            ['Liked', 'createdAt', 'DESC'],
          ],
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

router.patch('/:userId', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: parseInt(req.params.userId, 10) },
    });
    const curPasswordCorrect = await bcrypt.compare(
      req.body.curPassword,
      user.password
    );
    if (curPasswordCorrect) {
      // 비밀번호 업데이트하기
      const newHashedPassword = await bcrypt.hash(req.body.newPassword, 12);
      await User.update(
        {
          password: newHashedPassword,
        },
        {
          where: { id: user.id },
        }
      );
      return res.status(200).send('비밀번호가 성공적으로 변경되었습니다.');
    }
    return res.status(404).send('현재 비밀번호를 다시 확인해주세요!');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
