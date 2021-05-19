const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');

const db = require('./models');
const passportConfig = require('./passport');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

dotenv.config();
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

passportConfig();

app.use(
  cors({
    // origin: https://cha.com, 으로 설정해두면 이 사이트에서 온 요청만 허용하겠다
    origin: 'http://localhost:3060',
    credentials: true, // 쿠키 전달을 위해
  })
);

app.use(express.json()); // 프론트에서 json 형식으로 데이터를 보냈을 때 json 형식의 데이터를 req body안에 넣어주고
app.use(express.urlencoded({ extended: true })); // 폼 submit을 했을 때 urlencoded 방식으로 넘어오기 때문에
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});
