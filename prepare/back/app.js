const express = require('express');
const cors = require('cors');

const postRouter = require('./routes/post');

const app = express();

app.use(
  cors({
    // origin: https://cha.com, 으로 설정해두면 이 사이트에서 온 요청만 허용하겠다
    origin: '*',
  })
);

app.use(express.json()); // 프론트에서 json 형식으로 데이터를 보냈을 때 json 형식의 데이터를 req body안에 넣어주고
app.use(express.urlencoded({ extended: true })); // 폼 submit을 했을 때 urlencoded 방식으로 넘어오기 때문에

app.use('/post', postRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});
