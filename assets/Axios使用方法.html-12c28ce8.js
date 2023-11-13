import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as s,f as o}from"./app-9e438faa.js";const a={},n=o(`<hr><h2 id="引入安装" tabindex="-1"><a class="header-anchor" href="#引入安装" aria-hidden="true">#</a> 引入安装</h2><p>安装Axios和可选插件Vue-Axios，Vue-Axios插件能够把两者更方便地整合在一起，允许组件通过<code>this.axios</code>的方式来访问Axios</p><p><code>npm install axios vue-axios</code></p><p>在src/main.js中引入这两个插件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import axios from &#39;axios&#39;
import VueAxios from &#39;vue-axios&#39;

createApp(App)
.use(VueAxios,axios)
.mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们就可以在组件代码中通过<code>this.axios</code>的形式访问Axios了</p><p>参考资料: https://mp.weixin.qq.com/s?src=11&amp;timestamp=1666752741&amp;ver=4127&amp;signature=9xyjF2T<strong>F06mXW9wuyIog</strong>-IyxTT9oDU-ChTIHJx4v8PXwX2jEly3lZi53mpioRbwpIR<em>osoCGBXYxcPU7R4KQZYTP4rJgxD0XPdvDFRjwDGp</em>SjVrYVkB-Pr-EVzb&amp;new=1</p>`,8),r=[n];function t(c,d){return i(),s("div",null,r)}const l=e(a,[["render",t],["__file","Axios使用方法.html.vue"]]);export{l as default};
