const express = require('express');

const router = express.Router();
const { Post, User, Hashtag, Comment, Expression } = require('../models');

const { Sequelize } = require('sequelize');
const { or, like } = Sequelize.Op;

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

router.get('/:search', async (req, res, next) => {
  // GET /posts/왕초보
  try {
    const keyword = decodeURIComponent(req.params.search);

    const titleCondition = [{ title: { [like]: `%${keyword}%` } }];
    let titlePosts = await Post.findAll({
      attributes: ['id'],
      where: {
        [or]: titleCondition,
      },
    });
    titlePosts = titlePosts.map((v) => v.id); //[76, 77]

    const hashtagCondition = [{ name: { [like]: `%${keyword}%` } }];
    const hashtag = await Hashtag.findAll({
      attributes: ['id'],
      where: {
        [or]: hashtagCondition,
      },
    });
    let hashtagPosts = [];
    if (hashtag?.length > 0) {
      for (let x of hashtag) {
        const post = await x.getPosts({
          attributes: ['id'],
        });
        hashtagPosts.push(...post);
      }
      hashtagPosts = hashtagPosts.map((v) => v.id); // [45, 50, 77]
    }

    const nicknameCondition = [{ nickname: { [like]: `%${keyword}%` } }];
    const nickname = await User.findAll({
      attributes: ['id'],
      where: {
        [or]: nicknameCondition,
      },
    });
    let nicknamePosts = [];
    if (nickname?.length > 0) {
      for (let x of nickname) {
        const post = await x.getPosts({
          attributes: ['id'],
        });
        nicknamePosts.push(...post);
      }
      nicknamePosts = nicknamePosts.map((v) => v.id);
    }

    const contentCondition = [
      { pinyin: { [like]: `%${keyword}%` } },
      { meaning: { [like]: `%${keyword}%` } },
    ];
    const content = await Expression.findAll({
      attributes: ['PostId'],
      where: {
        [or]: contentCondition,
      },
    });
    let contentPosts = content.map((v) => v.PostId);
    contentPosts = contentPosts.filter((v) => v !== null);
    const contentToSet = new Set(contentPosts);
    contentPosts = [...contentToSet];

    let finalId = new Set([
      ...titlePosts,
      ...hashtagPosts,
      ...nicknamePosts,
      ...contentPosts,
    ]);
    finalId = [...finalId];

    const finalPosts = await Post.findAll({
      where: {
        id: finalId,
      },
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

    res.status(200).json(finalPosts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
