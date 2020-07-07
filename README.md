### 参考资料汇总

    - 字体图标库: https://icomoon.io/
    - iconfont: https://www.iconfont.cn/
    - 蓝湖psd稿设计软件: https://lanhuapp.com/
  + 轮播图插件react-swpieable-views文档地址: https://react-swipeable-views.com/getting-started/installation/ (点的样式和逻辑需要自己实现)
  + express 学习地址: https://www.expressjs.com.cn/starter/installing.html

### 项目初始化 

    npx create-react-app goodlive
    

### 拉取配置文件

    npm run eject

### 配置less

    npm install less less-loader --save

``` 
const lessRegex = /\.less$/;

module: {
    {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: getStyleLoaders(
        {
            importLoaders: 3,
            sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'less-loader'
        ),
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
    }
}
```

### 初始化css

reset.less文件

``` 
@charset "gb2312";
/* CSS Document */
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}
body{padding:0; margin:0; background:black;}
html,body,fieldset,img,iframe,abbr{border:0;}
li{list-style:none;}
textarea{overflow:auto;resize:none;}
a,button{cursor:pointer;}
h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
a,a:hover{text-decoration:none;}
body,textarea,input,button{
	color:#62a1c9;
}
 
html,body{
	width:100%;
	min-height: 930px;
	height: auto;
}
 
.hide{
	display: none;
}
 
.text-shadow (@string: 0 1px 3px rgba(0, 0, 0, 0.25)) {
    text-shadow: @string;
}
.box-shadow (@string) {
	-webkit-box-shadow: @string;
	-moz-box-shadow:    @string;
	box-shadow:         @string;
}
.drop-shadow (@x: 0, @y: 1px, @blur: 2px, @spread: 0, @alpha: 0.25) {
	-webkit-box-shadow:	@x @y @blur @spread rgba(0, 0, 0, @alpha);
	-moz-box-shadow:	@x @y @blur @spread rgba(0, 0, 0, @alpha);
	box-shadow:		@x @y @blur @spread rgba(0, 0, 0, @alpha);
}
.inner-shadow (@x: 0, @y: 1px, @blur: 2px, @spread: 0, @alpha: 0.25) {
	-webkit-box-shadow: inset @x @y @blur @spread rgba(0, 0, 0, @alpha);
	-moz-box-shadow:    inset @x @y @blur @spread rgba(0, 0, 0, @alpha);
	box-shadow:         inset @x @y @blur @spread rgba(0, 0, 0, @alpha);
}
 
.box-sizing (@type: border-box) {
	-webkit-box-sizing: @type;
	-moz-box-sizing:    @type;
	box-sizing:         @type;
}
 
.border-radius (@radius: 5px) {
	-webkit-border-radius: @radius;
	-moz-border-radius:    @radius;
	border-radius:         @radius;
 
	-moz-background-clip:    padding;
	-webkit-background-clip: padding-box;
	background-clip:         padding-box;
}
.border-radiuses (@topright: 0, @bottomright: 0, @bottomleft: 0, @topleft: 0) {
	-webkit-border-top-right-radius:    @topright;
	-webkit-border-bottom-right-radius: @bottomright;
	-webkit-border-bottom-left-radius:  @bottomleft;
	-webkit-border-top-left-radius:     @topleft;
 
	-moz-border-radius-topright:        @topright;
	-moz-border-radius-bottomright:     @bottomright;
	-moz-border-radius-bottomleft:      @bottomleft;
	-moz-border-radius-topleft:         @topleft;
 
	border-top-right-radius:            @topright;
	border-bottom-right-radius:         @bottomright;
	border-bottom-left-radius:          @bottomleft;
	border-top-left-radius:             @topleft;
 
	-moz-background-clip:    padding; 
	-webkit-background-clip: padding-box; 
	background-clip:         padding-box; 
}
 
.opacity (@opacity: 0.5) {
    @tempOpacity: @opacity * 100;
	-webkit-opacity: 	@opacity;
	-moz-opacity: 		@opacity;
	opacity: 		@opacity;
    filter:alpha(opacity=@tempOpacity);
}
 
.gradient (@startColor: #eee, @endColor: white) {
	background-color: @startColor;
	background: -webkit-gradient(linear, left top, left bottom, from(@startColor), to(@endColor));
	background: -webkit-linear-gradient(top, @startColor, @endColor);
	background: -moz-linear-gradient(top, @startColor, @endColor);
	background: -ms-linear-gradient(top, @startColor, @endColor);
	background: -o-linear-gradient(top, @startColor, @endColor);
}
.horizontal-gradient (@startColor: #eee, @endColor: white) {
 	background-color: @startColor;
	background-image: -webkit-gradient(linear, left top, right top, from(@startColor), to(@endColor));
	background-image: -webkit-linear-gradient(left, @startColor, @endColor);
	background-image: -moz-linear-gradient(left, @startColor, @endColor);
	background-image: -ms-linear-gradient(left, @startColor, @endColor);
	background-image: -o-linear-gradient(left, @startColor, @endColor);
	background-image: linear-gradient(left, @startColor, @endColor);
}
 
.animation (@name, @duration: 300ms, @delay: 0, @ease: ease) {
	-webkit-animation: @name @duration @delay @ease;
	-moz-animation:    @name @duration @delay @ease;
	-ms-animation:     @name @duration @delay @ease;
	animation:		   @name @duration @delay @ease;
}
 
.transition (@transition) {
	-webkit-transition: @transition;  
	-moz-transition:    @transition;
	-ms-transition:     @transition; 
	-o-transition:      @transition;
	transition:        @transition;
}
.transform(@string){
	-webkit-transform: @string;
	-moz-transform: 	 @string;
	-ms-transform: 		 @string;
	-o-transform: 		 @string;
	transform: 		 	 @string;
}
.scale (@factor) {
	-webkit-transform: scale(@factor);
	-moz-transform: 	 scale(@factor);
	-ms-transform: 		 scale(@factor);
	-o-transform: 		 scale(@factor);
	transform: 		 	 scale(@factor);
}
.rotate (@deg) {
	-webkit-transform: rotate(@deg);
	-moz-transform: 	 rotate(@deg);
	-ms-transform: 		 rotate(@deg);
	-o-transform: 		 rotate(@deg);
	transform: 		 	 rotate(@deg);
}
.skew (@deg, @deg2) {
	-webkit-transform:       skew(@deg, @deg2);
	-moz-transform: 	 skew(@deg, @deg2);
	-ms-transform: 		 skew(@deg, @deg2);
	-o-transform: 		 skew(@deg, @deg2);
	transform: 		 	 skew(@deg, @deg2);
}
.translate (@x, @y:0) {
	-webkit-transform:       translate(@x, @y);
	-moz-transform: 	 translate(@x, @y);
	-ms-transform: 		 translate(@x, @y);
	-o-transform: 		 translate(@x, @y);
	transform: 		 	 translate(@x, @y);
}
.translate3d (@x, @y: 0, @z: 0) {
	-webkit-transform:       translate3d(@x, @y, @z);
	-moz-transform: 	 translate3d(@x, @y, @z);
	-ms-transform: 		 translate3d(@x, @y, @z);
	-o-transform: 		 translate3d(@x, @y, @z);
	transform: 		 	 translate3d(@x, @y, @z);
}
.perspective (@value: 1000) {
	-webkit-perspective: 	@value;
	-moz-perspective: 	@value;
	-ms-perspective: 	@value;
	perspective: 		@value;
}
.transform-origin (@x:center, @y:center) {
	-webkit-transform-origin: @x @y;
	-moz-transform-origin:    @x @y;
	-ms-transform-origin:     @x @y;
	-o-transform-origin:      @x @y;
	transform-origin:      	  @x @y;
}
 
.keyframes(@name, @frames) {
    @-webkit-keyframes @name { @frames(); }
	@-moz-keyframes @name { @frames(); }
	@-ms-keyframes @name { @frames(); }
	@-o-keyframes @name { @frames(); }
	@keyframes @name { @frames(); }
}
 
.animation(@arg){
	-moz-animation:@arg;
	-webkit-animation:@arg;
	-o-animation:@arg;
	-ms-animation:@arg;
	animation:@arg;
}
```

