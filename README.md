blog-generator
===
A blog auto-genertor build with gulp and jade.
---

Requirements
===
- node >= 4.0
- global gulp if using Windows
```sh
npm install -g gulp-cli
```

Usage
===
To use command line tool
```sh
npm link
```

New Post
```sh
blog new --name "Your post title"
# All posts created in "./src/posts/"
```

Config your blog

Edit "./src/settings.json"
```json
{
    "title": "",
    "tags": {
        "Home": "/"
    },
    "description": "",
    "author": "",
    "intro": "",
    "avatar": "/images/avatar.jpg",
    "github": "",
    "weibo": "",
    "disqus": ""
}
```

Generate Site
```sh
gulp build
```

Preview
```sh
gulp server
```

Delete Post
```sh
blog delete --name "Your post title"
```

Todo
===
- Create pages
- Archieve
- Date Binding
- Recent Posts
- Depoly

License
===
(MIT License)

Copyright (c) 2016 Shao Ziqi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
