import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,f as r}from"./app-9e438faa.js";const n={},t=r(`<p>Navigation Guard 我们需要在load路由对应的组件的时候checkurl里面的每个字段是否真的存在 either by:</p><ul><li>redirecting the route</li><li>Canceling the route</li></ul><ol><li>导航守卫有好几种方式可以植入，包括全局级别的、组件级别的和单条路由级别的;</li><li>当一个导航被触发的时候，守卫是异步执行的，而导航在守卫完成之前都处于一个等待的状态</li></ol><hr><h3 id="per-route-navigation-guard" tabindex="-1"><a class="header-anchor" href="#per-route-navigation-guard" aria-hidden="true">#</a> Per-route navigation guard</h3><h3 id="global-guard" tabindex="-1"><a class="header-anchor" href="#global-guard" aria-hidden="true">#</a> Global guard</h3><h4 id="_1-用router-beforeeach-注册全局前置守卫" tabindex="-1"><a class="header-anchor" href="#_1-用router-beforeeach-注册全局前置守卫" aria-hidden="true">#</a> 1.用router.beforeEach()注册全局前置守卫</h4><p>在index.js，即我们的路由配置文件里面，注意要在路由定义之后，添加导航守卫：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const router = createRouter({...})
router.beforeEach(...) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>beforeEach这个导航守卫会在每个路由进入之前进行一次检查，每个守卫方法接受两个参数值： to和from，即即将要进入的路由和当下导航出发的路由，两个都是标准的路由对象，可以访问我们定义的路由属性(name,path,meta等)，我们可以配合meta属性做权限控制([[使用路由元信息控制页面访问权限]]) 守卫方法可能的返回值如下：</p><ol><li>false，即取消导航，回到from路由对应的地址页面</li><li>一个路由地址，当前的导航被中断，进行一个新的导航 具体例子如下：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//取消导航实例
router.beforeEach((to,from)=&gt;{
	if (to.name == &#39;NotFound&#39;) {   //用户手动访问404页面时取消导航
		return false
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重定向： 一个未登录的用户尝试前往非登陆页面时我们重定向到登陆页面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>router.beforeEach((to,from) =&gt; {
	if (to.name !== &#39;Login&#39; &amp;&amp; user.id) //无userId的用户场次前往非登陆页面
	{
		return {name: &quot;Login&quot;} //前提是login页面有定义name属性，这里买呢可以写一个路由的所有配置，可以实现很灵活的跳转
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d=[t];function l(o,s){return a(),i("div",null,d)}const v=e(n,[["render",l],["__file","VUE路由--导航守卫.html.vue"]]);export{v as default};
