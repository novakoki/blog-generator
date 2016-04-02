/// <reference path="typings/node/node.d.ts" />
const fs = require('fs'),
  settings = require('./src/settings.json');
module.exports = function () {
  const argv = require('yargs').argv;
  //console.log(argv);
  if (argv._.indexOf('new') != -1) {
    if (argv.name) {
      var name = argv.name;
      name = name.replace(/\s/g, '-');
      fs.access(`./src/posts/${name}.md`, fs.F_OK, (err) => {
        if (err) {
          //console.log(err);
          fs.closeSync(fs.openSync(`./src/posts/${name}.md`, 'w'));
          settings.articles[name] = `./src/posts/${name}.md`;
          settings.recent_posts[argv.name] = `./posts/${name}.html`;
          fs.writeFileSync('./src/settings.json', JSON.stringify(settings, null, 4));
          console.log('New article created. You can edit your article in src/posts/');
        }
        else {
          console.log('Article already exists!!!');
        }
      });
    }
    else {
      console.log('Please input article\'s name!!!');
    }
  }
  if (argv._.indexOf('delete') != -1) {
    if (argv.name) {
      var name = argv.name;
      name = name.replace(/\s/g, '-');
      fs.access(`./src/posts/${name}.md`, fs.F_OK, (err) => {
        if (err) {
          console.log('Article does not exist!!!');
        }
        else {
          fs.unlink(`./src/posts/${name}.md`);
          delete settings.articles[name];
          delete settings.recent_posts[argv.name];
          fs.writeFileSync('./src/settings.json', JSON.stringify(settings, null, 4));
          console.log('Article has been deleted');
        }
      });
    }
    else {
      console.log('Please input article\'s name!!!');
    }
  }
}