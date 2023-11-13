import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,f as i}from"./app-9e438faa.js";const l={},s=i(`<p>当我们不做处理的时候，我们访问一个不存在的url时，页面会呈现一片空白，因为没有与此url对应的组件被渲染出来（路由的功能就是根据url渲染对应的组件），我们希望增加一个标准的404页面，然后在页面上增加一个回到主页的按钮：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
	&lt;div&gt;
		&lt;h1&gt;404 Not Found&lt;/h1&gt;
		&lt;p&gt;
		Oops, we counldn&#39;t found the page, please try going
		&lt;router-link to=&quot;/&quot;&gt;home&lt;/router-link&gt;
		&lt;/p&gt;
	&lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们如何在路由配置文件Index.js中配置404页面的路由呢？as follow:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const routes = [
	{
	path:&quot;/:pathMatch(.*)*&quot;,   //这里的正则表达式复制即可
	name:&quot;Not found&quot;,
	component:&quot;NotFound&quot;
	}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，404页面只能匹配不存在的路由，如果一条路由合法，只是里面的值没有匹配的话，我们则需要[[VUE路由--导航守卫]]来处理</p>`,5),d=[s];function a(o,r){return t(),n("div",null,d)}const v=e(l,[["render",a],["__file","VUE路由 - 404页面.html.vue"]]);export{v as default};
