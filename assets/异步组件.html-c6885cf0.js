import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-9e438faa.js";const t={},p=e(`<h3 id="why-and-what" tabindex="-1"><a class="header-anchor" href="#why-and-what" aria-hidden="true">#</a> Why? and What?</h3><p>如果首屏或者一些页面当中组件过多，就会影响加载速度，影响用户体验，这种情况下，我们就需要按需加载一个页面当中的组件，比如首页有很多tab组件，首屏加载的时候只需要加载一个home组件，切换到其他tab的时候再去从服务器下载相关组件</p><h3 id="how" tabindex="-1"><a class="header-anchor" href="#how" aria-hidden="true">#</a> How?</h3><ol><li><p>从vue中引入异步组件的定义方法 <code>import {defineAsyncComponent} from &#39;vue&#39;</code></p></li><li><p>在component选项中定义一个异步组件，而不是跟之前一样直接import一个组件，方法里面传入一个<strong>箭头函数</strong></p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineAsyncComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">myAsyncComponent</span><span class="token operator">:</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./componnets/myAsyncComponent.vue&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组合式api的写法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> 
<span class="token keyword">const</span> AdminPage <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/AdminPageComponent.vue&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-good" tabindex="-1"><a class="header-anchor" href="#how-good" aria-hidden="true">#</a> How Good?</h3><p>除了上述说到的提高首屏加载速度的好处以外，异步组件还支持一些自定义配置，比如配置异步组件正在加载或者加载错误的显示，在方法中传入相关组件即可，记得要先import这些组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 加载函数</span>
  <span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./Foo.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// 加载异步组件时使用的组件</span>
  <span class="token literal-property property">loadingComponent</span><span class="token operator">:</span> LoadingComponent<span class="token punctuation">,</span>
  <span class="token comment">// 展示加载组件前的延迟时间，默认为 200ms</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

  <span class="token comment">// 加载失败后展示的组件</span>
  <span class="token literal-property property">errorComponent</span><span class="token operator">:</span> ErrorComponent<span class="token punctuation">,</span>
  <span class="token comment">// 如果提供了一个 timeout 时间限制，并超时了</span>
  <span class="token comment">// 也会显示这里配置的报错组件，默认值是：Infinity</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","异步组件.html.vue"]]);export{d as default};
