module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      // MySQL에는 users 테이블 생성
      // id가 기본적으로 들어있다.
      nickname: {
        type: DataTypes.STRING(15),
        allowNull: false, // 필수
        unique: true, // 고유한 값
      },
      password: {
        type: DataTypes.STRING(100), // 비밀번호 암호화를 대비해 넉넉하게
        allowNull: false, // 필수
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글 저장
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
  };
  return User;
};
