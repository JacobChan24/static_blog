import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as t}from"./app-9e438faa.js";const a={},d=t(`<p>Router会将router-link元素转换成a元素，但是会拦截点击事件，不会引发刷新，在单页面应用中 router-view组件会根据不同的path渲染相应的组件 router-link元素其实就等于a属性，to属性等于href属性，区别在于router-link元素不会引起页面整体刷新</p><h3 id="历史模式" tabindex="-1"><a class="header-anchor" href="#历史模式" aria-hidden="true">#</a> 历史模式</h3><p>createWebHistory() createWebHashHistory()</p><h3 id="_1lazy-loading-code-splitting-动态导入" tabindex="-1"><a class="header-anchor" href="#_1lazy-loading-code-splitting-动态导入" aria-hidden="true">#</a> ①lazy loading / code splitting/动态导入</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>index.js

//记得删除上面的import语句
const routes = [
	{
	path: &#39;/about&#39;,
	name: &#39;about&#39;,
	component: ()=&gt; import(&#39;path&#39;)
	},
	{
	path: &#39;/detail&#39;,
	name: &#39;detail&#39;,
	component: ()=&gt; import(&#39;path
	
	
	&#39;)
	}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的话，当应用在加载的时候，不会一下子加载全部的组件和其js，只当我们路由到某个path的时候才会加载相应的VUE和JS</p><h3 id="_2router-link-active-类" tabindex="-1"><a class="header-anchor" href="#_2router-link-active-类" aria-hidden="true">#</a> ②router-link-active 类</h3><h3 id="动态路线-route-parameters-路由参数" tabindex="-1"><a class="header-anchor" href="#动态路线-route-parameters-路由参数" aria-hidden="true">#</a> 动态路线 - Route Parameters（路由参数）</h3><p>在应用当中，我们有很多的页面的结构是完全相同的，只是内容不相同，但是为每一个这样可能的页面创建一个组件且手动添加路由是一件非常麻烦的事情，况且有可能有无限个这样的页面，我们应该如何用一个组件处理这个问题呢？ 我们在index.js中创建一条这样的路由：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const router = [
	{
	path: &#39;/destination/:id&#39;,    //对于这个页面来说id部分无论是什么，路由都会在同一个页面/组件
	name: &#39;destination&#39;,
	component: ()=&gt;import(&#39;/destination.vue&#39;)
	}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在destination的VUE模板里面，我们可以通过<code>$route.params.id</code>来访问这个参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
export default {
	computed: {
		desId(){
			return this.$route.params.id
		}
	}
}
&lt;/script&gt;

&lt;template&gt;
	&lt;h1&gt;{{$route.params.id}}&lt;/h1&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="router-name" tabindex="-1"><a class="header-anchor" href="#router-name" aria-hidden="true">#</a> Router name</h3><p>![[Pasted image 20220930020340.png]] 有时候path会更新，但是如果路由的使用name的话就不需要更新路由部分的代码了，在大型网站上，这种方法更加方便维护</p><h3 id="注意-参数变换时的注意事项" tabindex="-1"><a class="header-anchor" href="#注意-参数变换时的注意事项" aria-hidden="true">#</a> 注意：参数变换时的注意事项</h3><p>我们使用不同的路由参数，使用同一个组件渲染不同的界面的时候，需要注意一些细节。 同一个组件渲染不同的页面的时候，组件在这个过程中没有被销毁和重新创建，所以生命周期的钩子函数不能每次都被重新触发。 一般情况下，我们会在生命周期钩子中通过API请求数据，然后用数据作为数据属性来渲染组件实例，如果路由参数变化的时候钩子不能再重新触发，那么无法重新去请求数据，我们应该如何解决这个问题呢？</p><ul><li>方案一： 侦听路由参数，路由参数发生变化的时候重新进行AJAX数据请求</li><li>方案二：推荐 让VUE在每次页面组件发生变化的时候重新创建页面组件实例，key属性 key属性发生变化的时候，组件将会被摧毁，然后重新被创建 <code>&lt;rounter-view v-bind:key=&quot;$router.path&quot;&gt;&lt;/router-view&gt;</code></li></ul>`,17),r=[d];function s(l,c){return i(),n("div",null,r)}const o=e(a,[["render",s],["__file","Router路由.html.vue"]]);export{o as default};
