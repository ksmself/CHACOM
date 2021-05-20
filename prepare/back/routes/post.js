const express = require('express');
const pinyin = require('prettify-pinyin');

const { Post, Expression, Hashtag, User } = require('../models');
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
      ],
    });
    res.status(201).json(fullPost);
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
