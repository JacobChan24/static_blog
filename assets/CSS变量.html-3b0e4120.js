import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as l}from"./app-9e438faa.js";const d={},s=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在全局作用域定义一个变量
html {
	--main-color: #fff
}

在元素样式定义中使用这个变量
.container {
	background-color: var(--main-color)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>CSS变量是有作用域的</li><li>声明：<code>--variable_name</code></li><li>使用：<code>var()</code>函数，调用处需在变量的作用域内</li></ol>`,2),a=[s];function c(r,o){return i(),n("div",null,a)}const m=e(d,[["render",c],["__file","CSS变量.html.vue"]]);export{m as default};
