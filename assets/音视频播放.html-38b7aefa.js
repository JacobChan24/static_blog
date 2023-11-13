import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as t,e as a,a as e,b as c,f as s}from"./app-9e438faa.js";const n={},d=e("p",null,"controls autoplay loop",-1),i=e("h5",{id:"样式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#样式","aria-hidden":"true"},"#"),c(" 样式")],-1),l=e("p",null,"不同浏览器的播放组件样式不同，我们需通过CSS重新写样式并且用CS将播放器的功能都重新写一遍",-1),h=s('<hr><h4 id="视频文件-video元素" tabindex="-1"><a class="header-anchor" href="#视频文件-video元素" aria-hidden="true">#</a> 视频文件-- video元素</h4><p>（使用方式基本跟audio相同） <video controls><source src="#"><source src="#"></video></p><h4 id="其他往页面中引入视频的方式" tabindex="-1"><a class="header-anchor" href="#其他往页面中引入视频的方式" aria-hidden="true">#</a> 其他往页面中引入视频的方式</h4><p>将视频上传到视频网站，视频网站一般可以通过iframe自动生成代码，我们可以直接将生成的代码拷贝即可：</p>',5),_=e("iframe",{frameborder:"0",src:"https://v.qq.com/txp/iframe/player.html?vid=a002058rl6e",allowFullScreen:"true"},null,-1);function u(p,f){return r(),t("div",null,[d,i,l,a(` 指定文件路径的两种方法：
1. src
	1. <audio src= "#"  controls autoplay>
2. <source>标签 -- 可以显示提示文字，且有多个文件源，避免浏览器不支持文件格式的问题
	1. <audio controls>
		1. 对不起，您的浏览器不支持播放音视频！
		2. <source src="">
		3. <source src=“”>
	2. </audio> `),h,_])}const x=o(n,[["render",u],["__file","音视频播放.html.vue"]]);export{x as default};
