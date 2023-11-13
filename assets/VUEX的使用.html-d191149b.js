import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-9e438faa.js";const e={},p=t(`<p>1.创建store.js文件 在src文件夹下创建文件夹<code>store</code>，在此文件夹下新建<code>store.js</code>文件，这个文件是用来定义公共状态及方法并且将之导出的文件 store.js中应该写的逻辑有：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>    <span class="token comment">//导入此模块</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> Vuex<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>   <span class="token comment">//定义一个store对象，包含数据和方法</span>
	<span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">{</span>
			<span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>      <span class="token comment">//定义的公共数据，唯一数据源</span>
	<span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">//类似于mutation，用于提交mutation来改变状态，而不直接变更状态，可以包含任意异步操作</span>
	<span class="token literal-property property">mutation</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">//类似函数，改变state数据的唯一途径，且不能用于处理异步事件</span>
	<span class="token literal-property property">getter</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">//如vue中的计算属性一样，基于state数据的二次包装，常用于**数据的筛选**和多个数据的相关性计算</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> store <span class="token comment">//导出此模块，方便在main.js中引入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在main.js中导入并使用此模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store/store.js&#39;</span>  

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span>
	 <span class="token comment">// 在导航守卫中使用具体的状态和方法</span>
<span class="token punctuation">)</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>  <span class="token comment">//安装此插件</span>
<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js中可以比较直接地使用其方法和状态:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.在组件中访问store中的状态或者方法： <code>this.$store.commit()</code><code>this.$store.count</code><code>this.$store.state</code></p>`,7),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","VUEX的使用.html.vue"]]);export{d as default};
