// express読み込み
const express = require('express');
const app = express();

// モジュール読み込み
const session = require('./routes/session');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const signupRouter = require('./routes/signup');
const listRouter = require('./routes/list');
const articleRouter = require('./routes/article');

// 共通の設定
app.set('views', './src/views')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


// ルーティング
app.use(session);
app.use('/', indexRouter);
app.use('/list', listRouter);
app.use('/article', articleRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

// ポート設定
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started port ${port}`));
