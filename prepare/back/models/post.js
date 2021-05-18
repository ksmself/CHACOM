module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      // id가 기본적으로 들어있다.
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // mb4 이모티콘
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    db.Post.hasMany(db.Expression);
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
  };
  return Post;
};
