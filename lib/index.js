const ejs = require('ejs');
const koa = require('koa');
const router = require('koa-router')();
const path = require('path');
const marked = require('marked');
const fs = require('fs');
const app = new koa();


router.get('/test', async (ctx, next) => {
  // const contentStr = fs.readFileSync(path.resolve(__dirname, '../docs/mysql/index.md')).toString();
  // const congtentHtml = await marked(contentStr);

  ejs.renderFile(path.resolve(__dirname, '../themes/dango-theme-sky/pages/home/index.ejs'), {
    text: 'Hello DangoSky'
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
