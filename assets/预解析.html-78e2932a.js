import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as a}from"./app-9e438faa.js";const d={},s=a(`<p>js引擎运行js代码分为两步：</p><ol><li>预解析 - 把所有<code>var</code>和<code>function</code>提升到当前作用域的最前面</li><li>JS代码执行 - 按照从上往下的顺序执行</li></ol><h3 id="变量预解析" tabindex="-1"><a class="header-anchor" href="#变量预解析" aria-hidden="true">#</a> 变量预解析</h3><p>提升声明操作，但不提升赋值操作; 以声明但是不赋值是<code>undefined</code></p><h3 id="函数预解析" tabindex="-1"><a class="header-anchor" href="#函数预解析" aria-hidden="true">#</a> 函数预解析</h3><p>下面这段代码为什么会报错？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fun()
var fun = function(){
	console.log(&#39;hahah&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码的执行顺序是这样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var fun
fun()
fun = function(){
	console.log(&#39;hahah&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[s];function c(r,t){return n(),i("div",null,l)}const v=e(d,[["render",c],["__file","预解析.html.vue"]]);export{v as default};
