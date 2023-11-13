import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as t}from"./app-9e438faa.js";const s={},a=t(`<p>一般我们访问某一个网站的时候只知道根目录的路径，而我们的根目录一般没有配置路由，所以访问的时候没有组件渲染，就会很奇怪，所以我们会用到一个redirect属性，使我们每次访问根目录的时候重新导航到另外一个路由url，渲染那个路由对应的组件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const routes = [
	{
		path: &quot;/&quot;,
		redirect: &quot;/mainpage&quot;
	}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要实现同样的效果，我们也可以在主页上面加一个别名的配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const routes = [
	{
		path:&#39;/&#39;
		alias:&#39;/mainpage&#39;
	}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[a];function l(r,c){return n(),i("div",null,d)}const o=e(s,[["render",l],["__file","VUE路由 - 重定向与别名.html.vue"]]);export{o as default};
