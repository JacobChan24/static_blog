import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-9e438faa.js";const p={},t=e(`<p>这里介绍一些比较不基础的[[运算符]]，更加基础的可以见前面的笔记</p><h2 id="_1-扩展运算符-spread-operator" tabindex="-1"><a class="header-anchor" href="#_1-扩展运算符-spread-operator" aria-hidden="true">#</a> 1. 扩展运算符 spread operator</h2><p><code>...</code>将一个可迭代的对象（数组，字符串、对象等）展开成多个元素，可以用于数据的拼接</p><h2 id="_2-解构运算符" tabindex="-1"><a class="header-anchor" href="#_2-解构运算符" aria-hidden="true">#</a> 2. 解构运算符</h2><p>解构运算符是一种快速并且简便地从数组和对象中获取值的方法。在JavaScript中，解构运算符使用花括号 <code>{}</code> 或方括号 <code>[]</code> 来解构对象和数组中的值。下面是一些示例： 1. 解构对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个对象</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
  <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;New York&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">country</span><span class="token operator">:</span> <span class="token string">&#39;USA&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 使用解构运算符获取对象中的值</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> user<span class="token punctuation">;</span>

<span class="token comment">// 打印结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Alice</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 28</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>2. 解构数组
</code></pre><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个数组</span>
<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 使用解构运算符获取数组中的值</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> numbers<span class="token punctuation">;</span>

<span class="token comment">// 打印结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [3, 4, 5]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>3. 函数参数中使用解构运算符
</code></pre><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个函数</span>
<span class="token keyword">function</span> <span class="token function">printUserInfo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Age: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用函数并传入一个对象参数</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;Los Angeles&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">country</span><span class="token operator">:</span> <span class="token string">&#39;USA&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">printUserInfo</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 打印结果：</span>
<span class="token comment">// Name: Bob</span>
<span class="token comment">// Age: 32</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-三元运算符" tabindex="-1"><a class="header-anchor" href="#_3-三元运算符" aria-hidden="true">#</a> 3. 三元运算符</h2><p><code>布尔值/表达式? value1: value2;</code></p>`,12),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","扩展运算符、解构运算符、三元运算符.html.vue"]]);export{d as default};
