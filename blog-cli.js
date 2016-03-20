/// <reference path="typings/node/node.d.ts" />
const fs = require('fs');
module.exports = function () {
  const argv = require('yargs').argv;
  console.log(argv);
  if (argv._.indexOf('new') != -1) {
    if (argv.name) {
      var name = argv.name;
      name = name.replace(/\s/g, '-') + '.md';
      fs.access(`./src/posts/${name}`, fs.F_OK, (err) => {
        if (err) {
          console.log(err);
          fs.closeSync(fs.openSync(`./src/posts/${name}`, 'w'));
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
}