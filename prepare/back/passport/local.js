const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local'); // 카카오하면 KakaoStrategy, 구글하면 GoogleStrategy
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'nickname',
        passwordField: 'password',
      },
      async (nickname, password, done) => {
        try {
          const user = await User.findOne({
            where: { nickname },
          });
          if (!user) {
            // done(서버에러, 성공, 클라이언트에러)
            return done(null, false, { reason: '존재하지 않는 아이디입니다!' });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: '비밀번호가 틀렸습니다!' });
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
