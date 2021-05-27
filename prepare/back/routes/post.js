const express = require('express');
const pinyin = require('prettify-pinyin');

const { Post, Expression, Hashtag, User, Comment } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
  // POST /post
  try {
    const post = await Post.create({
      title: req.body.title,
      UserId: req.user.id,
    });
    const hashtags = req.body.tag;
    if (hashtags) {
      const resultHashtag = await Promise.all(
        hashtags.map((tag) =>
          Hashtag.findOrCreate({
            where: { name: tag.toLowerCase() },
          })
        )
      );
      await post.addHashtags(resultHashtag.map((v) => v[0]));
    }
    const expressions = req.body.expression;
    await Promise.all(
      expressions.map((ex) =>
        Expression.create({
          pinyin: ex.pinyin,
          meaning: ex.meaning,
          PostId: post.id,
        })
      )
    );
    const fullPost = await Post.findOne({
      where: { id: post.id },
      attributes: ['title'],
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password'],
          },
        },
        {
          model: Hashtag,
          attributes: ['id', 'name'],
        },
        {
          model: Expression,
          attributes: ['pinyin', 'meaning'],
        },
        {
          model: Comment,
        },
        {
          model: User,
          as: 'Likers',
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/:postId', async (req, res, next) => {
  // GET /post/1
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시물입니다.');
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
        {
          model: User,
          as: 'Likers',
          attributes: ['id'],
        },
        {
          model: Hashtag,
          attributes: ['id', 'name'],
        },
        {
          model: Expression,
          attributes: ['id', 'pinyin', 'meaning'],
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
    });

    res.status(200).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => {
  // PATCH /post/1/like
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send('게시물이 존재하지 않습니다.');
    }
    await post.addLikers(req.user.id);
    res.status(200).json({ PostId: post.id, UserId: req.user.id });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

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
