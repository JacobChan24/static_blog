import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,f as a}from"./app-9e438faa.js";const r={},u=a('<h3 id="_2023-4-10" tabindex="-1"><a class="header-anchor" href="#_2023-4-10" aria-hidden="true">#</a> 2023-4-10</h3><ul><li><p>[x] 增加时间戳处理逻辑</p><ul><li>前端封装一个方法，将时间戳转换成我们想要的数据格式</li><li>后端数据库既存时间戳，也存转换过的时间，时间戳用于排序，转换过的时间用于显示</li></ul></li><li><p>[x] 留言页面增加回到顶部功能</p><ul><li>往下滑显示“回到顶部”按钮</li><li>滑回来第一屏时隐藏“回到顶部”按钮</li><li>用户留言成功过之后自动回到顶部，查看最新的留言情况</li></ul></li></ul><h3 id="_2023-4-12" tabindex="-1"><a class="header-anchor" href="#_2023-4-12" aria-hidden="true">#</a> 2023-4-12</h3><ul><li>[x] 授权注册页面 <ul><li>[x] 头像选择好之后获取到头像文件的临时链接</li><li>[x] 点击确认按钮之后 <ul><li>[x] 增加按钮的loading效果，注册成功之后再消失</li><li>[x] 先将图片上传至CMS，获得fileID（后续下载头像是基于fileID的）</li><li>[x] 将头像的fileID、昵称都上传至数据库，即注册接口</li><li>[x] 上传成功之后将昵称、头像fileID和头像临时路径都存到缓存里面</li><li>[x] 返回首页</li></ul></li></ul></li><li>[x] 登录接口：用户打开小程序的时候先进行登录，若后端没有昵称和头像信息，即未注册则跳转去登录页面</li></ul><h4 id="_2023-4-13" tabindex="-1"><a class="header-anchor" href="#_2023-4-13" aria-hidden="true">#</a> 2023-4-13</h4><ul><li>[x] 用Midjourney美化UI</li><li>[x] 前端完成美化后的UI</li><li>[x] 用户评论时将头像的fileID也上传，用于某用户在浏览评论时能实时预览其他用户的头像</li><li>[x] bug: 所有文字留言的用户都错误地显示为&quot;Jacob&quot;</li><li>[x] 授权页面美化</li></ul><h4 id="_2023-4-18" tabindex="-1"><a class="header-anchor" href="#_2023-4-18" aria-hidden="true">#</a> 2023-4-18</h4><ul><li>[x] 修复：无头像注册可以成功的bug</li><li>[x] 修复：上传图片之后上传人always显示“Jacob”的bug</li><li>[x] 文字留言页面样式美化</li><li>[x] 上传图片接口增加上传人的昵称和头像信息</li><li>[x] 修复：照片墙图片预览不成功的bug（因为传入api的不是url数组，而是一个包含url的object）</li></ul>',8),o=[u];function t(n,d){return i(),e("div",null,o)}const x=l(r,[["render",t],["__file","Mini Program Development Journal.html.vue"]]);export{x as default};
