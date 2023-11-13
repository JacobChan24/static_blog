import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as a,f as i}from"./app-9e438faa.js";const n={},l=i(`<h3 id="递增递减运算符" tabindex="-1"><a class="header-anchor" href="#递增递减运算符" aria-hidden="true">#</a> 递增递减运算符</h3><p><code>++</code>和<code>--</code> 可以放在变量前或者变量后，叫做前置和后置递增/递减运算符，前置和后置在单独使用的时候都是一样的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var num = num + 1
可以写成
++num或者num++

var num = num - 1
可以写成
--num或者num--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="后置运算符" tabindex="-1"><a class="header-anchor" href="#后置运算符" aria-hidden="true">#</a> 后置运算符：</h5><p>先返回原值再加/减1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var num = 10
console.log(num++ + 10)  //返回值为20
console.log(num)         //返回值为11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="前置运算符" tabindex="-1"><a class="header-anchor" href="#前置运算符" aria-hidden="true">#</a> 前置运算符：</h5><p>先加/减1再返回新值 所以为了不出现意外结果，<strong>我们一般情况下都用前置递增/递减运算符</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var num = 10
console.log(++num + 10)  //返回值为21
console.log(num)         //返回值为11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><p><code>&amp;&amp;</code> 与 <code>||</code> 或 <code>!</code> 非 其他内容见[[逻辑中断]]</p><h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3><p><code>=</code><code>+=10 -=10 *=10</code> 每次自加或者自减一个数字，这里可以跟递增/递减运算符区分一下</p><h3 id="运算符的优先级" tabindex="-1"><a class="header-anchor" href="#运算符的优先级" aria-hidden="true">#</a> 运算符的优先级</h3><p>按照优先级排列:</p><ul><li>小括号</li><li>一元运算符： <code>++ -- !</code></li><li>算数运算符</li><li>关系运算符：<code>&gt; &lt; &gt;= &lt;=</code></li><li>相等运算符： <code>== != === !==</code></li><li>逻辑运算符：与的优先级比或要高</li><li>复制运算符</li><li>逗号运算符</li></ul><h3 id="其他运算符" tabindex="-1"><a class="header-anchor" href="#其他运算符" aria-hidden="true">#</a> 其他运算符</h3><p><code>!!</code> 两个感叹号相当于调用<code>Boolean()</code>方法，根据数据返回ture或者false \`\`</p>`,18),c=[l];function r(s,o){return d(),a("div",null,c)}const h=e(n,[["render",r],["__file","运算符.html.vue"]]);export{h as default};
