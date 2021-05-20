const express = require('express');

const router = express.Router();
const { Post, User, Hashtag, Comment } = require('../models');

router.get('/', async (req, res, next) => {
  // GET /posts
  try {
    const posts = await Post.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password'],
          },
        },
        {
          model: Hashtag,
        },
        {
          model: Comment,
          attributes: ['id'],
        },
        {
          model: User,
          as: 'Likers', // 좋아요 누른 사람
          attributes: ['id'],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
