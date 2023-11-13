import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,f as a}from"./app-9e438faa.js";const o={},r=a('<h1 id="sql注入攻击" tabindex="-1"><a class="header-anchor" href="#sql注入攻击" aria-hidden="true">#</a> SQL注入攻击</h1><hr><h1 id="xss攻击" tabindex="-1"><a class="header-anchor" href="#xss攻击" aria-hidden="true">#</a> XSS攻击</h1><ol><li><p>Dom-based XSS 产生原因是没有对URL的参数进行校验</p></li><li><p>Stored XSS 没有对用户提交的数据或参数进行js等可执行代码的过滤和屏蔽</p></li></ol><ul><li>应对方式 进行校验或者将一些可执行的代码变为普通的文本，使其不能执行 <ul><li>校验： <ul><li>比如填写邮箱的时候进行字符验证，填写电话号码的时候就行位数的校验</li></ul></li><li>转义</li></ul></li></ul><hr><h1 id="csrf攻击" tabindex="-1"><a class="header-anchor" href="#csrf攻击" aria-hidden="true">#</a> CSRF攻击</h1><ol><li>产生原因 <ol><li>CSFR是跨站点请求伪造的意思</li><li>产生的根本原因是服务器对于浏览器发送的请求过于信任，无法分辨哪些是真的请求还是伪造出来的请求</li></ol></li><li>解决方式： <ol><li>关键数据操作的请求使用POST请求，限制GET请求的数据。这样规避了默认 拉取资源的带来的影响，前面举的img 标签的栗子就是在GET 请求下执行的</li><li>关键数据操作时进行用户身份的验证，这样可以减少机器人自动提交</li><li>如果觉得验证流程影响用户体验，可以使用CSRF token的方式，就是在真正的表单页面里，隐藏一个随机的每次都变化的 token，当用户ᨀ交表单时，将这个 token ᨀ交到后台，进行验证，如果验证通过就执行操作。在CSRF 攻击的情况下，网站B 是拿不到网站A表单里的 token 的，所以服务器可以快速的验证出有效的请求</li></ol></li></ol>',8),t=[r];function s(n,_){return i(),e("div",null,t)}const d=l(o,[["render",s],["__file","SQL注入攻击、XSS攻击和CSRF攻击.html.vue"]]);export{d as default};
