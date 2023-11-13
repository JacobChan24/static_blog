import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,f as i}from"./app-9e438faa.js";const o={},r=i(`<p>这是一种特殊的循环，用户遍历对象，可以将对象中的属性依次循环出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for (variable in object){
	//要执行的代码
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一次循环当中，JS会将对象中的一个属性的<strong>键值</strong>赋给变量<em>variable</em>，直到所有的属性都遍历完 例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var person = {&quot;name&quot;:&quot;Jacob&quot;, &quot;age&quot;:26, &quot;gender&quot;,&quot;male&quot;};
//遍历并显示出对象的所有属性
for (var prop in person) {
	document.write(&quot;&lt;h2&gt;&quot; + prop + &quot;=&quot; + person[prop] + &lt;h2&gt;&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[r];function s(d,l){return t(),n("div",null,a)}const v=e(o,[["render",s],["__file","for in循环.html.vue"]]);export{v as default};
