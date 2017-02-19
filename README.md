# fullpageWebsite
jQuery.fullpage+bower+gulp+animate+bootstrap

## 1.Install gulp dev and plugins
```Terminal:
npm install --save-dev gulp gulp-livereload gulp-imagemin imagemin-pngquant gulp-cache gulp-connect
```
## 2.run gulp
```Termainal:
gulp
```
## 3.open browser
url:http://localhost:9080/app

# PS技术运用和注意要点
## 1.jQuery.fullpage.js
可以兼容 Chrome Firefox Safari Opera IE8/IE9/IE10+
fullpage.js 1.5.3 要求 jquery最低版本为1.8.3
## 2.bootstrap
主要运用了navbar上，且是定制后的样式
## 3.gulp
文件改变watch，图片压缩，connect开启webserver
目前在gulp上图片的压缩率并不高，推荐使用 https://tinypng.com/ 在线压缩
## 4.animate
translate3d 左右3d移动效果要求：
1.左侧移动元素position=relateive;
2.左侧展示元素position=absolute;width为百分比；
3.右侧移动元素position=absolute;right=0;width为百分比;
4.移动元素的父级元素要设置透镜效果，perspective和perspective-origin，以便设置右侧rotateY角度和移动位置。