reset.css文件

``` 
/*reset.css用来存储清除浏览器的样式 ,后面添加了一部分通用样式*/

a { background-color: transparent; text-decoration: none;-webkit-tap-highlight-color:rgba(0,0,0,0) }
a:hover { outline: none; text-decoration: none; }
a,a:hover,a:active,a:visited,a:link,a:focus{
-webkit-tap-highlight-color:rgba(0,0,0,0);
-webkit-tap-highlight-color: transparent;
outline:none;
text-decoration: none;
-webkit-tap-highlight-color:rgba(0,0,0,0);
-webkit-user-modify: read-only;
cursor: pointer;
}

body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td { margin: 0; padding: 0; }
table { border-collapse: collapse; border-spacing: 0; }
fieldset, img { border: 0; }
address, caption, cite, code, dfn, em, strong, th, var, optgroup { font-style: inherit; font-weight: inherit; }
del, ins { text-decoration: none; }
li { list-style: none; }
caption, th { text-align: left; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal; }
q:before, q:after { content: ''; }
abbr, acronym { border: 0; font-variant: normal; }
sup { vertical-align: baseline; }
sub { vertical-align: baseline; }
/*because legend doesn't inherit in IE */
legend { color: #000; }
input, button, textarea, select, optgroup, option { font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; }
button, html input[type="button"], input[type="reset"], input[type="submit"] { -webkit-appearance: button; cursor: pointer; }
/*@purpose To enable resizing for IE */
/*@branch For IE6-Win, IE7-Win */
input, button, textarea, select {
*font-size: 100%; outline:none; }

/*select*/
select{
/*复写Chrome和Firefox里面的边框*/
border:1px solid green;
/*清除默认样式*/
appearance:none;
-moz-appearance:none;
-webkit-appearance:none;
/*在选择框的最右侧中间显示小箭头图片*/
/*background: url(../img/icon/icon_select.png) no-repeat scroll right center transparent;*/
/*为下拉小箭头留出一点位置，避免被文字覆盖*/
padding-right: 14px;
}
/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
select::-ms-expand { display: none; }

/* 个人在后面添加了一些常用的公共样式 */
/*居中效果*/
.margin_center { margin: 0px auto; }
/*浮动*/
.float_left { float: left; }
.float_right { float: right; }
/*文字位置*/
.text_center { text-align: center; }
.text_left { text-align: left; }
.text_right { text-align: right; }
/*position*/
.position_relative { position: relative; }
.position_absolute { position: absolute; }
/*边框*/
.no_border { border: 0px!important;border-right: 0px!important; }
/*宽度*/
.width_whole { width: 100%; }
/*清除格式*/
.clear_both { clear: both; }
.no_margin { margin: 0px!important; }
/* 展示样式 */
.display_block { display: block; }
.display_none { display: none; }
.visibility_hidden { visibility: hidden; }
/*清除浮动*/
.clearfix:after {content: "";display: block;height: 0;clear: both;visibility: hidden;}

* html .clearfix{zoom:1;} /* IE6 */

*+html .clearfix{zoom:1;} /* IE7 */

body {
font-family: 'PingFangSC','helvetica neue','hiragino sans gb','arial','microsoft yahei ui','microsoft yahei','simsun','sans-serif'!important;
font-size: 10px;
}

```

