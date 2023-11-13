import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,f as i}from"./app-9e438faa.js";const s={},d=i(`<p>有时候，我们想将各种自定义的信息加到路由上面，比如过渡名称、谁可以访问路由、是否需要登录才能访问的自定义字段等，这些信息可以通过路由里面的meta选项来定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const routes = [
	{
	name:&quot;post&quot;,
	path:&quot;/post&quot;,
	component:&quot;postLayout&quot;,
	children: [
		{
		path:&quot;new&quot;,
		component:&quot;PostNew&quot;,  //发新帖子页面
		meta: {requiredAuth: true} //需要登录才能发新帖子
		},
		{
		path: &quot;:id&quot;,
		component: &quot;PostDetail&quot;,
		meta: {requiredAuth: false}   //任何人都可以访问这个页面 
		}
	]
	}

]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在哪里可以访问这个路由的meta参数呢？ 我们在导航守卫里面可以访问到配置路由的所有属性，导航守卫里面的<code>to</code>和<code>from</code>参数就是标准化的路由地址，我们可以正常访问这个路由的属性，如name,fullPath,hash,query,meta,params等，详见文档:https://router.vuejs.org/zh/api/#params</p>`,3),a=[d];function l(o,u){return t(),n("div",null,a)}const v=e(s,[["render",l],["__file","VUE路由 - 元信息.html.vue"]]);export{v as default};
