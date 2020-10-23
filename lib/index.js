const ejs = require('ejs');
const koa = require('koa');
const router = require('koa-router')();
const path = require('path');
const marked = require('marked');
const app = new koa();


router.get('/test', async (ctx, next) => {
  // const tem = marked('# Marked in the browser\n\nRendered by **marked**.');
  // console.log(tem);
  // ctx.response.body = tem;

  const people = ['Hello', 'World', 'DangoSky'];

  ejs.renderFile(path.resolve(__dirname, '../themes/dango-theme-sky/pages/index.ejs'), {
    msg: 'Success~',
    list: people
  }, function(err, str) {
    if (err) {
      ctx.response.body = `${err}`;
    } else {
      ctx.response.body = str;
    }
  });
})



app.use(router.routes());

app.listen('3000');
console.log('app started at port 3000...');