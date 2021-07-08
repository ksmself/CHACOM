const express = require('express');

const router = express.Router();
const { User, Hashtag, Comment } = require('../models');

router.get('/:hashtag', async (req, res, next) => {
  try {
    const hashtag = await Hashtag.findOne({
      where: { name: decodeURIComponent(req.params.hashtag) },
    });
    if (!hashtag) {
      return res.status(403).send('해시태그가 존재하지 않습니다.');
    }
    const posts = await hashtag.getPosts({
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
          include: [
            {
              model: User,
              attributes: ['id'],
            },
          ],
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
