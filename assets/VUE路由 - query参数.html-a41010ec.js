import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as t,f as i}from"./app-9e438faa.js";const n={},d=i(`<p>跟动态参数相同，我们可以通过<code>this.$router.query</code>来访问一个url的查询参数</p><h4 id="登录之后重定向功能实现" tabindex="-1"><a class="header-anchor" href="#登录之后重定向功能实现" aria-hidden="true">#</a> 登录之后重定向功能实现</h4><p>有时候，我们前往某些页面的时候，因为未登录，就会重定向到登录页，登录之后我们需要自动跳转到之前想要访问的页面，我们应该如何实现这样的功能呢？</p><p>我们之前的重定向的功能使用全局的导航守卫来实现的，我们在index.js中进行全局的配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>router.beforeEach((to,from) =&gt; {
	if (用户未登录 &amp;&amp; 待访问页面需要登录) {
		return {name:&quot;Login&quot;} //重定向到name属性设置为Login的登陆页面
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，当我们redirect到登陆页面的时候，设置一下首页路径的参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>router.beforeEach((to,from)=&gt; {
	if (用户未登录 &amp;&amp; 待访问页面需要登录) {
		return {name: &quot;Login&quot;, query:{redirectUrl:to.fullpath}}
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为此导航守卫是在路由发生之前，还在初始页面上，发现没有登录，则重定向到登陆页面，同时也把最开始的目的页面的路径也加到了登陆页面url的参数里面，在此重定向的登陆页面里面，我们就可以通过<code>this.$router.query.redirect</code>来访问此url，登录成功之后就可以手动调用<code>this.$router.push()</code>来路由到之前的目的页面了</p>`,8),a=[d];function s(c,l){return r(),t("div",null,a)}const m=e(n,[["render",s],["__file","VUE路由 - query参数.html.vue"]]);export{m as default};
