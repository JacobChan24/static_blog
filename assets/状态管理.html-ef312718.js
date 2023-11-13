import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as t,f as n}from"./app-9e438faa.js";const l={},s=n(`<p>一个完整的实例，页面或者单元，由以下三个部分组成：</p><ol><li>状态：即数据</li><li>视图：页面样式，数据在前端的映射</li><li>交互：状态根据用户在视图中的操作而做出改变的可能方式，即方法</li></ol><p>在一个独立的组件中，这三者彼此配合和依赖，但是我们会出现更加复杂的场景，比如：</p><ul><li>多个组件视图依赖同一个数据状态</li><li>来自不同视图的交互需要修改同一份状态</li></ul><p>根据以上的需求，我们将组件中共享的状态都抽出来，放在一个全局的地方来管理，我们的组件树就成了一个大的“视图”，在任意位置上的组件都可以访问其中的状态或者触发动作</p><h3 id="管理方式之store模式" tabindex="-1"><a class="header-anchor" href="#管理方式之store模式" aria-hidden="true">#</a> 管理方式之store模式</h3><p>我们可以使用<code>reactive()</code>方法创建一个响应式的对象，然后导入到需要使用到这个共享状态的组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {reactive} from &quot;vue&quot;  //需要从vue中导入这个方法
 export const store = reactive({
	 count: 0
 })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在其他的组件中，我们就可以通过导入来使用共享状态了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {store} from &#39;/store.js&#39;
&lt;template&gt;
	&lt;h1&gt;这是一个共享变量：&lt;/h1&gt;
	{{store.count}}
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每当store里面的数据更新的时候，引入此状态的组件视图也会一起更新，这也意味着任意一个引入了<code>store</code>的组件也可以随意修改共享状态，不建议这样去写，应该在store.js里面集中地写好操作共享变量的方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {reactive} from &#39;vue&#39;
export const store = reactive({
	count: 0,
	increment(){
		blablabla
	}
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入及使用共享变量及其操作方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {store} from &#39;/store.js&#39;

&lt;template&gt;
	&lt;button @click=&#39;store.increment()&#39;&gt;
	&lt;/button&gt;

&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式满足了状态管理的基本需求了，如果需要更加复杂的管理方式，可以去看看vuex和pinia的使用方式</p>`,15),d=[s];function a(r,c){return i(),t("div",null,d)}const u=e(l,[["render",a],["__file","状态管理.html.vue"]]);export{u as default};