### 字体自适应

复制到index.html文件中

``` 
<script>
    (function (width) {
    var doc = width.document,
        element = doc.documentElement,
        i = 640,
        d = i / 100,
        o = "orientationchange" in width ? "orientationchange" : "resize",
        a = function () {
        var width = element.clientWidth || 320;
        width > 640 && (width = 640);
        element.style.fontSize = width / d + "px"
        };
    doc.addEventListener && (width.addEventListener(o, a, !1), doc.addEventListener("DOMContentLoaded", a, !1))
    })(window);
</script>
```

### 项目初始化遇到的问题

``` 
Cannot find module 'resolve'

解决方案: 重新安装依赖
删除 /node_modules
npm clean cache
npm install 
npm start 重启服务

以上操作完美解决了问题
```

### 蓝湖 + ps 设计psd项目稿

    参考链接: https://lanhuapp.com/
    下载ps
    备注: 如何使用自己去摸索

### 配置导航组件Nav

    安装: npm install react-router-dom --save

``` 
import React from 'react'
import {HashRouter as Router, Route, Switch}  from 'react-router-dom'

import Home from '../pages/Home/home'
import Shop from '../pages/Shop/shop'
import Mine from '../pages/Mine/mine'
import Life from '../pages/Life/life'
import NotFound from '../pages/NotFound/notFound'

export default class Nav extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/shop" component={Shop}></Route>
                    <Route exact path="/mine" component={Mine}></Route>
                    <Route exact path="/life" component={Life}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        )
    }
}
```

### 轮播图

github地址: https://github.com/oliviertassinari/react-swipeable-views(点的样式和逻辑需要自己实现)

文档地址: https://react-swipeable-views.com/getting-started/installation/

自动轮播功能需要安装插件: npm install --save react-swipeable-views-utils(具体代码实现看文档实现)

安装: npm install --save react-swipeable-views

``` 
import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

const MyComponent = () => (
  <SwipeableViews>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      slide n°1
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
      slide n°2
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
      slide n°3
    </div>
  </SwipeableViews>
);

export default MyComponent;
```

### 搭建一个简易的express服务

参考资料: https://www.expressjs.com.cn/starter/installing.html

安装: npm install express --save
提示: 怎么搭建基本服务和配置路由官方文档都有详细的解释, 这里只是做一个指引.

掌握要点: 
	路由配置
	中间件的使用
	整合mysql以及sql的基本操作

``` 
const express = require('express')
const app = express()
const router = express.Router()

app.use(router)

app.listen(3001, function(req, res) {
	console.log('listening port in 3001')
})
```

### 使用redux将城市信息保存在全局store中
```

```